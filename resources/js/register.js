function registerUserTypeSelectChange(select) {
    const input_op1 = document.querySelector('.js_register_userType_direct');
    const inputBox_op1 = document.querySelector('.register_hideInput');
    const nameStr_op1 = "option1";

    if (select.value === 'direct') {
        // 직접 입력을 선택한 경우
        select.removeAttribute('name');
        select.required = false;      // select의 필수 해제

        input_op1.name = nameStr_op1;
        input_op1.required = true;       // input을 필수로 설정
        inputBox_op1.classList.add('on');
        input_op1.focus();
    } else {
        // 리스트 중 하나를 선택한 경우
        select.name = nameStr_op1;
        select.required = true;      // select를 필수로 설정

        input_op1.removeAttribute('name');
        input_op1.required = false;      // input 필수 해제
        inputBox_op1.classList.remove('on');
        input_op1.value = '';
    }
}

// 초기 실행 (페이지 로드 시 select에 name 부여)
window.onload = function() {
    document.querySelector('.js_register_userType').name = "option1";
};


//생년월일 입력시
function autoHyphen(target) {
    let val = target.value.replace(/[^0-9]/g, '');
    
    if (val.length <= 4) {
        target.value = val;
    } else if (val.length <= 6) {
        target.value = val.substring(0, 4) + '-' + val.substring(4);
    } else {
        target.value = val.substring(0, 4) + '-' + val.substring(4, 6) + '-' + val.substring(6, 8);
    }
}

// 입력을 마치고 나갈 때(blur) 유효성 검사
document.querySelector('input[name="option2"]').addEventListener('blur', function() {
    const val = this.value.replace(/[^0-9]/g, '');
    if (val.length === 8) {
        const year = parseInt(val.substring(0, 4));
        const month = parseInt(val.substring(4, 6));
        const day = parseInt(val.substring(6, 8));

        // 월 체크 (1~12)
        if (month < 1 || month > 12) {
            alert("유효하지 않은 날짜입니다.");
            this.value = "";
            return;
        }

        // 일 체크 (간단히 31일까지만 체크)
        if (day < 1 || day > 31) {
            alert("유효하지 않은 날짜입니다.");
            this.value = "";
            return;
        }
        
        // 추가: 2월 30일 같은 존재하지 않는 날짜 정밀 검증 (선택사항)
        const dateCheck = new Date(year, month - 1, day);
        if (dateCheck.getFullYear() !== year || dateCheck.getMonth() !== month - 1 || dateCheck.getDate() !== day) {
            alert("유효하지 않은 날짜입니다.");
            this.value = "";
        }
    } else if (val.length > 0 && val.length < 8) {
        alert("날짜 형식을 모두 입력해주세요 (yyyy-mm-dd)");
        this.value = "";
    }
});




// ── 태어난 시간: checkbox ↔ select 상호 배타 로직 ──────────────────────────

function register_birthTimeNo_ch(checkbox) {
    const select = document.querySelector('.js_register_birthTime_yes');

    if (checkbox.checked) {
        // 체크박스 ON → select 초기화 및 비활성화
        select.value = '';                  // "선택하세요"로 초기화
        select.removeAttribute('name');     // select name 제거 (전송 제외)
        select.removeAttribute('required'); // select required 제거
        //select.disabled = true;              선택 못 하게 비활성화

        // 체크박스에 name, required 부여
        checkbox.name = 'option4';
        checkbox.required = true;
    } else {
        // 체크박스 OFF → select 복구
        select.setAttribute('name', 'option4');
        select.setAttribute('required', 'required');
        select.disabled = false;

        // 체크박스 name, required 제거
        checkbox.removeAttribute('name');
        checkbox.removeAttribute('required');
    }
}

function register_birthTimeYes_ch() {
    const select   = document.querySelector('.js_register_birthTime_yes');
    const checkbox = document.querySelector('.register_birthTime_no');

    if (select.value !== '') {
        // 값 있는 option 선택 → 체크박스 해제
        checkbox.checked = false;
        checkbox.removeAttribute('name');
        checkbox.removeAttribute('required');

        // select name, required 확보
        select.setAttribute('name', 'option4');
        select.setAttribute('required', 'required');
    }
}