var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// add del event
itemList.addEventListener('click', removeItem);

// form submitting
form.addEventListener('submit', addItem);


function addItem(e){
    e.preventDefault();
    // console.log('hello');
    var newItem = document.getElementById('item').value;
    // add li with class
    var li = document.createElement('li');
    li.className = 'list-group-item';
    // add text node in li element
    li.appendChild(document.createTextNode(newItem)); 
    
    // add del button

    var delBtn = document.createElement('button');
    // add class name to del btn
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    //add text node to del button
    delBtn.appendChild(document.createTextNode('X'))
    // add li in del btn
    li.appendChild(delBtn);
    
    // add li in items
    itemList.appendChild(li);

}
//function of del event
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li =  e.target.parentElement;
            itemList.removeChild(li);
        }
    }
    console.log()
}