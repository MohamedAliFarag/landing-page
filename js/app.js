/**
 * Define Global Variables
 * 
*/

// target elements
// navbar list (ul)
const navbarList = document.querySelector('#navbar__list')
//sections
let sections = document.querySelectorAll('section')



/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

//********************** */
//create navbar items dynamically
//********************** */


//Loop over the sections : so new sections add to the navbar
sections.forEach((section)=>{
    //create new Li
    const li = document.createElement('li');
    //create new anchor
    const link = document.createElement('a');
    //use setAttrubute to add data-link for sections
    //use getAttribute() method to get the id of each section
    link.setAttribute('data-link', section.getAttribute("id"));
    //use textcontent to add section name using getAttribute method from data-nav
    link.textContent = section.getAttribute("data-nav");
    //add custom CSS class to each new anchor element
    link.setAttribute('class',"menu__link");
    //apend li to the navbar ul
    navbarList.appendChild(li);
    //apend the anchor tag to the li
    li.appendChild(link);
})


//********************** */
//SCROLL
// Add class 'active' to section when near top of viewport
//********************** */

//add eventlistener on the document type "scroll"
document.addEventListener('scroll',()=>{
    //select all anchor tags
    let links = document.querySelectorAll('a');
    //loop in all anchor tags using forEach
    links.forEach(link=>{
        //select the section using link.getAttribute() method to get the section which have the same anchor tag data-link name
        let section = document.querySelector(`#${link.getAttribute('data-link')}`);
        //use getBoundingClientRect() to get the element position in the viewport
        let position = section.getBoundingClientRect();
        //make a condition to know if the section in the visible viewport or not 
        //section top must be larger than or equal 0 
        //&& the section bottom is smaller than or equal the viewport innerHeight
        if(position.top >= 0 && position.bottom <= (window.innerHeight)){
            //if (true) add class active to the anchor tag using classList.add() method
            link.classList.add('active');
            console.log(`
                ${section.getAttribute('id')} 
                position top : ${position.top}
                position bottom : ${position.bottom}
                window innerHeight : ${window.innerHeight}
            ` )
        }else{
            //if (false) remove the class active using classList.remove() method
            link.classList.remove('active');
        }
    })
})


//********************** */

//scroll to the section when click on the section name on the navbar

//********************** */

//select all navItems
let navItems = document.querySelectorAll('a');
//loop in (navItems using forEach)
navItems.forEach(item=>{
    //add event listener (click) to the nav items
    item.addEventListener("click",()=>{
        //select the section (ID) to scroll to by the same navItem data-link name
        let section = document.getElementById(item.getAttribute('data-link'));
        //use scrollIntoView() method to scroll to the section
        //scrollIntoView() method
        //has an object paramter behavior which control the scrolling speed 
        //also block paramter center : to center the section in the viewport
        section.scrollIntoView({
            behavior : "smooth",
            block : "center"
        })
        console.log(item.getAttribute('data-link'));
    })
})
    



