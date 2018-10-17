let tasks = [];
const addToDo = () => {
    const newTask = document.getElementById('newTask');
    
    const newTaskItem = document.createElement('li');
    newTaskItem.innerText = newTask.value;
    newTaskItem.onclick = removeFromList.bind(this, task.length);
        
    const todoList = document.getElementById('toDoList');
    todoList.appendChild(newTaskItem);
    tasks.push(newTask);
    
    newTask.value = '';
}

const removeFromList = (index) => {
    tasks.splice(index, 1);
    console.log(index);
}




