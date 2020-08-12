// target elements
// navbar list (ul)
const navbarList = document.querySelector('#navbar__list')
//sections
const sections = document.querySelectorAll('section')



//Loop over the sections : so new sections add to the navbar
sections.forEach((section)=>{
//create new Li
const li = document.createElement('li')
//create new anchor
const link = document.createElement('a')
//use setAttrubute to add link for sections
//use getAttribute() method to get the id of each section
link.setAttribute('href', `#${section.getAttribute("id")}`)
//use textcontent to add section name using getAttribute method from data-nav
link.textContent = section.getAttribute("data-nav")
//add custom CSS class to each new li element
link.setAttribute('class',"menu__link")
//apend li to the navbar ul
navbarList.appendChild(li)
//apend the anchor tag to the li
li.appendChild(link)

})









/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


