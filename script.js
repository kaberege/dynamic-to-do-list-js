document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
//localStorage.clear();
    loadTasks();  // Load tasks from localStorage on page load

       // Function to load tasks from localStorage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || '[]');
      //  console.log(storedTasks);
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
    function addTask(taskText, save = true) {
        if (taskText === "") {
            alert("Please! Enter a task.");
        } else {
            const myList = document.createElement("li");
            myList.textContent = taskText;
            const removeButton = document.createElement("button");
            removeButton.classList.add("remove-btn");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", function () {
                let removable = removeButton.parentElement;
                removable.remove();
                const remainTask = [];
                document.querySelectorAll("#task-list li").forEach((value)=>{
                    remainTask.push(value.firstChild.textContent);
                });
                localStorage.setItem("tasks", JSON.stringify(remainTask));
            });

            myList.appendChild(removeButton);
            taskList.appendChild(myList);

            if (save) {
                const storedTasks = JSON.parse(localStorage.getItem("tasks") || '[]');
                storedTasks.push(taskText);
                localStorage.setItem("tasks", JSON.stringify(storedTasks));
               // console.log(storedTasks);
            }
            taskInput.value = "";
        }
    }

    // Event listener for add task button
    addButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        addTask();
        addTask(taskText);
    });

       // Event listener for Enter key press on task input
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const taskText = taskInput.value.trim();
            addTask();
            addTask(taskText);
        }
    });
});