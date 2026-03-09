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
                <h3>${user.name}</h3>
                <p>${user.gender} | ${user.zodiac}</p>
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
}

loadSajuData();