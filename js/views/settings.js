import { store } from "../store.js";

export function SettingsView({ toast }) {
  const s = store.get();
  const el = document.createElement("div");

  el.innerHTML = `
    <div class="card">
      <h2 class="h1" style="margin:0 0 6px">설정</h2>
      <p class="p">상단 제목/부제를 바꿀 수 있어요.</p>

      <div style="height:14px"></div>

      <div style="display:flex; flex-direction:column; gap:10px;">
        <input class="btn" id="titleInput" value="${escapeHtml(s.title || "")}" placeholder="제목" style="text-align:left;" />
        <input class="btn" id="subInput" value="${escapeHtml(s.subtitle || "")}" placeholder="부제" style="text-align:left;" />
      </div>

      <div style="height:12px"></div>
      <button class="btn btn--primary" id="saveBtn">💾 저장</button>
      <p class="p" style="margin-top:10px">저장은 localStorage에 됩니다.</p>
    </div>

    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center; gap:12px;">
        <div>
          <div class="h2">초기화</div>
          <div class="p">할 일/제목 설정을 지워요.</div>
        </div>
        <button class="pill" id="resetBtn">초기화</button>
      </div>
    </div>
  `;

  el.querySelector("#saveBtn").addEventListener("click", () => {
    const title = el.querySelector("#titleInput").value.trim() || "소스 레시피";
    const subtitle = el.querySelector("#subInput").value.trim() || "영지 · 마크 · 건희 · 런쥔";
    store.set({ title, subtitle });
    toast("저장 완료");
  });

  el.querySelector("#resetBtn").addEventListener("click", () => {
    store.set({ title: "소스 레시피", subtitle: "영지 · 마크 · 건희 · 런쥔", tasks: [] });
    toast("초기화 완료");
    el.querySelector("#titleInput").value = "소스 레시피";
    el.querySelector("#subInput").value = "영지 · 마크 · 건희 · 런쥔";
  });

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
