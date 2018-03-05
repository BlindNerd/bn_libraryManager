!function (){
'use strict';

window.addEventListener('DOMContentLoaded', () => {



// this set of code needs to be in its own folder

// sanitze all inputs
const firstName = document.getElementsByName('first_name')[0];
const lastName = document.getElementsByName('last_name')[0];
const address = document.getElementsByName('address')[0];
const email = document.getElementsByName('email')[0];
const libraryId = document.getElementsByName('library_id')[0];
const zip = document.getElementsByName('zip_code')[0];
const submitButton = document.getElementsByName('submit_button')[0];
const patronsForm = document.getElementsByClassName('patrons_form')[0];
let inputArray = [firstName, lastName, address, email, libraryId, zip];
const span = document.createElement('span');
span.style.color = 'red';
const errorElement = document.getElementsByClassName('patrons');
const nameExp = /^[a-zA-Z ]{2,30}$/;
const addressExp = /^\s*\S+(?:\s+\S+){2}/;
const emailExp = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-||_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+([a-z]+|\d|-|\.{0,1}|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])?([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/;
const zipExp = /^\d{5}(?:[-\s]\d{4})?$/;
const nameMessage = 'The first and last names are required.';
const addressMessage = 'Address is required make sure its a good address.';
const emailMessage = 'Email is required ie foo@bar.com.';
const libMessage = 'Id is required ie MCL1000.';
const zipMessage = 'Zip is required ie 13579.';
const formSubmitMessage = 'You cannot submit this form unless you have all feild filled out'

// create eventListeners on all the inputs tried to write it in a function but doen't keep validating in real time

// first Name event listener
firstName.addEventListener('keyup', (e) => {
  let regExp = nameExp;
    if(!regExp.test(e.target.value)){
      e.preventDefault();
      span.style.display = '';
      span.textContent = nameMessage;
      errorElement[0].before(span);
      firstName.className = '';
      firstName.style.borderColor = 'red';
    }else{
      span.style.display = 'none';
      firstName.style.borderColor = 'green';
    }
  }) // end of keyup event listner

  // last Name event listener
  lastName.addEventListener('keyup', (e) => {
    let regExp = nameExp;
      if(!regExp.test(e.target.value)){
        e.preventDefault();
        span.style.display = '';
        span.textContent = nameMessage;
        errorElement[1].before(span);
        lastName.className = '';
        lastName.style.borderColor = 'red';
      }else{
        span.style.display = 'none';
        lastName.style.borderColor = 'green';
      }
    }) // end of keyup event listner

// add event listner for the address input
    address.addEventListener('keyup', (e) => {
      let regExp = addressExp;
        if(!regExp.test(e.target.value)){
          e.preventDefault();
          span.style.display = '';
          span.textContent = addressMessage;
          errorElement[2].before(span);
          address.className = '';
          address.style.borderColor = 'red';
        }else{
          span.style.display = 'none';
          address.style.borderColor = 'green';
        }
      }) // end of keyup event listner

  // add event listner for the email input
      email.addEventListener('keyup', (e) => {
        let regExp = emailExp;
          if(!regExp.test(e.target.value)){
            e.preventDefault();
            span.style.display = '';
            span.textContent = emailMessage;
            errorElement[3].before(span);
            email.className = '';
            email.style.borderColor = 'red';
          }else{
            span.style.display = 'none';
            email.style.borderColor = 'green';
          }
        }) // end of keyup event listner

    // add event listner for the email input
        libraryId.addEventListener('keyup', (e) => {
            if(e.target.value.length < 7){
              e.preventDefault();
              span.style.display = '';
              span.textContent = libMessage;
              errorElement[4].before(span);
              libraryId.className = '';
              libraryId.style.borderColor = 'red';
            }else{
              span.style.display = 'none';
              libraryId.style.borderColor = 'green';
            }
          }) // end of keyup event listner

    // add event listner for the email input
        zip.addEventListener('keyup', (e) => {
          let regExp = zipExp;
            if(!regExp.test(e.target.value)){
              e.preventDefault();
              span.style.display = '';
              span.textContent = zipMessage;
              errorElement[5].before(span);
              zip.className = '';
              zip.style.borderColor = 'red';
            }else{
              span.style.display = 'none';
              zip.style.borderColor = 'green';
            }
          }) // end of keyup event listner

  // add submit listnener for the patrons form
patronsForm.addEventListener('submit', (e) => {
  if(!nameExp.test(firstName.value) ||
     !nameExp.test(lastName.value) ||
     !addressExp.test(address.value) ||
     !emailExp.test(email.value) ||
     libraryId.value.length < 7 ||
     !zipExp.test(zip.value)) {
          e.preventDefault();
          span.style.display = '';
          span.textContent = formSubmitMessage;
          errorElement[6].before(span);
          inputArray.map(input => input.style.borderColor = 'red')
  }else{
          span.style.display = 'none';
          inputArray.map(input => input.style.borderColor = 'green')
          console.log("All Good");
  }
})



console.log("Hello from patrons.js");
  });// end of content loaded

 }(); // end of iffy of IIFE
