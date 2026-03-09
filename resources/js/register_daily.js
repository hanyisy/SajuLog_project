let sajuDataList = [];
let currentTarget = null;

async function loadSajuData() {
    try {
        const response = await fetch('https://land.withusmk.co.kr/assets/saju/resources/js/userData-%ED%99%95%EC%9D%B8%EC%9A%A9_%EC%9E%84%EC%8B%9C%ED%8C%8C%EC%9D%BC.json');
        if (!response.ok) throw new Error('파일 로드 실패');
        sajuDataList = await response.json();
        renderUserList();
    } catch (error) {
        console.error("데이터 로드 실패:", error);
    }
}

function renderUserList() {
    const container = document.getElementById('user-list-container');
    if (!container) return;
    container.innerHTML = '';

    sajuDataList.forEach((item, index) => {
        const user = item.user_profile;
        const cardHtml = `
            <div class="register_userCards" onclick="handleUserSelect(${index})" style="cursor:pointer; padding:10px; border-bottom:1px solid #ccc; color:#000;">
                <h3>${user.name} | ${user.zodiac}</h3>
                <p>${user.gender} | ${user.birth_type} | ${user.birth_date}</p>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// 단일 유저 선택 슬롯 클릭 이벤트
// HTML 구조: .daily_user1 > .daily_noneUser / .js_daily_user
const userSlot = document.querySelector('.js_daily_selectUserCard');
if (userSlot) {
    userSlot.addEventListener('click', () => {
        currentTarget = 'option1';
        const listBox = document.querySelector('.js_register_userListBox');
        if (listBox) listBox.classList.remove('off');
    });
}

function handleUserSelect(index) {
    const selectedUser = sajuDataList[index].user_profile;

    // option1 hidden input에 값 저장
    const inputTarget = document.querySelector('input[name="option1"]');
    if (inputTarget) {
        inputTarget.value = selectedUser.name + selectedUser.birth_date;
    }

    // .daily_noneUser 숨기고 .js_daily_user 보이기
    const noneUser = document.querySelector('.daily_noneUser');
    const userDisplay = document.querySelector('.js_daily_user');

    if (noneUser) noneUser.style.display = 'none';
    if (userDisplay) {
        userDisplay.classList.add('on');

        const nameEl = userDisplay.querySelector('.js_daily_user_Name');
        const imgEl = userDisplay.querySelector('.js_daily_user_icon img');
        const txtEl = userDisplay.querySelector('.js_daily_user_text');

        if (nameEl) nameEl.innerText = selectedUser.name;
        if (imgEl) {
            imgEl.src = selectedUser.zodiacImg;
            imgEl.alt = selectedUser.zodiac;
        }
        if (txtEl) txtEl.innerText = `${selectedUser.gender} | ${selectedUser.birth_type} | ${selectedUser.birth_date}`;
    }

    // 리스트 닫기
    const listBox = document.querySelector('.js_register_userListBox');
    if (listBox) listBox.classList.add('off');
}

loadSajuData();


// ── 연애 상태 라디오 + 직접 입력 처리 ──────────────────────────────────────
// HTML에서 연애 상태는 name="option2", 직접 입력도 name="option2"
const radios = document.querySelectorAll('input[type="radio"][name="option2"]');
const directInput = document.querySelector('.js_register_userrelation_direct');

// 라디오 클릭 시 → 텍스트 input 초기화 & name 제거
radios.forEach(radio => {
    radio.addEventListener('change', () => {
        directInput.value = '';
        directInput.removeAttribute('name');
        radios.forEach(r => r.name = 'option2');
    });
});

// 텍스트 input 입력 시 → 라디오 해제 & name 제거
if (directInput) {
    directInput.addEventListener('input', () => {
        radios.forEach(r => {
            r.checked = false;
            r.removeAttribute('name');
        });
        directInput.name = 'option2';
    });
}