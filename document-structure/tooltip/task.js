document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.has-tooltip');
    const tooltip = document.getElementById('tooltip');

    tooltips.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); 

            const tooltipText = this.getAttribute('title');
            tooltip.textContent = tooltipText;

            const rect = this.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX}px`;
            tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;

            tooltip.classList.toggle('tooltip_active');
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.classList.contains('has-tooltip') && !tooltip.contains(event.target)) {
            tooltip.classList.remove('tooltip_active');
        }
    });
});