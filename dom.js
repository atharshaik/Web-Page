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
console.log(items.firstChild);
// firstelemntchild
console.log(items.firstElementChild);
items.firstElementChild.style.backgroundColor = 'red';

console.log(items.firstChild);
// lastelemntchild
console.log(items.lastElementChild);
items.lastElementChild.style.backgroundColor = 'red';