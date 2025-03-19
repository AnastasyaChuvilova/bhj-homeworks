document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tasks__form');
    const input = document.getElementById('task__input');
    const tasksList = document.getElementById('tasks__list');

    const addTask = (taskTitle) => {
        if (!taskTitle) return;

        tasksList.insertAdjacentHTML('afterbegin', `
            <div class="task">
                <div class="task__title">
                    ${taskTitle}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `);
    };

    tasksList.addEventListener('click', (event) => {
        if (event.target.classList.contains('task__remove')) {
            event.preventDefault();
            const task = event.target.closest('.task');
            if (task) {
                tasksList.removeChild(task);
            }
        }
    });


    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const taskTitle = input.value.trim();
        addTask(taskTitle);
        input.value = ''; 
    });
});