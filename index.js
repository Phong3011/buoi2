var taskList = JSON.parse(localStorage.getItem("taskList"));
console.log(taskList);

function showTasks() {
  var taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = "";

  for (let i = 0; i < taskList.length; i++) {
    var task = taskList[i];
    var listItem = document.createElement("li");
    listItem.textContent = task;
    taskListElement.appendChild(listItem);
  }
}

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var task = taskInput.value.trim()

    if (task !== "") {
        
        localStorage.setItem("taskList" , JSON.stringify(task))
        taskInput.value =""
        showTasks();
    }
}