// # C L A S S E S
import createTodoCard from "../functions.js";

// ### Class TaskList: display / remove / edit task on a list or showing alerts etc.
export default class TaskList {
  // Instantiates an instance of TaskList with an empty array
  constructor() {
    this.list = [];
  }

  // Adds an intance of Task in a taskList
  addTaskToTaskList(task) {
    const lastID =
      this.list.length === 0 ? 0 : this.list[this.list.length - 1].id;
    task.id = lastID + 1;
    this.list.push(task);
    window.localStorage.setItem("task" + task.id, JSON.stringify(task));
  }

  // Removes an intance of Task in a taskList
  removeTask(taskID) {
    const neededTaskIndex = this.list.findIndex((task) => task.id === +taskID);
    this.list.splice(neededTaskIndex, 1);
    window.localStorage.removeItem("task" + taskID);
  }

  // Find task by taskId
  findTask(taskId) {
    const neededTaskIndex = this.list.findIndex((task) => task.id === +taskId);
    return this.list[neededTaskIndex];
  }

  // Marks task as done
  markTaskDone(taskID) {
    // const task = this.findTask(taskID);
    // task.markAsDone();
    const localStorageObject = JSON.parse(
      window.localStorage.getItem("task" + taskID)
    );
    localStorageObject._done = true;
    localStorage.setItem("task" + taskID, JSON.stringify(localStorageObject));
  }
  // Marks task as Undone
  markTaskUnDone(taskID) {
    // const task = this.findTask(taskID);
    // task.markAsUndone();
    const localStorageObject = JSON.parse(
      window.localStorage.getItem("task" + taskID)
    );
    localStorageObject._done = false;
    localStorage.setItem("task" + taskID, JSON.stringify(localStorageObject));
  }
}
