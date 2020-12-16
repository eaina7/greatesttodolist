// # C L A S S E S
import Task from "./models/Task.js";
import TaskList from "./models/TaskList.js";

// ### Event-Handler: Add a new Task

// Instantiate a TaskList object (takes care of adding task to the list containers)
const taskList = new TaskList();
document
  .querySelector(".button-add-task")
  .addEventListener("click", addTodoCard); // execute funtion addToDoCard



function addTodoCard(event) {
  event.preventDefault(); // prevent from submitting/reload

  // select form-elements needed for task values
  const title = document.querySelector("#form-task-title").value;
  const description = document.querySelector("#form-task-description").value;
  const dueDate = document.querySelector("#form-task-duedate").value;

  // Instantiate a new task
  const task = new Task(title, description, dueDate);

  // prevent form from submitting when fields are empty:
  if (title === "" || description === "" || dueDate === "") {
    const message = "Please add information to all fields.";
    taskList.displayCustomAlert(message, "alert-empty-fields"); //pass message and class of alertType based on event
  } else {
    const message = "New task added to list.";
    taskList.displayCustomAlert(message, "alert-success");

    // Add new task to be displayed on todoList
    // with TaskList method addTaskToList, that creates a card calling 'createTodoCard':
    taskList.addTaskToTaskList(task);

    // CLEAR Form Input.Values
    taskList.clearForm();
  }
}

// removing a task  

const removeTaskFromTaskList = (taskId) => {
  const neededTaskIndex = taskList.list.findIndex(task => task.id === +taskId);
  taskList.list.splice(neededTaskIndex,1);
}

const removeTask = (event) => {
  const todoCard = event.target.closest(".task-card");
  const taskID = todoCard.id;
  removeTaskFromTaskList(taskID);
  todoCard.remove();
}

// checking/unchecking tasks
const checkTaskDone = (event) => {
  const todoCard = event.target.closest(".task-card");
  const taskID = todoCard.id;
  
}



export default removeTask;

// sb-todo:
// intercept dummy clicking causing multiple alerts
// Removing a task 