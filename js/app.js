// target elements
// navbar list (ul)
const navbarList = document.querySelector('#navbar__list')
//sections
let sections = document.querySelectorAll('section')
//links
// let links = document.querySelectorAll('a')


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


//SCROLL

//Single section
// document.addEventListener("scroll",()=>{
//     //get section
//     let section = document.querySelector("section")
//     //use getBoundingClientRect method to get the position of section on the viewport
//     let rec = section.getBoundingClientRect();
//     //select anchor tag
//     let link = document.querySelector("a")
//     //check if the top of the element less than the height of the viewport using window.scrollY && element bottom is larger than 0
//     if(rec.top < window.scrollY && rec.bottom >0){
//         //if true add class active to the anchor tag
//         link.classList.add("active")
//     }else{
//         // if not true remove the class from the anchor tag
//         link.classList.remove("active")
//     } 
// })

document.addEventListener('scroll',()=>{
    //select all the anchor tags
    let links = document.querySelectorAll('a')
    //loop in the NodeList using forEach
    links.forEach(link=>{
        //select the section using link.getAttribute to get the href that will be the same as section id
        let section = document.querySelector(link.getAttribute('href'))
        //use getBoundingClientRect() to get the element position in the viewport
        let rec = section.getBoundingClientRect()
        //make a condition to know if the element in the visible viewport or not 
        //element top larger than or equal 0 
        //&& the element bottom is smaller than or equal the viewport innerHeight
        if(rec.top >= 0 && rec.bottom <= (window.innerHeight) ){
            //if (true) add class active to the anchor tag
            link.classList.add('active')
            console.log(`
                ${section.getAttribute('id')} 
                rec top : ${rec.top}
                rec bottom : ${rec.bottom}
                window innerHeight : ${window.innerHeight}
            ` )
        }else{
            //if (false) remove the class active
            link.classList.remove('active')
        }
    })
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


