const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const result = document.getElementById("result");
const putResultInForX = document.getElementById("putResultInForX");
const putResultInForY = document.getElementById("putResultInForY");
let numericalResult;


add.addEventListener('click', ()=>{
  numericalResult = num1.valueAsNumber + num2.valueAsNumber;
  result.textContent = `The result is: ${numericalResult}`;  
});
subtract.addEventListener('click', ()=>{
  numericalResult = num1.valueAsNumber - num2.valueAsNumber;
  result.textContent = `The result is: ${numericalResult}`;  
});
multiply.addEventListener('click', ()=>{
  numericalResult = num1.valueAsNumber * num2.valueAsNumber;
  result.textContent = `The result is: ${numericalResult}`;  
});
divide.addEventListener('click', ()=>{
  if(num2.valueAsNumber === 0){
    result.textContent = `Cannot divide by 0`;        
  } else {
    numericalResult = num1.valueAsNumber / num2.valueAsNumber;
    result.textContent = `The result is: ${numericalResult}`;
  }  
});
putResultInForX.addEventListener('click', ()=>{
  num1.valueAsNumber = numericalResult;    
});
putResultInForY.addEventListener('click', ()=>{
  num2.valueAsNumber = numericalResult;  
});