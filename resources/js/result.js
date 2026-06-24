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
	const reviewSection = document.querySelector('.result_reviewBox');


    if (unlockBox)   unlockBox.style.display  = 'none';
    if (explainList) explainList.style.display = 'block';
    if (claimBox)    claimBox.style.display    = 'block';
    if (premSection) premSection.style.display = 'block';
    if (reviewSection) reviewSection.style.display = 'block';
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




const reviewData = [
    { name: "정O영", age: 31, gender: "여성", date: "오늘", img: "w_mou", stars: 5, text: "사주 여기저기서 봐왔는데 여긴 결이 좀 달라요. 뻔한 말 늘어놓는 게 아니라 제 상황을 진짜 들여다본 느낌이라 읽으면서 몇 번이나 끄덕였네요. 추천합니다." },
    { name: "김O연", age: 29, gender: "여성", date: "오늘", img: "w_rab", stars: 5, text: "후기 잘 안 쓰는데 뜨끔한 적이 한두 번이 아니라ㅋㅋ 남겨봄. 굿" },
    { name: "박O호", age: 36, gender: "남성", date: "오늘", img: "w_tig", stars: 4.5, text: "아내가 먼저 보고 권해서 같이 봤습니다. 큰 기대 안 했는데 성격 분석은 공감되는 게 많더군요. 돈 아깝단 생각은 안 들었습니다." },
    { name: "최O영", age: 33, gender: "여성", date: "1일 전", img: "w_pig", stars: 5, text: "썸남 궁합 보러 왔다가 제 연애 패턴만 잔뜩 알고 가네요ㅋㅋ 왜 늘 비슷한 사람한테 끌리는지 알 것 같아요." },
    { name: "이O진", age: 25, gender: "여성", date: "1일 전", img: "w_mou", stars: 5, text: "지금 제 고민이랑 조언 방향이 딱 맞아서 좀 소름;;" },
    { name: "한O우", age: 28, gender: "남성", date: "1일 전", img: "w_cow", stars: 4, text: "풀이 깔끔하고 직설적이라 좋음." },
    { name: "윤O서", age: 22, gender: "여성", date: "2일 전", img: "w_dra", stars: 5, text: "그냥 심심해서 본 건데 성격 분석에서 진짜 소름 돋았어요;; 저도 몰랐던 제 성향을 어떻게 이렇게 콕 집어내는지... 읽다가 혼자 헉 했네요ㅋㅋㅋ 너무 신기해서 친구들 단톡방에 바로 링크 뿌렸어요. 다들 지금 자기 거 보는 중!! 진짜 강추합니다 ㅎㅎ" },
    { name: "강O현", age: 34, gender: "남성", date: "2일 전", img: "w_sna", stars: 5, text: "올해 사업을 준비하면서 마음이 영 불안해 결제해봤습니다. 조심해야 할 시기와 밀어붙여도 될 방향을 명확하게 짚어주니 머릿속이 한결 정리되더군요. 막연한 불안이 구체적인 계획으로 바뀐 느낌입니다. 결정 앞두고 갈팡질팡할 때 한 번씩 다시 꺼내 읽게 될 것 같네요. 좋은 길잡이 얻고 갑니다." },
    { name: "신O아", age: 27, gender: "여성", date: "2일 전", img: "w_hor", stars: 4.5, text: "태어난 시간 보정해주는 게 진짜 신의 한 수예요. 다른 데선 일주가 다르게 나와서 늘 갸우뚱했는데, 보정된 풀이 읽어보니 이게 진짜 제 얘기가 맞더라고요ㅋㅋ" },
    { name: "임O민", age: 30, gender: "남성", date: "3일 전", img: "w_goa", stars: 5, text: "돈이 자꾸 새는 느낌이라 재물운 위주로 봤는데, 고쳐야 할 습관이 그대로 적혀 있어서 좀 뜨끔했네요. 대기만성형이라니 믿고 가봅니다." },
    { name: "오O지", age: 32, gender: "여성", date: "3일 전", img: "w_mon", stars: 5, text: "결혼을 앞두고 마음이 싱숭생숭해서 프리미엄까지 다 봤어요. 예비신랑 사주랑 같이 맞춰보니 신기하게 성향이 잘 맞물리더라고요. 어디서 부딪히고 어디서 서로 채워줄 수 있는지까지 짚어줘서 앞으로 좋은 가이드가 될 것 같아요. 사실 결혼 준비하면서 사소한 걸로 자주 다퉜는데, 풀이 읽고 나니 서로 성향이 달라서 그랬던 거구나 이해가 되더라고요. 마음이 이렇게 편해진 건 진짜 오랜만이에요. 예비부부들한테 꼭 추천하고 싶어요." },
    { name: "송O원", age: 26, gender: "남성", date: "3일 전", img: "w_che", stars: 4, text: "디자인 깔끔하고 가독성 좋네요 굿." },
    { name: "배O은", age: 24, gender: "여성", date: "4일 전", img: "w_dog", stars: 5, text: "인간관계 때문에 스트레스 진짜 많이 받았는데 제 인복 흐름이 사주에 다 나와 있어서 신기했어요. 모두한테 잘 보일 필요 없었다는 걸 이제야 알았네요ㅠㅠ 감사해요." },
    { name: "유O재", age: 35, gender: "남성", date: "4일 전", img: "w_pig", stars: 4.5, text: "상사랑 도저히 안 맞아서 이직 고민 중이었는데, 올해 이동수가 강하게 들어와 있다니 묘하게 용기가 나네요. 타이밍이 절묘해서 한번 움직여볼 생각입니다." },
    { name: "고O라", age: 29, gender: "여성", date: "4일 전", img: "w_mou", stars: 5, text: "카톡 친추만 해도 무료 해설 볼 수 있어서 가성비 최고예요ㅋㅋ 근데 요약 보고 감질맛 나서 결국 프리미엄까지 질러버림... 후회는 안 함." },
    { name: "전O준", age: 38, gender: "남성", date: "5일 전", img: "w_rab", stars: 4, text: "성격과 성향 풀이는 거의 95% 일치하는 것 같습니다. 미래 운세야 지나봐야 알겠지만, 현재 상황과 대조해보면 신뢰가 가는 내용이 많네요." },
    { name: "황O연", age: 31, gender: "여성", date: "5일 전", img: "w_tig", stars: 5, text: "한자 용어 안 남발해서 술술 읽혀요. 굿." },
    { name: "권O훈", age: 27, gender: "남성", date: "5일 전", img: "w_mou", stars: 5, text: "친구 추천으로 들어왔는데 솔직히 좀 놀랐습니다. 최근에 겪은 심경 변화나 건강상 조심할 부분이 그대로 적혀 있더라고요. 종종 들를 것 같아요." },
    { name: "손O민", age: 23, gender: "여성", date: "6일 전", img: "w_cow", stars: 4.5, text: "졸업하고 진로 때문에 머리 터질 것 같았는데, 어떤 직군이 맞는지 디테일하게 짚어줘서 방향 잡는 데 도움 많이 됐어요." },
    { name: "안O성", age: 42, gender: "남성", date: "6일 전", img: "w_dra", stars: 5, text: "나이가 들수록 운명의 흐름이라는 것에 자연히 공감하게 됩니다. 젊을 적엔 흘려들었던 이야기들이 이제는 마음 깊이 와닿더군요. 중년 이후의 흐름을 긍정적으로 짚어주셔서 큰 위로와 동기부여를 얻고 갑니다. 지나온 세월을 돌아보고 앞으로 남은 길을 어떻게 가꿔갈지 차분히 생각해보는 귀한 시간이었습니다. 좋은 풀이 정성껏 준비해주셔서 감사합니다." },
    { name: "심O희", age: 28, gender: "여성", date: "6일 전", img: "w_sna", stars: 5, text: "헤어진 시기랑 새 인연 들어오는 시기가 진짜 딱 맞음;; 개신기" },
    { name: "노O우", age: 33, gender: "남성", date: "1주일 전", img: "w_hor", stars: 4, text: "인생 터닝포인트 정리해준 파트가 제일 와닿네요. 다가올 기회 놓치지 않으려면 미리 준비해둬야겠다 싶습니다." },
    { name: "하O나", age: 30, gender: "여성", date: "1주일 전", img: "w_goa", stars: 5, text: "인터넷 사주라 큰 기대 안 했는데 텍스트 양이 어마어마하고 꼼꼼해서 깜짝 놀랐어요. 제 성격 장단점을 한 발 떨어져 객관적으로 보게 됐네요." },
    { name: "곽O섭", age: 37, gender: "남성", date: "1주일 전", img: "w_mon", stars: 4.5, text: "요즘 주식이 계속 안 풀려서 재물운 보러 왔습니다. 과한 투자는 금물인 사주라니, 당분간 욕심 접고 자산 지키기에 집중하는 게 맞겠네요. 마음 다잡고 갑니다." },
    { name: "성O주", age: 25, gender: "여성", date: "1주일 전", img: "w_che", stars: 5, text: "디자인 너무 예뻐요ㅠㅠ 풀이도 알차고 대만족!!" },
    { name: "류O열", age: 31, gender: "남성", date: "1주일 전", img: "w_dog", stars: 5, text: "사주에 화 기운이 부족한 건 알고 있었는데, 일상에서 어떻게 보완하는지 구체적으로 알려줘서 유익했습니다. 막연한 지식이 실생활 조언으로 이어지니 좋네요." },
    { name: "홍O수", age: 34, gender: "남성", date: "1주일 전", img: "w_pig", stars: 4, text: "사업운 풀이 굿. 흉운 시기 미리 안 것만으로도 리스크 관리됨." },
    { name: "문O영", age: 29, gender: "여성", date: "2주일 전", img: "w_mou", stars: 5, text: "남친이랑 궁합 보러 왔다가 제 사주에 더 꽂혀서 갑니다ㅋㅋㅋ 제가 주도권 쥐어야 잘 풀리는 사주라네요. 참고할게요 ㅎㅎ" },
    { name: "양O진", age: 26, gender: "남성", date: "2주일 전", img: "w_rab", stars: 4.5, text: "핵심만 딱딱 짚어줘서 깔끔함. 신살 설명도 쉬움." },
    { name: "조O아", age: 32, gender: "여성", date: "2주일 전", img: "w_tig", stars: 5, text: "요즘 인간관계가 영 권태기였는데, 올해 비견 겁재 기운이 강해서 그렇다는 풀이 보니까 오히려 마음이 놓이더라고요. 이유를 아니까 한결 편해졌어요." },
    { name: "백O현", age: 35, gender: "남성", date: "2주일 전", img: "w_mou", stars: 5, text: "프리미엄 리포트는 돈값 제대로 합니다. 향후 10년 로드맵이 나와 있어서 인생 계획을 다시 짜는 데 좋은 이정표가 되어주네요. 매년 막연하게 흘려보내던 시간을 좀 더 전략적으로 쓰게 될 것 같습니다. 캡처해두고 연초마다 한 번씩 다시 읽으려고요." },
    { name: "남O우", age: 27, gender: "남성", date: "2주일 전", img: "w_cow", stars: 4, text: "반신반의하며 결제했는데, 원국이 오행별로 색이 다르게 표시되니까 시각적으로 보기 편하고 이해도 잘 되더라고요." },
    { name: "소O민", age: 24, gender: "여성", date: "2주일 전", img: "w_dra", stars: 5, text: "완전 쪽집게ㅋㅋㅋ 개신기" },
    { name: "진O하", age: 31, gender: "여성", date: "3주일 전", img: "w_sna", stars: 4.5, text: "귀인운 분석 파트가 제일 인상 깊었어요. 제 주변에 누가 절 도와줄 사람인지 어렴풋이 짐작이 가더라고요. 인연을 소중히 여겨야겠다 싶었습니다." },
    { name: "엄O용", age: 39, gender: "남성", date: "3주일 전", img: "w_hor", stars: 5, text: "직장 생활에 고비가 올 때마다 사주를 들여다보는 편입니다. 이번 풀이는 지금 제 심정을 그대로 대변해주는 듯해 적잖은 위로를 받았네요. 막막하던 마음이 한결 가벼워졌습니다. 가끔 흔들릴 때 다시 꺼내 읽어볼 생각입니다." },
    { name: "원O희", age: 28, gender: "여성", date: "3주일 전", img: "w_goa", stars: 5, text: "연애 세포 다 죽은 줄 알았는데 올해 연애운 들어온다길래 기대 중이에요ㅋㅋ 풀이대로 좀 더 적극적으로 움직여봐야겠어요!" },
    { name: "채O준", age: 33, gender: "남성", date: "3주일 전", img: "w_mon", stars: 4, text: "건강 조언이 의외로 유용했습니다. 위장 쪽 조심하라 나왔는데 마침 요즘 역류성 식도염으로 고생 중이라 좀 놀랐네요. 관리 들어갑니다." },
    { name: "천O우", age: 26, gender: "남성", date: "3주일 전", img: "w_che", stars: 5, text: "바이럴인 줄 알고 거르려다가 심심해서 해봤는데 생각보다 고퀄이라 놀람;; 다른 데서 볼 때랑 다르게 시간 보정해 줘서 그런가 성격 풀이 팩폭 지리네요ㅋㅋ 돈 안 아까움" },
    { name: "구O나", age: 30, gender: "여성", date: "3주일 전", img: "w_dog", stars: 4.5, text: "고집 세다는 소리 평생 듣고 살았는데 그게 사주에 그대로 박혀 있어서 빵 터졌어요ㅋㅋㅋ 그 단점을 어떻게 장점으로 살릴지까지 알려줘서 좋더라고요." },
    { name: "라O원", age: 36, gender: "여성", date: "4주일 전", img: "w_pig", stars: 5, text: "이 가격에 이 정도 퀄리티면 훌륭합니다. 질문 몇 개 던지고 끝나버리는 대면 상담과 달리, 텍스트로 남아 두고두고 다시 읽을 수 있다는 게 가장 큰 장점이네요. 그때그때 상황에 따라 다르게 와닿는 부분이 있어서 한 번 결제로 오래 보게 될 것 같습니다." },
    { name: "지O하", age: 23, gender: "남성", date: "4주일 전", img: "w_mou", stars: 5, text: "재물 창고 있다니 일단 기분 좋네요ㅋㅋ" },
    { name: "동O현", age: 32, gender: "남성", date: "4주일 전", img: "w_rab", stars: 4, text: "직업 적성 분석이 날카롭습니다. 지금 마케팅 일을 하는데 결국 독립해서 제 사업할 사주라고 나오네요. 커리어 진지하게 고민해봐야겠습니다." },
    { name: "마O아", age: 27, gender: "여성", date: "4주일 전", img: "w_tig", stars: 5, text: "카톡 공유하고 무료로 봤는데 퀄리티 너무 좋아서 깜짝 놀랐어요. 이 정도면 돈 받고 팔아도 될 듯?? 대박나세요!!" },
    { name: "표O우", age: 34, gender: "남성", date: "1달 전", img: "w_mou", stars: 4.5, text: "배우자운 분석이 꽤 흥미로웠습니다. 아직 미혼인데, 어떤 성향의 사람을 만나야 삶이 평탄할지 기준 세우는 데 큰 참고가 됐네요." },
    { name: "기O윤", age: 29, gender: "여성", date: "1달 전", img: "w_cow", stars: 5, text: "초년에 고생을 좀 많이 했는데, 중년부터 대운이 바뀐다는 풀이를 보고 솔직히 눈물이 핑 돌았어요. 지금까지 버틴 게 헛되지 않았구나 싶어서요. 한동안 모든 게 안 풀려서 제 탓만 했는데, 그냥 시기의 문제였다는 걸 알고 나니 마음이 좀 놓이네요. 풀이대로 조금만 더 힘내보려고요ㅠㅠ" },
    { name: "우O진", age: 31, gender: "남성", date: "1달 전", img: "w_dra", stars: 5, text: "이동수와 문서운 겹치는 시기를 콕 집어줘서 부동산 계약 타이밍 잡는 데 결정적인 힌트를 얻었습니다. 막연하던 결정에 근거가 생긴 느낌이라 만족스럽네요." },
    { name: "변O서", age: 25, gender: "여성", date: "1달 전", img: "w_sna", stars: 4, text: "텍스트 정리가 잘 돼 있어서 술술 읽혀요. 제 성격을 제3자 시선으로 한 발 떨어져 돌아볼 수 있어서 유익했어요." },
    { name: "도O훈", age: 38, gender: "남성", date: "1달 전", img: "w_hor", stars: 5, text: "나이가 들며 삶의 무게가 버겁게 느껴질 때가 많은데, 사주의 흐름을 통해 제 인생의 계절을 이해하게 되니 마음이 한결 가볍고 유연해지더군요. 봄을 기다리며 겨울을 견디는 마음이랄까요. 좋은 시간이었습니다. 감사합니다." },
    { name: "연O지", age: 28, gender: "여성", date: "1달 전", img: "w_goa", stars: 4.5, text: "친구들이 다들 용하다고 난리길래 반신반의하며 봤는데 진짜 신기하긴 하네요ㅋㅋ 특히 제가 평소 늘 불안해하던 포인트를 정확히 짚어내서 살짝 소름 돋았어요." },
    { name: "위O한", age: 33, gender: "남성", date: "1달 전", img: "w_mon", stars: 5, text: "인생 전반전 정산서와 후반전 안내서를 동시에 받아 든 기분입니다. 정통 명리학 기준이라 그런지 군더더기 없이 명쾌한 해설이 인상적이네요." }
];

// ============================================================
// 리뷰 50개 동적 삽입 로직
// ============================================================
function renderReviews() {
    const reviewListContainer = document.querySelector('.review_list');
    if (!reviewListContainer) return;

    reviewListContainer.innerHTML = ''; // 초기화

    reviewData.forEach(item => {
        const frameBox = document.createElement('div');
        frameBox.className = 'review_frameBox';

        // 별점 이미지 매핑 (5점인 경우 5개, 4.5점인 경우 4개 + 0.5평점 이미지 1개)
        let starHtml = '';
        const fullStars = Math.floor(item.stars);
        const hasHalf = item.stars % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            starHtml += `<div><img src="./resources/img/result/review_star-2.webp" alt="★"></div>`;
        }
        if (hasHalf) {
            starHtml += `<div><img src="./resources/img/result/review_star0.5.webp" alt="½"></div>`;
        }

        // 전체 마크업 조립 (기존 디자인 가이드라인 100% 반영)
        frameBox.innerHTML = `
            <div class="review_box">
                <div class="review_userBox">
                    <div class="review_userImg"><img src="./resources/img/animal/${item.img}.webp" alt=""></div>
                    <div class="review_userTxt">
                        <h3>${item.name}</h3><span>${item.age}세 ${item.gender} · ${item.date}</span>
                    </div>
                    <div class="review_star">
                        ${starHtml}
                    </div>
                </div>
                <div class="review_userrev">
                    ${item.text}
                </div>
            </div>
            <div class="review_frame">
                <div class="frame_cell" style="border-top: 2px solid #b89f82; border-right: 2px solid #b89f82;"></div>
                <div class="frame_cell" style="border-left: 2px solid #b89f82;"></div>
                <div class="frame_cell"></div>
                <div class="frame_cell" style="border-top: 2px solid #b89f82; border-right: 2px solid #b89f82;"></div>
                <div class="frame_cell" style="border-left: 2px solid #b89f82;"></div>
                <div class="frame_cell"></div>
                <div class="frame_cell" style="border-right: 2px solid #b89f82;"></div>
                <div class="frame_cell" style="border-top: 2px solid #b89f82; border-left: 2px solid #b89f82;"></div>
            </div>
            <div class="review_frame2">
                <div class="frame_cell" style="border-top: 2px solid #b89f82; border-right: 2px solid #b89f82;"></div>
                <div class="frame_cell" style="border-left: 2px solid #b89f82;"></div>
                <div class="frame_cell"></div>
                <div class="frame_cell" style="border-top: 2px solid #b89f82; border-right: 2px solid #b89f82;"></div>
                <div class="frame_cell" style="border-left: 2px solid #b89f82;"></div>
                <div class="frame_cell"></div>
                <div class="frame_cell" style="border-right: 2px solid #b89f82;"></div>
                <div class="frame_cell" style="border-top: 2px solid #b89f82; border-left: 2px solid #b89f82;"></div>
            </div>
        `;
        reviewListContainer.appendChild(frameBox);
    });
}

// DOM 로드 시점 제어 수정 (기존에 정의된 init 함수 실행 직전에 renderReviews()가 먼저 실행되어야 함)


/* ===================== 세로 무한 슬라이더 =====================
           - 카드 높이가 전부 달라도 매 스텝마다 실제 높이를 측정해서 이동
           - DOM 을 한 번만 옮기는 방식이라 끊김이 없음
           - 기존 .review_list / .review_frameBox 스타일은 건드리지 않고
             transform / transition 만 인라인으로 잠깐 주입
        ============================================================= */
        (function () {
          const wrap = document.querySelector('.review_slideWrap');
          const list = document.querySelector('.review_list');
          if (!wrap || !list) return;
        
          const VISIBLE   = 5;      // 한 번에 보이는 개수
          const INTERVAL  = 2200;   // 자동 재생 간격 (ms)
          const DURATION  = 600;    // 슬라이드 전환 시간 (ms)
          const DIRECTION = 'down'; // 'down' 아래로 / 'up' 위로
        
          let moving = false;
          let timer  = null;
        
          // 박스 a의 top 부터 b의 top 까지 거리 = a가 차지하는 세로 공간(높이+간격)
          const stepOf = (a, b) =>
            b.getBoundingClientRect().top - a.getBoundingClientRect().top;
        
          // start 인덱스부터 VISIBLE 개가 차지하는 전체 높이 (간격 포함)
          function visibleHeight(start) {
            const boxes = list.children;
            if (boxes.length < start + VISIBLE) return wrap.offsetHeight;
            const top    = boxes[start].getBoundingClientRect().top;
            const bottom = boxes[start + VISIBLE - 1].getBoundingClientRect().bottom;
            return bottom - top;
          }
      
          function setWrapHeight(h, animate) {
            wrap.style.transition = animate ? `height ${DURATION}ms ease` : 'none';
            wrap.style.height = h + 'px';
          }
      
          // 아래로 이동: 맨 마지막 카드가 맨 위로 와서 위에서 내려옴
          function slideDown() {
            if (moving) return; moving = true;
            const boxes = list.children;
            const last  = boxes[boxes.length - 1];
        
            list.insertBefore(last, boxes[0]);          // 마지막 → 맨 앞으로
            const move = stepOf(boxes[0], boxes[1]);    // 새 맨 앞 카드가 차지하는 높이
        
            list.style.transition = 'none';             // 일단 위로 숨겨두고
            list.style.transform  = `translateY(-${move}px)`;
            void list.offsetHeight;                     // reflow 강제
        
            list.style.transition = `transform ${DURATION}ms ease`;
            list.style.transform  = 'translateY(0)';    // 아래로 미끄러져 내려옴
            setWrapHeight(visibleHeight(0), true);
        
            setTimeout(() => { moving = false; }, DURATION);
          }
      
          // 위로 이동: 맨 위 카드가 위로 사라지고 다음 카드가 올라옴
          function slideUp() {
            if (moving) return; moving = true;
            const boxes = list.children;
            const first = boxes[0];
            const move  = stepOf(boxes[0], boxes[1]);
        
            list.style.transition = `transform ${DURATION}ms ease`;
            list.style.transform  = `translateY(-${move}px)`;
            setWrapHeight(visibleHeight(1), true);
        
            setTimeout(() => {
              list.style.transition = 'none';
              list.appendChild(first);                  // 맨 위 → 맨 뒤로
              list.style.transform  = 'translateY(0)';
              setWrapHeight(visibleHeight(0), false);
              void list.offsetHeight;
              moving = false;
            }, DURATION);
          }
      
          const slide = () => (DIRECTION === 'up' ? slideUp() : slideDown());
      
          function play()  { stop(); timer = setInterval(slide, INTERVAL); }
          function stop()  { if (timer) clearInterval(timer); timer = null; }
      
          // 초기 높이 세팅 + 시작
          function init() {
    renderReviews(); // 슬라이더가 돌아가기 전에 50개의 리뷰 노드를 HTML에 먼저 생성
    setWrapHeight(visibleHeight(0), false);
    play();
}
          // 마우스 올리면 잠깐 멈춤(선택사항 - 필요 없으면 두 줄 지우세요)
          wrap.addEventListener('mouseenter', stop);
          wrap.addEventListener('mouseleave', play);
      
          // 이미지/폰트 로딩 후 높이가 정확하도록 load 시점에 시작
          if (document.readyState === 'complete') init();
          else window.addEventListener('load', init);
      
          // 반응형: 창 크기 바뀌면 높이 다시 측정
          let rt;
          window.addEventListener('resize', () => {
            clearTimeout(rt);
            rt = setTimeout(() => setWrapHeight(visibleHeight(0), false), 150);
          });
        })();