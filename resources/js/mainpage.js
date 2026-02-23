// 1. 헤더 템플릿
const headerContent = `
    <div class="header_deco header_deco1"><div></div><div></div></div>
    <div class="header_box">
        <div class="header_logo">
            <a href="/"><img src="./resources/img/logo.png" alt="로고"></a>
        </div>
        <div class="header_maenuBox">
            <div class="header_cashBtn">
                <a href="#" target="_self"><img src="./resources/img/ui/header_btn.webp" alt="버튼"></a>
            </div>
            <div class="header_barBtn">
                <img src="./resources/img/ui/burger_bar.webp" alt="메뉴">
            </div>
        </div>
    </div>
    <div class="header_deco header_deco2">
        <div class="header_deco_obj">
            <div><img src="./resources/img/ui/header_ob1.webp" alt="장식1"></div>
            <div><img src="./resources/img/ui/header_ob2.webp" alt="장식2"></div>
        </div>
    </div>
`;

// 2. DOM 로드 후 실행
window.addEventListener('DOMContentLoaded', () => {
    const headerElement = document.querySelector('header');
    
    // 페이지에 <header> 태그가 존재할 때만 실행
    if (headerElement) {
        headerElement.innerHTML = headerContent;
        console.log("Header loaded successfully!");
    }
});