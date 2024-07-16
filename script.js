document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please! Enter a task.");
        } else {
            const myList = document.createElement("li");
            myList.textContent = taskText;
            const removeButton = document.createElement("button");
            removeButton.classList.add("remove-btn");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", function () {
                removeButton.parentElement.remove();
            });
            myList.appendChild(removeButton);
            taskList.appendChild(myList);
            taskInput.value = "";
        }
    }
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
    document.addEventListener("DOMContentLoaded", addTask);
});