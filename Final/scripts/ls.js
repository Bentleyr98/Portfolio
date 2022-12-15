// local storage
export function ls (){
    
    let items = Array();
    let keys = Object.keys(localStorage);
    for(let key of keys) {
        items.push(JSON.parse(localStorage.getItem(key)));
        }

    return items;
}