
function operation (operator, a, b){
  if (operator == "+"){
    return add (a, b)
  }
  else if(operator == "-"){
    return subtract(a,b);
  }
  else if (operator == "x"){
    return multiply(a,b);
  }
  else if (operator == "÷"){
    return divide(a,b);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");
let convertedNum;
let num1 = null;
let num2 = null;
let operator;
let result;

buttons.forEach((button) =>{
  button.addEventListener("click", () =>{
    convertedNum = Number(button.textContent);
    display.textContent = button.textContent;
    if (num1 === null && !Number.isNaN(convertedNum)){
      num1 = convertedNum;
    }
    else if (num2 === null && !Number.isNaN(convertedNum)){
      num2 = convertedNum;
    }
    else if(["+", "-", "x", "÷"].includes(button.textContent)){
      operator = button.textContent;
    }
    else if (button.textContent === "="){
      result = operation(operator, num1, num2);
      display.textContent = result;
      result = 0;
      num1 = null;
      num2 = null;
    }
  })
})

