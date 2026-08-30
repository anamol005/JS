// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');

todoList.forEach(function (todo) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;

  const label = document.createElement('label');
  label.textContent = todo.task;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  checkbox.addEventListener('change', function () {
    todo.completed = checkbox.checked;
    console.log(todoList);
  });

  deleteButton.addEventListener('click', function () {
    const index = todoList.indexOf(todo);

    todoList.splice(index, 1);

    ul.removeChild(li);

    console.log(todoList);
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteButton);

  ul.appendChild(li);
});

const addButton = document.querySelector('.add-btn');
const dialog = document.querySelector('dialog');
const form = dialog.querySelector('form');
const input = dialog.querySelector('input');

addButton.addEventListener('click', function () {
  dialog.showModal();
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const task = input.value;

  const newTodo = {
    id: todoList.length + 1,
    task: task,
    completed: false,
  };

  todoList.push(newTodo);

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = false;

  const label = document.createElement('label');
  label.textContent = task;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  checkbox.addEventListener('change', function () {
    newTodo.completed = checkbox.checked;
    console.log(todoList);
  });

  deleteButton.addEventListener('click', function () {
    const index = todoList.indexOf(newTodo);

    todoList.splice(index, 1);

    ul.removeChild(li);

    console.log(todoList);
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteButton);

  ul.appendChild(li);

  console.log(todoList);

  input.value = '';
  dialog.close();
});
