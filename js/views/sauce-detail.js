/**
 * 소스 상세 화면 (읽기 전용)
 * - 입력 없음
 * - 저장 없음
 * - 고정 텍스트만 표시
 */
const SAUCE_CONTENT = [
  {
    title: "영지 소스",
    desc: "고소하고 달콤매콤한 땅콩 베이스 소스",
    recipe: `
땅콩 소스 2국자
스위트 칠리 1.5국자
태국 고추 2숟갈
고춧가루 1.5숟갈
다진 파 1.5숟갈
다진 마늘 1숟갈
참기름 2바퀴
간장 1바퀴
다진 고기 1.5숟갈
깨 적당히
설탕 한 꼬집
땅콩 가루 한 꼬집
    `,
  },
  {
    title: "마크 소스",
    desc: "땅콩 베이스에 간장과 굴소스가 들어간 고소짭짤한 소스",
    recipe: `
땅콩 소스 2국자
다진 마늘 1.5숟갈
양파 1.5숟갈
굴소스 1숟갈
태국 고추 1숟갈
간장 2숟갈
다진 고기 조금
다진 파 조금
땅콩가루 조금
고춧가루 조금
    `,
  },
  {
    title: "건희 소스",
    desc: "달콤고소한 땅콩 베이스에 은근히 매콤한 소스",
    recipe: `
땅콩소스 1
칠리소스 2.5
마늘 0.5
다진파 0.5
깨 1 티스푼
고춧가루 0.5 티스푼
고추기름 1 티스푼
땅콩가루 1 티스푼
설탕 0.3 티스푼
볶음소고기장 0.5 티스푼
    `,
  },
  {
    title: "런쥔 소스",
    desc: "새콤짭짤한 간장 베이스 소스",
    recipe: `
간장 1.5국자
식초 1티스푼
참기름 1티스푼
설탕 0.5티스푼
훠궈소스(건더기만) 0.5국자
고추, 파 취향껏
    `,
  },
];

export function SauceDetailView({ index }) {
  const idx = clamp(index, 0, 3);
  const sauce = SAUCE_CONTENT[idx];

  const el = document.createElement("div");

  el.innerHTML = `
    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <h2 class="h1" style="margin:0;">${escapeHtml(sauce.title)}</h2>
          <p class="p">${escapeHtml(sauce.desc)}</p>
        </div>
        <a href="#/home" class="pill">← 홈</a>
      </div>
    </div>

    <div class="card">
      <div class="h2" style="margin-bottom:8px;">레시피</div>
      <pre style="
        margin:0;
        white-space:pre-wrap;
        font-size:13px;
        line-height:1.9;
        letter-spacing:0.02em;
        color:rgba(16,24,40,.85);
        font-family: inherit;
      ">${escapeHtml(sauce.recipe.trim())}</pre>
    </div>
  `;

  return el;
}

/* utils */
function clamp(v, min, max) {
  const n = Number(v);
  if (Number.isNaN(n)) return min;
  return Math.max(min, Math.min(max, n));
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
