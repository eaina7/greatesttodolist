import Task from './models/Task.js';
import TaskList from './models/TaskList.js';
import createTodoCard from './functions.js';

// Defining Class Instances

const taskList = new TaskList();

// Select Elements
const addButton = document.getElementById("form-submit");
const todoList = document.querySelector(".task-container");
const form = document.getElementById("todo-form")
// Define Functions
const createTask = (event) => {
    // Prevent default 
    event.preventDefault();
    // Get task details from user
    const taskTitle = document.getElementById("form-task-title").value;
    const taskDescription = document.getElementById("form-task-description").value;
    const taskDueDate = document.getElementById("form-task-duedate").value;
    // clear the form
    form.reset();
    // Create a Task instance
    const task = new Task(taskTitle, taskDescription, taskDueDate);
    // Add the Task to the TaskList
    taskList.addTaskToTaskList(task);
    // Render task HTML
    renderTask(task);
}

// Renders the HTML Card component inside the Tasks Container
const renderTask = (task) => {
    // Creates the task card
    const taskCard = createTodoCard(task._title, task._description, task._dueDate, task.id);
    // Appends the task card in the container 
    todoList.appendChild(taskCard);
}

// Removes task from the Container and from the taskList
const removeTask = (event) => {
    // Selects the whole care where the remove button is clicked 
    const taskCard = event.target.closest(".task-card");
    // Get the task ID 
    const taskID = taskCard.id;
    // Removes the task from taskList
    taskList.removeTask(taskID);
    // Removes task from DOM
    taskCard.remove();
}


// Add Event Listeners
addButton.addEventListener("click", createTask)
// Control Buttons event listeners are added once the Task is created


// Export functions 
export default removeTask;