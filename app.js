import { administrativeSearchSeed, atlasData, provinceAttractionSeed } from "./src/atlas-records.js";
import { accessLabels, i18n, placeTypeLabels, statusLabels, typeLabels } from "./src/i18n.js";
import {
  cityMapPoints,
  fullChinaMapSrc,
  officialProvinceBounds,
  officialProvinceMapEndpoint,
  provinceHitAreas
} from "./src/map-sources.js";

let currentLang = localStorage.getItem("chinaAtlasLanguage") || "en";

let selectedProvinceId = atlasData[0].id;
let selectedCityId = null;
let mapZoomBoost = 0;
let is3DEasterEggEnabled = false;
let mapStatusTapCount = 0;
let mapStatusTapTimer = null;
const layerState = {
  borders: true,
  cities: true,
  museums: true,
  history: true
};

const provinceList = document.querySelector("#province-list");
const provinceCount = document.querySelector("#province-count");
const mapGrid = document.querySelector("#map-grid");
const mapTitle = document.querySelector("#map-title");
const siteSearch = document.querySelector("#site-search");
const placeSearch = document.querySelector("#place-search");
const placeSuggestions = document.querySelector("#place-suggestions");
const mapExplorerBody = document.querySelector("#map-explorer-body");
const chinaMapVisual = document.querySelector("#china-map-visual");
const officialMapImage = document.querySelector(".official-china-map");
const officialMapHitLayer = document.querySelector("#official-map-hit-layer");
const officialMapUiLayer = document.querySelector("#official-map-ui-layer");
const provinceAttractionsPanel = document.querySelector("#province-attractions-panel");
const mapFocusReset = document.querySelector("#map-focus-reset");
const mapHint = document.querySelector("#map-hint");
const mapStatusBadge = document.querySelector(".map-status");
const resetViewButton = document.querySelector("#reset-view");
const emptyState = document.querySelector("#empty-state");
const cityProfile = document.querySelector("#city-profile");
const closePanel = document.querySelector("#close-panel");

const profile = {
  province: document.querySelector("#profile-province"),
  city: document.querySelector("#profile-city"),
  name: document.querySelector("#profile-name"),
  museum: document.querySelector("#profile-museum"),
  museumRole: document.querySelector("#profile-museum-role"),
  views: document.querySelector("#profile-views"),
  notes: document.querySelector("#profile-notes"),
  verified: document.querySelector("#profile-verified"),
  access: document.querySelector("#profile-access"),
  history: document.querySelector("#profile-history"),
  sites: document.querySelector("#profile-sites"),
  status: document.querySelector("#profile-status")
};

const formatNumber = new Intl.NumberFormat("en-US");

function t(key) {
  return i18n[currentLang][key] || i18n.en[key] || key;
}

function applyTranslations() {
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    element.setAttribute("placeholder", t(key));
  });

  document.querySelectorAll(".language-option").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLang);
  });
}

function provincePrimary(province) {
  return currentLang === "zh" ? province.zh : province.name;
}

function provinceSecondary(province) {
  const type = typeLabels[currentLang][province.type] || province.type;
  return currentLang === "zh"
    ? `${province.name} · ${type}`
    : `${province.zh} · ${type}`;
}

function cityPrimary(city) {
  return currentLang === "zh" ? city.zh : city.name;
}

function citySecondary(city) {
  return currentLang === "zh" ? city.name : city.zh;
}

function museumName(city) {
  return currentLang === "zh" ? city.museumZh || city.museum : city.museum;
}

function museumRole(city) {
  return currentLang === "zh" ? city.museumRoleZh || city.museumRole : city.museumRole;
}

function historyText(city) {
  return currentLang === "zh" ? city.historyZh || city.history : city.history;
}

function siteNames(city) {
  return currentLang === "zh" ? city.sitesZh || city.sites : city.sites;
}

function attractionPrimary(attraction) {
  if (attraction.name) {
    return attraction.name;
  }
  return currentLang === "zh" ? attraction.zh || attraction.en : attraction.en || attraction.zh;
}

function normalizeSearchTerm(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[·,，。.\s/]+/g, "")
    .trim();
}

function provinceLabelByName(name) {
  const province = atlasData.find((item) => item.name === name);
  if (!province) {
    return name;
  }
  return currentLang === "zh" ? province.zh : province.name;
}

function getCityById(cityId) {
  for (const province of atlasData) {
    const city = province.cities.find((item) => item.id === cityId);
    if (city) {
      return city;
    }
  }
  return null;
}

function getSearchLabel(record) {
  const type = placeTypeLabels[currentLang][record.type] || record.type;
  const primary = currentLang === "zh" ? record.zh : record.en;
  const secondary = currentLang === "zh" ? record.en : record.zh;
  return secondary ? `${primary} · ${secondary} · ${type}` : `${primary} · ${type}`;
}

function getSearchRecords() {
  const records = [];

  atlasData.forEach((province) => {
    records.push({
      zh: province.zh,
      en: province.name,
      type: "province",
      provinceId: province.id,
      aliases: [province.zh, province.name]
    });

    province.cities.forEach((city) => {
      records.push({
        zh: city.zh,
        en: city.name,
        type: "city",
        provinceId: province.id,
        cityId: city.id,
        aliases: [city.zh, city.name, city.province]
      });

      [city.museum, city.museumZh].filter(Boolean).forEach((museumGroup) => {
        museumGroup.split("/").map((item) => item.trim()).filter(Boolean).forEach((museum) => {
          records.push({
            zh: museum,
            en: museum,
            type: "museum",
            provinceId: province.id,
            cityId: city.id,
            aliases: [museum]
          });
        });
      });

      city.sites.forEach((site, index) => {
        const siteZh = city.sitesZh?.[index] || site;
        records.push({
          zh: siteZh,
          en: site,
          type: "site",
          provinceId: province.id,
          cityId: city.id,
          aliases: [site, siteZh]
        });
      });
    });
  });

  provinceHitAreas.forEach((provinceArea) => {
    const alreadyIndexed = records.some((record) => record.type === "province" && record.provinceId === provinceArea.id);
    if (alreadyIndexed) {
      return;
    }

    records.push({
      zh: provinceArea.zh,
      en: provinceArea.en,
      type: "province",
      provinceId: provinceArea.id,
      aliases: [provinceArea.zh, provinceArea.en]
    });
  });

  Object.entries(provinceAttractionSeed).forEach(([provinceId, attractions]) => {
    attractions.forEach((attraction) => {
      records.push({
        zh: attraction.zh,
        en: attraction.en,
        type: "site",
        provinceId,
        aliases: [attraction.zh, attraction.en]
      });
    });
  });

  administrativeSearchSeed.forEach((item) => {
    records.push({
      ...item,
      aliases: [item.zh, item.en, ...(item.aliases || [])]
    });
  });

  return records;
}

function findSearchRecord(query) {
  const normalizedQuery = normalizeSearchTerm(query);
  if (!normalizedQuery) {
    return null;
  }

  return getSearchRecords()
    .map((record) => {
      const tokens = [record.zh, record.en, ...(record.aliases || [])].map(normalizeSearchTerm).filter(Boolean);
      const exact = tokens.some((token) => token === normalizedQuery);
      const starts = tokens.some((token) => token.startsWith(normalizedQuery));
      const contains = tokens.some((token) => token.includes(normalizedQuery) || normalizedQuery.includes(token));
      return { record, score: exact ? 3 : starts ? 2 : contains ? 1 : 0 };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)[0]?.record || null;
}

function renderSearchSuggestions() {
  if (!placeSuggestions) {
    return;
  }

  placeSuggestions.innerHTML = "";
  getSearchRecords().slice(0, 120).forEach((record) => {
    const option = document.createElement("option");
    option.value = currentLang === "zh" ? record.zh : record.en;
    option.label = getSearchLabel(record);
    placeSuggestions.appendChild(option);
  });
}

function jumpToSearchRecord(record) {
  selectedProvinceId = record.provinceId;
  selectedCityId = record.cityId || null;
  mapZoomBoost = 0;

  const city = selectedCityId ? getCityById(selectedCityId) : null;
  if (city) {
    recordCityView(city);
  }

  render();
  if (city) {
    showCityProfile(city);
  } else {
    showEmptyState();
  }

  const province = getSelectedProvince();
  mapHint.textContent = `${t("searchJumped")} ${getSearchLabel(record)} -> ${provincePrimary(province)}`;
  chinaMapVisual.scrollIntoView({ behavior: "smooth", block: "center" });
}

function getCityViews(city) {
  const stored = Number(localStorage.getItem(`views:${city.id}`) || 0);
  return city.baseViews + stored;
}

function recordCityView(city) {
  const key = `views:${city.id}`;
  const current = Number(localStorage.getItem(key) || 0);
  localStorage.setItem(key, String(current + 1));
}

function getSelectedProvince() {
  const province = atlasData.find((item) => item.id === selectedProvinceId);
  if (province) {
    return province;
  }

  const provinceArea = getProvinceHitArea(selectedProvinceId);
  if (provinceArea) {
    return {
      id: provinceArea.id,
      name: provinceArea.en,
      zh: provinceArea.zh,
      type: "Province",
      cities: []
    };
  }

  return atlasData[0];
}

function getSelectedCity() {
  const province = getSelectedProvince();
  return province.cities.find((city) => city.id === selectedCityId) || null;
}

function getProvinceHitArea(provinceId) {
  return provinceHitAreas.find((provinceArea) => provinceArea.id === provinceId) || null;
}

function getPaddedOfficialBounds(bounds, targetAspect = 9463 / 6675) {
  if (!bounds) {
    return null;
  }

  const width = Math.max(bounds.right - bounds.left, 40000);
  const height = Math.max(bounds.top - bounds.bottom, 40000);
  let left = bounds.left - width * 0.08;
  let right = bounds.right + width * 0.08;
  let bottom = bounds.bottom - height * 0.08;
  let top = bounds.top + height * 0.08;
  let paddedWidth = right - left;
  let paddedHeight = top - bottom;
  const aspect = paddedWidth / paddedHeight;

  if (aspect < targetAspect) {
    const extra = (paddedHeight * targetAspect - paddedWidth) / 2;
    left -= extra;
    right += extra;
  } else if (aspect > targetAspect) {
    const extra = (paddedWidth / targetAspect - paddedHeight) / 2;
    bottom -= extra;
    top += extra;
  }

  return { left, right, bottom, top };
}

function getOfficialProvinceMapUrl(provinceId) {
  const bounds = getPaddedOfficialBounds(officialProvinceBounds[provinceId]);
  if (!bounds) {
    return null;
  }

  const viewBounds = {
    leftBottom: { x: bounds.left, y: bounds.bottom },
    rightTop: { x: bounds.right, y: bounds.top }
  };
  const viewer = {
    leftTop: { x: 0, y: 0 },
    rightBottom: { x: 1600, y: 1129 }
  };

  const params = new URLSearchParams({
    transparent: "false",
    redirect: "false",
    width: "1600",
    height: "1129",
    viewBounds: JSON.stringify(viewBounds),
    viewer: JSON.stringify(viewer)
  });
  return `${officialProvinceMapEndpoint}?${params.toString()}`;
}

function syncMap3DState(mode, provinceId = "", payload = {}) {
  if (!chinaMapVisual) {
    return;
  }

  chinaMapVisual.dataset.mapMode = mode;
  chinaMapVisual.dataset.provinceId = provinceId || "";
  chinaMapVisual.dataset.provinceMapUrl = payload.provinceMapUrl || "";
  window.dispatchEvent(new CustomEvent("china-map-viewchange", {
    detail: {
      mode,
      provinceId: provinceId || "",
      provinceName: payload.provinceName || "",
      provinceMapUrl: payload.provinceMapUrl || ""
    }
  }));
}

function getOfficialMapTransform(provinceArea) {
  const fitScale = Math.min(88 / provinceArea.w, 88 / provinceArea.h);
  const scale = Math.max(3.2, Math.min(18, fitScale));
  return {
    scale,
    left: 50 - provinceArea.x * scale,
    top: 50 - provinceArea.y * scale,
    width: scale * 100,
    height: scale * 100
  };
}

function transformedBox(point, transform) {
  return {
    x: transform.left + point.x * transform.scale,
    y: transform.top + point.y * transform.scale
  };
}

function getMapCoordinateFromEvent(event) {
  const bounds = chinaMapVisual.getBoundingClientRect();
  const viewX = ((event.clientX - bounds.left) / bounds.width) * 100;
  const viewY = ((event.clientY - bounds.top) / bounds.height) * 100;
  const selectedArea = selectedProvinceId ? getProvinceHitArea(selectedProvinceId) : null;

  if (!selectedArea) {
    return { x: viewX, y: viewY };
  }

  const transform = getOfficialMapTransform(selectedArea);
  return {
    x: (viewX - transform.left) / transform.scale,
    y: (viewY - transform.top) / transform.scale
  };
}

function findProvinceAreaByPoint(point) {
  const containingArea = provinceHitAreas.find((provinceArea) => {
    const left = provinceArea.x - provinceArea.w / 2;
    const right = provinceArea.x + provinceArea.w / 2;
    const top = provinceArea.y - provinceArea.h / 2;
    const bottom = provinceArea.y + provinceArea.h / 2;
    return point.x >= left && point.x <= right && point.y >= top && point.y <= bottom;
  });

  if (containingArea) {
    return containingArea;
  }

  return provinceHitAreas
    .map((provinceArea) => ({
      provinceArea,
      distance: Math.hypot(point.x - provinceArea.x, point.y - provinceArea.y)
    }))
    .sort((a, b) => a.distance - b.distance)[0]?.provinceArea || null;
}

function resetOfficialMapFocus() {
  selectedProvinceId = null;
  selectedCityId = null;
  mapZoomBoost = 0;
  render();
  showEmptyState();
}

function selectProvince(provinceId) {
  selectedProvinceId = provinceId;
  selectedCityId = null;
  mapZoomBoost = 0;
  render();
  showEmptyState();
  mapHint.textContent = t("mapHintReady");
}

function toggle3DEasterEgg() {
  is3DEasterEggEnabled = !is3DEasterEggEnabled;
  renderMainMap();
}

function getProvinceAttractions(province) {
  if (!province) {
    return [];
  }
  return [];
}

function renderProvinceAttractions(province) {
  if (!mapExplorerBody || !provinceAttractionsPanel) {
    return;
  }

  const attractions = getProvinceAttractions(province);
  const isFocused = Boolean(selectedProvinceId && attractions.length);
  mapExplorerBody.classList.toggle("is-focused", isFocused);
  provinceAttractionsPanel.hidden = !isFocused;

  if (!isFocused || !province) {
    provinceAttractionsPanel.innerHTML = "";
    return;
  }

  provinceAttractionsPanel.innerHTML = `
    <div class="province-attractions-header">
      <span>${t("famousAttractions")}</span>
      <strong>${provincePrimary(province)}</strong>
    </div>
    <div class="province-attractions-list"></div>
  `;

  const list = provinceAttractionsPanel.querySelector(".province-attractions-list");
  if (!attractions.length) {
    const empty = document.createElement("div");
    empty.className = "province-attraction-empty";
    empty.textContent = t("provinceDataPending");
    list.appendChild(empty);
    return;
  }

  attractions.forEach((attraction) => {
    const item = document.createElement(attraction.city ? "button" : "article");
    item.className = `province-attraction-item${attraction.city ? "" : " is-static"}`;
    if (attraction.city) {
      item.type = "button";
    }

    const meta = attraction.city
      ? `${cityPrimary(attraction.city)} · ${formatNumber.format(getCityViews(attraction.city))} ${t("views")}`
      : provincePrimary(province);

    item.innerHTML = `
      <span>${attraction.type === "museum" ? t("museumEntry") : t("scenicEntry")}</span>
      <strong>${attractionPrimary(attraction)}</strong>
      <small>${meta}</small>
    `;
    if (attraction.city) {
      item.addEventListener("click", () => {
        selectedCityId = attraction.city.id;
        recordCityView(attraction.city);
        render();
        showCityProfile(attraction.city);
        document.querySelector("#atlas").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    list.appendChild(item);
  });
}

function renderProvinceRail() {
  provinceCount.textContent = atlasData.length;
  provinceList.innerHTML = "";

  atlasData.forEach((province) => {
    const button = document.createElement("button");
    button.className = `province-button${province.id === selectedProvinceId ? " is-selected" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <span>
        <strong>${provincePrimary(province)}</strong>
        <small>${provinceSecondary(province)}</small>
      </span>
      <span class="city-count">${province.cities.length}</span>
    `;
    button.addEventListener("click", () => {
      selectProvince(province.id);
    });
    provinceList.appendChild(button);
  });
}

function renderMainMap() {
  if (!chinaMapVisual || !officialMapHitLayer || !officialMapUiLayer) {
    return;
  }

  officialMapHitLayer.innerHTML = "";
  officialMapUiLayer.innerHTML = "";

  const selectedProvince = selectedProvinceId ? getSelectedProvince() : null;
  const selectedArea = selectedProvinceId ? getProvinceHitArea(selectedProvinceId) : null;
  const shouldShow3DModel = Boolean(selectedArea && is3DEasterEggEnabled);
  const provinceMapUrl = shouldShow3DModel ? getOfficialProvinceMapUrl(selectedArea.id) : null;
  const transform = null;

  chinaMapVisual.classList.toggle("is-focused", Boolean(selectedArea));
  chinaMapVisual.classList.toggle("is-vector-map", false);
  chinaMapVisual.classList.toggle("is-map-loading", false);
  chinaMapVisual.classList.toggle("is-vector-province", false);
  chinaMapVisual.classList.toggle("is-server-province", Boolean(provinceMapUrl));
  chinaMapVisual.classList.toggle("is-3d-model", shouldShow3DModel);
  if (officialMapImage) {
    officialMapImage.setAttribute("src", provinceMapUrl || fullChinaMapSrc);
  }
  syncMap3DState(shouldShow3DModel ? "province" : "china", selectedArea?.id || "", {
    provinceName: selectedProvince ? provincePrimary(selectedProvince) : selectedArea?.en || "",
    provinceMapUrl: provinceMapUrl || ""
  });

  if (transform) {
    chinaMapVisual.style.setProperty("--focus-left", `${transform.left}%`);
    chinaMapVisual.style.setProperty("--focus-top", `${transform.top}%`);
    chinaMapVisual.style.setProperty("--focus-width", `${transform.width}%`);
    chinaMapVisual.style.setProperty("--focus-height", `${transform.height}%`);
  } else {
    chinaMapVisual.style.removeProperty("--focus-left");
    chinaMapVisual.style.removeProperty("--focus-top");
    chinaMapVisual.style.removeProperty("--focus-width");
    chinaMapVisual.style.removeProperty("--focus-height");
  }

  if (mapFocusReset) {
    mapFocusReset.hidden = !selectedArea;
  }
  renderProvinceAttractions(selectedProvince);

  if (shouldShow3DModel) {
    return;
  }

  provinceHitAreas.forEach((provinceArea) => {
    const button = document.createElement("button");
    const classNames = [
      "province-hit",
      "has-data",
      provinceArea.id === selectedProvinceId ? "is-active" : ""
    ].filter(Boolean).join(" ");

    const handleProvinceClick = () => {
      selectProvince(provinceArea.id);
    };

    button.className = classNames;
    button.type = "button";
    button.style.setProperty("--x", `${provinceArea.x}%`);
    button.style.setProperty("--y", `${provinceArea.y}%`);
    button.style.setProperty("--w", `${provinceArea.w}%`);
    button.style.setProperty("--h", `${provinceArea.h}%`);
    button.setAttribute("aria-label", currentLang === "zh" ? provinceArea.zh : provinceArea.en);
    button.setAttribute("aria-pressed", String(provinceArea.id === selectedProvinceId));
    button.title = currentLang === "zh" ? provinceArea.zh : provinceArea.en;
    button.innerHTML = `<span>${currentLang === "zh" ? provinceArea.zh : provinceArea.en}</span>`;
    button.addEventListener("click", handleProvinceClick);

    officialMapHitLayer.appendChild(button);
  });

  if (!selectedProvince || !selectedArea || !transform) {
    return;
  }

  selectedProvince.cities.forEach((city) => {
    const point = cityMapPoints[city.id];
    if (!point) {
      return;
    }

    const pinPosition = transformedBox(point, transform);
    const marker = document.createElement("button");
    marker.className = `official-city-pin${city.id === selectedCityId ? " is-selected" : ""}`;
    marker.type = "button";
    marker.style.setProperty("--pin-x", `${pinPosition.x}%`);
    marker.style.setProperty("--pin-y", `${pinPosition.y}%`);
    marker.setAttribute("aria-label", `${cityPrimary(city)} ${museumName(city)}`);
    marker.innerHTML = `
      <span class="official-pin-dot" aria-hidden="true"></span>
      <span class="official-pin-label">
        <strong>${cityPrimary(city)}</strong>
        <small>${museumName(city)}</small>
      </span>
    `;
    marker.addEventListener("click", (event) => {
      event.stopPropagation();
      selectedCityId = city.id;
      recordCityView(city);
      render();
      showCityProfile(city);
    });
    officialMapUiLayer.appendChild(marker);
  });
}

function renderProvinceTiles() {
  mapTitle.textContent = currentLang === "zh" ? "中国" : "China";
  mapGrid.className = "map-grid province-tile-grid";
  mapGrid.innerHTML = "";

  atlasData.forEach((province) => {
    const tile = document.createElement("button");
    tile.className = `map-tile${province.id === selectedProvinceId ? " is-selected" : ""}`;
    tile.type = "button";
    tile.innerHTML = `
      <strong>${provincePrimary(province)}</strong>
      <span>${provinceSecondary(province)}</span>
      <b>${province.cities.length}${currentLang === "zh" ? "" : " "}${t("cityProfiles")}</b>
    `;
    tile.addEventListener("click", () => {
      selectProvince(province.id);
    });
    mapGrid.appendChild(tile);
  });
}

function renderCityNodes() {
  const province = getSelectedProvince();
  mapTitle.textContent = currentLang === "zh"
    ? `${province.zh} · ${province.name}`
    : `${province.name} · ${province.zh}`;
  mapGrid.className = "map-grid city-card-grid";
  mapGrid.innerHTML = "";

  if (!province.cities.length) {
    const message = document.createElement("div");
    message.className = "map-data-pending";
    message.innerHTML = `
      <strong>${provincePrimary(province)}</strong>
      <span>${t("mapHintPending")}</span>
    `;
    mapGrid.appendChild(message);
    return;
  }

  const selectCity = (city) => {
    selectedCityId = city.id;
    recordCityView(city);
    render();
    showCityProfile(city);
  };

  province.cities.forEach((city) => {
    const node = document.createElement("button");
    node.className = `city-node${city.id === selectedCityId ? " is-selected" : ""}`;
    node.type = "button";
    node.innerHTML = `
      <strong>${cityPrimary(city)}</strong>
      <span>${citySecondary(city)}</span>
      <b>${museumName(city)}</b>
      <span class="signal-line"><span class="dot"></span>${formatNumber.format(getCityViews(city))} ${t("views")}</span>
    `;
    node.addEventListener("click", () => {
      selectCity(city);
    });
    mapGrid.appendChild(node);
  });
}

function showEmptyState() {
  emptyState.classList.remove("is-hidden");
  cityProfile.classList.add("is-hidden");
}

function showCityProfile(city) {
  emptyState.classList.add("is-hidden");
  cityProfile.classList.remove("is-hidden");

  profile.province.textContent = provinceLabelByName(city.province);
  profile.city.textContent = cityPrimary(city);
  profile.name.textContent = citySecondary(city);
  profile.museum.textContent = museumName(city);
  profile.museumRole.textContent = museumRole(city);
  profile.views.textContent = formatNumber.format(getCityViews(city));
  profile.notes.textContent = formatNumber.format(city.notes);
  profile.verified.textContent = city.verified;
  profile.access.textContent = accessLabels[currentLang][city.access] || city.access;
  profile.history.textContent = historyText(city);
  profile.status.textContent = statusLabels[currentLang][city.status] || city.status;

  profile.sites.innerHTML = "";
  siteNames(city).forEach((site) => {
    const item = document.createElement("li");
    item.textContent = site;
    profile.sites.appendChild(item);
  });
}

function syncModeControls() {
  document.querySelectorAll(".control-button").forEach((button) => {
    const shouldBeActive = selectedProvinceId ? button.dataset.mode === "city" : button.dataset.mode === "province";
    button.classList.toggle("is-active", shouldBeActive);
  });
}

function render() {
  applyTranslations();
  renderSearchSuggestions();
  syncModeControls();
  renderMainMap();
  renderProvinceRail();
  const province = getSelectedProvince();

  if (selectedProvinceId) {
    renderCityNodes();
  } else {
    renderProvinceTiles();
  }

  const selectedCity = getSelectedCity();
  if (selectedCity) {
    showCityProfile(selectedCity);
  }
}

resetViewButton.addEventListener("click", () => {
  resetOfficialMapFocus();
});

mapFocusReset.addEventListener("click", resetOfficialMapFocus);

closePanel.addEventListener("click", () => {
  selectedCityId = null;
  render();
  showEmptyState();
});

chinaMapVisual.addEventListener("click", (event) => {
  if (
    event.target.closest(".province-hit") ||
    event.target.closest(".official-city-pin") ||
    event.target.closest(".map-reset-control")
  ) {
    return;
  }

  if (selectedProvinceId) {
    return;
  }

  const point = getMapCoordinateFromEvent(event);
  const provinceArea = findProvinceAreaByPoint(point);
  if (provinceArea) {
    selectProvince(provinceArea.id);
  }
});

document.querySelectorAll(".control-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".control-button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    if (button.dataset.mode === "province") {
      selectedProvinceId = null;
      selectedCityId = null;
      mapZoomBoost = 0;
      render();
      showEmptyState();
      return;
    }

    if (!selectedProvinceId) {
      selectProvince(atlasData[0].id);
      return;
    }
    render();
  });
});

siteSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  const record = findSearchRecord(placeSearch.value);
  if (!record) {
    mapHint.textContent = t("searchNoMatch");
    return;
  }

  jumpToSearchRecord(record);
});

document.querySelectorAll(".language-option").forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.lang;
    localStorage.setItem("chinaAtlasLanguage", currentLang);
    render();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.shiftKey && event.key === "3") {
    event.preventDefault();
    toggle3DEasterEgg();
  }
});

if (mapStatusBadge) {
  mapStatusBadge.addEventListener("click", () => {
    mapStatusTapCount += 1;
    window.clearTimeout(mapStatusTapTimer);
    mapStatusTapTimer = window.setTimeout(() => {
      mapStatusTapCount = 0;
    }, 900);

    if (mapStatusTapCount >= 5) {
      mapStatusTapCount = 0;
      toggle3DEasterEgg();
    }
  });
}

selectedProvinceId = null;
applyTranslations();
renderMainMap();
renderProvinceRail();
renderProvinceTiles();
showEmptyState();
