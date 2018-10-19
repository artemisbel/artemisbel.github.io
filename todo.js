var mkList = function (taskName, dueDate, priority) {
            var liElem = document.createElement ("li");         //create <li></li>
            liElem.textContent = `${taskName} --> ${dueDate}`;  //<li> a task-->due date </li>
            liElem.classList.add ("list-group-item");           //<li class="list-group-item"> a task-->due date
            if (priority == "high") {
                liElem.classList.add ("priority-high");
            } else if (priority == "medium") {
                liElem.classList.add ("priority-medium");
            } else {
                liElem.classList.add ("priority-low");
            }
            return (liElem);
}


var ADD = document.querySelector ("#addBtn");
ADD.addEventListener (
    'click',
    function (){
        var taskElem = document.querySelector ("#task");
        var dueDateElem = document.querySelector ("#due-date");
        var priorityElem = document.querySelector ("#priority");
        var todoElem = mkList(taskElem.value,dueDateElem.value, priorityElem.value);
        var todoListElem = document.querySelector ("#todolist");
        todoListElem.appendChild(todoElem);
        taskElem.value=null;
        dueDateElem.value=null;
        priorityElem.value=null;
        }
)