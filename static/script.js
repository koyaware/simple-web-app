function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  var taskText = taskInput.value;
  taskInput.value = "";

  var taskItem = document.createElement("li");
  taskItem.appendChild(document.createTextNode(taskText));
  taskList.appendChild(taskItem);
}