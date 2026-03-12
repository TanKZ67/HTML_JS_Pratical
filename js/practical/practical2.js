

//task2
let tasktext = document.getElementById("tasktext")
let taskList = document.getElementById("taskList")


document.getElementById("taskSubmit").addEventListener("click", function () {
    updateList();
})

const updateList = function () {
    
    if (tasktext.value.trim()===""){
        return
    }

    let li = document.createElement("li")
    li.innerText = tasktext.value


    const remove = document.createElement("button")
    remove.innerHTML = "remove"

    const edit=document.createElement("button")
    edit.innerHTML="edit"

    remove.addEventListener("click",function(){
        li.remove()
    })

    taskList.appendChild(li)
    li.appendChild(remove)
    li.appendChild(edit)

    tasktext.value=""
}

