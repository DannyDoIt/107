function saveTask() {
    console.log("Saving tasks");
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title, description, color, date, status, budget);

    let taskToSave = new Task(title, description, color, date, status, budget);
    console.log(taskToSave);

    $.ajax({
        type: "POST",
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(taskToSave),
        contentType: "application/json",
        success: function(response) {
            console.log(response);
            displayTask(taskToSave);
            clearInputFields();
        },
        error: function(error) {
            console.log(error);
        }
    });
}

function loadTask() {
    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net/api/tasks",
        success: function(response) {
            let data = JSON.parse(response);
            for (let i = 0; i < data.length; i++) {
                let task = data[i];
                if (task.name == "Danny") {
                    displayTask(task);
                }
            }
        },
        error: function(error) {
            console.log(error);
        }
    });
}

function displayTask(task) {
    let syntax = `<div class='task'>
        <div class='info'>
            <h3>${task.title}</h3>
            <h5>${task.description}</h5>
        </div>
        <label class='status'>${task.status}</label>
        <div class='date-budget'>
            <label>${task.date}</label>
            <label>${task.budget}</label>
        </div>
    </div>`;
    $(".list-task").append(syntax);
}

function deleteAllTasks() {
    $.ajax({
        type: "DELETE",
        url: "http://fsdiapi.azurewebsites.net/api/tasks/clear",
        success: function(response) {
            console.log("All tasks deleted", response);
            $(".list-task").empty();
        },
        error: function(error) {
            console.log("Error deleting tasks", error);
        }
    });
}

function clearInputFields() {
    $("#txtTitle").val('');
    $("#txtDescription").val('');
    $("#selColor").val('');
    $("#selDate").val('');
    $("#selStatus").val('new');
    $("#numBudget").val('');
}

function init() {
    console.log("task manager");
    loadTask();
    $("#btnSave").click(saveTask);
    $("#btnDeleteAll").click(deleteAllTasks);
}

window.onload = init;
