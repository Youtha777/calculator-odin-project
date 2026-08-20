
const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");
let convertedNum;
let num1 = [];
let num2 = [];
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

function displayText(n){
  if (n === "AC" && n !== "C"){
    return 0
  }
  
  return Number(n.join(''));
}



buttons.forEach((button) =>{
  button.addEventListener("click", () =>{
    convertedNum = Number(button.textContent);
    if (!num1.length  || operator == null){
          if (!["+", "-", "x", "÷"].includes(button.textContent)){
            num1.push(button.textContent);
            console.log(num1);
            display.textContent = displayText(num1);
          } else{
            operator = button.textContent;
            console.log(operator);
            display.textContent = operator;

          }
    } else if (operator !== null || num2.length === 0){
      if (button.textContent !== "="){
        num2.push(button.textContent);
        console.log(num2);
        display.textContent = displayText(num2);
      } else{
        result = operation(operator, Number(num1.join('')), Number(num2.join('')));
        display.textContent = result;
        result = 0;
        num1 = null;
        num2 = null;
      }
    }else if(button.textContent === "C"){
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

