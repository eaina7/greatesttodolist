import TaskList from "./models/TaskList.js";

function removeTask(event) {
    const todoCard = event.target.closest(".task-card");
    console.log(todoCard)
    const taskID = todoCard.id;
    // taskList.removeTask(taskID);
    todoCard.remove();
    console.log("This is remove task number: " + taskID)
}

export default removeTask;