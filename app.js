//here we are selecting all the element
const form = document.querySelector('.form');

const age = document.querySelector('.age');

const demo = document.querySelector('.demo');

const btn = document.querySelector('.btn');

//functions

const ageChecker = function(e){
    //prevent the form from submitting
    e.preventDefault();
    // console.log('hello there');
    let ageValue = age.value.trim();
    // console.log(ageValue);
    ageValue = parseInt(ageValue);
    
   //input validation
   if(isNaN(ageValue)){
      demo.textContent = `Please enter a valid number!`
      demo.classList.add('failed');
      return;
   }

    if(ageValue === 18){
          demo.textContent = '🎉 Congratulations on becoming an adult!';
        ;
        demo.classList.add('success')
    }else if(ageValue >= 18){
        demo.textContent = `✅  Access granted.`;
        demo.classList.add('success')
    }else{
        demo.textContent = '❌ Access denied. You\'re too young.';


        demo.classList.add('failed');
    }
//to clear the input
age.value = '';
}

//event listners 

form.addEventListener('submit', ageChecker);