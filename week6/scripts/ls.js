// local storage
function ls (){
    
    let items = Array();
    let keys = Object.keys(localStorage);
    for(let key of keys) {
        let obj = JSON.parse(localStorage.getItem(key))
        if(obj.text){
        items.push(JSON.parse(localStorage.getItem(key)));
        }}

    return items;
}

export default ls;