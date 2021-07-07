// Your code goes here
// **LOGO** //
const logoDrag = document.querySelector(".main-navigation .logo-heading");
logoDrag.addEventListener('drag', (e) => {
logoDrag.style.cursor = "not-allowed";
});

// **NAV** //
const navSelect =document.querySelector(".main-navigation");
    navSelect.addEventListener('dblclick', (e) => {
        navSelect.style.backgroundColor = "lightpink";
    });




// **HEADER TEXT** //
const tranIn = document.querySelectorAll("h2");
tranIn.forEach(a => {
    a.addEventListener("mouseover", e =>{
        a.style.transform ="translate(30px)"
        a.style.transition = 'transform 0.30s'
    });//closes function
});//closes foreach

const tranOut = document.querySelectorAll("h2");
tranOut.forEach(b => {
    b.addEventListener("mouseout", e =>{
        b.style.transform ="translate(0px)"
        b.style.transition = 'transform 0.5s'
    });//closes function
});//closes foreach

// **PARAGRAPHS** //
const paraDouble = document.querySelector(".intro p");
paraDouble.addEventListener('wheel', (e) => {
paraDouble.style.color = "red";
})




// **IMAGES** //
const scaleUp = document.querySelectorAll(".img-content");
scaleUp.forEach(item => {
    item.addEventListener('mouseenter', e => {
        item.style.transform = "scale(1.2)";
    });//closes function
});//closes forEach

const scaleDown = document.querySelectorAll(".img-content");
scaleDown.forEach(item => {
    item.addEventListener('mouseleave', e => {
        item.style.transform = "scale(1.0)";
    });//closes function
});//closes forEach

const noDragging = document.querySelectorAll("img");
noDragging.forEach(dragItems => {
    dragItems.addEventListener('dragstart', e => {
        e.preventDefault();
    });//closes function
});//closes forEach
const copied = document.querySelector(".img-content img");
copied.addEventListener('contextmenu', (e) => {
e.preventDefault();
})

// **BUTTONS** //
const clickDown = document.querySelectorAll(".btn");
clickDown.forEach(items => {
    items.addEventListener('click', e => {
        items.style.boxShadow = "10px 10px 10px lightgrey"
    });//closes function
});//closes forEach



