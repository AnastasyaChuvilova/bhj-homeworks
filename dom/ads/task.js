document.addEventListener('DOMContentLoaded', () => {
    const rotator = document.querySelector('.rotator');
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;

    function changeCase() {
        cases[currentIndex].classList.remove('rotator__case_active');

        currentIndex = (currentIndex + 1) % cases.length; 

        cases[currentIndex].classList.add('rotator__case_active');
    }
    setInterval(changeCase, 1000);
});