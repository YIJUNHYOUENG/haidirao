export function createRouter({ routes, onRoute }) {
  function parseHash() {
    const hash = location.hash || "#/home";
    const path = hash.replace(/^#/, "");
    return path;
  }

  function matchRoute(path) {
    if (routes[path]) return { key: path, params: {} };

    const m = path.match(/^\/sauce\/(\d+)$/);
    if (m && routes["/sauce/:id"]) {
      return { key: "/sauce/:id", params: { id: m[1] } };
    }

    return { key: "/home", params: {} };
  }

  function render() {
    const path = parseHash();
    const { key, params } = matchRoute(path);
    onRoute(path, routes[key], params);
  }

  window.addEventListener("hashchange", render);
  return { render };
}
