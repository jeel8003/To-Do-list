function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.className = "taskText";
    taskText.textContent = taskInput.value;
    taskText.onclick = function () {
      toggleDone(taskItem);
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "deleteBtn";
    deleteBtn.onclick = function () {
      taskItem.remove();  
    };

    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);

    taskInput.value = ""; 
  }

  function toggleDone(element) {
    element.classList.toggle("taskDone");
  }

