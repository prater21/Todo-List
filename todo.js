const form = document.querySelector('#todo-form');
const input = document.querySelector("#todo-input");
const todoLane = document.querySelector("#todo-lane");
// let deleteBtns = document.querySelectorAll(".delete-btn");
const tasks = document.querySelectorAll(".task");

// add new todo
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTodo = input.value;
    if (!newTodo) return;

    const newTask = document.createElement("P");
    const deleteBtn = document.createElement("span");
    newTask.innerText = newTodo;
    newTask.classList.add('task');
    newTask.setAttribute("draggable", "true")

    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = "✕";
    newTask.appendChild(deleteBtn)

    todoLane.appendChild(newTask);

    newTask.addEventListener("dragstart", () => {
        newTask.classList.add("is-dragging");
    })
    newTask.addEventListener("dragend", () => {
        newTask.classList.remove("is-dragging");
    })

    //이벤트 위임을 사용하면 이런거 안해도 됨
    // deleteBtns = document.querySelectorAll(".delete-btn");
    // deleteTasks();

    input.value = '';
})

const lanes = document.querySelector(".lanes");
lanes.addEventListener("click", (event => {
    const deleteBtn = event.target.closest('span')
    if (deleteBtn) {
        deleteBtn.parentNode.remove();
    }
}))

//이벤트 위임을 사용하면 이런거 안해도 됨
//delete todo
// const deleteTasks = () => {
//     deleteBtns.forEach((deleteBtn) => {
//         deleteBtn.addEventListener("click", () => {
//             deleteBtn.parentNode.remove();
//         })
//     })
// }
// deleteTasks();