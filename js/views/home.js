export function HomeView() {
  const el = document.createElement("div");

  const items = [
    { title: "영지 소스", desc: "고소하고 달콤매콤한 땅콩 베이스 소스", href: "#/sauce/0" },
    { title: "마크 소스", desc: "땅콩 베이스에 간장·굴소스가 들어간 고소짭짤 소스", href: "#/sauce/1" },
    { title: "건희 소스", desc: "달콤고소한 땅콩 베이스 + 은근히 매콤", href: "#/sauce/2" },
    { title: "런쥔 소스", desc: "새콤짭짤한 간장 베이스 소스", href: "#/sauce/3" },
  ];

  el.innerHTML = `
    <div class="card">
      <p class="p">📱 Mobile · Static</p>
      <h2 class="h1">소스 레시피</h2>
      <p class="p">카드를 눌러 레시피를 확인하세요.</p>
    </div>

    <div id="sauceList" style="display:flex; flex-direction:column; gap:12px;"></div>
  `;

  const list = el.querySelector("#sauceList");

  items.forEach((it) => {
    const card = document.createElement("a");
    card.href = it.href;
    card.className = "card";
    card.style.display = "block";

    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; gap:12px; align-items:center;">
        <div style="min-width:0;">
          <div class="h2" style="margin-bottom:6px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
            ${escapeHtml(it.title)}
          </div>
          <div class="p" style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
            ${escapeHtml(it.desc)}
          </div>
        </div>
        <div class="pill">보기</div>
      </div>
    `;

    list.appendChild(card);
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
