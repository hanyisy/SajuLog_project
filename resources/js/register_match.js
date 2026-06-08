// let sajuDataList = []; 
// let currentTarget = null;

// async function loadSajuData() {
//     try {
//         // const response = await fetch('https://land.withusmk.co.kr/assets/saju/resources/js/userData-%ED%99%95%EC%9D%B8%EC%9A%A9_%EC%9E%84%EC%8B%9C%ED%8C%8C%EC%9D%BC.json');
//         const response = await fetch('https://land.withusmk.co.kr/assets/saju/resources/js/userData_test.json');
//         if (!response.ok) throw new Error('파일 로드 실패');
//         sajuDataList = await response.json();
//         renderUserList(); 
//     } catch (error) {
//         console.error("데이터 로드 실패:", error);
//     }
// }

// function renderUserList() {
//     const container = document.getElementById('user-list-container');
//     if (!container) return;
//     container.innerHTML = ''; 

//     sajuDataList.forEach((item, index) => {
//         const user = item.user_profile;
//         const cardHtml = `
//             <div class="register_userCards" onclick="handleUserSelect(${index})" style="cursor:pointer; padding:10px; border-bottom:1px solid #ccc; color:#000;">
//                 <h3>${user.name} | ${user.zodiac}</h3>
//                 <p>${user.gender} | ${user.birth_type} | ${user.birth_date}</p>
//             </div>
//         `;
//         container.insertAdjacentHTML('beforeend', cardHtml);
//     });
// }

// document.querySelectorAll('.match_user1, .match_user2').forEach((slot, index) => {
//     slot.addEventListener('click', () => {
//         currentTarget = `option${index + 1}`;
//         const listBox = document.querySelector('.js_register_userListBox');
//         if (listBox) listBox.classList.remove('off'); // ✅ 수정
//     });
// });

// function handleUserSelect(index) {
//     const selectedUser = sajuDataList[index].user_profile;
//     const otherTarget = currentTarget === 'option1' ? 'option2' : 'option1';
    
//     const inputTarget = document.querySelector(`input[name="${currentTarget}"]`);
//     const inputOther = document.querySelector(`input[name="${otherTarget}"]`);

//     const userKey = selectedUser.name + selectedUser.birth_date;
//     if (inputOther.value === userKey) {
//         alert('이미 선택된 사람입니다.');
//         return;
//     }

//     inputTarget.value = userKey;

//     // ✅ 수정: option1 → user1, option2 → user2
//     const slotNumber = currentTarget === 'option1' ? 'user1' : 'user2';
//     const targetSlot = document.querySelector(`.match_${slotNumber}`);
    
//     if (targetSlot) {
//         targetSlot.classList.add('on'); 
//         const nameEl = targetSlot.querySelector('.js_match_user_Name');
//         const imgEl = targetSlot.querySelector('.js_match_user_icon img');
//         if (nameEl) nameEl.innerText = selectedUser.name;
//         if (imgEl) {
//             imgEl.src = selectedUser.zodiacImg;
//             imgEl.alt = selectedUser.zodiac;
//         }
//     }

//     document.querySelector('.js_register_userListBox').classList.add('off'); // ✅ 수정
//     const relationLabel = document.querySelector(`.js_relation_${slotNumber}`);
//     if (relationLabel) relationLabel.innerText = selectedUser.name;
// }

// loadSajuData();


// const radios = document.querySelectorAll('input[type="radio"][name="option3"]');
// const directInput = document.querySelector('.js_register_userrelation_direct');

// // 라디오 클릭 시
// radios.forEach(radio => {
//     radio.addEventListener('change', () => {
//         // 텍스트 input 초기화 & name 제거
//         directInput.value = '';
//         directInput.removeAttribute('name');
        
//         // 라디오에 name 부여 (이미 있지만 혹시 제거됐을 경우 대비)
//         radios.forEach(r => r.name = 'option3');
//     });
// });

// // 텍스트 input 입력 시
// directInput.addEventListener('input', () => {
//     // 라디오 전체 해제 & name 제거
//     radios.forEach(r => {
//         r.checked = false;
//         r.removeAttribute('name');
//     });
    
//     // 텍스트 input에 name 부여
//     directInput.name = 'option3';
// });

// let sajuDataList = []; 
// let currentTarget = null;

// async function loadSajuData() {
//     try {
//         const response = await fetch('https://land.withusmk.co.kr/assets/saju/resources/js/userData-%ED%99%95%EC%9D%B8%EC%9A%A9_%EC%9E%84%EC%8B%9C%ED%8C%8C%EC%9D%BC.json');
//         if (!response.ok) throw new Error('파일 로드 실패');
//         sajuDataList = await response.json();
//         renderUserList(); 
//     } catch (error) {
//         console.error("데이터 로드 실패:", error);
//     }
// }

// function renderUserList() {
//     const container = document.getElementById('user-list-container');
//     if (!container) return;
//     container.innerHTML = ''; 

//     sajuDataList.forEach((item, index) => {
//         const user = item.user_profile;
//         const cardHtml = `
//             <div class="register_userCards" onclick="handleUserSelect(${index})" style="cursor:pointer; padding:10px; border-bottom:1px solid #ccc; color:#000;">
//                 <h3>${user.name} | ${user.zodiac}</h3>
//                 <p>${user.gender} | ${user.birth_type} | ${user.birth_date}</p>
//             </div>
//         `;
//         container.insertAdjacentHTML('beforeend', cardHtml);
//     });
// }

// document.querySelectorAll('.match_user1, .match_user2').forEach((slot, index) => {
//     slot.addEventListener('click', () => {
//         currentTarget = `option${index + 1}`;
//         const listBox = document.querySelector('.js_register_userListBox');
//         if (listBox) listBox.classList.remove('off'); // ✅ 수정
//     });
// });

// function handleUserSelect(index) {
//     const selectedUser = sajuDataList[index].user_profile;
//     const otherTarget = currentTarget === 'option1' ? 'option2' : 'option1';
    
//     const inputTarget = document.querySelector(`input[name="${currentTarget}"]`);
//     const inputOther = document.querySelector(`input[name="${otherTarget}"]`);

//     const userKey = selectedUser.name + selectedUser.birth_date;
//     if (inputOther.value === userKey) {
//         alert('이미 선택된 사람입니다.');
//         return;
//     }

//     inputTarget.value = userKey;

//     // ✅ 수정: option1 → user1, option2 → user2
//     const slotNumber = currentTarget === 'option1' ? 'user1' : 'user2';
//     const targetSlot = document.querySelector(`.match_${slotNumber}`);
    
//     if (targetSlot) {
//         targetSlot.classList.add('on'); 
//         const nameEl = targetSlot.querySelector('.js_match_user_Name');
//         const imgEl = targetSlot.querySelector('.js_match_user_icon img');
//         if (nameEl) nameEl.innerText = selectedUser.name;
//         if (imgEl) {
//             imgEl.src = selectedUser.zodiacImg;
//             imgEl.alt = selectedUser.zodiac;
//         }
//     }

//     document.querySelector('.js_register_userListBox').classList.add('off'); // ✅ 수정
//     const relationLabel = document.querySelector(`.js_relation_${slotNumber}`);
//     if (relationLabel) relationLabel.innerText = selectedUser.name;
// }

// loadSajuData();


// const radios = document.querySelectorAll('input[type="radio"][name="option3"]');
// const directInput = document.querySelector('.js_register_userrelation_direct');

// // 라디오 클릭 시
// radios.forEach(radio => {
//     radio.addEventListener('change', () => {
//         // 텍스트 input 초기화 & name 제거
//         directInput.value = '';
//         directInput.removeAttribute('name');
        
//         // 라디오에 name 부여 (이미 있지만 혹시 제거됐을 경우 대비)
//         radios.forEach(r => r.name = 'option3');
//     });
// });

// // 텍스트 input 입력 시
// directInput.addEventListener('input', () => {
//     // 라디오 전체 해제 & name 제거
//     radios.forEach(r => {
//         r.checked = false;
//         r.removeAttribute('name');
//     });
    
//     // 텍스트 input에 name 부여
//     directInput.name = 'option3';
// });



// =============================
// 더미 데이터 (초기값 — localStorage에 없을 때만 사용)
// =============================
const defaultSajuData = [
    {
        "user_profile": {
            "name": "김민준", "gender": "남성", "birth_date": "1990-03-22",
            "birth_type": "양력", "zodiac": "말띠",
            "zodiacImg": "https://land.withusmk.co.kr/assets/saju/resources/img/animal/hor.webp"
        }
    },
    {
        "user_profile": {
            "name": "이서연", "gender": "여성", "birth_date": "1998-11-05",
            "birth_type": "음력", "zodiac": "호랑이띠",
            "zodiacImg": "https://land.withusmk.co.kr/assets/saju/resources/img/animal/tig.webp"
        }
    },
    {
        "user_profile": {
            "name": "박지현", "gender": "여성", "birth_date": "1985-08-30",
            "birth_type": "양력", "zodiac": "소띠",
            "zodiacImg": "https://land.withusmk.co.kr/assets/saju/resources/img/animal/cow.webp"
        }
    }
];

// localStorage에 있으면 그거 쓰고, 없으면 더미 데이터 사용
let sajuDataList = JSON.parse(localStorage.getItem('sajuDataList')) || defaultSajuData;

// 초기값 없으면 더미 데이터 저장
if (!localStorage.getItem('sajuDataList')) {
    localStorage.setItem('sajuDataList', JSON.stringify(defaultSajuData));
}

let currentTarget = null;

// =============================
// 리스트 렌더링
// =============================
function renderUserList() {
    const container = document.getElementById('user-list-container');
    if (!container) return;
    container.innerHTML = '';

    sajuDataList.forEach((item, index) => {
        const user = item.user_profile;
        const cardHtml = `
            <div class="register_userCards" onclick="handleUserSelect(${index})">
                <h3>${user.name} | ${user.zodiac}</h3>
                <p>${user.gender} | ${user.birth_type} | ${user.birth_date}</p>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// =============================
// 사주 추가하기 버튼
// =============================
function addNewUser() {
    const name      = document.querySelector('input[name="name"]')?.value.trim();
    const birthType = document.querySelector('select[name="option2"]')?.value;
    const birthDate = document.querySelector('input[name="option3"]')?.value.trim();
    const birthTime = document.querySelector('select[name="option4"]')?.value;
    const gender    = document.querySelector('input[name="option5"]:checked')?.value;
    const relation  = document.querySelector('.js_register_userType')?.value;

    if (!name || !birthDate || !gender || !relation || relation === '') {
        alert('이름, 생년월일, 성별, 관계는 필수입력입니다.');
        return;
    }

    const newUser = {
        user_profile: {
            name,
            gender,
            birth_date: birthDate,
            birth_type: birthType || '양력',
            birth_time: birthTime || '시간모름',
            zodiac: '미정',
            zodiacImg: 'https://land.withusmk.co.kr/assets/saju/resources/img/animal/hor.webp'
        }
    };

    sajuDataList.push(newUser);
    localStorage.setItem('sajuDataList', JSON.stringify(sajuDataList));

    alert(`${name} 사주가 추가되었습니다!`);
    renderUserList(); // 같은 페이지면 바로 갱신
}

// =============================
// DOMContentLoaded
// =============================
document.addEventListener('DOMContentLoaded', () => {
    renderUserList();

    // 사주 추가 버튼
    const addBtn = document.querySelector('.register_adduser');
    if (addBtn) addBtn.addEventListener('click', addNewUser);

    // 유저 슬롯 클릭 → 리스트 열기
    document.querySelectorAll('.match_user1, .match_user2').forEach((slot, index) => {
        slot.addEventListener('click', () => {
            currentTarget = `option${index + 1}`;
            const listBox = document.querySelector('.js_register_userListBox');
            if (listBox) listBox.classList.remove('off');
        });
    });

    // 라디오 / 직접입력 처리
    const radios = document.querySelectorAll('input[type="radio"][name="option3"]');
    const directInput = document.querySelector('.js_register_userrelation_direct');

    if (radios.length && directInput) {
        radios.forEach(radio => {
            radio.addEventListener('change', () => {
                directInput.value = '';
                directInput.removeAttribute('name');
                radios.forEach(r => r.name = 'option3');
            });
        });

        directInput.addEventListener('input', () => {
            radios.forEach(r => {
                r.checked = false;
                r.removeAttribute('name');
            });
            directInput.name = 'option3';
        });
    }
});

// =============================
// 유저 선택 처리
// =============================
function handleUserSelect(index) {
    const selectedUser = sajuDataList[index].user_profile;
    const otherTarget  = currentTarget === 'option1' ? 'option2' : 'option1';

    const inputTarget = document.querySelector(`input[name="${currentTarget}"]`);
    const inputOther  = document.querySelector(`input[name="${otherTarget}"]`);

    const userKey = selectedUser.name + selectedUser.birth_date;
    if (inputOther && inputOther.value === userKey) {
        alert('이미 선택된 사람입니다.');
        return;
    }

    if (inputTarget) inputTarget.value = userKey;

    const slotNumber = currentTarget === 'option1' ? 'user1' : 'user2';
    const targetSlot = document.querySelector(`.match_${slotNumber}`);

    if (targetSlot) {
        targetSlot.classList.add('on');
        const nameEl = targetSlot.querySelector('.js_match_user_Name');
        const imgEl  = targetSlot.querySelector('.js_match_user_icon img');
        if (nameEl) nameEl.innerText = selectedUser.name;
        if (imgEl) {
            imgEl.src = selectedUser.zodiacImg;
            imgEl.alt = selectedUser.zodiac;
        }
    }

    document.querySelector('.js_register_userListBox')?.classList.add('off');

    const relationLabel = document.querySelector(`.js_relation_${slotNumber}`);
    if (relationLabel) relationLabel.innerText = selectedUser.name;
}