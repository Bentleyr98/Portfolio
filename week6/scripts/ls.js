// local storage
function ls (){
    
    let items = Array();
    let keys = Object.keys(localStorage);
    for(let key of keys) {
        items.push(JSON.stringify(localStorage.getItem(key)));
        }

    return items;
}

export default ls;