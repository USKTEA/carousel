const leftArrow = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".fa-arrow-right");
const img = document.querySelectorAll(".image-box img")
const imgBox = document.querySelector(".image-box")
const dots = document.querySelectorAll(".dot-item")
const list = document.querySelector(".dot-list")
let index = 0;

function goRight(){
  if(index === img.length-1) {
    for(let i=0;i<5;i++){
    img[i].classList.remove("hidden")
    index = -1;
    };
  }
  if (index < 0) {
  index = index + 1 ;
  }
  else if (index >= 0) {
    img[index].classList.add("hidden");
    index = index +1;
  }
}


function goLeft(){
  if(index<=0) {
    index = img.length-1;
    for(let i=0;i<index;i++){
    img[i].classList.add("hidden")
  }
} else if(index>=0) {
  index = index -1;
  img[index].classList.remove("hidden")
    }
  }

function changeImg(e){
  const number = this.dataset.index;
  for(let i=0;i<img.length-1;i++) {
    img[i].classList.remove("hidden");
    index = Number(number);
  }
  for(let i = 0;i<number;i++) {
    img[i].classList.add("hidden")
    index = Number(number);
    console.log(index)
  }
}


leftArrow.addEventListener("click",goLeft)
rightArrow.addEventListener("click",goRight)
dots.forEach((dot)=>dot.addEventListener("click",changeImg))