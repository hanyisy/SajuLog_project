// 헤더 템플릿
const headerContent = `
    <div class="header_deco header_deco1"><div></div><div></div></div>
    <div class="header_box">
        <div class="header_logo">
            <a href="./index.html"><img src="https://land.withusmk.co.kr/assets/saju/resources/img/logo.png" alt="로고"></a>
        </div>
        <div class="header_maenuBox">
            <div class="header_cashBtn" style=" pointer-events: none; opacity: 0;">
                <a href="./product.html" target="_self"><img src="https://land.withusmk.co.kr/assets/saju/resources/img/ui/header_btn.webp" alt="버튼"></a>
            </div>
            <div class="header_barBtn js_header_barBtn">
                <img src="https://land.withusmk.co.kr/assets/saju/resources/img/ui/burger_bar.webp" alt="메뉴">
            </div>
        </div>
    </div>
    <div class="header_deco header_deco2">
        <div class="header_deco_obj">
            <div><img src="https://land.withusmk.co.kr/assets/saju/resources/img/ui/header_ob1.webp" alt="장식1"></div>
            <div><img src="https://land.withusmk.co.kr/assets/saju/resources/img/ui/header_ob2.webp" alt="장식2"></div>
        </div>
    </div>
`;
const stickyBottom = `

    <div class="shareBtn">
        <div><img src="https://land.withusmk.co.kr/assets/saju/resources/img/ui/share.webp" alt=""></div>
    </div>

    <div class="sticky_Bottom_BarBox">
            <img src="https://land.withusmk.co.kr/assets/saju/resources/img/ui/sticky_Bottom_Bar_frame.webp" alt="" style=" pointer-events: none;">
            <div>
                <div class="sticky_Bottom_btn">
                    <a href="./register.html">
                        <h1>사주</h1>
                        <p>용하다고 소문난 사주</p>
                    </a>
                </div>
                <div class="sticky_Bottom_btn">
                    <a href="./register_match.html">
                        <h1>궁합</h1>
                        <p>우리 궁합은 몇점?</p>
                    </a>
                </div>
                <div class="sticky_Bottom_btn" style=" pointer-events: none; opacity: 0.5; ">
                    <a href="./register_daily.html">
                        <h1>운세</h1>
                        <p>2026 신년운세</p>
                    </a>
                </div>
            </div>
        </div>
`;

const mainMenuCon =`
    <section class="mainMenu js_mainMenu">
        <div class="mainMenu_userBox">
            <h1 class="js_userName">User</h1>
            <p class="js_userData1">남성 | 1988.04.02 | 02:30 | --띠 | </p>
            <div class="mainMenu_cashBox" style=" pointer-events: none; opacity: 0; font-size:0.3em;">
                <div class="mainMenu_ticket_count">
                    <p>이용권</p>
                    <p><b>0</b>개</p>
                </div>
                <div class="mainMenu_mov_productBtn">
                    <a href="./product.html">
                        <img src="https://land.withusmk.co.kr/assets/saju/resources/img/ui/mainMenu_ticketbox.webp" alt="">
                    </a>
                </div>
            </div>
            <div class="mainMenu_userBox_str"></div>
        </div>
        <div class="mainMenu_menuBox">
            <div class="mainMenu_menuBox_frame">
                <div class="mainMenu_menuBox_frame1"><img src="https://land.withusmk.co.kr/assets/saju/resources/img/ui/mainMenu_frameTop.webp" alt=""></div>
                <div class="mainMenu_menuBox_frame2"><img src="https://land.withusmk.co.kr/assets/saju/resources/img/ui/mainMenu_frameBot.webp" alt=""></div>
            </div>
            <div class="mainMenu_menuList">
                <div><a href="./purchase.html">사주내역</a></div>
                <p></p>
                <div><a href="./faq.html">문의하기</a></div>
                <p></p>
                <div class="mainMenu_userLogout js_mainMenu_userLogout"><a href="./login.html">로그아웃</a></div>
            </div>
        </div>
    </section>
`

// <div><a href="./product.html">이용권 충전</a></div><제거


const footerCon = `
        <footer>
            <div class="inner">
                <img src="https://land.withusmk.co.kr/assets/saju/resources/img/logo.png" alt="로고">
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
        document.body.insertAdjacentHTML('beforeend', mainMenuCon);
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


// //데이터 활용테스트

// // 1. 데이터를 담을 빈 변수 선언
// let test_sajuData = null; 

// // 2. 데이터를 불러오는 함수
// async function loadSajuData() {
//     try {
//         const response = await fetch('https://land.withusmk.co.kr/assets/saju/resources/js/userData.json');
//         if (!response.ok) throw new Error('파일을 찾을 수 없습니다.');
        
//         const data = await response.json();
//         test_sajuData = data;
        
//         console.log("데이터 로드 완료:", test_sajuData);
//         updateUI(); 
        
//     } catch (error) {
//         console.error("데이터 로드 실패:", error);
//     }
// }

// // 3. 변수에 담긴 데이터를 사용하는 함수
// function updateUI() {
//     if (!test_sajuData) return;

//     // 요소를 찾고, 있을 때만 텍스트를 넣어줍니다 (방어 코드)
//     const js_userNameElement = document.querySelector('.js_userName');
//     if (js_userNameElement) {
//         js_userNameElement.innerText = `${test_sajuData.user_profile.name}`;
//     }
//     document.querySelectorAll('.js_userData1').forEach(item => {
//         item.innerText = `${test_sajuData.user_profile.gender} | ${test_sajuData.user_profile.birth_type} ${test_sajuData.user_profile.birth_date} | ${test_sajuData.user_profile.zodiac}`;
//     });
// }


// // 실행!
// loadSajuData();

document.addEventListener('DOMContentLoaded', () => {
    const load_Sec = document.querySelector('.loadings_loadBox');

    // 1. 요소가 존재할 때만 실행
    if (load_Sec) {
        // 내부 HTML 삽입
        load_Sec.innerHTML = `
            <section class="loadings_loading_Sec">
        <section class="loadings_Section">
            <div class="loadings_Box">
                <div class="loadings_logo"><img src="https://land.withusmk.co.kr/assets/saju/resources/img/load/load_parts1_7.webp" alt=""></div>
                <div class="loadings_top">
                    <div class="loadings_moon3">
                        <img src="https://land.withusmk.co.kr/assets/saju/resources/img/load/load_parts2.webp" alt="">
                    </div>
                    <div class="loadings_moon4">
                        <div><img src="https://land.withusmk.co.kr/assets/saju/resources/img/load/load_parts3.webp" alt=""></div>
                        <div><img src="https://land.withusmk.co.kr/assets/saju/resources/img/load/load_parts3_1.webp" alt=""></div>
                    </div>
                    <div class="loadings_saju">
                        <img src="https://land.withusmk.co.kr/assets/saju/resources/img/load/load_parts4.webp" alt="">
                    </div>
                </div>
                <div class="loadings_bot">
                    <div class="loadings_txtBox">
                        <img src="https://land.withusmk.co.kr/assets/saju/resources/img/load/load_parts1_8.webp" alt="">
                    </div>

                    <div class="loadings_loadingBox">
                        <div class="loadings_loading">
                            <div class="loadings_gage"></div>
                        </div>
                        <div class="loadings_loadingTxt"><span class="loadings_percent">0%</span>오픈 준비 중 <span class="loadings_dots"></span></div>
                    </div>
                </div>
            </div>
            <div class="loadings_Bg">
                <div class="loadings_fill"></div>
                <div class="loadings_fill loadings_fill_screen"></div>
                <div class="loadings_star"></div>
                <div class="loadings_moon1">
                    <div class="loadings_moon1_2">
                        <div class="loadings_moon2_2"><img src="https://land.withusmk.co.kr/assets/saju/resources/img/load/load_parts1_4.webp" alt=""></div>
                        <div class="loadings_moon2_1"><img src="https://land.withusmk.co.kr/assets/saju/resources/img/load/load_parts1_3.webp" alt=""></div>
                    </div>
                    <div class="loadings_moon1_1"><img src="https://land.withusmk.co.kr/assets/saju/resources/img/load/load_parts1_2.webp" alt=""></div>
                </div>
                <div class="loadings_cloud"></div>
                <div class="loadings_back"></div>
            </div>
        </section>
    </section>

    <section class="loadings_change_Sec">
        <div class="loadings_change_box">
            <div class="loadings_change_doorL off"></div>
            <div class="loadings_change_doorR off"></div>
        </div>
    </section>
        `;

        // 설정값
        const LOADINGS_MIN_DURATION = 1100;
        const LOADINGS_SLOW_DURATION = 1100;

        // DOM
        const loadings_gage       = document.querySelector('.loadings_gage');
        const loadings_doorL      = document.querySelector('.loadings_change_doorL');
        const loadings_doorR      = document.querySelector('.loadings_change_doorR');
        const loadings_changeSec  = document.querySelector('.loadings_change_Sec');
        const loadings_loadingSec = document.querySelector('.loadings_loading_Sec');

        // 프리로드할 이미지
        const loadings_imageList = [
            // 'https://land.withusmk.co.kr/assets/saju/resources/img/load/load_parts1_7.webp',
        ];

        let loadings_currentPercent = 0;
        let loadings_isLoadComplete = false;
        const loadings_startTime = Date.now();

        // UI 업데이트
        function loadings_updateUI(p) {
            const percent = Math.floor(p);
            loadings_gage.style.width = percent + '%';
            document.querySelector('.loadings_percent').textContent = percent + '%';
        }

        // 1. 느긋하게 0 → 98 (약 1100ms)
        const loadings_slowTimer = setInterval(() => {
            const elapsed = Date.now() - loadings_startTime;
            const ratio = Math.min(elapsed / LOADINGS_SLOW_DURATION, 1);
            const eased = 1 - Math.pow(1 - ratio, 2);
            loadings_currentPercent = eased * 98;
            loadings_updateUI(loadings_currentPercent);
            
            if (ratio >= 1) {
                clearInterval(loadings_slowTimer);
                if (loadings_isLoadComplete) loadings_rushToHundred();
            }
        }, 30);

        // 2. 이미지 프리로드
        function loadings_preload(src) {
            return new Promise(resolve => {
                const img = new Image();
                img.onload = img.onerror = resolve;
                img.src = src;
            });
        }

        Promise.all(loadings_imageList.map(loadings_preload)).then(() => {
            const elapsed = Date.now() - loadings_startTime;
            const wait = Math.max(0, LOADINGS_MIN_DURATION - elapsed);
            setTimeout(() => {
                loadings_isLoadComplete = true;
                if (loadings_currentPercent >= 95) loadings_rushToHundred();
            }, wait);
        });

        // 3. 95 → 100 가속 (300ms)
        function loadings_rushToHundred() {
            const start = loadings_currentPercent;
            const rushStart = Date.now();
            const DURATION = 300;
            
            const timer = setInterval(() => {
                const elapsed = Date.now() - rushStart;
                const ratio = Math.min(elapsed / DURATION, 1);
                const eased = ratio * ratio;
                loadings_currentPercent = start + (100 - start) * eased;
                loadings_updateUI(loadings_currentPercent);
                
                if (ratio >= 1) {
                    clearInterval(timer);
                    loadings_updateUI(100);
                    setTimeout(loadings_startDoorSequence, 100);
                }
            }, 16);
        }

        // 4. 문 시퀀스
        function loadings_startDoorSequence() {
            // 1) 문 닫힘 (off 제거 → 화면 안으로)
            loadings_doorL.classList.remove('off');
            loadings_doorR.classList.remove('off');
            
            // 2) 문 완전히 닫힌 직후 → 로딩 섹션 통째로 제거
            setTimeout(() => {
                loadings_loadingSec.classList.add('off');
            }, 700);
            
            // 3) 잠깐 뜸 들인 뒤 문 열림
            setTimeout(() => {
                loadings_doorL.classList.add('off');
                loadings_doorR.classList.add('off');
            }, 1500);
            
            // 4) 문 다 열리고 나면 문 섹션도 제거
            setTimeout(() => {
                loadings_changeSec.classList.add('off');
            }, 2200);
        }
    }
});





// 결제모달 - 배주한 작성 260604

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("paymentContainer");

    fetch("./product.html")
    .then(res => res.text())
    .then(html => {

        container.innerHTML = html;

        initPayment();

    });

});

function initPayment(){

    const choiceBoxes = document.querySelectorAll(".js_product_choice_box");
    const productBtn = document.querySelector(".js_product_btn");
    const policyCheck = document.querySelector(".js_product_check");
    const closeBtn = document.querySelector(".close_btn");
    const dim = document.querySelector(".payment_dim");

    function openModal(){

        const paymentModal =
        document.getElementById('paymentModal');

        if(!paymentModal){
            console.log('modal 없음');
            return;
        }

        paymentModal.classList.add('active');

        document.body.style.overflow = 'hidden';
    }

    function closeModal(){

        const paymentModal =
        document.getElementById('paymentModal');

        if(!paymentModal) return;

        paymentModal.classList.remove('active');

        document.body.style.overflow = '';
    }

    document.addEventListener("click", (e) => {

        const openBtn = e.target.closest(".openPayment");

        if(openBtn){

            e.preventDefault();

            openModal();
        }

    });

    choiceBoxes.forEach(box => {

        box.addEventListener("click", () => {

            choiceBoxes.forEach(el => el.classList.remove("active"));

            box.classList.add("active");

            productBtn.textContent = "결제하기";

            productBtn.classList.add("active");

        });

    });

    productBtn.addEventListener("click", () => {

        if(!productBtn.classList.contains("active")){

            alert("결제수단을 선택해주세요! ");

            return;
        }

        if(!policyCheck.checked){

            alert("이용약관에 동의해주세요!");

            return;
        }

        const selectedPay =
        document.querySelector(".js_product_choice_box.active");

        console.log("결제:", selectedPay.textContent);

    });

    closeBtn?.addEventListener("click", closeModal);

    dim?.addEventListener("click", closeModal);

}