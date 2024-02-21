const themeChk = document.getElementById('themeChk');

themeChk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
	document.body.classList.toggle('light');
});

const todoList = [];

const todoListElement = document.querySelector("#todoList");

document.querySelector("#add_button").addEventListener("click", addTodoTask);
document.querySelector("#todoInput").addEventListener("keydown", function (e) {
    if (e.keyCode == 13) { // If the user press Enter
        addTodoTask()
    }
});

// Get input values to add todoList
function addTodoTask() {
    const todoText = document.querySelector("#todoInput").value;

    if (todoText == "") {
        // alert("Please enter your task to do");
        todoInput.classList.add("input-error");
    } else {
        todoInput.classList.remove("input-error");
        const todoObject = {
            id: todoList.length,
            todoText: todoText,
            isDone: false,
        };

        // Use unshift to add the recent item on top of the list
        todoList.unshift(todoObject);
        displayTodoTasks();
    }
}

// Toggle value of isDone
function doneTodoTask(todoId) {
    const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);

    todoList[selectedTodoIndex].isDone
        ? (todoList[selectedTodoIndex].isDone = false)
        : (todoList[selectedTodoIndex].isDone = true);
    displayTodoTasks();
}

// Delete todo task from the list
function deleteItem(x) {
    todoList.splice(
        todoList.findIndex((item) => item.id == x),
        1
    );
    displayTodoTasks();
}

// Show todo task in the list
function displayTodoTasks() {
    todoListElement.innerHTML = "";
    document.querySelector("#todoInput").value = "";

    todoList.forEach((item) => {
        const listElement = document.createElement("li");
        const delBtn = document.createElement("i");

        listElement.innerHTML = item.todoText;
        listElement.setAttribute("data-id", item.id);

        delBtn.setAttribute("data-id", item.id);
        delBtn.classList.add("far");
        delBtn.classList.add("fa-trash-alt");
        delBtn.setAttribute("data-id", item.id);

        if (item.isDone) {
            listElement.classList.add("checked");
        }


        listElement.addEventListener("click", function (e) {
            const selectedId = e.target.getAttribute("data-id");
            doneTodoTask(selectedId);
        });

        delBtn.addEventListener("click", function (e) {
            const delId = e.target.getAttribute("data-id");
            deleteItem(delId);
        });


        todoListElement.appendChild(listElement);
        listElement.appendChild(delBtn);
    });

}

// Function to hide tooltip after 2 seconds
function hideTooltipAfterDelay() {
    setTimeout(() => {
        const tooltipText = document.querySelector('.tooltip .tooltiptext');
        tooltipText.style.opacity = 0;
        setTimeout(() => {
            tooltipText.style.visibility = 'hidden';
        }, 300); // Transition duration is 300ms
    }, 2000); // 2 seconds delay
}

// Function to check if todo list is not empty
function isTodoListNotEmpty() {
    return todoList.length > 0;
}

// Event listener to show tooltip and hide it after 2 seconds
document.querySelector('.tooltip').addEventListener('mouseenter', () => {
    const tooltipText = document.querySelector('.tooltip .tooltiptext');
    if (isTodoListNotEmpty()) {
        tooltipText.style.visibility = 'visible';
        tooltipText.style.opacity = 1;
        hideTooltipAfterDelay();
    }
});