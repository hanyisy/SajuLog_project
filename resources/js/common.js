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
            <div class="header_bgmBtn" data-state="off">
                <span class="header_bgmBtn_icon">&#9835;</span><span class="header_bgmBtnTXT">OFF</span>
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
                    상호명 : 주식회사 위드어스<br>
                    대표 이경식<br>
                    사업자등록번호 332-88-03445<br>
                    경기도 부천시 원미구 소향로 37번길 31-7<br>
                    withusmkt@daum.net<br>
                    0507-1356-1719
                </p>
                <ul>
                    <li><span id="aboutBtn" class="js_policy_btn">회사소개 |</span></li>
                    <li><span id="termsBtn" class="js_policy_btn">이용약관 |</span></li>
                    <li><span id="policyBtn" class="js_policy_btn" style="font-weight: bolder;">개인정보 처리방침 |</span></li>
                    <li><span id="moneyBtn" class="js_policy_btn">환불정책</span></li>
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

    /* 메인페이지 BGM */
    const bgmAudio = document.getElementById('bgmAudio');
    const bgmBtn = document.querySelector('.index_head .header_bgmBtn');

    if (bgmAudio && bgmBtn) {
        bgmAudio.volume = 0.5;

        let bgmHasStarted = false;

        function updateBgmState() {
            bgmBtn.dataset.state = bgmAudio.paused ? 'off' : 'on';
        }

        function removeFirstInteractionEvents() {
            document.removeEventListener(
                'pointerdown',
                startBgmFromFirstInteraction,
                true
            );

            document.removeEventListener(
                'keydown',
                startBgmFromFirstInteraction,
                true
            );
        }

        async function playBgm() {
            try {
                await bgmAudio.play();

                bgmHasStarted = true;
                updateBgmState();
                document.querySelector('.header_bgmBtnTXT').innerHTML='ON';

                /*
                 * 처음 한 번 재생된 뒤에는
                 * 다른 곳을 눌러도 자동으로 다시 재생되지 않음
                 */
                removeFirstInteractionEvents();
            } catch (error) {
                console.error('BGM 재생 실패:', error);
            }
        }

        function startBgmFromFirstInteraction(event) {
            if (bgmHasStarted) return;

            /*
             * BGM 버튼을 처음 누른 경우에는
             * 아래 버튼 클릭 이벤트에서 직접 처리
             *
             * 이 조건이 없으면 pointerdown에서 재생된 뒤
             * click 이벤트에서 바로 정지될 수 있음
             */
            if (
                event.target instanceof Element &&
                event.target.closest('.header_bgmBtn')
            ) {
                return;
            }

            playBgm();
        }

        /*
         * 클릭, 터치, 드래그 시작 시 실행
         * capture:true라 로딩창이 떠 있어도 document에서 먼저 감지
         */
        document.addEventListener(
            'pointerdown',
            startBgmFromFirstInteraction,
            true
        );

        /* 키보드 조작 대응 */
        document.addEventListener(
            'keydown',
            startBgmFromFirstInteraction,
            true
        );

        /* 헤더 BGM 버튼 재생·정지 토글 */
        bgmBtn.addEventListener('click', async () => {
            if (bgmAudio.paused) {
                await playBgm();
            } else {
                bgmAudio.pause();
                updateBgmState();
                document.querySelector('.header_bgmBtnTXT').innerHTML='OFF';
            }
        });

        bgmAudio.addEventListener('play', updateBgmState);
        bgmAudio.addEventListener('pause', updateBgmState);

        updateBgmState();
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
    const moneyBtn = document.getElementById('moneyBtn');

    if (aboutBtn) {
        aboutBtn.addEventListener('click', () => {
            window.open('about.html', '회사소개', 'width=800,height=600,scrollbars=yes');
        });
    }

    if (termsBtn) {
        termsBtn.addEventListener('click', () => {
            window.open('https://hanyisy.github.io/SajuLog_project/policy_1.html', '이용약관', 'width=800,height=600,scrollbars=yes');
        });
    }


    if (policyBtn) {
        policyBtn.addEventListener('click', () => {
            window.open(
                'https://hanyisy.github.io/SajuLog_project/policy_1.html',
                '개인정보이용동의',
                'width=800,height=600,scrollbars=yes'
            );
        });
    }

    
    if (moneyBtn) {
        moneyBtn.addEventListener('click', () => {
            window.open('https://hanyisy.github.io/SajuLog_project/policy_1.html', '환불정책', 'width=800,height=600,scrollbars=yes');
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





// 결제모달 - 배주한 작성 260604 > 260605 수정

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("paymentContainer");
    if (!container) return;

    fetch("./product.html")
        .then(res => res.text())
        .then(html => {

            container.innerHTML = html;

            initPayment();

        })
        .catch(err => console.error("payment load fail:", err));
});


function initPayment(){

    const modal = document.getElementById("paymentModal");
    if (!modal) return;

    // DOM
    const closeBtn = modal.querySelector(".close_btn");
    const dim = modal.querySelector(".payment_dim");

    const priceBoxes = modal.querySelectorAll(".js_price_box");
    const choiceBoxes = modal.querySelectorAll(".js_product_choice_box");

    const productBtn = modal.querySelector(".js_product_btn");
    const policyCheck = modal.querySelector(".js_product_check");
    const productChoice = modal.querySelector(".product_choice");
    const modalTitle = modal.querySelector(".inner h1");

    

    // STATE (단일화)
    let selectedPrice = null;
    let priceSelected = false;
    let paymentType = "normal";

    // OPEN / CLOSE
    function openModal(){
        modal.classList.add("active");
        document.body.classList.add("modal_open");
    }

    function closeModal(){
        modal.classList.remove("active");
        document.body.classList.remove("modal_open");

        resetModal();

        const sec3 = document.querySelector(".main_section3");
        const review = document.querySelector(".result_reviewBox");

        if (sec3) sec3.style.display = "block";
        if (review) review.style.display = "block";
    }

    function resetModal(){

        selectedPrice = null;
        priceSelected = false;

        priceBoxes.forEach(el => el.classList.remove("active"));
        choiceBoxes.forEach(el => el.classList.remove("active"));

        productChoice.classList.remove("show");

        productBtn.classList.remove("active", "ready");
        productBtn.textContent = "결제유형을 선택해주세요";
    }

    // 가격 선택
    priceBoxes.forEach(box => {

        box.addEventListener("click", async () => {

            priceBoxes.forEach(el => el.classList.remove("active"));
            box.classList.add("active");

            selectedPrice = box.dataset.price;
            priceSelected = true;

            // 공유 케이스
            if (box.classList.contains("share")) {
                try {
                    await navigator.clipboard.writeText(location.origin + "/share");
                    alert("공유 링크 복사가 완료되었습니다");
                } catch {
                    alert("링크 복사 실패되었습니다. 다시 시도해주세요!");
                }
            }

            productChoice.classList.add("show");

            choiceBoxes.forEach(el => el.classList.remove("active"));

            productBtn.classList.remove("active");
            productBtn.classList.add("ready");
            productBtn.textContent = "결제수단을 선택해주세요";
        });

    });

    // 결제 수단 선택
    choiceBoxes.forEach(box => {

        box.addEventListener("click", () => {

            if (!priceSelected) return;

            choiceBoxes.forEach(el => el.classList.remove("active"));
            box.classList.add("active");

            productBtn.classList.remove("ready");
            productBtn.classList.add("active");

            productBtn.textContent =
                `${Number(selectedPrice).toLocaleString()}원 결제하기`;
        });

    });

    // 결제 실행
    productBtn.addEventListener("click", () => {

        if (!priceSelected) {
            alert("결제유형을 선택해주세요!");
            return;
        }

        if (!productBtn.classList.contains("active")) {
            alert("결제수단을 선택해주세요!");
            return;
        }

        if (!policyCheck.checked) {
            alert("이용 약관에 동의해주세요!");
            return;
        }

        const selectedPay =
            modal.querySelector(".js_product_choice_box.active");

        console.log("결제 실행:", {
            price: selectedPrice,
            method: selectedPay?.textContent
        });
        if (paymentType === "trial") {

            document.querySelector(".js_result_explainList").style.display = "";
            if (document.querySelector(".result_match_addsec2")) {
                document.querySelector(".result_match_addsec2").style.display = "";
            }     
            document.querySelector(".js_kakaoUnlockBox").style.display = "none";

            if (typeof animateMatchTable === "function") {
                animateMatchTable();
            }

            closeModal();
        }

    });

    // 외부 오픈 트리거
    document.addEventListener("click", (e) => {

        const openBtn = e.target.closest(".openPayment");
        if (!openBtn) return;

        e.preventDefault();

        paymentType = openBtn.dataset.type || "normal";
        modalTitle.textContent = "결제하기";

        // 기본 UI
        modal.querySelector(".price_choice").style.display = "";
        productChoice.classList.remove("show");

        if (paymentType === "trial") {
            modalTitle.textContent = "990원 결제하기";
            productBtn.classList.add("js_kakaoUnlock_btn");

            modal.querySelector(".price_choice").style.display = "none";

            selectedPrice = 990;
            priceSelected = true;

            productChoice.classList.add("show");

            productBtn.classList.remove("active");
            productBtn.classList.add("ready");
            productBtn.textContent = "결제수단을 선택해주세요";
        }

        openModal();

    });

    // close
    closeBtn?.addEventListener("click", closeModal);
    dim?.addEventListener("click", closeModal);
}



document.addEventListener("DOMContentLoaded", () => {
 
    // common.js는 productBtn에 붙인 js_kakaoUnlock_btn 클래스를
    // 모달을 닫을 때 제거하지 않아서(resetModal 미제거), 한 번이라도
    // 990원 체험판 모달을 열면 이후 정상 결제(25,900원 등)에서도
    // 클래스가 남아있게 됩니다. 그래서 클래스 대신, openPayment 클릭
    // 시점의 data-type을 이 스크립트가 직접 별도로 추적합니다.
    let trackedPaymentType = "normal";
 
    document.addEventListener("click", (e) => {
        const openBtn = e.target.closest(".openPayment");
        if (!openBtn) return;
        trackedPaymentType = openBtn.dataset.type || "normal";
    });
 
    // common.js의 productBtn 클릭 리스너보다 나중에 실행되도록
    // 캡처링 단계가 아닌 버블링 단계에서, 그리고 즉시 실행이 아니라
    // 별도의 독립 리스너로 동일 클릭 이벤트를 한 번 더 관찰합니다.
    document.addEventListener("click", (e) => {
 
        const productBtn = e.target.closest(".js_product_btn");
        if (!productBtn) return;
 
        // 990원 체험판(trial) 케이스는 common.js의 unlock 로직이 담당하므로 제외
        if (trackedPaymentType === "trial") return;
 
        const modal = document.getElementById("paymentModal");
        if (!modal) return;
 
        const priceSelectedBox = modal.querySelector(".js_price_box.active");
        const choiceSelectedBox = modal.querySelector(".js_product_choice_box.active");
        const policyCheck = modal.querySelector(".js_product_check");
 
        // common.js와 동일한 유효성 조건을 모두 통과했는지 확인
        // (유효성 실패 시 common.js의 alert만 뜨고 결제/이동은 진행되면 안 됨)
        if (!priceSelectedBox || !choiceSelectedBox || !policyCheck || !policyCheck.checked) {
            return;
        }
 
        // 여기부터는 일반 결제(25,900원 등) 완료로 간주
        const currentPage = location.pathname.split("/").pop().toLowerCase();
 
        let target = null;
        if (currentPage === "result.html" || currentPage === "result_again.html") {
            target = "./result_prem.html";
        } else if (currentPage === "result_match.html") {
            target = "./result_match_full.html";
        }
 
        if (target) {
            // common.js 쪽 처리(닫기/알림 등)가 먼저 실행되도록 약간 지연 후 이동
            setTimeout(() => {
                window.location.href = target;
            }, 50);
        }
    });
 
});
