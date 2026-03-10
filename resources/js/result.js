
// 사주 기본정보
const sajuResult = {
    title: "갑술 (푸른 개)",
    user_name: "홍길동",
    birth_info: "1994년 05월 31일 | 양력 | 13:35 | 남성",
    // 8글자 핵심 데이터 (시주, 일주, 월주, 연주 순)
    palja: [
        {
            type: "시주",
            top: { kanji: "丁", name: "정", sibseong: "비견" },
            bottom: { kanji: "未", name: "미", sibseong: "식신" }
        },
        {
            type: "일주",
            top: { kanji: "丁", name: "정", sibseong: "비견" },
            bottom: { kanji: "巳", name: "사", sibseong: "겁재" }
        },
        {
            type: "월주",
            top: { kanji: "己", name: "기", sibseong: "식신" },
            bottom: { kanji: "巳", name: "사", sibseong: "겁재"}
        },
        {
            type: "연주",
            top: { kanji: "申", name: "신", sibseong: "정인" },
            bottom: { kanji: "戌", name: "술", sibseong: "상관" }
        }
    ],
    // 하단 부가 정보 (지장간, 12운성, 신살 등)
    extra_info: {
        jijanggan: [["정","을","기"], ["무","병","정"], ["무","병","정"], ["신","정","무"]],
        unseong: [["관대"], ["제왕"], ["제왕"], ["양"]],
        shinsal: [["반안살"], ["망신살"], ["망신살"], ["화개살"]],
        etc: [["홍염살","퇴신"], [""], ["금신"], [""]]
    }
};

const sajuExplains = [
    {
        title: "🏎️ 타고난 기질: 고장난 슈퍼카",
        content: "당신은 엄청난 잠재력을 가진 슈퍼카와 같지만, 때때로 엔진 제어가 되지 않아 멈춰 서기도 합니다. 화(火) 기운이 강해 추진력은 최고지만 냉철한 판단력이 보완될 때 비로소 목표를 향해 완주할 수 있습니다."
    },
    {
        title: "💰 재물운: 마르지 않는 샘물",
        content: "식신생재의 흐름이 좋아 자신의 재능과 기술로 부를 창출하는 구조입니다. 큰돈이 한 번에 들어오는 횡재수보다는 꾸준히 자산이 불어나는 형국이니 장기적인 저축과 투자가 유리합니다."
    },
    {
        title: "🤝 인간관계: 화려함 속의 고독",
        content: "주변에 사람은 많으나 정작 속마음을 터놓을 곳이 부족할 수 있습니다. 자존심이 강해 남에게 약한 소리를 못 하는 성격 때문일 수 있으니, 때로는 주변의 도움을 기꺼이 받아들이는 유연함이 필요합니다."
    },
    {
        title: "📈 사회적 성취: 늦게 피는 대기만성",
        content: "초년의 고생이 밑거름이 되어 중장년으로 갈수록 운세가 크게 상승합니다. 현재의 정체기는 더 높은 곳으로 도약하기 위한 준비 기간이니 조급함을 버리고 전문성을 쌓는 데 집중하세요."
    },
    {
        title: "🏥 건강주의: 열기를 식히는 휴식",
        content: "사주에 화(火) 기운이 강하므로 심혈관 질환이나 열로 인한 염증 수치에 주의해야 합니다. 충분한 수분 섭취와 함께 밤늦게까지 깨어있는 습관을 고치고 규칙적인 수면을 취하는 것이 개운의 핵심입니다."
    },
    {
        title: "💑 애정운: 뜨거운 불꽃과 같은 사랑",
        content: "연애에 있어서는 매우 정열적이고 솔직한 스타일입니다. 다만 금방 달아오르고 금방 식을 수 있는 성향이 있으니, 서로의 가치관을 존중하며 천천히 신뢰를 쌓아가는 만남을 유지하는 것이 좋습니다."
    },
    {
        title: "🏠 주거 및 이동: 서북쪽의 기운",
        content: "현재 거주지에서 서쪽이나 북쪽 방향으로 이동할 때 좋은 기운이 들어옵니다. 이사나 이직을 계획 중이라면 물이 가까운 지역이나 조용한 주택가보다는 활기찬 도심 지역이 본인의 에너지와 잘 맞습니다."
    },
    {
        title: "🍀 행운의 조언: 푸른색과 나무의 에너지",
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

    if (!kanjiEl) return;

    const colorClass  = getSajuColorClass(data.kanji);
    const borderClass = getBorderColorClass(colorClass);

    // 텍스트 채우기
    kanjiEl.textContent    = data.kanji;
    nameEl.textContent     = data.name;
    sibseongEl.textContent = data.sibseong;

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
    document.querySelector('.js_result_userAnimal').textContent = sajuResult.title;
    document.querySelector('.js_result_userName').textContent   = sajuResult.user_name;
    document.querySelector('.js_result_userProf').textContent   = sajuResult.birth_info;

    // ── 섹션2: 팔자 카드 ──────────────────────────────────────
    const typeToSelector = {
        "시주": { top: '.result_saju_time1',  bottom: '.result_saju_time2'  },
        "일주": { top: '.result_saju_day1',   bottom: '.result_saju_day2'   },
        "월주": { top: '.result_saju_month1', bottom: '.result_saju_month2' },
        "연주": { top: '.result_saju_year1',  bottom: '.result_saju_year2'  },
    };

    sajuResult.palja.forEach(pillar => {
        const sel = typeToSelector[pillar.type];
        if (!sel) return;

        const topEl    = document.querySelector(sel.top);
        const bottomEl = document.querySelector(sel.bottom);

        fillCard(topEl,    pillar.top);
        fillCard(bottomEl, pillar.bottom);
    });

    // ── 섹션2: 부가 정보 ──────────────────────────────────────
    const extra = sajuResult.extra_info;
    const pillarOrder = ['time', 'day', 'month', 'year'];

    const toArray = (val) => Array.isArray(val) ? val : (val ? [val] : []);

    // 지장간
    pillarOrder.forEach((key, i) => {
        const el = document.querySelector(`.result_saju_${key}_jijanggan`);
        if (el) el.innerHTML = toArray(extra.jijanggan[i]).map(word => `<p>${word}</p>`).join('');
    });

    // 12운성
    pillarOrder.forEach((key, i) => {
        const el = document.querySelector(`.result_saju_${key}_unseong`);
        if (el) el.innerHTML = toArray(extra.unseong[i]).map(word => `<p>${word}</p>`).join('');
    });

    // 신살
    pillarOrder.forEach((key, i) => {
        const el = document.querySelector(`.result_saju_${key}_shinsal`);
        if (el) el.innerHTML = toArray(extra.shinsal[i]).map(word => `<p>${word}</p>`).join('');
    });

    // 기타
    pillarOrder.forEach((key, i) => {
        const el = document.querySelector(`.result_saju_${key}_etc`);
        if (el) el.innerHTML = toArray(extra.etc[i]).map(word => `<p>${word}</p>`).join('');
    });
}

// DOM 준비 후 실행
document.addEventListener('DOMContentLoaded', renderSaju);


/**
 * 리스트 렌더링 함수 (1-3번 공개, 4번~ 잠금)
 */
function renderExplains() {
    const container = document.querySelector('.result_explainList');
    if (!container) return;

    container.innerHTML = ''; // 초기화

    sajuExplains.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'result_explainCard';
        
        // 1~3번 리스트 (index 0, 1, 2)
        if (index < 3) {
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
        // 4번 이후 리스트 (잠금 상태)
        else {
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

// 기존 토글 함수 (유지)
function toggleExplain(index, element) {
    const parent = element.parentElement;
    document.querySelectorAll('.result_explainCard').forEach(card => {
        if(card !== parent) card.classList.remove('on');
    });
    parent.classList.toggle('on');
}

// 호출
renderExplains();