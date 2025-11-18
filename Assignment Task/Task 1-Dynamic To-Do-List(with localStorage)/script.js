let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");
let emptyState = document.getElementById("emptyState");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function updateTaskCount() {
    const count = tasks.length;
    taskCount.textContent = `${count} ${count === 1 ? 'task' : 'tasks'}`;
    
    if (count === 0) {
        emptyState.classList.add('show');
        taskList.style.display = 'none';
    } else {
        emptyState.classList.remove('show');
        taskList.style.display = 'flex';
    }
}

function showTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <span contenteditable="false">${task}</span>
            <div class="task-actions">
                <button class="btn-edit" onclick="editTask(${index})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn-delete" onclick="deleteTask(${index})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        `;
        taskList.appendChild(li);
    });
    updateTaskCount();
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        taskInput.focus();
        return;
    }

    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    showTasks();
}

addTaskBtn.onclick = addTask;

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

function deleteTask(i) {
    tasks.splice(i, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}

function editTask(i) {
    const taskElement = taskList.children[i].querySelector('span');
    const currentTask = tasks[i];
    
    taskElement.contentEditable = true;
    taskElement.focus();
    taskElement.style.background = '#f0f9ff';
    taskElement.style.padding = '4px 8px';
    taskElement.style.borderRadius = '4px';
    
    const saveEdit = () => {
        const newTask = taskElement.textContent.trim();
        if (newTask && newTask !== currentTask) {
            tasks[i] = newTask;
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
        showTasks();
    };
    
    taskElement.addEventListener('blur', saveEdit, { once: true });
    taskElement.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            taskElement.blur();
        }
    }, { once: true });
}

showTasks();
