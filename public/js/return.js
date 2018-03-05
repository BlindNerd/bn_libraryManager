!function (){
'use strict';
window.addEventListener('DOMContentLoaded', () => {

// validate the return by date
const returnOn = document.getElementsByName('returned_on')[0];
const form = document.getElementsByClassName('return_form')[0];
const span = document.createElement('span');
span.style.color = 'red';
const errorElement = document.getElementsByTagName('p');
const dateExp = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

returnOn.addEventListener('keyup', (e) => {
  let regExp = dateExp;
  if(!regExp.test(e.target.value)){
    e.preventDefault();
    span.style.display = '';
    span.textContent = 'The return on field is required ie yyyy-mm-dd.';
    errorElement[4].before(span);
    returnOn.style.borderColor = 'red';
  }else{
    span.style.display = 'none';
    returnOn.style.borderColor = 'green';
  }
})

form.addEventListener('submit', (e) => {
  if(!dateExp.test(returnOn.value)){
      e.preventDefault();
      returnOn.style.borderColor = 'red';
      span.style.display = '';
      span.textContent = 'All fields are required.'
      errorElement[5].before(span)
  }else{
      span.style.display = 'none';
      returnOn.style.borderColor = 'green';
  }
})
console.log('Welcome the the return console.');
})// end of window listener

 }(); // end of iffy of IIFE
