import { todos } from "./data.js";

const data = JSON.parse(localStorage.getItem('todoData')).length;
if (!localStorage.getItem('todoData') || data == 0) {
  localStorage.setItem('todoData', JSON.stringify(todos));
}

const table =  document.querySelector('.todo-table');
const input = document.querySelector('.todo-value');
const addTodoBtn = document.querySelector('.todo-add-btn');
const priority = document.querySelector('select[name=choose-priority]');
const tableHeader = table.querySelector('.todo-header').cloneNode(true);
const deleteBtn = document.querySelector('.todo-delete');

let todoData = JSON.parse(localStorage.getItem('todoData')) || [];

//전체 Todo 출력
const showAllTodo = (todo) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td><input class="todo-check" type="checkbox"></td>
    <td>${todo.priority}</td>
    <td>${todo.completed ? "✅" : "❌"}</td>
    <td class="todo-title">${todo.title}</td>
  `;
  table.appendChild(tr);
}

todoData.forEach((todo)=>{
  showAllTodo(todo)
})

//테이블 다시 그리기
const renderTable = () => {
  table.innerHTML = '';
  table.appendChild(tableHeader.cloneNode(true));
  todoData.forEach(todo => showAllTodo(todo));
}

// Todo 추가
addTodoBtn.addEventListener('click', () => {
  const inputValue = input.value;
  const priorityValue = priority.value;
  
  if (!inputValue || !priorityValue){
    alert('할 일과 중요도 모두 입력해주세요 !')
    return
  };

  const newTodo = {
    id: todoData.length + 1,
    title: inputValue,
    completed: false,
    priority: priorityValue
  }
  
  todoData.push(newTodo)
  localStorage.setItem('todoData', JSON.stringify(todoData));

  input.value = '';
  showAllTodo(newTodo)
})

// Todo 삭제
deleteBtn.addEventListener('click', () => {
  const checkedTodo = document.querySelectorAll('.todo-check:checked');

  checkedTodo.forEach((check) => {
    const tr = check.closest('tr');
    const title = tr.querySelector('.todo-title').textContent;
    todoData = todoData.filter(todo => todo.title !== title);
  })

  localStorage.setItem('todoData', JSON.stringify(todoData));
  renderTable();
})

