const name = 'Shaik';
const age = 22;

// concatenation
console.log('My name is ' + name + ' and  i am ' +age + 'years old');

const s = 'My, Name , Is , Shaik, Athar, Pasha'
console.log(s.split(','))


// Arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apple', 'oranges'];

console.log(fruits)
// x = 20; // 'x' is reassigned to a new value, but 10 itself remains unchanged

let y = "hello";
y = y + " world"; // creates a new string "hello world"
console.log(y)


const person = {
    firstName : 'shaik',
    lastName : 'pasha',
    age : 22,
    hobbies : ['Cricket', 'play online games'],
    address : {
        street :  'Hyderabad',
        state : 'Telangana',
        pinCode : '500000',
    }
}
console.log(person.firstName);
console.log(person.hobbies[1]);
console.log(person);
console.log(person.address.pinCode);


// todos
const todos = [ {
    id: 1 ,
    text: 'sample1',
    isCompleted: true
},
{
    id: 2,
    text: 'sample2',
    isCompleted: true
},
{
    id: 3 ,
    text: 'sample3',
    isCompleted: false
}]
console.log(todos);
// json 
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

//for loop
for (let i = 0; i<10; i++){
    console.log(`for loop no is:  ${i}`);
}

// while loop 
let i = 0;
while(i<= 10){
    console.log(`while loop no is : ${i}`);
    i++;
}

// foreach , map, filter 
const todoText = todos.map(function(todo) {
  return todo.text;  
});
console.log(todoText);

// filter

const todoCompleted = todos.filter(function (todo){
    return todo.isCompleted === true;

}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);


// if and else 
const x = 20;
if (x===20){
    console.log('x is 10');
}else if (x>10){
    console.log('x is greater than 10')
}
else{
    console.log('x is not 10')
}

const z = 11;

const color = z>10 ?    'red' : 'blue';
console.log(color); 


// switch case 

switch (color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue')
        break;
}


// functions method 1
function addNums (num1 , num2){
console.log(num1 + num2);
}
addNums(5 , 5);


// functions method 2
function addNums (num1=2, num2= 4){
    return(num1+ num2);
}
console.log(addNums(5,6));


// functions method 3
const addNum= (num1,  num2) => {
    console.log(num1+num2);
}
addNum(5,8);