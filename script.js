let firstNum = "";
let secondNum = "";
let operator = null;
let isSecondNum = false;


function add(firstValue, secondValue) {
  return parseFloat(firstValue) + parseFloat(secondValue);
}

function subtract(firstValue, secondValue) {
  return parseFloat(firstValue) - parseFloat(secondValue);
}

function multiply(firstValue, secondValue) {
  return parseFloat(firstValue) * parseFloat(secondValue);
}

function divide(firstValue, secondValue) {
  if (secondValue === 0) {
    return "Error: Cannot divide by zero";
  }
  return parseFloat(firstValue) / parseFloat(secondValue);
}
  

function operate(firstNum,secondNum,operator){
  switch(operator){
    case '+':
      return add(firstNum,secondNum);
    case '-':
      return subtract(firstNum,secondNum);
    case '*':
      return multiply(firstNum,secondNum);
    case '/':
      return divide(firstNum,secondNum);
    default:
      return 'Invalid operator';
  }
}
//Update Display
function addToDisplay(value){
  const display = document.getElementById('display');
  display.value = value;
}

function handleDigitClick(digit){
  if(!isSecondNum){
    firstNum += digit;
    addToDisplay(firstNum);
  }
  else{
    secondNum += digit;
    addToDisplay(secondNum);
  }
}

function handleOperatorClick(op){
  if(firstNum !== ""){
    operator = op;
    isSecondNum = true;
    addToDisplay(operator);
  }
}

function handleEqualsClick(){
  if(firstNum && secondNum && operator){
    const answer = operate(firstNum,secondNum,operator);
    addToDisplay(answer);
    firstNum = answer.toString();
    secondNum = "";
    operator = null;
    isSecondNum = false;
  }
}

function handleClearClick(){
  firstNum = "";
  secondNum = "";
  operator = null;
  isSecondNum = false;
  addToDisplay("");
}



document.querySelectorAll(".digit").forEach((button) => {
  button.addEventListener("click",() => handleDigitClick(button.textContent));
});


document.querySelectorAll(".operators").forEach((button) => {
  button.addEventListener("click",() => handleOperatorClick(button.textContent));
});

document.getElementById("btn-equal-to").addEventListener("click",handleEqualsClick);

document.getElementById("btn-clear").addEventListener("click", handleClearClick);


// //Handle Digits(0-9)
// const digits = document.querySelectorAll('.digit');

// digits.forEach(button => {
//   button.addEventListener('click',() => {
//     if(!isSecondNum){
//       firstNum += button.textContent;
//       addToDisplay(firstNum)
//       console.log('FirstNum: ' + firstNum);
//     }
//     else{
//       secondNum += button.textContent;
//       addToDisplay(secondNum)
//       console.log('Second Num: ' + secondNum)
//     }
//   });
// });

// // Handle operators
// const myOperators = document.querySelectorAll('.operators');
// myOperators.forEach(button => {
//   button.addEventListener('click',() => {
//     if(firstNum !== ""){
//       operator = button.textContent;
//       isSecondNum = true;
//       addToDisplay(operator)
//       console.log('Operator: '+ operator)
//     }
    
    
//   });
// });

// //Equals to click
//   const equal = document.getElementById('btn-equal-to');

//   equal.addEventListener('click',() => {
//     let answer = operate(firstNum,secondNum,operator);
//     addToDisplay(answer);
//     firstNum = answer.toString();
//     secondNum = " ";
//     operator= null; 
//     console.log('answer: '+ answer)
//   })


//   //Clear button
//   const clear = document.getElementById('btn-clear');

//   clear.addEventListener('click',() => {
    
//     let firstNum = "";
//     let secondNum = "";
//     let operator = null;
//     let isSecondNum = false;
//     addToDisplay("");
//   })
  



