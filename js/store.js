const KEY = "mobile_web_shell_final_v1";

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw
      ? JSON.parse(raw)
      : { title: "소스 레시피", subtitle: "영지 · 마크 · 건희 · 런쥔", tasks: [] };
  } catch {
    return { title: "소스 레시피", subtitle: "영지 · 마크 · 건희 · 런쥔", tasks: [] };
  }
}

function save(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

let state = load();

export const store = {
  get() { return state; },
  set(patch) {
    state = { ...state, ...patch };
    save(state);
    window.dispatchEvent(new CustomEvent("storechange", { detail: state }));
  },
};
