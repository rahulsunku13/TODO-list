function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = taskText;

    li.onclick = function () {
        this.classList.toggle("checked");
    };

    document.getElementById("taskList").appendChild(li);

    input.value = ""; // clear box
}
