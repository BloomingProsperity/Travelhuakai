import { spawn } from "node:child_process";
import { rm, mkdtemp } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";

const CHROME =
  process.env.CHROME_PATH ??
  "C:/Program Files/Google/Chrome/Application/chrome.exe";
const BASE_URL = process.env.TEST_URL ?? "http://127.0.0.1:5173/";
const CITY_IDS = ["beijing", "shanghai", "guangzhou", "shenzhen"];
const WAIT_STEP_MS = 200;
const DEFAULT_TIMEOUT_MS = 8000;

let nextId = 1;
const results = [];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function pass(name) {
  results.push(`PASS ${name}`);
}

function assert(condition, name, detail = "") {
  if (!condition) throw new Error(`${name}${detail ? `: ${detail}` : ""}`);
  pass(name);
}

async function waitForPage(port) {
  for (let i = 0; i < 80; i += 1) {
    try {
      let response = await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, {
        method: "PUT"
      });
      if (response.ok) return response.json();

      response = await fetch(`http://127.0.0.1:${port}/json/list`);
      if (response.ok) {
        const list = await response.json();
        const page = list.find((item) => item.type === "page" && item.webSocketDebuggerUrl);
        if (page) return page;
      }
    } catch {
      // Chrome is still booting.
    }
    await wait(150);
  }
  throw new Error("Chrome page target not ready");
}

async function connect(wsUrl) {
  const ws = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener("open", resolve, { once: true });
    ws.addEventListener("error", reject, { once: true });
  });

  const pending = new Map();
  ws.addEventListener("message", (event) => {
    const msg = JSON.parse(event.data);
    if (!msg.id || !pending.has(msg.id)) return;

    const call = pending.get(msg.id);
    pending.delete(msg.id);
    if (msg.error) call.reject(new Error(JSON.stringify(msg.error)));
    else call.resolve(msg.result);
  });

  return {
    send(method, params = {}) {
      const id = nextId;
      nextId += 1;
      ws.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
    },
    close() {
      ws.close();
    }
  };
}

async function openBrowser(name, width, height, mobile) {
  const port = 9400 + Math.floor(Math.random() * 1000);
  const userDataDir = await mkdtemp(join(tmpdir(), `tt-test-${name}-`));
  const proc = spawn(
    CHROME,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      `--remote-debugging-port=${port}`,
      `--user-data-dir=${userDataDir}`,
      `--window-size=${width},${height}`,
      "about:blank"
    ],
    { stdio: "ignore" }
  );

  const page = await waitForPage(port);
  const cdp = await connect(page.webSocketDebuggerUrl);
  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile
  });

  return {
    cdp,
    async close() {
      try {
        cdp.close();
      } catch {
        // Already closed.
      }
      proc.kill("SIGTERM");
      await wait(700);
      await rm(userDataDir, { recursive: true, force: true }).catch(() => {});
    }
  };
}

async function evalJson(cdp, expression) {
  const result = await cdp.send("Runtime.evaluate", {
    expression: `(() => {
      const value = (() => { ${expression} })();
      return JSON.stringify(value === undefined ? null : value);
    })()`,
    returnByValue: true,
    awaitPromise: true
  });
  return JSON.parse(result.result.value ?? "null");
}

async function evalBool(cdp, expression) {
  return Boolean(await evalJson(cdp, expression));
}

async function gotoHome(cdp) {
  await cdp.send("Page.navigate", { url: BASE_URL });
  await wait(1800);
  await cdp.send("Runtime.evaluate", {
    expression: "localStorage.setItem('chinaAtlas:language', 'en'); location.reload();",
    awaitPromise: true
  });
  await wait(3000);
}

async function waitUntil(cdp, name, expression, timeoutMs = DEFAULT_TIMEOUT_MS) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    if (await evalBool(cdp, expression)) {
      pass(name);
      return;
    }
    await wait(WAIT_STEP_MS);
  }
  const state = await evalJson(
    cdp,
    `return {
      url: location.href,
      text: document.body.innerText.slice(0, 500),
      map: document.querySelector('[aria-label="China interactive map"]')?.dataset ?? null,
      overlay: document.querySelector('[data-province-3d-overlay]')?.textContent.slice(0, 200) ?? null,
      hitCount: document.querySelectorAll('[data-province-hit]').length,
      labels: Array.from(document.querySelectorAll('[aria-label]')).map((el) => ({
        tag: el.tagName,
        role: el.getAttribute('role'),
        label: el.getAttribute('aria-label')
      })).slice(0, 30)
    };`
  ).catch((error) => ({ error: String(error) }));
  throw new Error(`${name}: ${JSON.stringify(state)}`);
}

async function trigger(cdp, name, expression) {
  await waitUntil(cdp, `${name} target available`, `return Boolean(${expression});`);

  const target = await evalJson(
    cdp,
    `const el = (${expression});
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    return {
      isSvg: el instanceof SVGElement,
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      width: rect.width,
      height: rect.height
    };`
  );

  if (target?.isSvg && target.width > 0 && target.height > 0) {
    await cdp.send("Input.dispatchMouseEvent", {
      type: "mouseMoved",
      x: target.x,
      y: target.y,
      button: "none"
    });
    await cdp.send("Input.dispatchMouseEvent", {
      type: "mousePressed",
      x: target.x,
      y: target.y,
      button: "left",
      clickCount: 1
    });
    await cdp.send("Input.dispatchMouseEvent", {
      type: "mouseReleased",
      x: target.x,
      y: target.y,
      button: "left",
      clickCount: 1
    });
    pass(name);
    await wait(900);
    return;
  }

  const triggered = await evalBool(
    cdp,
    `const el = (${expression});
    if (!el) return false;
    if (typeof el.click === 'function') el.click();
    else el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    return true;`
  );
  assert(triggered, name);
  await wait(900);
}

async function assertNoOverflow(cdp, name) {
  const metrics = await evalJson(
    cdp,
    "return { innerWidth, doc: document.documentElement.scrollWidth, body: document.body.scrollWidth };"
  );
  assert(
    metrics.doc <= metrics.innerWidth && metrics.body <= metrics.innerWidth,
    name,
    JSON.stringify(metrics)
  );
}

async function assertKeyLayoutFits(cdp, name) {
  const issues = await evalJson(
    cdp,
    `const checks = [
      ['language switch', 'body > header > div'],
      ['home intro copy', 'main > header p'],
      ['photo grid', 'main section[aria-label="City attraction photos"], main section[aria-label="城市景区照片"]'],
      ['guide links', 'main section[aria-label="Travel guide links"], main section[aria-label="出行功能入口"]']
    ];

    return checks.flatMap(([label, selector]) => {
      const el = document.querySelector(selector);
      if (!el) return [{ label, selector, issue: 'missing' }];

      const rect = el.getBoundingClientRect();
      const style = getComputedStyle(el);
      const problems = [];

      if (rect.left < -0.5 || rect.right > innerWidth + 0.5) {
        problems.push({
          label,
          selector,
          issue: 'outside viewport',
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          innerWidth
        });
      }

      if (el.scrollWidth > el.clientWidth + 1 && style.overflowX !== 'hidden') {
        problems.push({
          label,
          selector,
          issue: 'text/content overflow',
          scrollWidth: el.scrollWidth,
          clientWidth: el.clientWidth
        });
      }

      return problems;
    });`
  );

  assert(issues.length === 0, name, JSON.stringify(issues));
}

async function assertMainHasNoEnglishHomeCopy(cdp, name) {
  const residue = await evalJson(
    cdp,
    `const text = document.querySelector('main')?.innerText ?? '';
    return [
      'Travel China',
      'Province map',
      'Landmark map',
      'Open map',
      'Entry & visa',
      'Payments',
      'Travel notes',
      'Beijing',
      'Shanghai',
      'Guangzhou',
      'Shenzhen'
    ].filter((word) => text.includes(word));`
  );

  assert(residue.length === 0, name, JSON.stringify(residue));
}

async function runInteractions(name, width, height, mobile) {
  const browser = await openBrowser(name, width, height, mobile);
  const { cdp } = browser;

  try {
    await gotoHome(cdp);
    await waitUntil(
      cdp,
      `${name}: home hydrated`,
      "return document.body.innerText.includes('Travel China') && Boolean(document.querySelector('a[href=\"/city/beijing\"]')) && Boolean(document.querySelector('a[href=\"/map\"]'));"
    );
    await assertNoOverflow(cdp, `${name}: home no horizontal overflow`);
    await assertKeyLayoutFits(cdp, `${name}: home key layout fits viewport`);

    await trigger(cdp, `${name}: switch to Chinese`, "document.querySelectorAll('body > header button')[1]");
    await waitUntil(
      cdp,
      `${name}: Chinese copy rendered`,
      "return document.documentElement.lang === 'zh-CN' && document.body.innerText.includes('\\u6b22\\u8fce\\u6765\\u4e2d\\u56fd') && document.body.innerText.includes('\\u5317\\u4eac');"
    );
    await assertNoOverflow(cdp, `${name}: Chinese no horizontal overflow`);
    await assertKeyLayoutFits(cdp, `${name}: Chinese key layout fits viewport`);
    await assertMainHasNoEnglishHomeCopy(cdp, `${name}: Chinese home has no English residue`);

    await trigger(cdp, `${name}: switch to English`, "document.querySelectorAll('body > header button')[0]");
    await waitUntil(
      cdp,
      `${name}: English city cards rendered`,
      "return document.documentElement.lang === 'en' && document.body.innerText.includes('Beijing') && document.body.innerText.includes('Shenzhen');"
    );

    for (const cityId of CITY_IDS) {
      await trigger(cdp, `${name}: open city ${cityId}`, `document.querySelector('a[href="/city/${cityId}"]')`);
      await waitUntil(cdp, `${name}: city ${cityId} route`, `return location.pathname === '/city/${cityId}';`);
      await assertNoOverflow(cdp, `${name}: city ${cityId} no horizontal overflow`);
      await trigger(cdp, `${name}: return home from ${cityId}`, 'document.querySelector(\'a[href="/"]\')');
      await waitUntil(cdp, `${name}: returned home from ${cityId}`, "return location.pathname === '/';");
    }

    for (const topic of ["entry", "payments", "notes"]) {
      await trigger(cdp, `${name}: open guide ${topic}`, `document.querySelector('a[href="/guide/${topic}"]')`);
      await waitUntil(cdp, `${name}: guide ${topic} route`, `return location.pathname === '/guide/${topic}';`);
      await assertNoOverflow(cdp, `${name}: guide ${topic} no horizontal overflow`);
      await trigger(cdp, `${name}: return home from guide ${topic}`, 'document.querySelector(\'a[href="/"]\')');
      await waitUntil(cdp, `${name}: returned home from guide ${topic}`, "return location.pathname === '/';");
    }

    await trigger(cdp, `${name}: open province map`, 'document.querySelector(\'a[href="/map"]\')');
    await waitUntil(cdp, `${name}: map route`, "return location.pathname === '/map' && Boolean(document.querySelector('.china-map-surface'));");
    await assertNoOverflow(cdp, `${name}: map page no horizontal overflow`);

    await waitUntil(
      cdp,
      `${name}: map Beijing hit area ready`,
      "return Boolean(document.querySelector('[data-province-hit=\"beijing\"]'));"
    );
    await trigger(cdp, `${name}: open Beijing 3D`, "document.querySelector('[data-province-hit=\"beijing\"]')");
    await waitUntil(
      cdp,
      `${name}: Beijing 3D panel visible`,
      "const overlay = document.querySelector('[data-province-3d-overlay]'); return overlay?.textContent.includes('Tianditu 3D') && overlay.textContent.includes('Back to 2D');"
    );
    await assertNoOverflow(cdp, `${name}: Beijing 3D no horizontal overflow`);

    await trigger(
      cdp,
      `${name}: Back to 2D closes 3D`,
      "Array.from(document.querySelectorAll('button')).find((b) => b.textContent.includes('Back to 2D'))"
    );
    await waitUntil(cdp, `${name}: Back to 2D panel closed`, "return !document.querySelector('[data-province-3d-overlay]');");

    await trigger(cdp, `${name}: reopen Beijing 3D`, "document.querySelector('[data-province-hit=\"beijing\"]')");
    await waitUntil(cdp, `${name}: reopened Beijing 3D`, "return Boolean(document.querySelector('[data-province-3d-overlay]'));");
    await trigger(cdp, `${name}: X closes 3D`, "document.querySelector('[aria-label=\"Close 3D map\"]')");
    await waitUntil(cdp, `${name}: X panel closed`, "return !document.querySelector('[data-province-3d-overlay]');");

    await trigger(
      cdp,
      `${name}: reopen Beijing for Escape`,
      "document.querySelector('[data-province-hit=\"beijing\"]')"
    );
    await waitUntil(cdp, `${name}: Escape test panel visible`, "return Boolean(document.querySelector('[data-province-3d-overlay]'));");
    await cdp.send("Input.dispatchKeyEvent", {
      type: "keyDown",
      key: "Escape",
      code: "Escape",
      windowsVirtualKeyCode: 27
    });
    await cdp.send("Input.dispatchKeyEvent", {
      type: "keyUp",
      key: "Escape",
      code: "Escape",
      windowsVirtualKeyCode: 27
    });
    await waitUntil(cdp, `${name}: Escape closes 3D`, "return !document.querySelector('[data-province-3d-overlay]');");

    await trigger(cdp, `${name}: open Macau 3D`, "document.querySelector('button[aria-label=\"Macau\"]')");
    await waitUntil(
      cdp,
      `${name}: Macau 3D panel visible`,
      "const overlay = document.querySelector('[data-province-3d-overlay]'); return overlay?.textContent.includes('Tianditu 3D') && overlay.textContent.includes('Macau');"
    );
    await trigger(cdp, `${name}: close Macau 3D`, "document.querySelector('[aria-label=\"Close 3D map\"]')");
    await waitUntil(cdp, `${name}: Macau panel closed`, "return !document.querySelector('[data-province-3d-overlay]');");
  } finally {
    await browser.close();
  }
}

await runInteractions("desktop", 1440, 1100, false);
await runInteractions("mobile", 390, 1100, true);

console.log(results.join("\n"));
