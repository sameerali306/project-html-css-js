function addTask() {
    const newTask=document.createElement("li")
    const tasklist=document.getElementById("listtask")
    tasklist.appendChild(newTask)
    newTask.textContent=document.getElementById("input").value
    document.getElementById("input").value=""
    deleteTask(newTask)
    
}
function deleteTask(newTask) {
    const deletebtn=document.createElement("button")
    deletebtn.textContent="Delete"
    newTask.appendChild(deletebtn)

    deletebtn.onclick=function () {
        newTask.remove()
        
    }
    
}