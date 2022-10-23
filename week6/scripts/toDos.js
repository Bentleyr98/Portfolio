
class ToDo {

    constructor(text, id, tasklist) {
        this.text = text;
        this.tasklist = tasklist;
        this.id = id;
        this.active = false;
      }


    // implement new instance of task 
    // should have a key, name, and ...

      addTask(){

        // const lab = document.createElement('label');
        const task = document.createElement("input");
        task.setAttribute(value, this.text);
        task.setAttribute(type, "checkbox");
        task.setAttribute(id, 'tasklist');

   
        this.tasklist.appendChild(task);
        // lab.setAttribute(for, "tasks");

      }
    

}

export default ToDo;