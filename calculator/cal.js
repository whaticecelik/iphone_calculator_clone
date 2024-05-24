let calculation = '';

function updateCalculation(value) {
  calculation += value ;
  console.log(calculation);
  let result = document.querySelector('.first').innerHTML= `${calculation}`;
} 