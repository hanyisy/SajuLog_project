function registerUserTypeSelectChange(select) {
    const input = document.querySelector('.js_register_userType_direct');
    const inputBox = document.querySelector('.register_hideInput');
    const nameStr = "사용자 관계";

    if (select.value === 'direct') {
        // 직접 입력을 선택한 경우
        select.removeAttribute('name');
        select.required = false;      // select의 필수 해제

        input.name = nameStr;
        input.required = true;       // input을 필수로 설정
        inputBox.classList.add('on');
        input.focus();
    } else {
        // 리스트 중 하나를 선택한 경우
        select.name = nameStr;
        select.required = true;      // select를 필수로 설정

        input.removeAttribute('name');
        input.required = false;      // input 필수 해제
        inputBox.classList.remove('on');
        input.value = '';
    }
}

// 초기 실행 (페이지 로드 시 select에 name 부여)
window.onload = function() {
    document.querySelector('.js_register_userType').name = "option1";
};