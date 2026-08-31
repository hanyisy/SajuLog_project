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
            <div class="header_bgmBtn" data-state="off" style="display: none;">
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

            <div class="mainMenu_cashBox" style=" pointer-events: none; opacity: 0; font-size:0.3em;">
                <div class="mainMenu_ticket_count">
                    <p>이용권</p>
                    <p><b>0</b>개</p>
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
            <div class="inner">
                <img src="https://land.withusmk.co.kr/assets/saju/resources/img/logo.png" alt="로고">
                <div class="footer_bizinfo" style="display: grid; grid-template-columns: max-content 1fr; gap: 0.25em 0.6em; text-align: left; color: rgb(153, 153, 153); font-weight: 200; margin-bottom: 1em;">
                    <span style="opacity: 0.7;">상호명</span><span>(주)위드어스</span>
                    <span style="opacity: 0.7;">대표자</span><span>이경식</span>
                    <span style="opacity: 0.7;">사업자등록번호</span><span>332-88-03445</span>
                    <span style="opacity: 0.7;">통신판매번호</span><span>사업자등록번호 332-88-03445</span>
                    <span style="opacity: 0.7;">주소</span><span>경기도 부천시 원미구 소향로 37번길 31-7</span>
                    <span style="opacity: 0.7;">이메일</span><span>withusmkt@daum.net</span>
                    <span style="opacity: 0.7;">전화</span><span>0507-1356-1719</span>
                </div>
                <ul>
                    <li><span id="aboutBtn" class="js_policy_btn">회사소개 |</span></li>
                    <li><span id="termsBtn" class="js_policy_btn">이용약관 |</span></li>
                    <li><span id="policyBtn" class="js_policy_btn" style="font-weight: bolder;">개인정보 처리방침 |</span></li>
                    <li><span id="moneyBtn" class="js_policy_btn">환불정책</span></li>
                </ul>
            </div>
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
        const BGM_VOLUME = 0.5;   // 최종 볼륨
        let fadeTimer = null;

        function fadeInBgm() {
            clearInterval(fadeTimer);
            bgmAudio.volume = 0;
            const step = 30;
            const inc = BGM_VOLUME / (1000 / step);   // 1500ms 동안
            fadeTimer = setInterval(() => {
                const next = bgmAudio.volume + inc;
                if (next >= BGM_VOLUME) {
                    bgmAudio.volume = BGM_VOLUME;
                    clearInterval(fadeTimer);
                } else {
                    bgmAudio.volume = next;
                }
            }, step);
        }

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
                fadeInBgm();

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





// 결제모달 - 배주한 작성 260604 > 260605 수정  >260819 수정

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("paymentContainer");
    if (!container) return;

    const paymentSrc = container.dataset.paymentSrc || "./product_type2.html";

    // fetch(paymentSrc)
    //     .then(res => res.text())
    //     .then(html => {
    //         container.innerHTML = html;
    //         initPayment();
    //     })
    //     .catch(err => console.error("payment load fail:", err));

    fetch(paymentSrc, { cache: "no-store" })
    .then(res => res.text())
    .then(html => {
        container.innerHTML = html;

        const modal = container.querySelector("#paymentModal");

        if (modal?.classList.contains("type3")) {
            initType3Payment(modal);
        } else {
            initPayment();
        }
    })
    .catch(err => {
        console.error("payment load fail:", err);
    });

});


function initPayment(){

    const modal = document.getElementById("paymentModal");
    if (!modal) return;
    

    // DOM
    const closeBtn = modal.querySelector(".close_btn");
    const dim = modal.querySelector(".payment_dim");

    const priceBoxes = modal.querySelectorAll(".js_price_box");
    const choiceBoxes = modal.querySelectorAll(".js_product_choice_box");

    const productBtns = modal.querySelectorAll(".js_product_btn");
    const productChoice = modal.querySelector(".product_choice");
    const modalTitle = modal.querySelector(".inner h1");

    let paymentType = "normal";
    let selectedPrice = null;
    let priceSelected = false;

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

        productBtns.forEach(btn => btn.classList.remove("active", "ready"));

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

            productBtns[0].classList.remove("active");
            productBtns[0].classList.add("ready");
            productBtns[0].textContent = "결제수단을 선택해주세요";
        });

    });

    // 결제 수단 선택
    choiceBoxes.forEach(box => {

        box.addEventListener("click", () => {

            if (!priceSelected) return;

            // 클릭한 버튼이 속한 탭(js_share_box) 안에서만 active 토글
            const scopeBox = box.closest(".js_share_box") || modal;
            const scopedChoiceBoxes = scopeBox.querySelectorAll(".js_product_choice_box");
            const scopedProductBtn = scopeBox.querySelector(".js_product_btn") || productBtns[0];

            scopedChoiceBoxes.forEach(el => el.classList.remove("active"));
            box.classList.add("active");

            scopedProductBtn.classList.remove("ready");
            scopedProductBtn.classList.add("active");


        });

    });


// 결제 실행
    productBtns.forEach(btn => {

        const shareBox = btn.closest(".js_share_box");
        const shareType = shareBox ? shareBox.dataset.share : null; // "1"=라이트 "2"=프리미엄 "3"=패키지

        btn.addEventListener("click", () => {

            if (!btn.classList.contains("active")) {
                alert("결제수단을 선택해주세요!");
                return;
            }

            const scopedPolicyCheck = shareBox
                ? shareBox.querySelector(".js_product_check")
                : modal.querySelector(".js_product_check");

            if (!scopedPolicyCheck || !scopedPolicyCheck.checked) {
                alert("이용 약관에 동의해주세요!");
                return;
            }

            const selectedPay = shareBox
                ? shareBox.querySelector(".js_product_choice_box.active")
                : modal.querySelector(".js_product_choice_box.active");

            console.log("결제 실행:", {
                share: shareType,
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
                return;
            }

            // ▼ 라이트(share="1") 결제 완료 시에만 카드 노출 ▼
            if (shareType === "1") {
                if (typeof unlockPremium === "function") {
                    unlockPremium();
                }
                closeModal();
                return;
            }

            // 프리미엄 / 패키지는 여기에 각자 다른 로직 추가
            if (shareType === "2") {
                // TODO: 프리미엄 결제 완료 로직
            }
            if (shareType === "3") {
                // TODO: 패키지 결제 완료 로직
            }

        });

    });



    // 외부 오픈 트리거
    document.addEventListener("click", (e) => {

        const openBtn = e.target.closest(".openPayment");
        if (!openBtn) return;

        e.preventDefault();

        paymentType = openBtn.dataset.type || "normal";

        if (modal.classList.contains("type3")) {
            openModal();
            return;
        } 

        modalTitle.textContent = "결제하기";

        // 기본 UI
        modal.querySelector(".price_choice").style.display = "";
        productChoice.classList.remove("show");

        if (paymentType === "trial") {
            modalTitle.textContent = "990원 결제하기";
            productBtns[0].classList.add("js_kakaoUnlock_btn");

            modal.querySelector(".price_choice").style.display = "none";

            selectedPrice = 990;
            priceSelected = true;

            productChoice.classList.add("show");

            productBtns[0].classList.remove("active");
            productBtns[0].classList.add("ready");
            productBtns[0].textContent = "결제수단을 선택해주세요";
        }

    // ★ type2 (가격박스가 없는 고정가 모달) 처리
if (modal.classList.contains("type2")) {
    modalTitle.innerHTML = "자네의 운명을 알고 모르고는<span>큰 차이가 있다네</span>";
    selectedPrice = 2900;
    priceSelected = true;
    productChoice.classList.add("show");
    productBtns[0].classList.remove("active");
    productBtns[0].classList.add("ready");
    productBtns[0].textContent = "2,900원 결제하기";   // ← 여기만 변경
}


// ★ match (궁합 결과 페이지 전용 모달) 처리
if (modal.classList.contains("match")) {
    modalTitle.innerHTML = "두 사람의 앞날을 미리 안다면,<span>인연을 대하는 마음도 달라질 걸세.</span>";
    modal.querySelector(".price_choice").style.display = "";
    productChoice.classList.add("show");
    productBtns[0].classList.remove("active");
    productBtns[0].classList.add("ready");
    priceSelected = true;
    // 가격은 현재 active 상태인 price_btn(target=1, 라이트 990/2900 등)에 맞춰 표시
    const activeShareBtn = modal.querySelector('.js_product_btn');
    if (activeShareBtn) {
        // share 블록 안 버튼 텍스트를 그대로 쓰므로 별도 지정 불필요
    }
}


    openModal();


    });

    // close
    closeBtn?.addEventListener("click", closeModal);
    dim?.addEventListener("click", closeModal);
}



document.addEventListener("DOMContentLoaded", () => {
 
    // common.js는 productBtns[0]에 붙인 js_kakaoUnlock_btn 클래스를
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
 
    // common.js의 productBtns[0] 클릭 리스너보다 나중에 실행되도록
    // 캡처링 단계가 아닌 버블링 단계에서, 그리고 즉시 실행이 아니라
    // 별도의 독립 리스너로 동일 클릭 이벤트를 한 번 더 관찰합니다.
    document.addEventListener("click", (e) => {
 
        const productBtns = e.target.closest(".js_product_btn");
        if (!productBtns) return;
 
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
        }
 
        if (target) {
            // common.js 쪽 처리(닫기/알림 등)가 먼저 실행되도록 약간 지연 후 이동
            setTimeout(() => {
                window.location.href = target;
            }, 50);
        }
    });
 
});




// 페이지네이션 구성_260724_주한
// 페이지네이션 구성_260724_주한 (res_mat)
(function () {
    var sections = Array.prototype.slice.call(
        document.querySelectorAll('#res_mat1,#res_mat2,#res_mat3,#res_mat4,#res_mat5,#res_mat6,#res_mat7,#res_mat8')
    );
    var total = sections.length;
    if (total === 0) return;
    var idx = 0;
    var prevBtn = document.getElementById('crt_prevBtn');
    var nextBtn = document.getElementById('crt_nextBtn');
    var label = document.getElementById('crt_pageLabel');

    function render() {
        sections.forEach(function (sec, i) {
            sec.style.display = (i === idx) ? '' : 'none';
        });
        label.textContent = (idx + 1) + ' / ' + total;
        prevBtn.disabled = (idx === 0);
        nextBtn.disabled = (idx === total - 1);
    }

    prevBtn.addEventListener('click', function () {
        if (idx > 0) { idx--; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    });
    nextBtn.addEventListener('click', function () {
        if (idx < total - 1) { idx++; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    });

    render();
})();

// 페이지네이션 구성_260724_주한 (res_pre)
// 운영코드 복붙
(function () {
    var track = document.querySelector('.crt_slideTrack');
    if (!track) return;
    var view = track.parentElement;
    var slides = Array.prototype.slice.call(track.querySelectorAll('section[id^="res_pre"]'));
    var total = slides.length;
    if (total === 0) return;
    var prevBtn = document.getElementById('crt_prevBtn');
    var nextBtn = document.getElementById('crt_nextBtn');
    var label = document.getElementById('crt_pageLabel');
    var arrowL = document.querySelector('.crt_swipeArrowL');
    var arrowR = document.querySelector('.crt_swipeArrowR');
    var TH = 100;
    var idx = 0;
    var busy = false;
    var interacted = false;
    var peeked = false;

    function width() { return view.clientWidth; }
    function base() { return -idx * width(); }
    function syncHeight() { track.style.height = slides[idx].offsetHeight + 'px'; }
    function syncLayout() {
        track.style.transition = 'none';
        track.style.transform = 'translateX(' + base() + 'px)';
        syncHeight();
    }
    function render() {
        label.textContent = (idx + 1) + ' / ' + total;
        prevBtn.disabled = (idx === 0);
        nextBtn.disabled = (idx === total - 1);
        syncLayout();
    }
    function goTo(next) {
        if (next < 0 || next >= total) return;
        idx = next;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    var ro = new ResizeObserver(syncHeight);
    slides.forEach(function (s) { ro.observe(s); });
    window.addEventListener('resize', syncLayout);

    var start = null;
    var axis = null;
    var lastDx = 0;

    function setArrow(el, show, progress) {
        if (!el) return;
        el.style.opacity = show ? String(0.35 + 0.65 * progress) : '0';
        el.classList.toggle('go', show && progress >= 1);
    }
    function draw(dx) {
        var canPrev = idx > 0;
        var canNext = idx < total - 1;
        var resisted = ((dx > 0 && !canPrev) || (dx < 0 && !canNext)) ? dx * 0.25 : dx;
        lastDx = resisted;
        track.style.transition = 'none';
        track.style.transform = 'translateX(' + (base() + resisted) + 'px)';
        var progress = Math.min(1, Math.abs(resisted) / TH);
        setArrow(arrowL, resisted > 0 && canPrev, progress);
        setArrow(arrowR, resisted < 0 && canNext, progress);
    }
    function endDrag(commit) {
        var dx = lastDx;
        start = null;
        axis = null;
        lastDx = 0;
        document.body.style.userSelect = '';
        setArrow(arrowL, false, 0);
        setArrow(arrowR, false, 0);
        var canPrev = idx > 0;
        var canNext = idx < total - 1;
        if (commit && Math.abs(dx) >= TH && ((dx < 0 && canNext) || (dx > 0 && canPrev))) {
            var next = dx < 0 ? idx + 1 : idx - 1;
            busy = true;
            track.style.transition = 'transform .25s ease';
            track.style.transform = 'translateX(' + (-next * width()) + 'px)';
            setTimeout(function () { busy = false; goTo(next); }, 260);
            return;
        }
        track.style.transition = 'transform .22s ease';
        track.style.transform = 'translateX(' + base() + 'px)';
    }
    function move(dx, dy) {
        if (!axis) {
            if (Math.abs(dx) < 12 && Math.abs(dy) < 12) return;
            axis = Math.abs(dx) > Math.abs(dy) ? 'h' : 'v';
            if (axis === 'h') document.body.style.userSelect = 'none';
        }
        if (axis === 'h') draw(dx);
    }

    document.addEventListener('touchstart', function (e) {
        interacted = true;
        if (busy) return;
        var t = e.touches[0];
        start = { x: t.clientX, y: t.clientY };
        axis = null;
    }, { passive: true });
    document.addEventListener('touchmove', function (e) {
        if (!start) return;
        var t = e.touches[0];
        move(t.clientX - start.x, t.clientY - start.y);
    }, { passive: true });
    document.addEventListener('touchend', function () {
        if (axis === 'h') endDrag(true); else { start = null; axis = null; }
    }, { passive: true });
    document.addEventListener('touchcancel', function () {
        if (axis === 'h') endDrag(false); else { start = null; axis = null; }
    }, { passive: true });

    document.addEventListener('pointerdown', function (e) {
        if (e.pointerType !== 'mouse') return;
        interacted = true;
        if (busy) return;
        start = { x: e.clientX, y: e.clientY };
        axis = null;
    });
    document.addEventListener('pointermove', function (e) {
        if (e.pointerType !== 'mouse' || !start) return;
        if (e.buttons === 0) { endDrag(false); return; }
        move(e.clientX - start.x, e.clientY - start.y);
    });
    document.addEventListener('pointerup', function (e) {
        if (e.pointerType !== 'mouse' || !start) return;
        if (axis === 'h') endDrag(true); else { start = null; axis = null; }
    });
    document.addEventListener('dragstart', function (e) { e.preventDefault(); });

    var wheel = { acc: 0, lastTs: 0, coolUntil: 0 };
    document.addEventListener('wheel', function (e) {
        if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
        var now = e.timeStamp;
        if (now < wheel.coolUntil) return;
        if (now - wheel.lastTs > 300) wheel.acc = 0;
        wheel.lastTs = now;
        wheel.acc += e.deltaX;
        if (Math.abs(wheel.acc) < 80) return;
        var dir = wheel.acc > 0 ? 1 : -1;
        wheel.acc = 0;
        wheel.coolUntil = now + 500;
        goTo(idx + dir);
    }, { passive: true });

    prevBtn.addEventListener('click', function () { goTo(idx - 1); });
    nextBtn.addEventListener('click', function () { goTo(idx + 1); });

    render();

    if (total > 1) {
        setTimeout(function () {
            if (peeked || interacted || busy) return;
            peeked = true;
            var peek = Math.min(72, width() * 0.18);
            track.style.transition = 'transform .4s ease';
            track.style.transform = 'translateX(' + (-peek) + 'px)';
            if (arrowR) { arrowR.style.opacity = '1'; arrowR.classList.add('go'); }
            setTimeout(function () {
                track.style.transition = 'transform .32s ease';
                track.style.transform = 'translateX(0px)';
                if (arrowR) { arrowR.style.opacity = '0'; arrowR.classList.remove('go'); }
            }, 560);
        }, 700);
    }
})();




// 260810




// document.addEventListener("click", (e) => {
//     const box = e.target.closest(".choice_type_box");
//     if (!box) return;

//     const modal = document.getElementById("paymentModal");
//     if (!modal) return;

//     // 결제수단 전체에서 active 제거
//     modal.querySelectorAll(".choice_type_box").forEach(item => {
//         item.classList.remove("active");
//     });

//     // 클릭한 결제수단 강제 active
//     box.classList.add("active");

//     console.log("결제수단 active:", box.textContent.trim());
// });



// document.addEventListener("click", (e) => {
//     const btn = e.target.closest(".price_btn");
//     if (!btn) return;

//     document.querySelectorAll('.price_btn').forEach(b => b.classList.remove('active'));
//     btn.classList.add('active');

//     const target = btn.dataset.target;
//     document.querySelectorAll('.js_share_box').forEach(box => {
//         box.classList.toggle('active', box.dataset.share === target);
//     });
// });








// 260819

// document.addEventListener("click", (e) => {
//     const box = e.target.closest(".js_product_choice_box");
//     if (!box) return;

//     const modal = box.closest("#paymentModal");
//     if (!modal) return;

//     // type3 모달에서만 사용
//     if (!modal.classList.contains("type3")) return;

//     // 결제수단 active 초기화
//     modal.querySelectorAll(".js_product_choice_box").forEach(item => {
//         item.classList.remove("active");
//     });

//     // 선택한 결제수단 활성화
//     box.classList.add("active");

//     // 결제 버튼 활성화
//     const paymentBtn = modal.querySelector(".js_product_btn");

//     if (paymentBtn) {
//         paymentBtn.classList.remove("ready");
//         paymentBtn.classList.add("active");
//     }

//     console.log("결제수단 선택:", box.textContent.trim());
// });

function initType3Payment(modal) {

    const closeBtn = modal.querySelector(".close_btn");
    const dim = modal.querySelector(".payment_dim");

    const productCards = modal.querySelectorAll(".produc_choice_card");
    const explainCards = modal.querySelectorAll(".js_proudct_choice_explainCard");

    const paymentOption = modal.querySelector(".product_choice_option");
    const choiceBoxes = modal.querySelectorAll(".js_product_choice_box");

    const requiredPolicy = modal.querySelector(".js_product_check[required]");
    const productBtn = modal.querySelector(".js_product_btn");


    let selectedProduct = null;
    let selectedPrice = null;
    let selectedPayment = null;


    // =============================
    // 모달 열기
    // =============================

    function openModal() {
        modal.classList.add("active");
        document.body.classList.add("modal_open");
    }


    // =============================
    // 모달 닫기
    // =============================

    function closeModal() {
        modal.classList.remove("active");
        document.body.classList.remove("modal_open");
    }


    // =============================
    // 외부 CTA
    // =============================

    document.addEventListener("click", (e) => {

        const openBtn = e.target.closest(".openPayment");
        if (!openBtn) return;

        e.preventDefault();

        openModal();
    });


    closeBtn?.addEventListener("click", closeModal);
    dim?.addEventListener("click", closeModal);


    // =============================
    // 상품 선택
    // =============================

    productCards.forEach(card => {

        card.addEventListener("click", () => {

            productCards.forEach(item => {
                item.classList.remove("active");
            });

            card.classList.add("active");


            selectedProduct = card.dataset.target;

            const priceText =
                card.querySelector(".produc_choice_card_R h2")
                    ?.textContent.trim() || "0원";

            selectedPrice = Number(
                priceText.replace(/[^\d]/g, "")
            );


            // 상품별 상세
            explainCards.forEach(box => {
                box.classList.toggle(
                    "active",
                    box.dataset.share === selectedProduct
                );
            });


            // 결제수단 영역 표시
            paymentOption?.classList.add("active");


            // 상품 바꾸면 결제수단 초기화
            selectedPayment = null;

            choiceBoxes.forEach(box => {
                box.classList.remove("active");
            });


            // 버튼 대기상태
            if (productBtn) {
                productBtn.classList.remove("active");
                productBtn.classList.add("ready");
                productBtn.textContent = "결제수단을 선택해주세요";
            }


            console.log("상품 선택:", {
                product: selectedProduct,
                price: selectedPrice
            });
        });

    });


    // =============================
    // 결제수단 선택
    // =============================

    choiceBoxes.forEach(box => {

        box.addEventListener("click", () => {

            if (!selectedProduct) {
                alert("상품을 먼저 선택해주세요.");
                return;
            }


            choiceBoxes.forEach(item => {
                item.classList.remove("active");
            });

            box.classList.add("active");


            selectedPayment = box.textContent.trim();


            if (productBtn) {

                productBtn.classList.remove("ready");
                productBtn.classList.add("active");

                productBtn.textContent =
                    `${selectedPrice.toLocaleString()}원 결제하기`;
            }


            console.log("결제수단 선택:", selectedPayment);
        });

    });


    // =============================
    // 결제
    // =============================

    productBtn?.addEventListener("click", () => {

        if (!selectedProduct) {
            alert("상품을 선택해주세요.");
            return;
        }

        if (!selectedPayment) {
            alert("결제수단을 선택해주세요.");
            return;
        }

        if (!requiredPolicy?.checked) {
            alert("이용 약관에 동의해주세요.");
            return;
        }


        const productTypeMap = {
    "1": "traditional",
    "2": "future",
    "3": "package"
};

const productType = productTypeMap[selectedProduct];

if (!productType) return;


// 구매 상태 저장
saveSajuPurchase(productType);


// ============================================================
// 정통사주
// ============================================================
if (productType === "traditional") {

    // result.html의 정통사주 영역 즉시 해제
    if (typeof applySajuPurchaseState === "function") {
        applySajuPurchaseState(true, productType);
    } else if (typeof unlockPremium === "function") {
        unlockPremium();
    }

    closeModal();

    alert("결제완료되었습니다.");

    // 이동하지 않음
    return;
}


// ============================================================
// 미래사주
// ============================================================
if (productType === "future") {

    // ★ 정통사주 해제하지 않음
    closeModal();

    // 미래사주 결과로 바로 이동
    window.location.href = "./result_prem.html";

    return;
}


// ============================================================
// 패키지
// ============================================================
if (productType === "package") {

    // 패키지에는 정통사주가 포함되어 있으므로 result.html 해제
    if (typeof applySajuPurchaseState === "function") {
        applySajuPurchaseState(true, productType);
    } else if (typeof unlockPremium === "function") {
        unlockPremium();
    }

    closeModal();

    // 알림 없음
    // 이동도 없음
    return;
}

        console.log("TYPE3 결제 실행", {
            product: selectedProduct,
            price: selectedPrice,
            method: selectedPayment
        });


        /*
            product 1 = 정통사주
            product 2 = 미래사주
            product 3 = 패키지

            실제 결제 API는 여기 붙이면 됨.
        */
    });

}


// ============================================================
// 사주 구매 상태
// ============================================================

const SAJU_PURCHASE_KEY = 'sajulog_purchase';

function getSajuPurchase() {

    const defaultState = {
        traditional: false,
        future: false,
        package: false
    };

    try {
        const saved = localStorage.getItem(SAJU_PURCHASE_KEY);

        if (!saved) {
            return defaultState;
        }

        return {
            ...defaultState,
            ...JSON.parse(saved)
        };

    } catch (e) {

        console.error('구매정보 불러오기 실패:', e);

        return defaultState;
    }
}


function saveSajuPurchase(productType) {

    const state = getSajuPurchase();


    // 정통사주
    if (productType === 'traditional') {
        state.traditional = true;
    }


    // 미래사주
    if (productType === 'future') {
        state.future = true;
    }


    // 패키지
    if (productType === 'package') {
        state.package = true;

        // 패키지는 둘 다 포함
        state.traditional = true;
        state.future = true;
    }


    localStorage.setItem(
        SAJU_PURCHASE_KEY,
        JSON.stringify(state)
    );


    console.log('구매상태 저장:', state);

    return state;
}



// 260824



// 특정 결제 버튼 클릭 시 해당 상품만 노출
(function () {
    function filterPaymentProduct(targetProduct) {
        const modal = document.querySelector('#paymentModal');
        if (!modal) return;

        const productCards = modal.querySelectorAll('.produc_choice_card');

        productCards.forEach(card => {
            const isTarget = !targetProduct ||
                card.dataset.target === targetProduct;

            card.style.display = isTarget ? '' : 'none';
            card.setAttribute('aria-hidden', String(!isTarget));

            if (!isTarget) {
                card.classList.remove('active');
            }
        });

        const targetCard = modal.querySelector(
            `.produc_choice_card[data-target="${targetProduct}"]`
        );

        // 기존 initType3Payment의 상품 선택 로직 실행
        if (targetCard) {
            targetCard.click();
        }
    }

    document.addEventListener('click', function (event) {
        const paymentButton = event.target.closest('.openPayment');
        if (!paymentButton) return;

        const targetProduct =
            paymentButton.dataset.productTarget || null;

        // common.js의 모달 오픈보다 먼저 상품 필터 적용
        filterPaymentProduct(targetProduct);
    }, true);
})();

