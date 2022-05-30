const form = document.querySelector('#form');
const list = document.querySelector('#list');
let task = document.querySelector('#task');
const saves = JSON.parse(localStorage.getItem('todo')) || [];

for (let i = 0; i < saves.length; i++) {
    const addTodo = document.createElement('li');
    addTodo.innerText = saves[i].item;
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Remove Task';
    deleteButton.setAttribute('id', saves[i].id);
    addTodo.isCompleted = saves[i].isCompleted ? true : false;
    if(addTodo.isCompleted) {
        addTodo.style.textDecoration = 'line-through';
    }
    list.appendChild(addTodo);
    addTodo.appendChild(deleteButton);
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    const addTodo = document.createElement('li');
    const addTask = document.querySelector('#task').value;
    const deleteButton = document.createElement('button');
    let todoId = { id: new Date().getTime() };
    deleteButton.innerText = 'Remove Task';
    deleteButton.setAttribute('id', todoId.id);
    addTodo.innerText = addTask;
    addTodo.setAttribute('id', todoId.id);
    addTodo.isCompleted = false;
    list.appendChild(addTodo);
    addTodo.appendChild(deleteButton);
    form.reset();
    saves.push({ item: addTask, isCompleted: false, id: new Date().getTime().toString() });
    localStorage.setItem('todo', JSON.stringify(saves));
});

list.addEventListener('click', function(event){
    let clicked = event.target;
    const buttonId = clicked.getElementsByTagName('button')[0].getAttribute('id')
    if (!clicked.isCompleted){
        clicked.style.textDecoration = 'line-through';
        clicked.isCompleted = true;
    } else {
        clicked.style.textDecoration = 'none';
        clicked.isCompleted = false;
    }
    for (let i = 0; i < saves.length; i++) {
        if (saves[i].id === buttonId) { 
            saves[i].isCompleted = !saves[i].isCompleted;
            localStorage.setItem('todo', JSON.stringify(saves));
            break; 
        }
    }
});

list.addEventListener('click', function(event){
    const taskId = event.target.id;
    if (event.target.tagName === 'BUTTON'){
        event.target.parentNode.remove();
        removeFunc(taskId);
    }
});

function removeFunc(todoId){
  splicedList = saves.filter(l => l.id != todoId)
  localStorage.setItem('todo', JSON.stringify(splicedList));
}
    
