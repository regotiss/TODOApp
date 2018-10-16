const addToDo = () => {
    const newTask = document.getElementById('newTask');
    
    const newTaskItem = document.createElement('li');
    newTaskItem.innerText = newTask.value;
    
    const todoList = document.getElementById('toDoList');
    todoList.appendChild(newTaskItem);
    
    newTask.value = '';
}


