const sajuDataList = [
  {
    "user_profile": {
      "name": "김민준",
      "gender": "남성",
      "birth_date": "1990-03-22",
      "birth_type": "양력",
      "birth_time": "08:15",
      "zodiac": "말띠"
    },
    "saju_history": [
      {
        "title": "2026년 병오년 신년운세",
        "link": "./result.html?type=newyear&id=2026001",
        "date": "2026-03-09"
      }
    ]
  },
  {
    "user_profile": {
      "name": "이서연",
      "gender": "여성",
      "birth_date": "1998-11-05",
      "birth_type": "음력",
      "birth_time": "23:45",
      "zodiac": "호랑이띠"
    }
  },
  {
    "user_profile": {
      "name": "박지현",
      "gender": "여성",
      "birth_date": "1985-08-30",
      "birth_type": "양력",
      "birth_time": "06:00",
      "zodiac": "소띠"
    }
  }
];

function loadAndRenderList() {
    try {
        // fetch 대신 위에서 선언한 sajuDataList를 바로 사용합니다.
        const container = document.querySelector('.purchase_userList');
        if (!container) return; // 컨테이너가 없으면 실행 방지
        
        container.innerHTML = ''; 

        sajuDataList.forEach((item, index) => {
            const user = item.user_profile;
            const history = item.saju_history || []; 

            const cardHtml = `
                <div class="purchase_userCard" data-index="${index}">
                    <div class="purchase_card" onclick="toggleAccordion(${index})">
                        <div class="purchase_userBox">
                            <h1>${user.name} | ${user.relation || '지인'}</h1>
                            <p>
                                | ${user.birth_date} | ${user.birth_type} | ${user.zodiac} |<br>
                                | ${user.birth_time} | ${user.gender} |
                            </p>
                        </div>
                        <div class="purchase_btnBox">
                            <div class="purchase_complateBtn">
                                <img src="https://land.withusmk.co.kr/assets/saju/resources/img/purchase_userList/saju_userList_com.webp" alt="완료">
                            </div>
                            <div class="purchase_delateBtn" onclick="deleteUser(${index}, event)">
                                <img src="https://land.withusmk.co.kr/assets/saju/resources/img/purchase_userList/saju_userList_del.webp" alt="삭제">
                            </div>
                            <div class="purchase_aditBtn" onclick="goToEdit(${index}, event)">
                                <img src="https://land.withusmk.co.kr/assets/saju/resources/img/purchase_userList/saju_userList_adit.webp" alt="수정">
                            </div>
                        </div>
                    </div>
                    <div class="purchase_dataBox js_data_box_${index}">
                        <div class="purchase_dataList">
                            <ul>
                                ${history.length > 0 ? 
                                    history.map(h => `<li><a href="${h.link}">${h.title} <span>></span></a></li>`).join('') :
                                    `<li style="padding:15px; color:#999;">아직 확인한 사주 기록이 없습니다.</li>`
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', cardHtml);
        });
    } catch (error) {
        console.error("리스트 렌더링 실패:", error);
    }
}


// 2. 토글
function toggleAccordion(index) {
    const target = document.querySelector(`.js_data_box_${index}`);
    if (target) {
        target.classList.toggle('active');
    }
}

// 3. 삭제
function deleteUser(index, event) {
    event.stopPropagation(); // 카드 클릭(토글) 이벤트 전파 방지
    
    if (confirm(`${sajuDataList[index].user_profile.name}님의 정보를 삭제할까요?`)) {
        sajuDataList.splice(index, 1);
        renderListAfterAction(); 
        alert('삭제되었습니다.');
    }
}

// 4. 수정 페이지 이동
function goToEdit(index, event) {
    event.stopPropagation();
    const userId = sajuDataList[index].user_profile.name;
    location.href = `./register_newUser.html?mode=edit&user=${encodeURIComponent(userId)}`;
}

// 화면 갱신용
function renderListAfterAction() {
    // 위 loadAndRenderList와 로직 동일하게 처리하거나 함수 분리
    loadAndRenderList(); 
}

// 실행
loadAndRenderList();