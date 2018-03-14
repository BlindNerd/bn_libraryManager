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
const span1 = document.createElement('span');
span1.style.color = 'red';
const span2 = document.createElement('span');
span2.style.color = 'red';
const span3 = document.createElement('span');
span3.style.color = 'red';
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
    title.style.borderColor = 'green';
    }
}); // end of title validation

// author event listener
author.addEventListener('keyup', (e) => {
  if(author.value.length <= 1) {
    e.preventDefault()
    span1.style.display = '';
    span1.textContent = authorMessage;
    errorDiv[1].before(span1);
    author.style.borderColor = 'red';
    }else{
    span1.style.display = 'none';
    author.style.borderColor = 'green';
    }
});// end of author Validation

// genre event listener validation
genre.addEventListener('keyup', (e) => {
  if(genre.value.length <= 1) {
    e.preventDefault()
    span2.style.display = '';
    span2.textContent = genreMessage;
    errorDiv[2].before(span2);
    genre.style.borderColor = 'red';
    }else{
    span2.style.display = 'none';
    genre.style.borderColor = 'green';
    }
});// end of genre Validation

// genre event listener validation
firstPublished.addEventListener('keyup', (e) => {
  let regExp = publishedExp;
  if(!regExp.test(e.target.value)) {
    e.preventDefault()
    span3.style.display = '';
    span3.textContent = firstPublishedMessage;
    errorDiv[3].before(span3);
    firstPublished.style.borderColor = 'red';
    }else{
    span3.style.display = 'none';
    firstPublished.style.borderColor = 'green';
    }
});// end of genre Validation

// add submit listener too keep the form from submiting.
booksForm.addEventListener('submit', (e) => {
  if(title.value.length <= 1){
    e.preventDefault()
    span.style.display = '';
    span.textContent = titleMessage;
    errorDiv[0].before(span);
    title.style.borderColor = 'red';
  }else{
    span.style.display = 'none';
    span.textContentl = '';
    title.style.borderColor = 'green';
  }
  if(author.value.length <= 1){
    e.preventDefault()
    span1.style.display = '';
    span1.textContent = authorMessage;
    errorDiv[1].before(span1);
    author.style.borderColor = 'red';
  }else{
    span1.style.display = 'none';
    span1.textContentl = '';
    author.style.borderColor = 'green';
  }
  if(genre.value.length <= 1){
    e.preventDefault()
    span2.style.display = '';
    span2.textContent = genreMessage;
    errorDiv[2].before(span2);
    genre.style.borderColor = 'red';
  }else{
    span2.style.display = 'none';
    span2.textContentl = '';
    genre.style.borderColor = 'green';
  }
  if(!publishedExp.test(firstPublished.value)){
    e.preventDefault()
    span3.style.display = '';
    span3.textContent = firstPublishedMessage;
    errorDiv[3].before(span3);
    firstPublished.style.borderColor = 'red';
  }else{
    span3.style.display = 'none';
    span3.textContentl = '';
    firstPublished.style.borderColor = 'green';
  }
});// end of submit handler

console.log('Welcome to the new book console I hope you enjoy your stay.');
}); // end of window event listner

 }(); // end of iffy of IIFE
