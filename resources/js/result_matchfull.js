document.addEventListener('DOMContentLoaded', () => {

  // ===== 메뉴 collapse + 앵커점프 보정 + on 동기화 =====
  (function setupMatchMenu() {
    const btnBox  = document.querySelector('.resultMatch_btnBox');
    const sec1    = document.querySelector('.resultMat_sec1');
    const header  = document.querySelector('header');
    const btnList = document.querySelector('.resultMatch_btnList');
    if (!btnBox || !btnList) return;

    let lastScrollY = window.scrollY;
    let isCollapsed = false;
    let ticking = false;
    let locked = false;
    const DELTA = 8;

    function syncPadding() {
      if (!btnBox || !sec1) return;
      const headerH = header ? header.getBoundingClientRect().height : 0;
      const btnBoxH = btnBox.getBoundingClientRect().height;
      sec1.style.paddingTop = (headerH + btnBoxH) + 'px';
    }

    function setCollapsed(next) {
      if (next === isCollapsed) return;
      isCollapsed = next;
      btnBox.classList.toggle('collapsed', next);
      syncPadding();
      lastScrollY = window.scrollY;
      locked = true;
      setTimeout(() => { locked = false; }, 200);
    }

    function onScroll() {
      ticking = false;
      const currentY = window.scrollY;
      if (locked) { lastScrollY = currentY; return; }
      const diff = currentY - lastScrollY;
      if (Math.abs(diff) < DELTA) return;
      if (diff > 0 && currentY > 50 && !isCollapsed) { setCollapsed(true);  return; }
      if (diff < 0 && isCollapsed) { setCollapsed(false); return; }
      lastScrollY = currentY <= 0 ? 0 : currentY;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
    }, { passive: true });

    // 빈 영역 클릭 → 펼치기 (a 제외)
    btnBox.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      setCollapsed(false);
    });

    // on 동기화
    const allBtnDivs = btnList.querySelectorAll('.resultMatch_btns > div');
    function setActiveByHash(hash) {
      allBtnDivs.forEach(div => {
        const a = div.querySelector('a');
        div.classList.toggle('on', a && a.getAttribute('href') === hash);
      });
    }

    // 메뉴 a 클릭 → on + collapse + 점프 보정
    btnList.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      e.preventDefault();

      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;

      setActiveByHash(link.getAttribute('href'));
      setCollapsed(true);

      requestAnimationFrame(() => {
        const headerH = header ? header.getBoundingClientRect().height : 0;
        const btnBoxH = btnBox ? btnBox.getBoundingClientRect().height : 0;
        const GAP = 16;
        const y = target.getBoundingClientRect().top + window.scrollY - headerH - btnBoxH - GAP;

        locked = true;
        window.scrollTo({ top: Math.max(y, 0) });
        setTimeout(() => { lastScrollY = window.scrollY; locked = false; }, 300);
      });
    });

    // 스크롤로 섹션 바뀌면 자동 on
    const matSections = document.querySelectorAll('[id^="res_mat"]');
    const headerH0 = header ? header.getBoundingClientRect().height : 0;
    const btnBoxH0 = btnBox.getBoundingClientRect().height;

    const io = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(en => en.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveByHash('#' + visible[0].target.id);
    }, {
      rootMargin: `-${headerH0 + btnBoxH0 + 20}px 0px -60% 0px`,
      threshold: 0
    });
    matSections.forEach(sec => io.observe(sec));

    // btnBox 위치 + 초기 padding
    if (header) btnBox.style.top = header.getBoundingClientRect().height + 'px';
    syncPadding();
    window.addEventListener('resize', () => {
      if (header) btnBox.style.top = header.getBoundingClientRect().height + 'px';
      syncPadding();
    });
  })();


  // ===== 로딩창 =====
  (function setupLoading() {
    const loadBox   = document.querySelector('.result_loadBox');
    const gage      = document.querySelector('.result_gage');
    const loadTxt   = document.querySelector('.result_loadTxt');
    const loadingP  = document.querySelector('.result_loadingBox > p');
    if (!loadBox || !gage) return;

    const DURATION  = 6500;
    const INTERVAL  = 30;
    const STEPS     = DURATION / INTERVAL;

    const texts = ['사주 분석 중', '풀이 준비 중'];
    let current = 0, dotStep = 0, textIndex = 0;

    const dotTimer = setInterval(() => {
      dotStep = (dotStep + 1) % 4;
      loadingP.textContent = texts[textIndex] + ' ' + '.'.repeat(dotStep);
    }, 400);

    const gageTimer = setInterval(() => {
      current++;
      const progress = (current / STEPS) * 100;
      gage.style.width = progress + '%';

      if (progress >= 50 && textIndex === 0) {
        textIndex = 1; dotStep = 0;
        loadTxt.classList.add('on');
      }

      if (current >= STEPS) {
        clearInterval(gageTimer);
        clearInterval(dotTimer);
        gage.style.width = '100%';
        loadingP.textContent = '풀이 준비 중 ...';
        loadBox.classList.add('on');
      }
    }, INTERVAL);
  })();

});