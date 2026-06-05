// ============================================================
// 이전 사주 사용 체크박스
// ============================================================
const usePrevCheckbox = document.querySelector('.js_usePrevSaju');
const customCheckbox  = document.querySelector('.js_usePrev_checkbox');
const formFields      = document.querySelectorAll('.js_prem_formFields input, .js_prem_formFields select');

// 커스텀 체크박스 클릭 → 실제 체크박스 토글
document.querySelector('.register_usePrev_label').addEventListener('click', function () {
    usePrevCheckbox.checked = !usePrevCheckbox.checked;
    togglePrevSaju(usePrevCheckbox.checked);
});

function togglePrevSaju(isChecked) {
    const formSections = document.querySelectorAll('.js_prem_formFields');

    if (isChecked) {
        // 체크 ON → 필드 전부 disabled + 흐리게
        customCheckbox.classList.add('on');
        formSections.forEach(el => el.classList.add('prem_fields_disabled'));
        formFields.forEach(el => {
            el.disabled = true;
            el.removeAttribute('required');
        });
    } else {
        // 체크 OFF → 필드 복구
        customCheckbox.classList.remove('on');
        formSections.forEach(el => el.classList.remove('prem_fields_disabled'));
        formFields.forEach(el => {
            el.disabled = false;
        });
        // required 복구 (원래 있던 것들)
        document.querySelector('input[name="name"]').required = true;
        document.querySelector('input[name="option5"]').required = true;
        // 시간 선택 select — 체크박스 상태에 따라 복구
        const timeSelect = document.querySelector('.js_register_birthTime_yes');
        const timeCheckbox = document.querySelector('.register_birthTime_no');
        if (!timeCheckbox.checked) {
            timeSelect.required = true;
        }
    }
}


// ============================================================
// 관계 직접입력 토글
// ============================================================
function registerUserTypeSelectChange(select) {
    const input_op1    = document.querySelector('.js_register_userType_direct');
    const inputBox_op1 = document.querySelector('.register_hideInput');
    const nameStr_op1  = "option1";

    if (select.value === 'direct') {
        select.removeAttribute('name');
        select.required = false;
        input_op1.name = nameStr_op1;
        input_op1.required = true;
        inputBox_op1.classList.add('on');
        input_op1.focus();
    } else {
        select.name = nameStr_op1;
        select.required = true;
        input_op1.removeAttribute('name');
        input_op1.required = false;
        inputBox_op1.classList.remove('on');
        input_op1.value = '';
    }
}

window.onload = function () {
    document.querySelector('.js_register_userType').name = "option1";
};


// ============================================================
// 생년월일 자동 하이픈
// ============================================================
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

document.querySelector('input[name="option3"]').addEventListener('blur', function () {
    const val = this.value.replace(/[^0-9]/g, '');
    if (val.length === 8) {
        const year  = parseInt(val.substring(0, 4));
        const month = parseInt(val.substring(4, 6));
        const day   = parseInt(val.substring(6, 8));

        if (month < 1 || month > 12) { alert("유효하지 않은 날짜입니다."); this.value = ""; return; }
        if (day < 1 || day > 31)     { alert("유효하지 않은 날짜입니다."); this.value = ""; return; }

        const dateCheck = new Date(year, month - 1, day);
        if (dateCheck.getFullYear() !== year || dateCheck.getMonth() !== month - 1 || dateCheck.getDate() !== day) {
            alert("유효하지 않은 날짜입니다."); this.value = "";
        }
    } else if (val.length > 0 && val.length < 8) {
        alert("날짜 형식을 모두 입력해주세요 (yyyy-mm-dd)"); this.value = "";
    }
});


// ============================================================
// 태어난 시간 체크박스 ↔ select 상호 배타
// ============================================================
function register_birthTimeNo_ch(checkbox) {
    const select = document.querySelector('.js_register_birthTime_yes');
    if (checkbox.checked) {
        select.value = '';
        select.removeAttribute('name');
        select.removeAttribute('required');
        checkbox.name     = 'option4';
        checkbox.required = true;
    } else {
        select.setAttribute('name', 'option4');
        select.setAttribute('required', 'required');
        select.disabled = false;
        checkbox.removeAttribute('name');
        checkbox.removeAttribute('required');
    }
}

function register_birthTimeYes_ch() {
    const select   = document.querySelector('.js_register_birthTime_yes');
    const checkbox = document.querySelector('.register_birthTime_no');
    if (select.value !== '') {
        checkbox.checked = false;
        checkbox.removeAttribute('name');
        checkbox.removeAttribute('required');
        select.setAttribute('name', 'option4');
        select.setAttribute('required', 'required');
    }
}