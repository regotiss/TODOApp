let tasks = [];
const addToDo = () => {
    const newTask = document.getElementById('newTask');    
    const todoList = document.getElementById('toDoList');
    todoList.appendChild(newToDoItem(newTask.value, tasks.length));
    
    tasks.push(newTask.value);
    
    newTask.value = '';
}

const removeFromList = (index) => {
    tasks.splice(index, 1);
    const todoList = document.getElementById('toDoList');
    todoList.innerText = '';
    constructToDo();
}

const constructToDo = () => {
    const todoList = document.getElementById('toDoList');
    tasks.map((task, index) => todoList.appendChild(newToDoItem(task, index)));
}

const newToDoItem = (task, index) => {
    const toDoItem = document.createElement('li');
    toDoItem.innerText = task;
    toDoItem.onclick = removeFromList.bind(this, index);
    return toDoItem;
}




