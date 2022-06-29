// Original image:
// https://dribbble.com/shots/5619509-Animated-Tab-Bar #2cced4

"use strict"; 

const body = document.body;
const bgColorsBody = ["linear-gradient(3deg, #692cd4, #976de0)", "linear-gradient(169deg, #ffe797, #ffc400)", "#9999fb", "#8ce294", "#6e1173"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");
const container = body.querySelector(".container")
const firstSlide = body.querySelector('.first-slide')
const secondSlide = body.querySelector('.second-slide')
const thirdSilde = body.querySelector('.third-slide')
const fourthSilde = body.querySelector('.fourth-slide')
const fifthSilde = body.querySelector('.fifth-slide')
const childOpen = body.querySelectorAll('.childOpen')

function clickItem(item, index) {

    menu.style.removeProperty("--timeOut");
    
    if (activeItem == item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }

    
    item.classList.add("active");
    container.style.background = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
    
    
}
menuItems[0].addEventListener('click',()=>{
    firstSlide.style.display="block"
    secondSlide.style.display="none"
    thirdSilde.style.display="none"
    fourthSilde.style.display="none"
    fifthSilde.style.display="none"
})
menuItems[1].addEventListener('click',()=>{
    firstSlide.style.display="none"
    secondSlide.style.display="flex"
    thirdSilde.style.display="none"
    fourthSilde.style.display="none"
    fifthSilde.style.display="none"
})
menuItems[2].addEventListener('click',()=>{
    firstSlide.style.display="none"
    secondSlide.style.display="none"
    thirdSilde.style.display="flex"
    fourthSilde.style.display="none"
    fifthSilde.style.display="none"
})
menuItems[3].addEventListener('click',()=>{
    firstSlide.style.display="none"
    secondSlide.style.display="none"
    thirdSilde.style.display="none"
    fourthSilde.style.display="flex"
    fifthSilde.style.display="none"
})
menuItems[4].addEventListener('click',()=>{
    firstSlide.style.display="none"
    secondSlide.style.display="none"
    thirdSilde.style.display="none"
    fourthSilde.style.display="none"
    fifthSilde.style.display="block"
})
document.querySelector('.about-button').addEventListener('click',()=>{menuItems[1].click()})
function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.top - menu.offsetTop - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(0,${left} , 0) rotate(270deg)`;

}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
    
})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});

childOpen.forEach((each)=>{each.addEventListener('click',()=>{
    for (let index = 0; index < childOpen.length; index++) {
        if(childOpen[index].classList.contains('open')){

            childOpen[index].classList.remove('open');
        }
        
    }
    each.classList.add('open')
})})

