import Task from "./models/Task.js";
import TaskList from "./models/TaskList.js";
import createTodoCard from "./functions.js";

// Defining Class Instances

const taskList = new TaskList();

// Select Elements
const addButton = document.getElementById("form-submit");
const todoList = document.querySelector(".task-container");
const doneList = document.querySelector(".task-container-done");
const form = document.getElementById("todo-form");
// Define Functions

// -------- Creating a task -------- //
const createTask = (event) => {
  // Prevent default
  event.preventDefault();
  // Get task details from user
  const taskTitle = document.getElementById("form-task-title").value;
  const taskDescription = document.getElementById("form-task-description")
    .value;
  const taskDueDate = document.getElementById("form-task-duedate").value;
  // clear the form
  form.reset();
  // Create a Task instance
  const task = new Task(taskTitle, taskDescription, taskDueDate);
  // Add the Task to the TaskList
  taskList.addTaskToTaskList(task);
  // Render task HTML
  renderTask(task);
};

// Renders the HTML Card component inside the Tasks Container
const renderTask = (task) => {
  // Creates the task card
  const taskCard = createTodoCard(
    task._title,
    task._description,
    task._dueDate,
    task.id
  );
  // Appends the task card in the container
  if (task._done === true) {
    const clickItem = taskCard.children[0].children[6].children[2];
    flipCardDesign(taskCard, clickItem);
    doneList.appendChild(taskCard);
  } else {
    todoList.appendChild(taskCard);
  }
};

// -------- Removing a task -------- //
// Removes task from the Container and from the taskList
const removeTask = (event) => {
  event.preventDefault();
  // Selects the whole care where the remove button is clicked
  const taskCard = event.target.closest(".task-card");
  // Get the task ID
  const taskID = taskCard.id;
  // Removes the task from taskList
  taskList.removeTask(taskID);
  // Removes task from DOM
  taskCard.remove();
};

// -------- Checking / Unchecking a task -------- //

const moveCard = (event) => {
  event.preventDefault();
  // Selects the whole card we want to mark as read/unread
  const taskCard = event.target.closest(".task-card");
  // Get the task ID
  const taskID = taskCard.id;
  // Check if the card is comppleted or not and calls needed class method
  const isTaskDone = taskCard.classList.contains("task-done");
  isTaskDone ? taskList.markTaskUnDone(taskID) : taskList.markTaskDone(taskID);
  // Change Card style
  flipCardDesign(taskCard, event.target);
  // Change card taskContainer
  isTaskDone ? todoList.appendChild(taskCard) : doneList.appendChild(taskCard);
};

// Toggles all necessary classes to change card styling
const flipCardDesign = (taskCard, clickItem) => {
  clickItem.classList.toggle("task-uncomplete");
  taskCard.classList.toggle("task-done");
  clickItem.firstChild.classList.toggle("fa-times");
  clickItem.parentElement.classList.toggle("task-controls-done");
  console.log(taskList.list);
};

// -------- Get objects from local storage -------- //
const getItemsFromLocalStorage = () => {
  for (let i = 0; i < localStorage.length; i++) {
    taskList.list.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
};

window.onload = getItemsFromLocalStorage();
console.log(taskList.list);

taskList.list.forEach((el) => {
  renderTask(el);
});

// Add Event Listeners
addButton.addEventListener("click", createTask);
// Control Buttons event listeners are added once the Task is created

// Export functions
export { removeTask, moveCard };
