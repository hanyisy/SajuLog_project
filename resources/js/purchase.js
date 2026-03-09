let sajuDataList = [];


async function loadAndRenderList() {
    try {
        // 실제 경로에 맞춰 수정하세요 (예: ./resources/js/userData.json)
        const response = await fetch('./resources/js/userData.json');
        sajuDataList = await response.json();
        
        const container = document.querySelector('.purchase_userList');
        container.innerHTML = ''; // 기존 껍데기 비우기

        sajuDataList.forEach((item, index) => {
            const user = item.user_profile;
            const history = item.saju_history || []; // 사주 기록 데이터 (없으면 빈 배열)

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
                                <img src="./resources/img/userList/saju_userList_com.webp" alt="완료">
                            </div>
                            <div class="purchase_delateBtn" onclick="deleteUser(${index}, event)">
                                <img src="./resources/img/userList/saju_userList_del.webp" alt="삭제">
                            </div>
                            <div class="purchase_aditBtn" onclick="goToEdit(${index}, event)">
                                <img src="./resources/img/userList/saju_userList_adit.webp" alt="수정">
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
        console.error("리스트 로드 실패:", error);
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