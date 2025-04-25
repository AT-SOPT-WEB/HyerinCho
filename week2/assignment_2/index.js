import { todos } from "./data.js";

if (!localStorage.getItem('todoData') || []) {
  localStorage.setItem('todoData', JSON.stringify(todos));
}

const table =  document.querySelector('.todo-table');
let todoData = JSON.parse(localStorage.getItem('todoData'));

todoData.forEach(todo => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td><input class="todo-check" type="checkbox"></td>
    <td>${todo.priority}</td>
    <td>${todo.completed ? "✅" : "❌"}</td>
    <td class="todo-title">${todo.title}</td>
  `;
  table.appendChild(tr);
});

