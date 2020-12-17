import { removeTask, moveCard } from './indexOOP.js';

const createTodoCard = (title, description, dueDate, id) => {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("task-card"); // add class to div
  todoDiv.classList.add("task-todo");
  todoDiv.id = id;

  todoDiv.innerHTML = generateInnerHTML(title, description, dueDate, id);
  addEventListeners(todoDiv);

  return todoDiv;
}

const addEventListeners = (todoDiv) => {
  const trashButton = todoDiv.querySelector(".task-delete");
  const editButton = todoDiv.querySelector(".task-edit");
  const checkButton = todoDiv.querySelector(".task-complete");
  
  trashButton.addEventListener("click", removeTask);
  checkButton.addEventListener("click", moveCard);
}

const generateInnerHTML = (title, description, dueDate, id) => {
  return `
  <div class="task-content vertical">
    <h2 class="task-title">${title}</h2>
    <input type="text" placeholder="Title" id="enableInputTitle" maxlength="100" />
    <p class="task-description">${description}</p>
    <textarea placeholder="Description" id="enableInputDesc" maxlength="500" rows="5">
    </textarea>
    <p class="task-duedate">${dueDate}</p>
    <input type="date" placeholder="DueDate" id="enableInputDue" />
    
    <div class="horizontal task-controls task-controls-todo">
      <a href="" class="task-delete"><i class="fas fa-trash-alt" aria-hidden="true"></i></a>
      <a href="" class="task-edit"><i class="fas fa-edit" aria-hidden="true"></i></a>
      <a href="" class="task-complete"><i class="fas fa-check" aria-hidden="true"></i></a>
    </div>
  </div>`
}

export default createTodoCard;