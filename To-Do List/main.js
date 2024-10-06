const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = taskInput.value;
  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.addEventListener("click", function () {
      listItem.remove();
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
  }
});
