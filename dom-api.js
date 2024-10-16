//selecting elements

// selects based on id
const selectId = document.getElementById('title');

//selects based on class
const selectClass = document.getElementsByClassName('description');

//selects based on tag name
const selectTag = document.getElementsByTagName('ol');

//query selector
const selectQuery = document.querySelector('#title');


//manipulating elements
const manipulateId = document.getElementById('title');
manipulateId.innerText = 'updated content';
selectClass.innerHTML = '<i>DOM manipulation</i>';
manipulateId.style.fontFamily = 'Arial';

// Create a new paragraph element
const newParagraph = document.createElement('p');

// Set the text content of the paragraph
newParagraph.textContent = 'This is an added paragraph.';
