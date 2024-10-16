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

//Creating an Element(Append)
let creatingNewElement = document.createElement("li");
creatingNewElement.textContent = 'Adding a new list item element and content';
manipulateId.appendChild(creatingNewElement);

let creatingAnotherElement = document.createElement("span");
creatingAnotherElement.textContent = "This is a span tag";
manipulateId.appendChild(creatingAnotherElement);

//Creating an Element as Parent with prepend
let existingChilsElement = document.getElementById("description");

// Create new parent element
let creatingparentElement = document.createElement("div");
creatingparentElement.id = "parent-id";
creatingparentElement.className = "parent-class";

// Insert new parent element before the existing element
existingChilsElement.parentNode.insertBefore(creatingparentElement, existingChilsElement);

// Move the existing element inside the new parent element
creatingparentElement.prepend(existingChilsElement);

//Creating an Element as Parent append
const existingElement = document.getElementById('title');

// Create new parent element
const newParentElement = document.createElement('section');
newParentElement.id = 'container-id'; 
newParentElement.className = 'container-class'; 

// Insert new parent element before the existing element
existingElement.parentNode.insertBefore(newParentElement, existingElement);

// Move the existing element inside the new parent element
newParentElement.appendChild(existingElement);

//Removing an Element
let removingElement = document.getElementsByTagName("ol")[0];
removingElement.parentNode.removeChild(removingElement);

//Attribute -id,class,inhert,hidden,title,contenteditable,style,tabindex,accesskey,data-*

//Get Attribute Value
let existingElementGetClass = document.getElementById("title");
existingElementGetClass.getAttribute("class"); // null

let existingElementGetId = document.getElementById("title");
existingElementGetId.getAttribute("id"); // title

//Set Attribute
let existingElementSetClass = document.getElementById("title");
existingElementSetClass.setAttribute("class", "heading-section");
existingElementSetClass.setAttribute("title", "main-heading");

let existingElementSetId = document.getElementsByClassName('description')[0];
existingElementSetId.setAttribute("id", "desc");
existingElementSetId.setAttribute("tabindex", "1");
existingElementSetId.setAttribute("contenteditable", "false");

//Remove Attribute
existingElementSetId.removeAttribute("contenteditable");
existingElementSetClass.removeAttribute("title");

//Checking if the attribute is present 
let isContenteditableAttributeAvailable = existingElementSetId.hasAttribute("contenteditable");
let isTabindexAttributeAvailable = existingElementSetId.hasAttribute("tabindex");


//Add new class to an existing class attribute
existingElementSetClass.classList.add("dom-interaction");

//Events

//Add Events
existingElementSetId.addEventListener("click", function handleClick(){
    alert("Welcome to DOM manipulation!");
});
function verifyFunction(){
    alert("Content verified...");
}
existingElementSetClass.addEventListener("click", verifyFunction);
const clickGetId = document.getElementById("desc");
function clickFunction(){
    alert("Element clicked successfully...");
}
clickGetId.addEventListener("click", clickFunction);

//Remove Events
clickGetId.removeEventListener("click", clickFunction);

//PreventDefault
const anchorElement = document.getElementsByTagName("a")[0];
anchorElement.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Default action prevented");
});