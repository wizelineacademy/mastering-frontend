import "../styles/main.css";

const $ = (selector) => {
  return document.querySelector(selector)
}
const $$ = (selector) => {
  return document.querySelectorAll(selector)
}

const imgElement = $('.blog .carousel-container .carousel .carousel-images')

const imgUrls = [
  '../reference/assets/blog/image_1.jpg',
  '../reference/assets/blog/image_2.jpg',
  '../reference/assets/blog/image_3.jpg'
]
let currImgIndex = 0;

function changeImg() {  
  imgElement.style.backgroundImage = `url(\'${imgUrls[currImgIndex]}\')`
}

function prevImg() {
  console.log('prev button')
  currImgIndex--;
  changeImg()
}

function nextImg() {
  console.log('next button')
  currImgIndex++;
  changeImg()
}