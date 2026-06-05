// ============================================================
// 사주 기본정보
// ============================================================
const sajuResult = {
    title: "갑술 (푸른 개)",
    user_name: "홍길동",
    birth_info: "1994년 05월 31일 | 양력 | 13:35 | 남성",
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

// ============================================================
// 프리미엄 해설 데이터 (이모지 HTML 엔티티 사용)
// ============================================================
const sajuPremExplains = [
    {
        icon: "&#x1F31F;",
        title: "인생 터닝포인트 TOP5",
        content: "당신의 사주에는 인생 전체를 뒤흔드는 거대한 변곡점이 다섯 차례 존재합니다.\n\n첫 번째 터닝포인트는 20대 중반으로, 진로와 직업의 방향이 완전히 재편되는 시기입니다. 이 시기에 내린 선택은 이후 10년의 토대가 되므로 신중하되 과감하게 결정해야 합니다.\n\n두 번째는 30대 초입으로, 재물운과 인간관계가 교차하는 지점입니다. 이때 맺어지는 인연과 계약은 장기적인 영향을 미치므로 문서와 약속을 꼼꼼히 확인해야 합니다.\n\n세 번째는 30대 후반에서 40대 초반 사이로, 사회적 위치와 책임이 급격히 커지는 시기입니다. 리더십이 요구되며 이 시기를 잘 넘기면 이후의 운이 크게 열립니다.\n\n네 번째는 40대 중반으로, 건강과 가정에 균열이 생길 수 있는 위험 구간입니다. 무리한 확장보다는 내실을 다지는 데 집중하는 것이 좋습니다.\n\n다섯 번째는 50대 초반으로, 지금까지 쌓아온 것들이 완성되거나 혹은 정리되는 시기입니다. 준비된 자에게는 최고의 전성기가, 준비되지 않은 자에게는 회의감이 찾아오는 갈림길입니다."
    },
    {
        icon: "&#x1F5FA;",
        title: "향후 10년 인생 로드맵",
        content: "앞으로 10년은 크게 세 국면으로 나뉩니다.\n\n[1국면 — 준비와 축적기 (1~3년차)]\n겉으로 드러나는 변화보다 내부적인 역량 강화에 집중해야 하는 시기입니다. 재물이 서서히 쌓이기 시작하며, 주변 인간관계에서 진짜 아군과 적군이 구분됩니다. 이 시기에 충동적인 투자나 사업 확장은 금물입니다.\n\n[2국면 — 도약과 확장기 (4~7년차)]\n사주의 운기가 가장 강하게 발현되는 황금기입니다. 새로운 기회가 연달아 찾아오며, 과감한 결정이 큰 성과로 돌아오는 구간입니다. 단, 지나친 자신감으로 인한 방심은 금물이며 주변 귀인의 조언을 경청해야 합니다.\n\n[3국면 — 안정과 정리기 (8~10년차)]\n확장된 것들을 다지고 정리하는 시기입니다. 새로운 시작보다는 현재의 것을 완성하는 데 에너지를 쏟는 것이 유리하며, 다음 10년을 위한 토대를 조용히 다져나가야 합니다."
    },
    {
        icon: "&#x1F4B0;",
        title: "평생 재산 흐름 분석",
        content: "당신의 사주는 식신생재(食神生財)의 구조를 가지고 있어 재능과 노력으로 꾸준히 부를 쌓아가는 형국입니다. 한 방에 큰돈을 버는 횡재수보다는, 물이 조금씩 차오르듯 자산이 불어나는 스타일입니다.\n\n20대는 종잣돈을 모으는 시기로 저축과 소규모 투자를 병행하면 좋습니다. 이 시기의 씀씀이 습관이 평생 재산 흐름의 기초가 됩니다.\n\n30대는 재물운이 본격적으로 열리는 구간입니다. 부동산이나 사업 기반을 마련하기에 유리한 시기이며, 타인의 돈을 다루는 업종에서 특히 두각을 나타낼 수 있습니다.\n\n40대는 재물이 정점에 달하는 시기이지만 동시에 지출 규모도 커지는 시기입니다. 수입과 지출의 균형을 유지하면서 노후를 위한 자산 배분을 시작해야 합니다.\n\n50대 이후는 모아온 자산을 지키고 운용하는 국면으로 접어들며, 무리한 새 사업보다는 안정적인 수익 구조를 유지하는 전략이 맞습니다."
    },
    {
        icon: "&#x1F4C8;",
        title: "가장 큰돈이 들어오는 시기 TOP3",
        content: "당신의 사주에서 재물이 가장 강하게 몰려오는 시기를 세 구간으로 압축했습니다.\n\n[1위 — 30대 후반]\n편재운(偏財運)이 강하게 발동하는 시기로, 예상치 못한 수익 기회가 찾아옵니다. 부업이나 투자, 새로운 거래처를 통한 수익이 불어날 가능성이 높습니다. 단, 이 시기에 들어온 돈은 쉽게 나가는 편이기도 하므로 고정 자산화하는 것이 중요합니다.\n\n[2위 — 40대 초중반]\n정재운(正財運)이 안정적으로 흐르는 시기입니다. 기존에 쌓아둔 기반 위에서 급여, 임대수익, 사업 정착 등 안정적인 형태의 수익이 극대화됩니다. 이 구간의 재물은 장기적으로 유지될 가능성이 높습니다.\n\n[3위 — 50대 초반]\n관인상생(官印相生)의 흐름이 재물과 맞물리는 시기로, 사회적 신뢰와 명성이 수익으로 연결됩니다. 컨설팅, 자문, 강의 등 경험과 지식을 파는 형태의 수익이 크게 들어올 수 있습니다."
    },
    {
        icon: "&#x26A0;",
        title: "돈을 가장 많이 잃을 수 있는 시기",
        content: "재물 손실 위험이 높은 시기를 미리 파악해 두는 것이 최선의 대비입니다.\n\n[주요 위험 구간 1 — 20대 후반]\n충동적인 소비와 잘못된 투자 결정이 잦아질 수 있는 시기입니다. 특히 지인 보증, 공동 창업, SNS를 통한 투자 권유 등에 각별히 주의해야 합니다. 이 시기의 금전 손실은 회복에 5~7년이 걸릴 수 있습니다.\n\n[주요 위험 구간 2 — 40대 중반]\n사주에서 겁재(劫財)가 강하게 작용하는 시기로, 타인에 의한 재물 손실이 발생하기 쉽습니다. 계약서 검토 없는 구두 약속, 지나치게 좋은 투자 제안, 가족·친척 관련 금전 문제에 특히 주의가 필요합니다.\n\n[공통 주의사항]\n두 구간 모두 충동적인 결정을 피하고, 큰 금전 거래 전에는 반드시 제삼자의 검토를 거치는 것을 권장합니다."
    },
    {
        icon: "&#x1F48F;",
        title: "결혼 적기 및 배우자운 분석",
        content: "당신의 사주에서 결혼 에너지는 30대 초반에 가장 강하게 발동합니다.\n\n[결혼 적기]\n가장 이상적인 결혼 시기는 29~33세 구간입니다. 이 시기에 맺어지는 인연은 정재(正財)와 관성(官星)이 조화를 이루어 정서적 안정과 물질적 뒷받침이 동시에 갖춰지는 형국입니다. 35세 이후에도 늦지 않으나, 이 경우 배우자의 사주와 궁합이 더욱 중요하게 작용합니다.\n\n[배우자의 특징]\n당신과 잘 맞는 배우자는 차분하고 현실적인 성향을 가진 사람입니다. 화(火) 기운이 강한 당신을 중화시켜줄 수 있는 수(水) 또는 토(土) 기운의 배우자와 궁합이 좋으며, 감정보다 이성을 앞세우는 스타일이 장기적으로 안정적인 관계를 유지합니다.\n\n[주의사항]\n금(金) 기운이 강한 배우자와는 초반에는 매력을 느끼지만 장기적으로 갈등이 생길 수 있으므로, 결혼 전 충분한 시간을 두고 관계를 검증하는 것이 좋습니다."
    },
    {
        icon: "&#x1F3E0;",
        title: "결혼 후 재물운 &middot; 가정운 변화",
        content: "당신의 사주는 결혼 이후 재물운과 가정운이 모두 상승하는 구조입니다. 단, 배우자의 사주에 따라 그 폭이 크게 달라질 수 있습니다.\n\n[재물운 변화]\n결혼 후 3년 이내에 재물의 흐름이 눈에 띄게 안정됩니다. 배우자의 경제 활동 여부와 무관하게, 결혼이라는 계약 자체가 재물을 붙잡아두는 닻 역할을 합니다. 다만 결혼 초기 2년간은 합가·이사·혼수 등으로 지출이 집중되므로 비상금을 미리 확보해 두는 것이 중요합니다.\n\n[가정운 변화]\n가정운은 결혼 직후부터 서서히 안정되며, 첫 자녀 출산 시점을 기준으로 가장 큰 도약을 맞습니다. 자녀로 인해 책임감이 강화되면서 사회적 성취운도 함께 상승하는 경향이 있습니다.\n\n[주의할 시기]\n결혼 5~7년차에 권태기와 금전 문제가 겹칠 수 있는 구간이 있습니다. 이 시기에는 부부간 소통을 의식적으로 늘리고 공동의 목표를 재설정하는 것이 관계 유지에 도움이 됩니다."
    },
    {
        icon: "&#x1F91D;",
        title: "귀인운 분석",
        content: "당신의 사주에는 귀인(貴人)이 두 번 크게 찾아오는 구조가 있습니다.\n\n[첫 번째 귀인 — 20대 후반~30대 초반]\n직장이나 교육 환경에서 만나게 되는 연상의 귀인입니다. 이 사람은 당신의 재능을 먼저 알아보고 기회를 열어주는 역할을 합니다. 겸손한 태도로 관계를 유지하는 것이 핵심이며, 단기적인 이익보다 장기적인 신뢰를 쌓는 방향으로 접근해야 합니다.\n\n[두 번째 귀인 — 40대 초반]\n사업이나 프로젝트를 통해 만나는 동갑 또는 연하의 귀인입니다. 처음에는 평범한 인연처럼 보이지만, 시간이 지날수록 결정적인 조력자가 됩니다. 이 귀인은 서쪽 혹은 북쪽 방향에서 오는 경향이 있습니다.\n\n[귀인을 알아보는 법]\n귀인은 대개 처음 만날 때 특별한 인상을 주지 않습니다. 꾸준히 연락을 유지하고 먼저 베푸는 사람이 결국 귀인으로 돌아오는 경우가 많습니다."
    },
    {
        icon: "&#x1F6A8;",
        title: "반드시 조심해야 할 시기 TOP5",
        content: "아래 다섯 구간은 건강, 재물, 인간관계 등 여러 면에서 리스크가 집중되는 시기입니다. 미리 알고 대비하는 것만으로도 피해를 절반 이하로 줄일 수 있습니다.\n\n[1위 — 40대 중반]\n겁재와 칠살이 동시에 작용하는 시기로 가장 강도가 높습니다. 금전 손실, 건강 이상, 인간관계 단절이 동시에 발생할 수 있으며 과로와 스트레스 관리가 최우선입니다.\n\n[2위 — 20대 후반]\n사회 초년기의 불안정성과 맞물려 판단력이 흐려지기 쉬운 시기입니다. 중요한 계약과 금전 결정은 반드시 신뢰할 수 있는 어른에게 검토를 받아야 합니다.\n\n[3위 — 30대 중반]\n과로로 인한 건강 문제가 시작될 수 있는 시기입니다. 이 구간에 무리하게 몸을 쓰면 40대에 그 부작용이 집중됩니다. 정기 검진과 수면 관리를 반드시 챙겨야 합니다.\n\n[4위 — 50대 초반]\n은퇴 혹은 전환기에 접어드는 시기로 정체성의 혼란이 찾아올 수 있습니다. 새로운 시작보다는 현재를 정리하고 다음을 설계하는 데 집중해야 합니다.\n\n[5위 — 60대 초반]\n건강 관련 이슈가 본격화될 수 있는 구간입니다. 특히 심혈관과 소화기 계통에 주의가 필요하며, 무리한 활동을 줄이고 정서적 안정을 우선시해야 합니다."
    },
    {
        icon: "&#x2728;",
        title: "가장 운이 강한 나이와 그 이유",
        content: "당신의 사주에서 운기가 가장 강하게 응집되는 시기는 39세~44세 구간입니다.\n\n[이유 1 — 대운의 흐름]\n이 시기는 대운(大運)에서 식신과 재성이 함께 움직이는 구간으로, 재능이 곧바로 수익으로 연결되는 최적의 환경이 형성됩니다. 노력한 것이 배로 돌아오는 시기이며, 평소의 절반 노력으로 두 배의 성과를 낼 수 있습니다.\n\n[이유 2 — 세운과의 합]\n이 구간의 세운(歲運)이 당신의 일간(日干)과 특히 잘 맞아, 매년 새로운 기회와 인연이 자연스럽게 유입됩니다. 억지로 무언가를 쫓지 않아도 좋은 흐름이 만들어지는 시기입니다.\n\n[이유 3 — 사회적 위치]\n사주의 관성(官星)이 이 시기에 가장 안정적으로 자리를 잡아, 사회적 신뢰와 인지도가 최고점에 달합니다. 이름값이 올라가면서 이전에는 닿지 않았던 기회의 문이 열립니다.\n\n[이 시기를 최대한 활용하려면]\n이 황금기를 그냥 흘려보내지 않으려면 30대 중반부터 준비를 시작해야 합니다. 전문성을 쌓고, 인맥을 관리하고, 건강을 지켜두는 것이 이 시기의 운을 100% 활용하는 열쇠입니다."
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
// 프리미엄 해설 렌더링 (전체 오픈, 잠금 없음)
// \n → <br><br> 로 변환하여 단락 구분
// ============================================================
function renderPremExplains() {
    const container = document.querySelector('.js_result_prem_explainList');
    if (!container) return;

    container.innerHTML = '';

    sajuPremExplains.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'result_explainCard';

        // \n을 <br><br>로 변환해서 단락 구분 표시
        const formattedContent = item.content.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');

        card.innerHTML = `
            <div class="result_explainCard_titleBox" onclick="toggleExplain(${index}, this)">
                <p class="result_explainCard_title">
                    <span class="prem_explain_icon">${item.icon}</span>${item.title}
                </p>
                <div class="result_explain_toggleBtn">
                    <div></div>
                    <div class="result_explain_toggleBtn2"></div>
                </div>
            </div>
            <div class="result_explainCard_txt">
                <p>${formattedContent}</p>
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

document.addEventListener('DOMContentLoaded', renderPremExplains);