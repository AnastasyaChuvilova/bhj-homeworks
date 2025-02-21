document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('#tabs1 .tab');
    const contents = document.querySelectorAll('#tabs1 .tab__content');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const index = Array.from(tabs).indexOf(tab);

            tabs.forEach(t => t.classList.remove('tab_active'));
            tab.classList.add('tab_active');

            contents.forEach(c => c.classList.remove('tab__content_active'));
            contents[index].classList.add('tab__content_active');
        });
    });
});