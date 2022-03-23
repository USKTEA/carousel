const leftArrow = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".fa-arrow-right");
const img = document.querySelectorAll(".image-box img")
const imgBox = document.querySelector(".image-box")
const dots = document.querySelectorAll(".dot-item")
const list = document.querySelector(".dot-list")
const imgslide = document.querySelector(".image-slide")

let index = 1;
let size = 0;

function newSize(){
let distance = 0;
for(let i=0;i<index;i++){
    distance = distance + img[i].clientWidth;
}
size = distance;
}
newSize();
imgslide.style.transform = `translateX(-${size}px)`
function slideRight(){
    if(index===6) { 
        index = 1;
        size = 450;
        imgslide.style.transition = "none";
        imgslide.style.transform = `translateX(-${size}px)`;
        newSize();
    } else{
    index = index +1;
    newSize();
    imgslide.style.transition = "transform 0.2s ease-in-out";
    imgslide.style.transform = `translateX(-${size}px)`
    console.log(size)
   }
}

function slideLeft(){
    if(index===0) {
        index = 6;
        size = 2407;
        imgslide.style.transition = "none";
        imgslide.style.transform = `translateX(-${size}px)`;
    } else {
    index = index -1;
    newSize();
    imgslide.style.transition = "transform 0.2s ease-in-out";
    imgslide.style.transform = `translateX(-${size}px)`
   }
}

function slideJump(){
    if(img[index].id === "lastClone") {
        imgslide.style.transition = "none";
        index = img.length -2;
        newSize();
        imgslide.style.transform = `translateX(-${size}px)`;
    }
    if(img[index].id === "firstClone") {
        imgslide.style.transition = "none";
        index = 1;
        newSize();
        imgslide.style.transform = `translateX(-${size}px)`;
    }
}

function changeImg(){
    const number = this.dataset.index;
    imgslide.style.transition = "none";
    index = Number(number);
    newSize();
    imgslide.style.transform = `translateX(-${size}px)`;
  }

imgslide.addEventListener("transitionend",slideJump)
rightArrow.addEventListener("click",slideRight)
leftArrow.addEventListener("click",slideLeft)
dots.forEach((dot)=>dot.addEventListener("click",changeImg))