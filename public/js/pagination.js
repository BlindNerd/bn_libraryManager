!function (){
'use strict';
$(document).ready(() => {
// create pagination and pagination links for pages that show all
const $tableRows = $('.rows');
const numberOfRows = $tableRows.length;
const perPage = 10;
const p = document.createElement('p');
const label = document.createElement('label');
label.value = 'Search';
const searchInput = document.createElement('input');
const numberOfPages = Math.ceil(numberOfRows / perPage);
let pageNumber = 1;

// hide rows when page loads
$tableRows.hide();

// create a pagination function to call on whenever needed
let paginate = (page, rows) => {
  rows.hide();
  for (let i = 0; i <= rows.length; i++ ) {
      if ( i < page * perPage && i > (page - 1) * perPage - 1  ) {
           $(rows[i]).fadeIn(500);
      }
   }// end of for loop
}// end of paginate function
paginate(1, $tableRows) // call paginate when page loads

// create pagination links
let pageLink = (page) => {
  let links = '<div class= pagination_links>';
  links += '<ul class= "pagination"><li class= "pages">';
for (let i = 1; i <= numberOfPages; i++) {
     links += '<li><a href= "#" class= "links">'+ i +'</a></li>';
  }
   links += '</ul></div>';
   $('.tbody').after(links);
}// end of link creation

// only show links when there is more than one page
if(numberOfPages > 1) {
  pageLink(pageNumber);
}

// create a results data to let users know what page they are on.
let activeOnLoad = () => {
  let links = $('.links');
  $(links[0]).addClass('active');
}

activeOnLoad();
// add a click event that paginates through everything
$('.pagination').click((e) => {
    pageNumber = e.target.text;
    $('.links').removeClass('active');
    $(e.target).addClass('active');
    paginate(pageNumber, $tableRows);
  }) // end of click event

  // add a search function
  // build up search HTML
let searchHTML = `<input class= "search" value= "Search" type="text">`;
p.innerHTML = searchHTML;
$('.header').after(p);

$('.search').on("keyup", function() {
  $('.pagination_links').hide();
    let filter1 = $(this).val().toLowerCase();
    $('.rows').each(function() {
        let filter2 = $(this).text().toLowerCase();
        $(this).closest('.rows')[ filter2.indexOf(filter1) !== -1 ? 'show' : 'hide' ]();
    });
})

// create a real time search function to just search the page
console.log('Welcome to the pagination console.');

}); // end of window listener
 }(); // end of iffy of IIFE
