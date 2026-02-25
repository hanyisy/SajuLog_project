// 헤더 템플릿
const headerContent = `
    <div class="header_deco header_deco1"><div></div><div></div></div>
    <div class="header_box">
        <div class="header_logo">
            <a href="/"><img src="./resources/img/logo.png" alt="로고"></a>
        </div>
        <div class="header_maenuBox">
            <div class="header_cashBtn">
                <a href="./product.html" target="_self"><img src="./resources/img/ui/header_btn.webp" alt="버튼"></a>
            </div>
            <div class="header_barBtn js_header_barBtn">
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
const stickyBottom = `
    <div class="sticky_Bottom_BarBox">
            <img src="./resources/img/ui/sticky_Bottom_Bar_frame.webp" alt="">
            <div>
                <div class="sticky_Bottom_btn">
                    <a href="#">
                        <h1>사주</h1>
                        <p>용하다고 소문난 사주</p>
                    </a>
                </div>
                <div class="sticky_Bottom_btn">
                    <a href="#">
                        <h1>궁합</h1>
                        <p>우리 궁합은 몇점?</p>
                    </a>
                </div>
                <div class="sticky_Bottom_btn">
                    <a href="#">
                        <h1>운세</h1>
                        <p>2026 신년운세</p>
                    </a>
                </div>
            </div>
        </div>
`;


const footerCon = `
        <footer>
            <div class="inner">
                <img src="resources/img/logo.png" alt="로고">
                <p>
                    대표 OOO<br>
                    사업자등록번호 OOO-OO-OOOOO<br>
                    통신판매번호 OOOO-OOOO-OOOO<br>
                    경기도 부천시 OOO-OO, OOO-OOO<br>
                    withus@withus.co.kr<br>
                    000-0000-0000
                </p>
                <ul>
                    <li><span id="aboutBtn" class="js_policy_btn">회사소개 |</span></li>
                    <li><span id="termsBtn" class="js_policy_btn">이용약관 |</span></li>
                    <li><span id="policyBtn" class="js_policy_btn" style="font-weight: bolder;">개인정보 처리방침</span></li>
                </ul>
            </div>
        </footer>
`;


// 2. DOM 로드 후 실행
window.addEventListener('DOMContentLoaded', () => {
    const headerElement = document.querySelector('header');
    const stickyBottomElement = document.querySelector('.js_sticky_Bottom_Bar');
    const footerConElement = document.querySelector('footer');
    
    // 페이지에 <header> 태그가 존재할 때만 실행
    if (headerElement) {
        headerElement.innerHTML = headerContent;
    }
    // 페이지에 <header> 태그가 존재할 때만 실행
    if (stickyBottomElement) {
        stickyBottomElement.innerHTML = stickyBottom;
    }

    if (footerConElement) {
    footerConElement.innerHTML = footerCon;
    }

    document.querySelector('.js_header_barBtn').addEventListener('click',()=>{
        document.querySelector('.js_mainMenu').classList.toggle('on');
    });



    const aboutBtn = document.getElementById('aboutBtn');
    const termsBtn = document.getElementById('termsBtn');
    const policyBtn = document.getElementById('policyBtn');

    if (aboutBtn) {
        aboutBtn.addEventListener('click', () => {
            window.open('about.html', '회사소개', 'width=800,height=600,scrollbars=yes');
        });
    }

    if (termsBtn) {
        termsBtn.addEventListener('click', () => {
            window.open('terms.html', '이용약관', 'width=800,height=600,scrollbars=yes');
        });
    }

    if (policyBtn) {
        policyBtn.addEventListener('click', () => {
            window.open(
                'policy.html',
                '개인정보이용동의',
                'width=800,height=600,scrollbars=yes'
            );
        });
    }








});


//데이터 활용테스트

// 1. 데이터를 담을 빈 변수 선언
let test_sajuData = null; 

// 2. 데이터를 불러오는 함수
async function loadSajuData() {
    try {
        const response = await fetch('./resources/js/userData.json');
        if (!response.ok) throw new Error('파일을 찾을 수 없습니다.');
        
        const data = await response.json();
        test_sajuData = data;
        
        console.log("데이터 로드 완료:", test_sajuData);
        updateUI(); 
        
    } catch (error) {
        console.error("데이터 로드 실패:", error);
    }
}

// 3. 변수에 담긴 데이터를 사용하는 함수
function updateUI() {
    if (!test_sajuData) return;

    // 요소를 찾고, 있을 때만 텍스트를 넣어줍니다 (방어 코드)
    const js_userNameElement = document.querySelector('.js_userName');
    if (js_userNameElement) {
        js_userNameElement.innerText = `${test_sajuData.user_profile.name}`;
    }
}





// 실행!
loadSajuData();