
const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");
let convertedNum;
let num1 = null;
let num2 = null;
let operator;
let result;

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

function clearPrevious (previousNum){
  previousNum = null;
  return previousNum;
}

function clearAll(){
  result = 0;
  num1 = null;
  num2 = null;
  operator = null;
}

function displayText(text){
  if (text !== "AC" && text !== "C"){
    return text;
  }
  return 0;
}



buttons.forEach((button) =>{
  button.addEventListener("click", () =>{
    convertedNum = Number(button.textContent);
    display.textContent = displayText(button.textContent);
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
    else if(button.textContent === "C"){
      if (num2 !== null){
        num2 = clearPrevious(num2);
      } else{
        num1 = clearPrevious(num1);
      }
    }
    else if(button.textContent === "AC"){
      clearAll();
    }
  })
})

