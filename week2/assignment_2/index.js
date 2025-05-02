import { todos } from "./data.js";

const data = localStorage.getItem('todoData');
if ( !data || JSON.parse(data).length === 0) {
  localStorage.setItem('todoData', JSON.stringify(todos));
}

const table =  document.querySelector('.todo-table');
const input = document.querySelector('.todo-value');
const addTodoBtn = document.querySelector('.todo-add-btn');
const priority = document.querySelector('select[name=choose-priority]');
const checkBtn = document.querySelector('.checked-btn');
const tableHeader = table.querySelector('.todo-header').cloneNode(true);
const deleteBtn = document.querySelector('.todo-delete');
const allCheckBox = document.querySelector('.all-check');
const showAllBtn = document.querySelector('.show-all');
const showCompletedBtn = document.querySelector('.show-completed');
const showIncompleteBtn = document.querySelector('.show-incomplete');
const showPriority = document.querySelector('select[name=show-priority]');

const modal = document.querySelector('.modal');
const modalMessage = document.querySelector('.modal-message');
const modalCloseBtn = document.querySelector('.modal-close-btn');

let todoData = JSON.parse(localStorage.getItem('todoData')) || [];

const createRow = (todo) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td><input class="todo-check" type="checkbox"></td>
    <td>${todo.priority}</td>
    <td>${todo.completed ? "✅" : "❌"}</td>
    <td class="todo-title">${todo.title}</td>
  `;
  table.appendChild(tr);
}

//전체 Todo 출력
const showAllTodo = (todo) => {
  createRow(todo);
}

//완료된 Todo 출력
const showCompletedTodo = (todo) => {
  if(todo.completed){
    createRow(todo);
  }
}

//미완료 Todo 출력
const showIncompleteTodo = (todo) => {
  if(!todo.completed){
    createRow(todo);
  }
}

todoData.forEach((todo)=>{
  showAllTodo(todo)
})

//테이블 다시 그리기
const renderTable = (showTodo) => {
  table.innerHTML = '';
  table.appendChild(tableHeader.cloneNode(true));
  todoData.forEach(todo => showTodo(todo));
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
    id: Date.now(),
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
  renderTable(showAllTodo);
})

// 완료 시키기
checkBtn.addEventListener('click', () => {
  const checkedTodo = document.querySelectorAll('.todo-check:checked');

  let hasCompleted = false;

  checkedTodo.forEach((check) => {
    const tr = check.closest('tr');
    const title = tr.querySelector('.todo-title').textContent;
    const todo = todoData.find((todo) => todo.title === title);

    if (todo && todo.completed) {
      hasCompleted = true;
    }
  });

  if (hasCompleted) {
    showModal('이미 완료된 할 일이 포함되어 있습니다.');
    return;
  }

  checkedTodo.forEach((check) => {
    const tr = check.closest('tr');
    const title = tr.querySelector('.todo-title').textContent;
    const todo = todoData.find((todo) => todo.title === title);

    if (todo) {
      todo.completed = true;
    }
  });

  localStorage.setItem('todoData', JSON.stringify(todoData));
  renderTable(showAllTodo);
});

//모두 check로 변경
allCheckBox.addEventListener('change', () => {
  const todoChecks = document.querySelectorAll('.todo-check');
  todoChecks.forEach((check) => {
    check.checked = allCheckBox.checked;
  });
});

//하나라도 체크 안될시 all-check 반영 해제
table.addEventListener('change', () => {
  const todoChecks = document.querySelectorAll('.todo-check');
  const allChecked = Array.from(todoChecks).every(check => check.checked);

  allCheckBox.checked = allChecked; 
});

//전체 Todo 필터링
showAllBtn.addEventListener('click', () => {
  renderTable(showAllTodo);
})

//완료된 Todo 필터링
showCompletedBtn.addEventListener('click', () => {
  renderTable(showCompletedTodo);
})

//중요도 Todo 필터링
showIncompleteBtn.addEventListener('click', () => {
  renderTable(showIncompleteTodo);
})

showPriority.addEventListener('change', () => {
  const selectedPriority = showPriority.value;
  const filterPriority = (todoData) => {
    if(todoData.priority == selectedPriority){
      createRow(todoData);
    }
  }
  renderTable(filterPriority);
})

const showModal = (message) => {
  modalMessage.textContent = message;
  modal.classList.remove('hidden');
}

// 모달 닫기
modalCloseBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});