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

const renderTask = (task) => {
    todoList.appendChild(
      createTodoCard(task._title, task._description, task._dueDate, task.id)
    );
}

const removeTask = (event) => {
    const taskCard = event.target.closest(".task-card");
    const taskID = taskCard.id;
    taskList.removeTask(taskID);
    taskCard.remove();
}


// Add Event Listeners
addButton.addEventListener("click", createTask)
// Control Buttons event listeners are added once the Task is created


// Export functions 
export default removeTask;