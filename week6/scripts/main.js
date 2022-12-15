import ToDo from "./toDos.js";
import ls from "./ls.js";
import {check, uncheck, markComplete} from "./utilities.js";

let i = Date.now();

const add = document.getElementById('add');
add.addEventListener('click', addTask);

var tasks = new Array();

let items = ls();

function addTask(){
    var text = document.getElementById('task');
    var tasklist = document.getElementById('tasklist');
    let active = false;
    const todo = new ToDo(text.value, i, tasklist, active);
    todo.makeTask();
    localStorage.setItem(i, JSON.stringify(todo));
    text.value = "";
    tasks.push(todo);
}

var tasklist = document.getElementById('tasklist');
for( let item of items) {
    let text = item.text;
    let active = item.active;
    let i = item.id;
    let todo = new ToDo(text, i, tasklist, active);
    todo.makeTask();
    if (active == true){
        check(i);
    } else {
        uncheck(i);
    }
};

const boxes = document.querySelectorAll('input');

boxes.forEach(box => {
  box.addEventListener('click', function handleClick(event) {
        items.find(obj => {
        if (obj.id == box.id){
            if(markComplete(obj.id) == true){
                obj.active = true;}
            else{
                obj.active = false;
            }
        localStorage.setItem(obj.id, JSON.stringify(obj));
        console.log(obj);
    }}
    );

    
  });
});
