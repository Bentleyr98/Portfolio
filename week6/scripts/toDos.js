
class ToDo {

    constructor(text, id, tasklist) {
        this.text = text;
        this.tasklist = tasklist;
        this.id = id;
        this.active = false;
      }

      makeTask(){

        // const lab = document.createElement('label');
        const task = document.createElement('input');
        task.setAttribute('type', 'checkbox');
        task.setAttribute('id', 'task' + this.id);
        task.setAttribute('value', this.text);
        console.log(this.text);

        const lbl = document.createElement('label');
        lbl.setAttribute('for', 'task' + this.id);

        lbl.appendChild(document.createTextNode(this.text));
   
        this.tasklist.appendChild(task);
        this.tasklist.appendChild(lbl);

        console.log(this.tasklist);
        console.log(task);

      }
    

}

export default ToDo;