const taskName = document.getElementById("taskName");
const taskTime = document.getElementById("taskTime");
const taskDate = document.getElementById("taskDate");
const taskContainer = document.getElementById("taskContainer");

function addTask() {
    if (taskName.value === '') {
        alert('You forgot to type the task!');
    } else {
        if (!taskTime.value) {
            taskTime.value = "23:59";
        }
    
        if (!taskDate.value) {
            const today = new Date();
            const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);
            const formattedEndOfDay = endOfDay.toISOString().slice(0, -14);
            taskDate.value = formattedEndOfDay;
        }

        let newTask = document.createElement("li");
        newTask.innerHTML = `
        <input type="checkbox" class="completed-checkbox">
        <label class="task-column">${taskName.value}</label>
        <span class="time-column">${taskTime.value}</span>
        <span class="date-column">${taskDate.value}</span>
        <span class="edit-button"><img src="images/edit-icon.png" alt="edit icon" height="10px"></span>
        <span class="delete-button">\u00d7</span>
        `;
        
        taskContainer.appendChild(newTask);
    
        taskName.value = '';
        taskTime.value = '';
        taskDate.value = '';

        saveTask(); // Save the task after adding it
    }
}

taskContainer.addEventListener('click', function(e) {
    if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
        e.target.closest('li').classList.toggle("checked");
        saveTask();
    } else if (e.target.classList.contains('delete-button')) {
        e.target.closest('li').remove();
        saveTask();
    } else if (e.target.closest('.edit-button')) {
        let taskItem = e.target.closest('li');
        editTask(taskItem);
    } else if (e.target.classList.contains('task-column')) {
        let taskColumn = e.target;
        taskColumn.classList.toggle('expanded');
        // Toggle back to compressed state if already expanded
        if (!taskColumn.classList.contains('expanded')) {
            taskColumn.classList.add('task-column');
        }
    }
});

function editTask(taskItem) {
    const taskColumn = taskItem.querySelector('.task-column');
    const timeColumn = taskItem.querySelector('.time-column');
    const dateColumn = taskItem.querySelector('.date-column');

    taskName.value = taskColumn.innerText;
    taskTime.value = timeColumn.innerText;
    taskDate.value = dateColumn.innerText;

    // Remove the task item being edited
    taskItem.remove();

    // Ensure changes are saved
    saveTask();
}

function saveTask() {
    localStorage.setItem("tasks", taskContainer.innerHTML);
}

function loadTask() {
    taskContainer.innerHTML = localStorage.getItem('tasks') || '';
    
    // Update checkbox status based on saved data
    const checkboxes = taskContainer.querySelectorAll('.completed-checkbox');
    checkboxes.forEach((checkbox) => {
        const taskItem = checkbox.closest('li');
        if (taskItem.classList.contains('checked')) {
            checkbox.checked = true;
        }
    });
}


loadTask();
