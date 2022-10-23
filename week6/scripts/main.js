import ToDo from "./toDos.js";
// import utilities from "./utilities.js";

// const util = new utilities();

let i = 1;

const add = document.getElementById('add');
add.addEventListener('click', addTask);


function addTask(){
    var text = document.getElementById('task');
    var tasklist = document.getElementById('tasklist');
    console.log(tasklist);
    console.log(text.value);
    const todo = new ToDo(text.value, i, tasklist);
    todo.makeTask();
    localStorage.setItem(i, todo);
    console.log(todo);
   
    console.log(todo.text);
    text.value = "";
    i =+1;
    console.log(i);
}

