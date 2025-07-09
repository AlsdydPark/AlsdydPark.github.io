document.addEventListener('DOMContentLoaded', function() {
    // 네비게이션 링크에 부드러운 스크롤 적용
    const navLinks = document.querySelectorAll('nav ul li a');

    for (const link of navLinks) {
        link.addEventListener('click', function(event) {
            // 기본 앵커 동작을 막음
            event.preventDefault();

            // href 값에서 #을 제거하여 대상 ID를 가져옴
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // 대상 요소로 부드럽게 스크롤
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // 고정 헤더 높이를 고려
                    behavior: 'smooth'
                });
            }
        });
    }
});
