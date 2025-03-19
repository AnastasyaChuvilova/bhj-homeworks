document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.has-tooltip');
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    let currentTooltip = null;

    tooltips.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            if (currentTooltip === this) {
                tooltip.classList.remove('tooltip_active');
                currentTooltip = null;
                return;
            }

            const title = this.getAttribute('title');
            tooltip.textContent = title;

            const rect = this.getBoundingClientRect();
            tooltip.style.left = `${rect.left}px`;
            tooltip.style.top = `${rect.bottom}px`;

            tooltip.classList.add('tooltip_active');
            currentTooltip = this;
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.classList.contains('has-tooltip')) {
            tooltip.classList.remove('tooltip_active');
            currentTooltip = null;
        }
    });

    window.addEventListener('scroll', function() {
        tooltip.classList.remove('tooltip_active');
        currentTooltip = null;
    });
});