// ============================================================
// 사주 기본정보
// ============================================================
const sajuResult = {
    title: "갑술 (푸른 개)",
    user_name: "홍길동",
    birth_info: "1994년 05월 31일 | 양력 | 13:35 | 남성",
    summary: "당신의 사주는 화(火) 기운이 중심을 이루는 강렬한 구조입니다.\n추진력과 열정이 뛰어나 한 번 목표를 잡으면 끝까지 밀어붙이는 성향이 강합니다.\n재물운은 꾸준히 흐르는 물줄기처럼 안정적으로 쌓이는 형국이며,\n인간관계는 넓고 화려하지만 깊은 신뢰를 쌓는 데 시간이 필요합니다.\n중년 이후로 갈수록 운의 흐름이 크게 상승하는 대기만성형 사주입니다.\n현재의 준비가 곧 미래의 도약이 됩니다.",
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
            bottom: { kanji: "巳", name: "사", sibseong: "겁재" }
        },
        {
            type: "연주",
            top: { kanji: "申", name: "신", sibseong: "정인" },
            bottom: { kanji: "戌", name: "술", sibseong: "상관" }
        }
    ],
    extra_info: {
        jijanggan: [["정","을","기"], ["무","병","정"], ["무","병","정"], ["신","정","무"]],
        unseong:   [["관대"], ["제왕"], ["제왕"], ["양"]],
        shinsal:   [["반안살"], ["망신살"], ["망신살"], ["화개살"]],
        etc:       [["홍염살","퇴신"], [""], ["금신"], [""]]
    }
};

const sajuExplains = [
    {
        title: "타고난 성격",
        content: "식신생재의 흐름이 좋아 자신의 재능과 기술로 부를 창출하는 구조입니다. 큰돈이 한 번에 들어오는 횡재수보다는 꾸준히 자산이 불어나는 형국이니 장기적인 저축과 투자가 유리합니다."
    },
    {
        title: "연애운",
        content: "당신은 엄청난 잠재력을 가진 슈퍼카와 같지만, 때때로 엔진 제어가 되지 않아 멈춰 서기도 합니다. 화(火) 기운이 강해 추진력은 최고지만 냉철한 판단력이 보완될 때 비로소 목표를 향해 완주할 수 있습니다."
    },
    {
        title: "재물운",
        content: "주변에 사람은 많으나 정작 속마음을 터놓을 곳이 부족할 수 있습니다. 자존심이 강해 남에게 약한 소리를 못 하는 성격 때문일 수 있으니, 때로는 주변의 도움을 기꺼이 받아들이는 유연함이 필요합니다."
    },
    {
        title: "사업운",
        content: "연애에 있어서는 매우 정열적이고 솔직한 스타일입니다. 다만 금방 달아오르고 금방 식을 수 있는 성향이 있으니, 서로의 가치관을 존중하며 천천히 신뢰를 쌓아가는 만남을 유지하는 것이 좋습니다."
    },
    {
        title: "건강운",
        content: "초년의 고생이 밑거름이 되어 중장년으로 갈수록 운세가 크게 상승합니다. 현재의 정체기는 더 높은 곳으로 도약하기 위한 준비 기간이니 조급함을 버리고 전문성을 쌓는 데 집중하세요."
    },
    {
        title: "결혼운",
        content: "현재 거주지에서 서쪽이나 북쪽 방향으로 이동할 때 좋은 기운이 들어옵니다. 이사나 이직을 계획 중이라면 물이 가까운 지역이나 조용한 주택가보다는 활기찬 도심 지역이 본인의 에너지와 잘 맞습니다."
    },
    {
        title: "이성에게 비치는 매력",
        content: "사주에 화(火) 기운이 강하므로 심혈관 질환이나 열로 인한 염증 수치에 주의해야 합니다. 충분한 수분 섭취와 함께 밤늦게까지 깨어있는 습관을 고치고 규칙적인 수면을 취하는 것이 개운의 핵심입니다."
    },
    {
        title: "직업의 적성",
        content: "부족한 목(木) 기운을 보완하기 위해 일상에서 푸른색 아이템을 활용하거나 집안에 관엽식물을 배치하는 것을 추천합니다. 아침 시간에 숲길을 산책하는 습관은 흐트러진 운의 균형을 잡아주는 최고의 비방입니다."
    }
];


// ============================================================
// 오행 색상
// ============================================================
function getSajuColorClass(kanji) {
    const wood  = ['甲', '乙', '寅', '卯'];
    const fire  = ['丙', '丁', '巳', '午'];
    const earth = ['戊', '己', '辰', '戌', '丑', '未'];
    const metal = ['庚', '辛', '申', '酉'];
    const water = ['壬', '癸', '亥', '子'];

    if (wood.includes(kanji))  return 'saju_green';
    if (fire.includes(kanji))  return 'saju_red';
    if (earth.includes(kanji)) return 'saju_yellow';
    if (metal.includes(kanji)) return 'saju_white';
    if (water.includes(kanji)) return 'saju_blue';
    return 'saju-default';
}

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

function fillCard(cardEl, data) {
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
    cardEl.classList.remove('border_saju_green', 'border_saju_red',
                             'border_saju_yellow', 'border_saju_white', 'border_saju_blue');
    cardEl.classList.add(borderClass);
}


// ============================================================
// 메인 렌더링
// ============================================================
function renderSaju() {
    document.querySelector('.js_result_userAnimal').textContent = sajuResult.title;
    document.querySelector('.js_result_userName').textContent   = sajuResult.user_name;
    document.querySelector('.js_result_userProf').textContent   = sajuResult.birth_info;

    const summaryEl = document.querySelector('.js_result_summaryTxt');
    if (summaryEl) {
        summaryEl.innerHTML = sajuResult.summary.replace(/\n/g, '<br>');
    }

    const typeToSelector = {
        "시주": { top: '.result_saju_time1',  bottom: '.result_saju_time2'  },
        "일주": { top: '.result_saju_day1',   bottom: '.result_saju_day2'   },
        "월주": { top: '.result_saju_month1', bottom: '.result_saju_month2' },
        "연주": { top: '.result_saju_year1',  bottom: '.result_saju_year2'  },
    };

    sajuResult.palja.forEach(pillar => {
        const sel = typeToSelector[pillar.type];
        if (!sel) return;
        fillCard(document.querySelector(sel.top),    pillar.top);
        fillCard(document.querySelector(sel.bottom), pillar.bottom);
    });

    const extra = sajuResult.extra_info;
    const pillarOrder = ['time', 'day', 'month', 'year'];
    const toArray = (val) => Array.isArray(val) ? val : (val ? [val] : []);

    ['jijanggan', 'unseong', 'shinsal', 'etc'].forEach(type => {
        pillarOrder.forEach((key, i) => {
            const el = document.querySelector(`.result_saju_${key}_${type}`);
            if (el) el.innerHTML = toArray(extra[type][i]).map(w => `<p>${w}</p>`).join('');
        });
    });
}

document.addEventListener('DOMContentLoaded', renderSaju);


// ============================================================
// 해설 렌더링
// ============================================================
function renderExplains() {
    const container = document.querySelector('.js_result_explainList');
    if (!container) return;

    container.innerHTML = '';

    sajuExplains.forEach((item, index) => {
        const card = document.createElement('div');
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
        container.appendChild(card);
    });
}

// ============================================================
// 아코디언 토글
// ============================================================
function toggleExplain(index, element) {
    const parent = element.parentElement;
    document.querySelectorAll('.result_explainCard').forEach(card => {
        if (card !== parent) card.classList.remove('on');
    });
    parent.classList.toggle('on');
}

// ============================================================
// 잠금 해제
// 카카오 친추 확인 로직은 여기에 추가
// 현재는 버튼 클릭 시 바로 오픈 (퍼블리싱 임시 처리)
// ============================================================
function unlockAll() {
    const unlockBox   = document.querySelector('.js_kakaoUnlockBox');
    const explainList = document.querySelector('.js_result_explainList');
    const claimBox    = document.querySelector('.result_explain_claimB');
    const premSection = document.querySelector('.main_section3');


    if (unlockBox)   unlockBox.style.display  = 'none';
    if (explainList) explainList.style.display = 'block';
    if (claimBox)    claimBox.style.display    = 'block';
    if (premSection) premSection.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    renderExplains();

    const kakaoBtn = document.querySelector('.js_kakaoUnlock_btn');
    if (kakaoBtn) {
        kakaoBtn.addEventListener('click', function (e) {
            // 카카오 친추 확인 후 unlockAll() 호출하도록 교체
            // 현재는 클릭 즉시 오픈
            e.preventDefault(); // href="" 빈 링크 이동 방지
            unlockAll();
        });
    }
});