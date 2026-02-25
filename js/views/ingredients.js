export function IngredientsView() {
  const el = document.createElement("div");

  el.innerHTML = `
    <div class="card">
      <h2 class="h1">추천 재료</h2>
      <p class="p">소스와 잘 어울리는 재료를 정리해두세요.</p>
    </div>

    <div class="card">
      <ul style="padding-left:18px; margin:0; line-height:1.8;">
        <li>탕 종류 : 마라탕(추천), 버섯탕(추천), 토마토탕(추천), 삼선탕, 삼계탕, 크림탕, 후추탕</li>
        <li>새우완자(완자류 전체)</li>
        <li>두유피튀김</li>
        <li>냉동두부</li>
        <li>유타오</li>
        <li>근본 조합</li>
        <li style="list-style-type: none;">⭐⭐⭐⭐⭐</li>
        <li>새우완자*2 + 두유부 조합</li>
        <li>두유피 튀김 + 고기(우삼겹) + 새우 완자(필수 아님)</li>
        <li>두고새 먹는 방법</li>
        <li style="list-style-type: none;">1. 두유피 튀김을 물에 담갔다가 바로 빼기</li>
        <li style="list-style-type: none;">2. 익히지 않은 고기 올리기</li>
        <li style="list-style-type: none;">3. 새우 완자 올리기</li>
        <li style="list-style-type: none;">4. 말아서 탕에 넣기</li>
        <li style="list-style-type: none;">⭐⭐⭐⭐⭐</li>
        <li>탄탄면 만드는 방법</li>
        <li style="list-style-type: none;">1. 생면 준비하기</li>
        <li style="list-style-type: none;">2. 면 삶기 - 마라탕 추천</li>
        <li style="list-style-type: none;">3. 소스바에서 탄탄면 소스 제조</li>
        <li style="list-style-type: none;">(소스 레시피 : 참깨소스 1 + 굴소스 1 + 버섯소스 1 + 땅콩가루 1 + 오향우육 + 튀긴 대두)</li>
        <li style="list-style-type: none;">4. 소스를 삶은 면 위에 올려주기</li>
      </ul>
    </div>
  `;

  return el;
}