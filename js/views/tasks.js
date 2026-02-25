import { store } from "../store.js";

export function TasksView({ toast }) {
  const el = document.createElement("div");
  const s = store.get();
  const tasks = Array.isArray(s.tasks) ? s.tasks : [];

  el.innerHTML = `
    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center; gap:10px;">
        <div>
          <h2 class="h1" style="margin:0;">할 일</h2>
          <p class="p">로컬에 저장됩니다.</p>
        </div>
        <span class="pill">오프라인 OK</span>
      </div>

      <div style="height:12px"></div>
      <input class="btn" id="taskInput" placeholder="예: 장보기" style="text-align:left;" />
      <div style="height:10px"></div>
      <button class="btn btn--primary" id="addBtn">➕ 추가</button>
    </div>

    <div class="card">
      <div class="h2" style="margin-bottom:10px;">목록</div>
      <div id="list" style="display:flex; flex-direction:column; gap:10px;"></div>
      <p class="p" style="margin-top:10px;">팁: 항목을 클릭하면 완료/미완료 토글</p>
    </div>
  `;

  const list = el.querySelector("#list");
  const input = el.querySelector("#taskInput");

  function render() {
    const { tasks: now } = store.get();
    const arr = Array.isArray(now) ? now : [];
    list.replaceChildren(...arr.map((t, i) => {
      const row = document.createElement("button");
      row.className = "btn";
      row.style.textAlign = "left";
      row.style.display = "flex";
      row.style.justifyContent = "space-between";
      row.style.alignItems = "center";
      row.innerHTML = `
        <span>${escapeHtml(t.text)}</span>
        <span class="pill">${t.done ? "완료" : "진행중"}</span>
      `;
      row.addEventListener("click", () => {
        const next = arr.slice();
        next[i] = { ...next[i], done: !next[i].done };
        store.set({ tasks: next });
        toast(t.done ? "되돌림" : "완료");
        render();
      });
      return row;
    }));
  }

  el.querySelector("#addBtn").addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return toast("내용을 입력해줘");
    const next = tasks.concat([{ text, done: false }]);
    store.set({ tasks: next });
    input.value = "";
    toast("추가했어");
    render();
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") el.querySelector("#addBtn").click();
  });

  render();
  return el;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
