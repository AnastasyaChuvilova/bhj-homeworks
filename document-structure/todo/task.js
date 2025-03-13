document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tasks__form');
    const input = document.getElementById('task__input');
    const tasksList = document.getElementById('tasks__list');

    const addTask = (taskTitle) => {
        const task = document.createElement('div');
        task.className = 'task';

        const title = document.createElement('div');
        title.className = 'task__title';
        title.textContent = taskTitle;

        const removeLink = document.createElement('a');
        removeLink.href = '#';
        removeLink.className = 'task__remove';
        removeLink.innerHTML = '&times;';

        removeLink.addEventListener('click', (event) => {
            event.preventDefault();
            tasksList.removeChild(task);
        });

        task.appendChild(title);
        task.appendChild(removeLink);
        tasksList.appendChild(task);
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const taskTitle = input.value.trim();
        if (taskTitle) {
            addTask(taskTitle);
            input.value = '';
        }
    });

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            const taskTitle = input.value.trim();
            if (taskTitle) {
                addTask(taskTitle);
                input.value = ''; 
            }
        }
    });
});