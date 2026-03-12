
// 사주 기본정보
const sajuResult = {
    user1: {
        userName:"user1",
        userPart:"친구",
        userAni:"갑술(푸른개)",
        userProf:"1994년 05월 31일 | 양력 | 13:35 | 남성"
    },
    user2: {
        userName:"user2",
        userPart:"친구",
        userAni:"갑술(푸른개)",
        userProf:"1994년 05월 31일 | 양력 | 13:35 | 여성"
    }
};

const sajuExplains = [
    {
        title: "속궁합과 겉궁합",
        content: "두 사람은 겉으로 보이는 성격과 행동 방식이 잘 맞아 처음 만남부터 편안함을 느끼는 궁합입니다. 겉궁합은 매우 좋은 편으로, 대화가 자연스럽고 서로의 존재가 안정감을 줍니다. 다만 속궁합의 경우 내면의 욕구와 감정 표현 방식이 다소 달라 깊은 관계로 발전할수록 세심한 배려가 필요합니다."
    },
    {
        title: "상생과 상극",
        content: "두 사람의 오행을 살펴보면 목(木)과 화(火)의 상생 관계가 형성되어 있어 한 사람의 에너지가 다른 사람을 자연스럽게 북돋아 주는 구조입니다. 다만 일부 지지에서 상극 기운이 존재하므로 감정이 격해지는 순간에는 서로를 자극하지 않도록 주의가 필요합니다."
    },
    {
        title: "인연의 깊이",
        content: "두 사람의 인연은 단순한 만남이 아닌 전생부터 이어져 온 깊은 흔적이 사주에 남아 있습니다. 처음 만났음에도 오래 알고 지낸 듯한 익숙함을 느끼는 것도 이 때문입니다. 이 인연을 소중히 가꾸어 나간다면 오랜 시간이 지나도 변치 않는 깊은 유대로 발전할 수 있습니다."
    },
    {
        title: "두 사람 사이의 위기 시점",
        content: "사주의 흐름상 두 사람 사이에 갈등이 커질 수 있는 시기가 존재합니다. 특히 금(金) 기운이 강해지는 가을철과 경신년(庚辛年) 주기에 오해와 마찰이 생기기 쉽습니다. 이 시기에는 큰 결정을 서두르지 말고, 작은 일에 감정을 소모하지 않는 것이 중요합니다. 위기를 미리 알고 대비하는 것만으로도 관계의 고비를 훨씬 수월하게 넘길 수 있습니다."
    },
    {
        title: "결혼 궁합 — 부부로 살면 어떨까?",
        content: "두 사람이 부부로 맺어진다면 초반 3~5년은 서로의 다름을 맞춰가는 적응기가 필요합니다. 일간의 음양 배합이 비교적 조화롭고 배우자 자리(일지)에서 합(合)의 기운이 감지되어 정서적 안정감을 주는 결혼 궁합입니다. 재물 운용 방식과 생활 습관의 차이를 초반에 조율해 두면 함께할수록 더욱 단단해지는 부부가 될 수 있습니다."
    },
    {
        title: "함께 일하면? 비즈니스 궁합",
        content: "두 사람의 사주에서 관성과 식상의 흐름이 서로 보완적으로 작용하여 비즈니스 파트너로서 좋은 시너지를 낼 수 있는 조합입니다. 한 명은 아이디어와 추진력을, 다른 한 명은 안정적인 실행력을 담당하는 구조로 역할 분담이 자연스럽게 이루어집니다. 다만 금전 관계가 얽히면 감정 문제로 번질 수 있으니 계약과 정산은 명확히 하는 것이 좋습니다."
    },
    {
        title: "자녀 인연 — 아이와의 궁합",
        content: "두 사람이 맺어졌을 때 자녀 인연이 어떻게 나타나는지 사주로 살펴볼 수 있습니다. 두 사람의 사주 구조상 자녀 자리(시주)의 기운이 활발하여 아이와의 인연이 깊고, 자녀로 인해 두 사람의 관계가 더욱 단단해지는 흐름이 보입니다. 첫째 아이와의 인연이 특히 강하며, 아이를 통해 두 사람이 서로를 더 깊이 이해하게 되는 계기가 만들어집니다."
    },
    {
        title: "전생 인연 — 우리는 왜 만났을까?",
        content: "사주명리학에서는 현생의 깊은 인연 뒤에 전생의 업(業)이 작용한다고 봅니다. 두 사람의 사주에는 공통된 지지(地支) 암합의 흔적이 있어, 단순한 우연이 아닌 필연적 끌림으로 만나게 된 인연임을 암시합니다. 전생에서 미처 매듭짓지 못한 인연이 이번 생에 다시 이어진 것으로, 서로에게 배워야 할 것과 나누어야 할 것이 분명히 존재합니다."
    },
    {
        title: "조언 및 해결책",
        content: "두 사람이 오랫동안 좋은 관계를 유지하기 위해서는 서로의 페이스를 존중하는 것이 가장 중요합니다. 갈등이 생겼을 때는 감정이 가라앉은 후 대화하는 것을 권장하며, 목(木) 기운이 강한 봄철과 동쪽 방향이 두 사람 모두에게 길한 기운을 불어넣어 주는 시기와 방향입니다."
    }
];

/**
 * 메인 렌더링 함수
 */
function renderSaju() {

    // 유저 이름
    document.querySelector('.js_result_userName1').textContent = sajuResult.user1.userName;
    document.querySelector('.js_result_userName2').textContent = sajuResult.user2.userName;

    // 유저 프로필 카드 (2개)
    const users = [sajuResult.user1, sajuResult.user2];
    const cards = document.querySelectorAll('.js_result_usersProf_card');

    users.forEach((user, i) => {
        const card = cards[i];
        if (!card) return;

        card.querySelector('.js_result_userProf_names').textContent = `${user.userName} | ${user.userPart}`;
        card.querySelector('.js_result_userProf_anim').textContent  = user.userAni;
        card.querySelector('.js_result_userProf_etc').textContent   = user.userProf;
    });

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
        
        if (index < 3) {
            card.className = 'result_explainCard_match';
            card.innerHTML = `
                <div class="result_explainCard_match_titleBox" onclick="toggleExplain(${index}, this)">
                    <p class="result_explainCard_match_title">${item.title}</p>
                    <div class="result_explain_toggleBtn">
                        <div></div>
                        <div class="result_explain_toggleBtn2"></div>
                    </div>
                </div>
                <div class="result_explainCard_match_txt">
                    <p>${item.content}</p>
                </div>
            `;
        } 
        
        else {
            card.className = 'result_explainCard_match';
            card.innerHTML = `
                <div class="result_explainCard_match_titleBox" onclick="toggleExplain(${index}, this)">
                    <p class="result_explainCard_match_title">${item.title}</p>
                    <div class="result_explain_toggleBtn">
                        <div></div>
                        <div class="result_explain_toggleBtn2"></div>
                    </div>
                </div>
                <div class="result_explainCard_match_txt">
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
    const card = element.closest('.result_explainCard_match');
    const cardTxt = card.querySelector('.result_explainCard_match_txt');
    const cardTitleBox = card.querySelector('.result_explainCard_match_titleBox');
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
    const allCards = document.querySelectorAll('.result_explainCard_match');
    
    allCards.forEach((card, index) => {
        // 4번째 리스트(index 3)부터 체크
        if (index >= 3) {
            const cardTxt = card.querySelector('.result_explainCard_match_txt');
            const cardTitleBox = card.querySelector('.result_explainCard_match_titleBox');
            
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

// 헬퍼 함수: 리스트 해설 토글 (renderExplains에서 사용되는 함수)
function toggleExplain(index, element) {
    const card = element.closest('.result_explainCard_match');
    if (card) {
        card.classList.toggle('on');
    }
}

// 모든 렌더링이 끝난 후 실행
document.addEventListener('DOMContentLoaded', () => {
    renderSaju();      // 만세력 데이터 렌더링
    renderExplains();  // 하단 해설 리스트 렌더링
});
