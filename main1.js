// changing colo of btn 
const btn =  document.querySelector('.btn');
btn.style.background = 'black';

// changing backround color using this qurey 

// btn.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('e')
//     document.querySelector('#my-form').style.background = '#ccc';
    
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        // alert('please enter fields')
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';


        setTimeout(() => msg.remove, 1000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //c;ear fields
        nameInput.value = '';
        emailInput.value = '';
        
    }
    
}


