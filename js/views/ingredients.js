export function IngredientsView() {
  const el = document.createElement("div");

  el.innerHTML = `
    <div class="card">
      <h2 class="h1">추천 재료</h2>
      <p class="p">소스와 잘 어울리는 재료를 정리해두세요.</p>
    </div>

    <div class="card">
      <div class="h2" style="margin-bottom:8px;">예시</div>
      <ul style="padding-left:18px; margin:0; line-height:1.8;">
        <li>얇은 고기 (차돌, 우삼겹)</li>
        <li>숙주, 청경채</li>
        <li>당면, 넓은 당면</li>
        <li>두부, 유부</li>
        <li>버섯류</li>
      </ul>
    </div>
  `;

  return el;
}