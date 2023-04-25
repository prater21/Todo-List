const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");

// drag control
draggables.forEach((task) => {
    task.addEventListener("dragstart", () => {
        task.classList.add("is-dragging");
    })
    task.addEventListener("dragend", () => {
        task.classList.remove("is-dragging");
    })
})

// drag over control
droppables.forEach((zone) => {
    zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        const bottomTask = insertAboveTask(zone, e.clientY);
        const curTask = document.querySelector(".is-dragging");

        if (!bottomTask) {
            zone.appendChild(curTask);
        } else {
            zone.insertBefore(curTask, bottomTask);
        }
    })
})

// find close task
const insertAboveTask = (zone, mouseY) => {
    const els = zone.querySelectorAll(".task:not(.is-dragging)");

    let closestTask = null;
    let closestOffset = Number.NEGATIVE_INFINITY;

    els.forEach((task) => {
        const { top } = task.getBoundingClientRect();
        const offset = mouseY - top;

        if (offset < 0 && offset > closestOffset) {
            closestOffset = offset;
            closestTask = task;
        }
    })

    return closestTask;
}

