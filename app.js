import { add, subtract, multiply, divide } from "./mathUtils.js";

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const resultDisplayElement = document.getElementById("resultElement");
const putResultInForX = document.getElementById("putResultInForX");
const putResultInForY = document.getElementById("putResultInForY");
const controls = document.getElementById("operations");

let x, y, result;

function assignXandYNumericalValues(){
  x = num1.valueAsNumber;
  y = num2.valueAsNumber;  
}

function assignResultToDisplayElement(){
  resultDisplayElement.textContent = `The result is: ${result}`;  
}

function doTheMath(name){
  let theMath;
  switch(name){
    case 'add': 
      theMath = add(x, y);
      break;
    case 'subtract':
      theMath = subtract(x, y);
      break;
    case 'multiply':
      theMath = multiply(x, y);
      break;
    case 'divide':
      theMath = divide(x, y);
      break;    
  }
  return theMath;
}

controls.addEventListener('click', () =>{
  
  assignXandYNumericalValues();
  if (event.target.id === 'putResultInForX'){
    num1.valueAsNumber = result;
  } else if (event.target.id === 'putResultInForY'){
    num2.valueAsNumber = result;
  } else {
    result = doTheMath(event.target.id);
  }
  assignResultToDisplayElement();  
});

// addButton.addEventListener('click', ()=>{
//   assignXandYNumericalValues();
//   result = add(x, y);
//   assignResultToDisplayElement();    
// });
// subtractButton.addEventListener('click', ()=>{
//   assignXandYNumericalValues();
//   result = subtract(x, y);
//   assignResultToDisplayElement();
// });
// multiplyButton.addEventListener('click', ()=>{
//   assignXandYNumericalValues();
//   result = multiply(x, y);
//   assignResultToDisplayElement(); 
// });
// divideButton.addEventListener('click', ()=>{
//   assignXandYNumericalValues();
//   result = divide(x, y);
//   console.log(result);
//   assignResultToDisplayElement();
// });
// putResultInForX.addEventListener('click', ()=>{
//   num1.valueAsNumber = result;    
// });
// putResultInForY.addEventListener('click', ()=>{
//   num2.valueAsNumber = result;  
// });