
// 사주 기본정보
const sajuResult = {
    title: "갑술 (푸른 개)",
    user_name: "홍길동",
    birth_info: "1994년 05월 31일 | 양력 | 13:35 | 남성",
    palja: [
        {
            type: "대운",
            top:    { kanji: "丁", name: "정", sibseong: "비견", ex: "유연함 속에 감춰진 강인한 생명력으로 당신만의 꽃을 피워낼 시기" },
            bottom: { kanji: "未", name: "미", sibseong: "식신", ex: "군더더기를 덜어내고 본질에 집중할 때, 비로소 보석 같은 결실을 얻는 시기" }
        },
        {
            type: "연운",
            top:    { kanji: "丁", name: "정", sibseong: "비견", ex: "세상을 훤하게 비추는 태양처럼, 당신의 재능이 숨김없이 드러나 주목받는 시기" },
            bottom: { kanji: "巳", name: "사", sibseong: "겁재", ex: "뜨거운 열정과 거침없는 추진력이 만나 당신의 운명을 가장 높은곳으로 이끄는 시기" }
        }
    ],
    extra_info: {
        jijanggan: [["정","을","기"], ["무","병","정"]],
        unseong:   [["관대"], ["제왕"]],
        shinsal:   [["반안살"], ["망신살"]],
        etc:       [["홍염살","퇴신"], [""]]
    },
 
    // 월운 데이터 (1~12월)
    monthly: [
        {
            month: "1월",
            top:    { kanji: "己", name: "기", sibseong: "편관" },
            bottom: { kanji: "丑", name: "축", sibseong: "편관" },
            extra: {
                jijanggan: ["계","신","기"],
                unseong:   ["관대"],
                shinsal:   ["화개살"],
                etc:       ["사유축합 → 금"]
            }
        },
        {
            month: "2월",
            top:    { kanji: "庚", name: "경", sibseong: "정관" },
            bottom: { kanji: "寅", name: "인", sibseong: "인수" },
            extra: {
                jijanggan: ["무","병","갑"],
                unseong:   ["목욕"],
                shinsal:   ["겁살"],
                etc:       ["솔경합 → 금"]
            }
        },
        {
            month: "3월",
            top:    { kanji: "辛", name: "신", sibseong: "편관" },
            bottom: { kanji: "卯", name: "묘", sibseong: "식신" },
            extra: {
                jijanggan: ["갑","을"],
                unseong:   ["장생"],
                shinsal:   ["재살"],
                etc:       ["-"]
            }
        },
        {
            month: "4월",
            top:    { kanji: "壬", name: "임", sibseong: "위" },
            bottom: { kanji: "辰", name: "진", sibseong: "정관" },
            extra: {
                jijanggan: ["을","계","무"],
                unseong:   ["망"],
                shinsal:   ["천살"],
                etc:       ["-"]
            }
        },
        {
            month: "5월",
            top:    { kanji: "癸", name: "계", sibseong: "비견" },
            bottom: { kanji: "巳", name: "사", sibseong: "정재" },
            extra: {
                jijanggan: ["무","경","병"],
                unseong:   ["태"],
                shinsal:   ["지살"],
                etc:       ["-"]
            }
        },
        {
            month: "6월",
            top:    { kanji: "甲", name: "갑", sibseong: "상관" },
            bottom: { kanji: "午", name: "오", sibseong: "편재" },
            extra: {
                jijanggan: ["기","정"],
                unseong:   ["절"],
                shinsal:   ["년살"],
                etc:       ["사오미방합 → 화"]
            }
        },
        {
            month: "7월",
            top:    { kanji: "乙", name: "을", sibseong: "상관" },
            bottom: { kanji: "未", name: "미", sibseong: "편관" },
            extra: {
                jijanggan: ["정","을","기"],
                unseong:   ["쇠"],
                shinsal:   ["월살"],
                etc:       ["사오미방합 → 화"]
            }
        },
        {
            month: "8월",
            top:    { kanji: "丙", name: "병", sibseong: "정재" },
            bottom: { kanji: "申", name: "신", sibseong: "정관" },
            extra: {
                jijanggan: ["무","임","경"],
                unseong:   ["병"],
                shinsal:   ["망신살"],
                etc:       ["-"]
            }
        },
        {
            month: "9월",
            top:    { kanji: "丁", name: "정", sibseong: "비견" },
            bottom: { kanji: "酉", name: "유", sibseong: "편인" },
            extra: {
                jijanggan: ["경","신"],
                unseong:   ["사"],
                shinsal:   ["장성살"],
                etc:       ["-"]
            }
        },
        {
            month: "10월",
            top:    { kanji: "戊", name: "무", sibseong: "식신" },
            bottom: { kanji: "戌", name: "술", sibseong: "상관" },
            extra: {
                jijanggan: ["신","정","무"],
                unseong:   ["묘"],
                shinsal:   ["반안살"],
                etc:       ["-"]
            }
        },
        {
            month: "11월",
            top:    { kanji: "己", name: "기", sibseong: "편관" },
            bottom: { kanji: "亥", name: "해", sibseong: "겁재" },
            extra: {
                jijanggan: ["무","갑","임"],
                unseong:   ["절"],
                shinsal:   ["역마살"],
                etc:       ["-"]
            }
        },
        {
            month: "12월",
            top:    { kanji: "庚", name: "경", sibseong: "정관" },
            bottom: { kanji: "子", name: "자", sibseong: "편재" },
            extra: {
                jijanggan: ["임","계"],
                unseong:   ["태"],
                shinsal:   ["육해살"],
                etc:       ["-"]
            }
        }
    ],
    sajuExplains:{
        sajuExText:"귀인이 동쪽에서 나타나니, 사람들과의 만남을 주저하지 말고 적극적으로 나서세요",
        sajuExNumber:82,
    }
};

const sajuExplains = [
    {
        title: "상세해설",
        content: "당신은 엄청난 잠재력을 가진 슈퍼카와 같지만, 때때로 엔진 제어가 되지 않아 멈춰 서기도 합니다. 화(火) 기운이 강해 추진력은 최고지만 냉철한 판단력이 보완될 때 비로소 목표를 향해 완주할 수 있습니다."
    },
    {
        title: "재물운",
        content: "식신생재의 흐름이 좋아 자신의 재능과 기술로 부를 창출하는 구조입니다. 큰돈이 한 번에 들어오는 횡재수보다는 꾸준히 자산이 불어나는 형국이니 장기적인 저축과 투자가 유리합니다."
    },
    {
        title: "애정운",
        content: "주변에 사람은 많으나 정작 속마음을 터놓을 곳이 부족할 수 있습니다. 자존심이 강해 남에게 약한 소리를 못 하는 성격 때문일 수 있으니, 때로는 주변의 도움을 기꺼이 받아들이는 유연함이 필요합니다."
    },
    {
        title: "건강운",
        content: "초년의 고생이 밑거름이 되어 중장년으로 갈수록 운세가 크게 상승합니다. 현재의 정체기는 더 높은 곳으로 도약하기 위한 준비 기간이니 조급함을 버리고 전문성을 쌓는 데 집중하세요."
    },
    {
        title: "사회운",
        content: "사주에 화(火) 기운이 강하므로 심혈관 질환이나 열로 인한 염증 수치에 주의해야 합니다. 충분한 수분 섭취와 함께 밤늦게까지 깨어있는 습관을 고치고 규칙적인 수면을 취하는 것이 개운의 핵심입니다."
    },
    {
        title: "학업운",
        content: "연애에 있어서는 매우 정열적이고 솔직한 스타일입니다. 다만 금방 달아오르고 금방 식을 수 있는 성향이 있으니, 서로의 가치관을 존중하며 천천히 신뢰를 쌓아가는 만남을 유지하는 것이 좋습니다."
    },
    {
        title: "이것을 주의하세요!",
        content: "현재 거주지에서 서쪽이나 북쪽 방향으로 이동할 때 좋은 기운이 들어옵니다. 이사나 이직을 계획 중이라면 물이 가까운 지역이나 조용한 주택가보다는 활기찬 도심 지역이 본인의 에너지와 잘 맞습니다."
    },
    {
        title: "월별운세",sub:"월별운세는 양력을 기준으로 합니다.",
        content: "부족한 목(木) 기운을 보완하기 위해 일상에서 푸른색 아이템을 활용하거나 집안에 관엽식물을 배치하는 것을 추천합니다. 아침 시간에 숲길을 산책하는 습관은 흐트러진 운의 균형을 잡아주는 최고의 비방입니다."
    }
];

/**
 * 한자를 입력받아 오행 색상 클래스를 반환하는 함수
 */
function getSajuColorClass(kanji) {
    // 1. 오행별 한자 그룹 정의
    const wood = ['甲', '乙', '寅', '卯']; // 초록
    const fire = ['丙', '丁', '巳', '午']; // 빨강
    const earth = ['戊', '己', '辰', '戌', '丑', '未']; // 노랑
    const metal = ['庚', '辛', '申', '酉']; // 흰색+회색
    const water = ['壬', '癸', '亥', '子']; // 파랑

    // 2. 조건문을 통해 클래스명 반환
    if (wood.includes(kanji)) return 'saju_green';
    if (fire.includes(kanji)) return 'saju_red';
    if (earth.includes(kanji)) return 'saju_yellow';
    if (metal.includes(kanji)) return 'saju_white';
    if (water.includes(kanji)) return 'saju_blue';
    
    return 'saju-default';
}



/**
 * 오행 색상 클래스에 대응하는 테두리 클래스를 반환
 */
function getBorderColorClass(colorClass) {
    const map = {
        'saju_green':  'border_saju_green',
        'saju_red':    'border_saju_red',
        'saju_yellow': 'border_saju_yellow',
        'saju_white':  'border_saju_white',
        'saju_blue':   'border_saju_blue',
    };
    return map[colorClass] || '';
}

/**
 * 카드(div) 하나를 색상 적용해서 채우는 함수
 * @param {Element} cardEl  - 카드 div 요소
 * @param {object}  data    - { kanji, name, sibseong }
 */
function fillCard(cardEl, data) {
    if (!cardEl || !data) return;

    const kanjiEl    = cardEl.querySelector('.result_saju_kanji');
    const nameEl     = cardEl.querySelector('.result_saju_kanji_name');
    const sibseongEl = cardEl.querySelector('.result_saju_kanji_sibseong');
    const exEl = cardEl.querySelector('.result_saju_kanji_ex');

    if (!kanjiEl) return;

    const colorClass  = getSajuColorClass(data.kanji);
    const borderClass = getBorderColorClass(colorClass);

    // 텍스트 채우기
    kanjiEl.textContent    = data.kanji;
    nameEl.textContent     = data.name;
    sibseongEl.textContent = data.sibseong;
    exEl.textContent = data.ex;

    // 텍스트 색상 적용 (한자, 이름, 십성 모두)
    [kanjiEl, nameEl, sibseongEl].forEach(el => {
        el.classList.add(colorClass);
    });

    // 카드 테두리 색상 적용
    // 기본 white 테두리를 제거하고 오행 테두리로 교체
    cardEl.style.border = '';          // 인라인 스타일 초기화
    cardEl.classList.remove('border_saju_green', 'border_saju_red',
                             'border_saju_yellow', 'border_saju_white', 'border_saju_blue');
    cardEl.classList.add(borderClass);
}

/**
 * 메인 렌더링 함수
 */
function renderSaju() {
    // ── 섹션1: 기본 정보 ──────────────────────────────────────
    const userNameEl = document.querySelectorAll('.js_result_userName');
    userNameEl.forEach(item => {
        if (item) item.textContent = sajuResult.user_name;
    });
    

    // ── 섹션2: 대운 및 연운 카드 ──────────────────────────────────────
    // 임시로 palja 데이터 중 첫 번째를 대운, 두 번째를 연운으로 가정하여 예시 작성
    // (실제 데이터 구조에 따라 pillarOrder나 mapping 로직은 조정 가능)
    
    const luckData = sajuResult.palja[0]; // 대운 데이터 예시
    const yearData = sajuResult.palja[1]; // 연운 데이터 예시

    // 대운 렌더링
    fillCard(document.querySelector('.result_saju_luck1'), luckData.top);
    fillCard(document.querySelector('.result_saju_luck2'), luckData.bottom);

    // 연운 렌더링
    fillCard(document.querySelector('.result_saju_daily_year1'), yearData.top);
    fillCard(document.querySelector('.result_saju_daily_year2'), yearData.bottom);

    // ── 섹션3: 부가 정보 (지장간, 운성 등) ──────────────────────────
    const extra = sajuResult.extra_info;
    const targets = ['luck', 'year']; // 대운(luck), 연운(year)

    const toArray = (val) => Array.isArray(val) ? val : (val ? [val] : []);

    targets.forEach((key, i) => {
        // 지장간 (.result_saju_daily_luck_jijanggan / .result_saju_daily_year_jijanggan)
        const jijangganEl = document.querySelector(`.result_saju_daily_${key}_jijanggan`);
        if (jijangganEl) {
            jijangganEl.innerHTML = toArray(extra.jijanggan[i]).map(word => `<p>${word}</p>`).join('');
        }

        // 12운성 (.result_saju_daily_luck_unseong / .result_saju_daily_year_unseong)
        const unseongEl = document.querySelector(`.result_saju_daily_${key}_unseong`);
        if (unseongEl) {
            unseongEl.innerHTML = toArray(extra.unseong[i]).map(word => `<p>${word}</p>`).join('');
        }

        // 신살 (.result_saju_daily_luck_shinsal / .result_saju_daily_year_shinsal)
        const shinsalEl = document.querySelector(`.result_saju_daily_${key}_shinsal`);
        if (shinsalEl) {
            shinsalEl.innerHTML = toArray(extra.shinsal[i]).map(word => `<p>${word}</p>`).join('');
        }

        // 기타 (.result_saju_daily_luck_etc / .result_saju_daily_year_etc)
        const etcEl = document.querySelector(`.result_saju_daily_${key}_etc`);
        if (etcEl) {
            etcEl.innerHTML = toArray(extra.etc[i]).map(word => `<p>${word}</p>`).join('');
        }
    });
}

/**
 * 월운 카드 색상 적용 함수 (대운/연운과 구조가 다름 - ex 없음)
 */
function fillMonthCard(cardEl, data) {
    if (!cardEl || !data) return;
 
    const kanjiEl    = cardEl.querySelector('.result_saju_kanji');
    const nameEl     = cardEl.querySelector('.result_saju_kanji_name');
    const sibseongEl = cardEl.querySelector('.result_saju_kanji_sibseong');
 
    if (!kanjiEl) return;
 
    const colorClass  = getSajuColorClass(data.kanji);
    const borderClass = getBorderColorClass(colorClass);
 
    kanjiEl.textContent    = data.kanji;
    nameEl.textContent     = data.name;
    sibseongEl.textContent = data.sibseong;
 
    [kanjiEl, nameEl, sibseongEl].forEach(el => el.classList.add(colorClass));
 
    cardEl.style.border = '';
    cardEl.classList.remove('border_saju_green','border_saju_red',
                             'border_saju_yellow','border_saju_white','border_saju_blue');
    cardEl.classList.add(borderClass);
}
 

/**
 * 월운 렌더링 함수
 */
function renderMonthly() {
    const toArray = (val) => Array.isArray(val) ? val : (val ? [val] : []);
 
    sajuResult.monthly.forEach((data, i) => {
        const n = i + 1; // 1~12
 
        // 천간 카드
        fillMonthCard(document.querySelector(`.result_saju_month${n}_1`), data.top);
        // 지지 카드
        fillMonthCard(document.querySelector(`.result_saju_month${n}_2`), data.bottom);
 
        // 부가정보
        const fields = ['jijanggan', 'unseong', 'shinsal', 'etc'];
        fields.forEach(field => {
            const el = document.querySelector(`.result_saju_month${n}_${field}`);
            if (el) el.innerHTML = toArray(data.extra[field]).map(word => `<p>${word}</p>`).join('');
        });
    });
}

// 게이지 렌더링
function renderGageBar(){
    const result_txt=document.querySelector('.js_daily_sajuExplains_txt');
    const result_Number=document.querySelector('.js_result_daily_sec3_luckNumber');
    const result_gage=document.querySelector('.js_result_daily_sec3_gage');
    let gageData=sajuResult.sajuExplains;
    if(result_Number) result_Number.textContent = gageData.sajuExNumber;
    result_txt.textContent    = gageData.sajuExText;
    if(result_gage) result_gage.style.width = gageData.sajuExNumber + '%';
}


/**
 * 리스트 렌더링 함수 (1-3번 공개, 4번~ 잠금)
 */
function renderExplains() {
    const container = document.querySelector('.result_explainList');
    if (!container) return;

    container.innerHTML = ''; 

    const lastIndex = sajuExplains.length - 1; // 마지막 인덱스 계산

    sajuExplains.forEach((item, index) => {
        const card = document.createElement('div');
        
        // 1. 마지막 리스트일 때 (디자인이나 클래스를 다르게 부여)
        if (index === lastIndex) {
            card.className = 'result_explainCard';
            card.innerHTML = `
                <div class="result_explainCard_titleBox" onclick="toggleExplain(${index}, this)">
                    <p class="result_explainCard_title">
                        <div class="result_explainCard_title_monthLuck">
                            <h1>${item.title}</h1>
                            <p>${item.sub}</p>
                        </div>
                    </p>
                    <div class="result_explain_toggleBtn">
                        <div></div>
                        <div class="result_explain_toggleBtn2"></div>
                    </div>
                </div>
                <div class="result_explainCard_txt">
                    <div class="result_lockBox">
                        <img src="https://land.withusmk.co.kr/assets/saju/resources/img/result/result_lockBox.webp" alt="">
                        <div class="result_obBox">
                            <img src="https://land.withusmk.co.kr/assets/saju/resources/img/result/result_lock.webp" alt="">
                            <div class="result_lockBtnBox">
                                <div style="margin-bottom: 3%;" class="js_result_allTxt" onclick="unlockAll()">
                                    <p>2,900원 결제 후 전부보기</p>
                                    <span>2,900원 결제하면 모든 항목이 오픈됩니다.</span>
                                </div>
                                <div class="js_result_oneShare" onclick="unlockOne(${index}, this)">
                                    <p>친구에게 공유하고 하나만 보기</p>
                                    <span>2명의 친구에게 사주로그 공유하면 하나의 항목이 오픈됩니다.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } 
        // 2. 1~3번 리스트 (기존과 동일)
        else if (index < 3) {
            card.className = 'result_explainCard';
            card.innerHTML = `
                <div class="result_explainCard_titleBox" onclick="toggleExplain(${index}, this)">
                    <p class="result_explainCard_title">${item.title}</p>
                    <div class="result_explain_toggleBtn">
                        <div></div>
                        <div class="result_explain_toggleBtn2"></div>
                    </div>
                </div>
                <div class="result_explainCard_txt">
                    <p>${item.content}</p>
                </div>
            `;
        } 
        // 3. 4번 ~ 마지막 직전 리스트 (잠금 상태)
        else {
            card.className = 'result_explainCard';
            card.innerHTML = `
                <div class="result_explainCard_titleBox" onclick="toggleExplain(${index}, this)">
                    <p class="result_explainCard_title">${item.title}</p>
                    <div class="result_explain_toggleBtn">
                        <div></div>
                        <div class="result_explain_toggleBtn2"></div>
                    </div>
                </div>
                <div class="result_explainCard_txt">
                    <div class="result_lockBox">
                        <img src="https://land.withusmk.co.kr/assets/saju/resources/img/result/result_lockBox.webp" alt="">
                        <div class="result_obBox">
                            <img src="https://land.withusmk.co.kr/assets/saju/resources/img/result/result_lock.webp" alt="">
                            <div class="result_lockBtnBox">
                                <div style="margin-bottom: 3%;" class="js_result_allTxt" onclick="unlockAll()">
                                    <p>2,900원 결제 후 전부보기</p>
                                    <span>2,900원 결제하면 모든 항목이 오픈됩니다.</span>
                                </div>
                                <div class="js_result_oneShare" onclick="unlockOne(${index}, this)">
                                    <p>친구에게 공유하고 하나만 보기</p>
                                    <span>2명의 친구에게 사주로그 공유하면 하나의 항목이 오픈됩니다.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        container.appendChild(card);
    });
}

/**
 * [공유] 클릭한 해당 리스트 하나만 개별 공개
 */
function unlockOne(index, element) {
    // 1. 필요한 요소 찾기
    const card = element.closest('.result_explainCard');
    const cardTxt = card.querySelector('.result_explainCard_txt');
    const cardTitleBox = card.querySelector('.result_explainCard_titleBox');
    const content = sajuExplains[index].content;

    // 2. 잠금 박스 삭제 및 내용 삽입
    cardTxt.innerHTML = ''; 
    const pTag = document.createElement('p');
    pTag.textContent = content;
    cardTxt.appendChild(pTag);

    // 3. 타이틀 박스에 클릭 이벤트(토글) 부여 (이제 잠금이 풀렸으니 자유롭게 여닫기 가능)
    cardTitleBox.setAttribute('onclick', `toggleExplain(${index}, this)`);
    
    // 4. 리스트 상태 유지
    // 이미 'on' 클래스가 붙어 열려있는 상태이므로, toggleExplain을 호출하지 않고
    // 열린 상태를 강제로 유지합니다.
    card.classList.add('on'); 
}

/**
 * [결제] 가려진 모든 리스트 한꺼번에 공개
 */
function unlockAll() {
    const allCards = document.querySelectorAll('.result_explainCard');
    
    allCards.forEach((card, index) => {
        // 4번째 리스트(index 3)부터 체크
        if (index >= 3) {
            const cardTxt = card.querySelector('.result_explainCard_txt');
            const cardTitleBox = card.querySelector('.result_explainCard_titleBox');
            
            // 아직 잠겨있는 카드인 경우에만 실행
            if (cardTxt.querySelector('.result_lockBox')) {
                const content = sajuExplains[index].content;
                
                cardTxt.innerHTML = '';
                const pTag = document.createElement('p');
                pTag.textContent = content;
                cardTxt.appendChild(pTag);
                
                cardTitleBox.setAttribute('onclick', `toggleExplain(${index}, this)`);
            }
        }
    });
    alert("모든 항목이 공개되었습니다.");
}

// 월운(상반기/하반기) 토글 기능
function initMonthlyToggle() {
    const toggleCards = document.querySelectorAll('.result_daily_toggleCard');

    toggleCards.forEach(card => {
        const titleBox = card.querySelector('.result_explainCard_titleBox');
        
        if (titleBox) {
            titleBox.addEventListener('click', () => {
                // 1. 다른 카드를 모두 닫고 싶다면 아래 3줄 사용 (선택사항)
                toggleCards.forEach(otherCard => {
                    if (otherCard !== card) otherCard.classList.remove('on');
                });

                // 2. 현재 클릭한 카드 토글
                card.classList.toggle('on');
            });
        }
    });
}

// 헬퍼 함수: 리스트 해설 토글 (renderExplains에서 사용되는 함수)
function toggleExplain(index, element) {
    const card = element.closest('.result_explainCard');
    if (card) {
        card.classList.toggle('on');
    }
}

// 모든 렌더링이 끝난 후 실행
document.addEventListener('DOMContentLoaded', () => {
    renderSaju();      // 만세력 데이터 렌더링
    renderExplains();  // 하단 해설 리스트 렌더링
    renderMonthly(); 
    initMonthlyToggle(); // 월운 토글 이벤트 등록
    renderGageBar(); //게이지바 렌더링
});
