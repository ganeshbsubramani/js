function addTask(){
    var itemName = document.getElementById('todo-item');
    if(itemName.value==""||itemName.value.trim()=="") {
        alert("Please Enter Item To Be Added.");
        return;
    }
    if(!checkItemInList(itemName.value)){
        addListToItem(itemName.value);
    }else{
        alert("You are trying to add a duplicate item to list");
    }
    itemName.value="";
}

function addListToItem(itemName){
    var uol = document.getElementById('todolist');
    var singlelist = document.createElement('li');
    singlelist.setAttribute('id',itemName);
    singlelist.appendChild(document.createTextNode(itemName));
    uol.appendChild(singlelist);
}

function checkItemInList(itemName){
    var uol = document.getElementById('list');
    if(uol==null) return false;
    for(index=0;index<uol.childNodes.length;index++){
        if(uol.textContent.toLowerCase()===itemName.toLowerCase())return true;
    }
    return false;
}