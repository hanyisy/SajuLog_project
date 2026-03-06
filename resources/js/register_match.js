let sajuDataList = []; 
let currentTarget = null;

// 1. 데이터 로드
async function loadSajuData() {
    try {
        const response = await fetch('https://land.withusmk.co.kr/assets/saju/resources/js/userData.json');
        if (!response.ok) throw new Error('파일 로드 실패');
        
        sajuDataList = await response.json(); // 배열 형태 그대로 저장
        renderUserList(); 
    } catch (error) {
        console.error("데이터 로드 실패:", error);
    }
}

// 2. 사용자 리스트 생성 (JSON 구조 반영)
function renderUserList() {
    const container = document.getElementById('user-list-container');
    if(!container) return;
    container.innerHTML = ''; 

    sajuDataList.forEach((item, index) => {
        const user = item.user_profile; // user_profile 내부 접근
        const cardHtml = `
            <div class="register_userCards" onclick="handleUserSelect(${index})">
                <h3>${user.name}</h3>
                <div>
                    <p><span>${user.gender}</span> <span>${user.zodiac}</span></p>
                    <p><span>${user.birth_type}</span> <span>${user.birth_date}</span></p>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// 3. 카드 슬롯 클릭 이벤트
document.querySelectorAll('.match_user1, .match_user2').forEach((slot, index) => {
    slot.addEventListener('click', () => {
        currentTarget = `option${index + 1}`;
        document.querySelector('.js_register_userListBox').classList.add('on');
    });
});

// 4. 리스트에서 사용자 선택 (중복 체크 포함)
function handleUserSelect(index) {
    const selectedUser = sajuDataList[index].user_profile;
    const otherTarget = currentTarget === 'option1' ? 'option2' : 'option1';
    
    const inputTarget = document.querySelector(`input[name="${currentTarget}"]`);
    const inputOther = document.querySelector(`input[name="${otherTarget}"]`);

    // 유효성 확인: 이름과 생년월일 조합으로 중복 체크 (ID가 없을 때 확실한 방법)
    const userKey = selectedUser.name + selectedUser.birth_date;
    if (inputOther.value === userKey) {
        alert('이미 선택된 사람입니다.');
        return;
    }

    // 데이터 저장
    inputTarget.value = userKey;

    // UI 업데이트
    const targetSlot = document.querySelector(`.match_${currentTarget}`);
    targetSlot.classList.add('on'); 
    
    // 이름과 아이콘 이미지 변경
    targetSlot.querySelector('.js_match_user_Name').innerText = selectedUser.name;
    const imgEl = targetSlot.querySelector('.js_match_user_icon img');
    if(imgEl) {
        imgEl.src = selectedUser.zodiacImg; // JSON의 zodiacImg 경로 사용
        imgEl.alt = selectedUser.zodiac;
    }

    // 리스트 닫기
    document.querySelector('.js_register_userListBox').classList.remove('on');
}

// 초기 로드 실행
loadSajuData();