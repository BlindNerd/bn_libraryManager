!function (){
'use strict';
window.addEventListener('DOMContentLoaded', () => {

 // grab all elements to validate and sanitize inputs
const title = document.getElementsByName('title')[0];
const author = document.getElementsByName('author')[0];
const genre = document.getElementsByName('genre')[0];
const firstPublished = document.getElementsByName('first_published')[0];
const booksForm = document.getElementsByClassName('book_form')[0];
const errorDiv = document.getElementsByClassName('books'); // dont forget to add index as you code in listeners
const span = document.createElement('span');
span.style.color = 'red';
//const titleExp =
const publishedExp = /\d{4}$/;
const titleMessage = 'The title is required.';
const authorMessage = 'The author is required.';
const genreMessage = 'The genre is required.'
const firstPublishedMessage = 'The first published year is required ie 1977.'
const submitMessage = 'All form fields are required.';
let inputArray = [title, author, genre, firstPublished];

// title validation event listener
title.addEventListener('keyup', (e) => {
  if(title.value.length <= 1) {
    e.preventDefault()
    span.style.display = '';
    span.textContent = titleMessage;
    errorDiv[0].before(span);
    title.style.borderColor = 'red';
    }else{
    span.style.display = 'none';
    title.style.borderColor = 'lightgreen';
    }
}); // end of title validation

// author event listener
author.addEventListener('keyup', (e) => {
  if(author.value.length <= 1) {
    e.preventDefault()
    span.style.display = '';
    span.textContent = authorMessage;
    errorDiv[1].before(span);
    author.style.borderColor = 'red';
    }else{
    span.style.display = 'none';
    author.style.borderColor = 'lightgreen';
    }
});// end of author Validation

// genre event listener validation
genre.addEventListener('keyup', (e) => {
  if(genre.value.length <= 1) {
    e.preventDefault()
    span.style.display = '';
    span.textContent = genreMessage;
    errorDiv[2].before(span);
    genre.style.borderColor = 'red';
    }else{
    span.style.display = 'none';
    genre.style.borderColor = 'lightgreen';
    }
});// end of genre Validation

// genre event listener validation
firstPublished.addEventListener('keyup', (e) => {
  let regExp = publishedExp;
  if(!regExp.test(e.target.value)) {
    e.preventDefault()
    span.style.display = '';
    span.textContent = firstPublishedMessage;
    errorDiv[3].before(span);
    firstPublished.style.borderColor = 'red';
    }else{
    span.style.display = 'none';
    firstPublished.style.borderColor = 'lightgreen';
    }
});// end of genre Validation

// add submit listener too keep the form from submiting.
booksForm.addEventListener('submit', (e) => {
  if(title.value.length <= 1 ||
     author.value.length <= 1 ||
     genre.value.length <= 1 ||
     !publishedExp.test(firstPublished.value)){
     e.preventDefault();
     span.style.display = '';
     span.textContent = submitMessage;
     errorDiv[4].before(span);
     inputArray.map(input => input.style.borderColor = 'red')
  }else{
     span.style.display = 'none';
     inputArray.map(input => input.style.borderColor = 'green')
  }
});

console.log('Welcome to the new book console I hope you enjoy your stay.');
}); // end of window event listner

 }(); // end of iffy of IIFE
