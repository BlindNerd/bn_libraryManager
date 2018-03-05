!function (){
'use strict';
window.addEventListener('DOMContentLoaded', () => {

// sanatize and validate loan inputs
const loanedOn = document.getElementById('loaned_on');
const returnBy = document.getElementById('return_by');
const form = document.getElementsByClassName('loan_form')[0];
const span = document.createElement('span');
const errorElement = document.getElementsByTagName('p');
span.style.color = 'red';
const dateExp = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
const elementArray = [loanedOn, returnBy]
console.log(returnBy);

// add the loaned on listener 
loanedOn.addEventListener('keyup', (e) => {
  let regExp = dateExp;
  if(!regExp.test(e.target.value)){
    e.preventDefault();
    span.style.display = '';
    span.textContent = 'The loaned on field is required ie yyyy-mm-dd';
    errorElement[2].before(span);
    loanedOn.style.borderColor = 'red';
  }else{
    span.style.display = 'none';
    loanedOn.style.borderColor = 'green';
  }
})


// make sure you leave the return by optional
returnBy.addEventListener('keyup', (e) => {
  let regExp = dateExp;
  if(!regExp.test(e.target.value)){
    span.style.display = '';
    span.textContent = 'The return by field is optional but please format ie yyyy-mm-dd.';
    errorElement[3].before(span);
    returnBy.style.borderColor = 'red';
  }else{
    span.style.display = 'none';
    returnBy.style.borderColor = 'green';
  }
})

form.addEventListener('submit', (e) => {
  if(!dateExp.test(loanedOn.value) ){
      e.preventDefault();
      elementArray.map(element => element.style.borderColor = 'red')
  }else{
      elementArray.map(element => element.style.borderColor = 'green')
  }
})

console.log('Welcome to the loans console.');

})// end of loan on window

 }(); // end of iffy of IIFE
