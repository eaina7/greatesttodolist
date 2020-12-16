// # C L A S S E S
import createTodoCard from '../functions.js';

// ### Class TaskList: display / remove / edit task on a list or showing alerts etc.
export default class TaskList {
  
  // Instantiates an instance of TaskList with an empty array
  constructor() {
    this.list = [];
  }

  // Adds an intance of Task in a taskList
  addTaskToTaskList(task) {
    const lastID = this.list.length === 0 ? 0 : this.list[this.list.length - 1].id;
    task.id = lastID + 1;
    this.list.push(task);
  }

  // Removes an intance of Task in a taskList
  removeTask(taskID) {
    const neededTaskIndex = this.list.findIndex(task => task.id === +taskID);
    this.list.splice(neededTaskIndex,1);
  }


  //-- Montaser up --//
  //-----------------//

  // Method - Display alert to prevent from submitting empty form
  displayCustomAlert(message, alertType) {
    // construct alert element, create div
    const div = document.createElement("div");
    // Add class to style alert
    div.classList.add("custom-alert", alertType);
    div.innerText = message; // Add alert text passed by event clicked

    // Select parent and where to display the customAlert
    const mainContainer = document.querySelector("main");
    const form = document.querySelector("#todo-form");
    // display alert IN main BEFORE the form
    // insertBefore takes 2 params: (what to insert (div), before what (form))
    mainContainer.insertBefore(div, form);

    // setTimeout for alert to disappear
    setTimeout(function () {
      document.querySelector(".custom-alert").remove();
    }, 2000);
  }
}
