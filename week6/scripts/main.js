import ToDo from "./toDos.js";
// import utilities from "./utilities.js";

// const util = new utilities();

const add = document.getElementById('add');
add.addEventListener('click', addTask);

function addTask(){
    var text = document.getElementById('task');
    var tasklist = document.getElementById('tasklist');
    console.log(text.value);
    const id = Date.now();
    const task = new ToDo(text.value, id, tasklist);
    localStorage.setItem(id, task);
   
    text.value = "";
}