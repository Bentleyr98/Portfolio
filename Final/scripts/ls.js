// local storage
export function ls (){
    
    let items = Array();
    let keys = Object.keys(localStorage);
    for(let key of keys) {
        console.log(localStorage.getItem(key));
        items.push(JSON.parse(localStorage.getItem(key)));
        }

    return items;
}