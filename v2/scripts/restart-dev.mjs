import { execFileSync, spawn } from "node:child_process";

const PORT = "5173";

function getListeningPids() {
  const output = execFileSync("netstat", ["-ano"], { encoding: "utf8" });
  return [
    ...new Set(
      output
        .split(/\r?\n/)
        .filter((line) => line.includes(`:${PORT}`) && line.includes("LISTENING"))
        .map((line) => line.trim().split(/\s+/).at(-1))
        .filter(Boolean)
    )
  ];
}

for (const pid of getListeningPids()) {
  try {
    execFileSync("taskkill", ["/PID", pid, "/F"], { stdio: "pipe" });
    console.log(`killed ${pid}`);
  } catch (error) {
    console.log(`kill_failed ${pid}: ${error.message}`);
  }
}

const child = spawn("cmd.exe", ["/d", "/s", "/c", "npm.cmd run dev"], {
  cwd: process.cwd(),
  detached: true,
  stdio: "ignore",
  windowsHide: true
});

child.unref();
console.log(`started dev server on ${PORT}`);
