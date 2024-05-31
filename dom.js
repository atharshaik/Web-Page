// console.dir(document);;
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 'shaik';
// console.log(document.getElementById('header'));
// header.textcontent = 'hello world';
// // console.log(header);
// header.innertext = 'hello';
// var headerBase = document.getElementById('header');
// headerBase.style.borderBottom = 'solid #ccc 3px';

// // GET ELEMENT BY CLASS

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello' ;
// items[2].style.fontWeight = 'bold';

// for(var i=0; i<items.length; i++){
//     items[i].style.backgrounColor = '#f4f4f4';
// }

// get Element by tagname

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello' ;
// li[2].style.fontWeight = 'bold';

// for(var i=0; i<li.length; i++){
//     li[i].style.backgrounColor = '#f4f4f4';
// }

// var itemList = document.querySelector('#listGroup');
// console.log(itemList);

// firstchild
// console.log(items.firstChild);
// // firstelemntchild
// console.log(items.firstElementChild);
// items.firstElementChild.style.backgroundColor = 'red';

// console.log(items.firstChild);
// // lastelemntchild
// console.log(items.lastElementChild);
// items.lastElementChild.style.backgroundColor = 'red';

// // nextsibling
// console.log(items.nextSibling);

// var newDiv = document.createElement('newDiv');
// // add class 
// newDiv.className = 'shaik';
// // add id 
// newDiv.id = 'hello';
// // add text
// var newDivText = document.createTextNode('this is shaik');
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header, .container');
// var h1 = document.querySelector('header, h1');
// // console.log(newDiv);
 
// container.insertBefore(newDiv, h1);
// newDiv.style.fontSize = '30px';
// newDiv.style.backgroundColor = 'grey';
// console.log(newDiv);

// var button = document.getElementById('btn-block').addEventListener('click' , buttonClick);
// function buttonClick(e){
//     // console.log('btn-block', buttonClick);
//     console.log(e.target);
//     console.log(e.target.id);
//    console.log(e.target.className);
//    console.log(e.target.classList);

//    var output = document.getElementById('output')
//    output.innerHTML= '<h4>'+e.target.tagName+'</h4>';
   
// console.log(e.type);

// console.log(e.clientX);
// }

var box =document.getElementById('box');
box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);
box.addEventListener('mouseover', runEvent);
box.addEventListener('mouseout', runEvent);
box.addEventListener('mousemove', runEvent);
function runEvent(e){
    console.log('Event Type: ' +e.type);

    output.innerHTML = '<h3> MouseX: '+e.offsetX+'</h3><h3> MouseY: '+e.offsetY+'</h3>';
    box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 100)";
}
