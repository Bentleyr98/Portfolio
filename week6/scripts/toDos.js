
class ToDo {

    constructor(text, id, tasklist, active) {
        this.text = text;
        this.tasklist = tasklist;
        this.id = id;
        this.active = active;
      }

      makeTask(){

        //const lab = document.createElement('label');
        const lbl = document.createElement('label');
        lbl.setAttribute('for', 'task' + this.id);

        const task = document.createElement('input');
        task.setAttribute('type', 'checkbox');
        task.setAttribute('id', this.id);
        task.setAttribute('value', this.text);
        const button = document.createElement('button');
        button.textContent = "X";

       
        
        lbl.appendChild(task);
        
        this.tasklist.appendChild(lbl);
      
        lbl.appendChild(document.createTextNode(this.text));
        lbl.appendChild(button);

      }
    

}

export default ToDo;