
class ToDo {

    constructor(text, id, tasklist) {
        this.text = text;
        this.tasklist = tasklist;
        this.id = id;
        this.active = false;
      }

      makeTask(){

        //const lab = document.createElement('label');
        const lbl = document.createElement('label');
        lbl.setAttribute('for', 'task' + this.id);

        const task = document.createElement('input');
        task.setAttribute('type', 'checkbox');
        task.setAttribute('id', 'task' + this.id);
        task.setAttribute('value', this.text);
        console.log(this.text);
        const button = document.createElement('button');
        task.setAttribute('value', 'X');

       
        
        lbl.appendChild(task);
        
        this.tasklist.appendChild(lbl);
      
        lbl.appendChild(document.createTextNode(this.text));
        lbl.appendChild(button);
  
        

        console.log(this.tasklist);
        console.log(task);

      }
    

}

export default ToDo;