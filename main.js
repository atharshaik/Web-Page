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
x = 20; // 'x' is reassigned to a new value, but 10 itself remains unchanged

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