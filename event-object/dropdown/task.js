document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    Array.from(dropdowns).forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__item');

        valueElement.addEventListener('click', (event) => {
            event.stopPropagation(); 
            listElement.classList.toggle('dropdown__list_active');
        });

        Array.from(items).forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault(); 
                const selectedValue = item.textContent; 
                valueElement.textContent = selectedValue; 
                listElement.classList.remove('dropdown__list_active'); 
            });
        });
    });

    window.addEventListener('click', () => {
        Array.from(dropdowns).forEach(dropdown => {
            const listElement = dropdown.querySelector('.dropdown__list');
            listElement.classList.remove('dropdown__list_active');
        });
    });
});