import { createRouter } from "./router.js";
import { store } from "./store.js";
import { HomeView } from "./views/home.js";
import { IngredientsView } from "./views/ingredients.js";
import { SauceDetailView } from "./views/sauce-detail.js";

const appRoot = document.getElementById("appRoot");
const titleEl = document.getElementById("appTitle");
const subtitleEl = document.getElementById("appSubtitle");
const btnSettings = document.getElementById("btnSettings");
const toastEl = document.getElementById("toast");

function toast(msg) {
  if (!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.add("is-on");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toastEl.classList.remove("is-on"), 1400);
}

const routes = {
  "/sauces": () => HomeView(),
  "/ingredients": () => IngredientsView(),
  "/sauce/:id": (params) => SauceDetailView({ index: params.id }),
};

function syncHeader() {
  const s = store.get();
  if (titleEl) titleEl.textContent = s.title ?? "소스 레시피";
  if (subtitleEl) subtitleEl.textContent = s.subtitle ?? "영지 · 마크 · 건희 · 런쥔";
  document.title = s.title ?? "소스 레시피";
}

function setActiveTab(path) {
  const tabPath = path.startsWith("/sauce/")
    ? "/sauces"
    : path;

  document.querySelectorAll(".tab").forEach((t) => {
    t.classList.toggle("is-active", t.dataset.route === tabPath);
  });
}

btnSettings?.addEventListener("click", () => {
  location.hash = "#/settings";
});

const router = createRouter({
  routes,
  onRoute: (path, viewFactory, params = {}) => {
    const node = viewFactory.length ? viewFactory(params) : viewFactory();
    appRoot.replaceChildren(node);
    setActiveTab(path);
    syncHeader();
  },
});

window.addEventListener("storechange", syncHeader);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

router.render();
syncHeader();
