// Your code goes here

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


