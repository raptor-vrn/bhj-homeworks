let tasksList = document.getElementById('tasks__list');
let tasksInput = document.getElementById('task__input');
let taskControl = document.querySelector('.tasks__control');

function addTask(event) {
    let taskHTML = document.createElement('div');

    if (event.code == 'Enter') {
        event.preventDefault();

        if (Array.from(tasksInput.value).length > 2) {
            taskHTML.classList.add("task");
            taskHTML.insertAdjacentHTML('afterBegin',"<div class='task__title'></div><a href='#' class='task__remove'>&times;</a>");

            tasksList.appendChild(taskHTML);

            let taskTitle = document.getElementsByClassName('task__title');
            taskTitle[taskTitle.length - 1].textContent = tasksInput.value;

            let taskRemove = document.getElementsByClassName('task__remove');
            taskRemove[taskRemove.length -1].addEventListener('click', removeTask);

            function removeTask() {
                this.closest('.task').remove();
            }

            tasksInput.value = '';
        }

    }
}

taskControl.addEventListener('keydown', addTask);