const display = document.getElementById('display');
const digitBtns = document.querySelectorAll('.digit');
const operatorBtns = document.querySelectorAll('.operator');
const clearBtn = document.getElementById('btn-clear');
const equalBtn = document.getElementById('btn-equal');

let num1 = "";
let num2 = "";
let operator = "";
display.value = '';
let activeOperator = null;

function add(num1,num2){
  return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1,num2){
  return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1,num2){
  return parseFloat(num1) * parseFloat(num2);
}

function divide(num1,num2){
  if(num2 === 0){
    return 'Error: Cannot divide with 0!!';
  }
  return parseFloat(num1) / parseFloat(num2);
}

function operate(num1,num2,operator){
  switch(operator){
    case '+':
      return add(num1,num2);
    case '-':
      return subtract(num1,num2);
    case '*':
      return multiply(num1,num2);
    case '/':
      return divide(num1,num2);
    default:
      return 'Error: Invalid operation!!'
  }
}

//Handle Digits
digitBtns.forEach((button) => {
  button.addEventListener('click',() =>{
    display.value += button.textContent;
  });
});

//Handle Operators
operatorBtns.forEach((button) => {
  button.addEventListener('click',() => {
    if(activeOperator){
      activeOperator.classList.remove('operator-active');
    }
    button.classList.add('operator-active');
    activeOperator = button;

    num1 = display.value;
    operator = button.textContent;
    display.value = '';
  })
})

equalBtn.addEventListener('click',() =>{
  if(activeOperator){
    activeOperator.classList.remove('operator-active');
    activeOperator =null;
  }
  num2 = display.value;
  if(num1 && num2 && operator){
    let result = operate(num1,num2,operator);
    display.value = result;
  }

})

clearBtn.addEventListener('click',() => {
  let num1 = "";
  let num2 = "";
  let operator = "";
  display.value = '';
  let activeOperator = null;
})




