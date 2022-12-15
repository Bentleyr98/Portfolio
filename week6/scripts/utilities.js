// create a function here that'll create a new task 
// from text area and then clear text area

export function check(id) {
    document.getElementById(id).checked = true;
}

export function uncheck(id) {
    document.getElementById(id).checked = false;
}

export function markComplete(id){
  var x = document.getElementById(id).checked;
  if (x == true){
    return true;
  } else {
    return false;
  }
    
}
      