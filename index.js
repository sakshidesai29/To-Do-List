const taskInput = document.querySelector("#taskInput")
const addTaskBtn = document.querySelector("#addTaskBtn")
const taskList = document.querySelector("#taskList")


addTaskBtn.addEventListener("click", () => {

    const taskText = taskInput.value.trim()
    //if textbox is empty then end the function
    if (taskText === "") return;
    //to create a list item
    const li = document.createElement("li")


    const span = document.createElement("span")
    span.textContent = taskText
    span.addEventListener("click", () => {

        span.classList.toggle("completed")
    })

    //create deletebtn
    // const deleteBtn = document.createElement("button");
    // deleteBtn.textContent = "❌"
    // create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    // Removed inline styles – handled by CSS now
    deleteBtn.style.margin = "10px"
    deleteBtn.style.backgroundColor = "black"

    deleteBtn.addEventListener("click", () => {
        li.remove();
    })

    li.appendChild(span)
    li.appendChild(deleteBtn)
    taskList.appendChild(li)
    taskInput.value = "";
})         