let sajuDataList = []; 
let currentTarget = null;

async function loadSajuData() {
    try {
        const response = await fetch('./resources/js/userData.json');
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

document.querySelectorAll('.match_user1, .match_user2').forEach((slot, index) => {
    slot.addEventListener('click', () => {
        currentTarget = `option${index + 1}`;
        const listBox = document.querySelector('.js_register_userListBox');
        if (listBox) listBox.classList.remove('off'); // ✅ 수정
    });
});

function handleUserSelect(index) {
    const selectedUser = sajuDataList[index].user_profile;
    const otherTarget = currentTarget === 'option1' ? 'option2' : 'option1';
    
    const inputTarget = document.querySelector(`input[name="${currentTarget}"]`);
    const inputOther = document.querySelector(`input[name="${otherTarget}"]`);

    const userKey = selectedUser.name + selectedUser.birth_date;
    if (inputOther.value === userKey) {
        alert('이미 선택된 사람입니다.');
        return;
    }

    inputTarget.value = userKey;

    // ✅ 수정: option1 → user1, option2 → user2
    const slotNumber = currentTarget === 'option1' ? 'user1' : 'user2';
    const targetSlot = document.querySelector(`.match_${slotNumber}`);
    
    if (targetSlot) {
        targetSlot.classList.add('on'); 
        const nameEl = targetSlot.querySelector('.js_match_user_Name');
        const imgEl = targetSlot.querySelector('.js_match_user_icon img');
        if (nameEl) nameEl.innerText = selectedUser.name;
        if (imgEl) {
            imgEl.src = selectedUser.zodiacImg;
            imgEl.alt = selectedUser.zodiac;
        }
    }

    document.querySelector('.js_register_userListBox').classList.add('off'); // ✅ 수정
    const relationLabel = document.querySelector(`.js_relation_${slotNumber}`);
    if (relationLabel) relationLabel.innerText = selectedUser.name;
}

loadSajuData();


const radios = document.querySelectorAll('input[type="radio"][name="option3"]');
const directInput = document.querySelector('.js_register_userrelation_direct');

// 라디오 클릭 시
radios.forEach(radio => {
    radio.addEventListener('change', () => {
        // 텍스트 input 초기화 & name 제거
        directInput.value = '';
        directInput.removeAttribute('name');
        
        // 라디오에 name 부여 (이미 있지만 혹시 제거됐을 경우 대비)
        radios.forEach(r => r.name = 'option3');
    });
});

// 텍스트 input 입력 시
directInput.addEventListener('input', () => {
    // 라디오 전체 해제 & name 제거
    radios.forEach(r => {
        r.checked = false;
        r.removeAttribute('name');
    });
    
    // 텍스트 input에 name 부여
    directInput.name = 'option3';
});

