import "../styles/main.scss";
import "../styles/hero-section.scss";
import "../styles/customer-section.scss";
import "../styles/planManage-section.scss";
import "../styles/features-section.scss";
import "../styles/stats-section.scss";
import "../styles/blog-section.scss";
import "../styles/quotes-section.scss";
import "../styles/faq-section.scss";
import "../styles/clouds-section.scss";
import "../styles/newsletter-section.scss";
import "../styles/footer.scss";
import "../styles/responsive.scss";


// testing that `const` and arrow functions transpile correctly
const before = "Hello -world!";
const after = before
  .split("")
  .filter(char => char !== "-")
  .join("");

var currentBlog = 0;
var blogData;
var customerInDisplay = 1;

readBlogData();

function readBlogData() {
  let url = 'https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog';
  fetch(url)
  .then(res => res.json())
  .then((out) => {
    blogData = out;
    modifyBlogData(currentBlog);
    updateSliderColor(currentBlog);
    addButtonListenersBlog();
    addButtonListenersCustomer();
    mediaQueries();
  })
  .catch(err => { throw err });
}

function modifyBlogData(currentBlog) {
  var textSection = document.getElementsByClassName('blog-section__content-text');
  var titleText = textSection[0].getElementsByTagName('h1');
  var paragraphText = textSection[0].getElementsByTagName('p');
  titleText[0].innerHTML = blogData.articles[currentBlog].title;
  paragraphText[0].innerHTML = blogData.articles[currentBlog].description;
  var readButton = document.getElementsByClassName("blog-section__btn-read");
  readButton[0].addEventListener('click', function (event) {
    window.location.replace(blogData.articles[currentBlog].url);
  });
  var image = document.getElementsByClassName("blog-section__content-image");
  image[0].src = blogData.articles[currentBlog].images.desktop;
}

function addButtonListenersBlog() {
  var arrowsBlogSlider = document.querySelector(".blog-section__arrows");
  arrowsBlogSlider.addEventListener("click", updateVisibleBlog, false);
  var buttonsBlogSlider = document.querySelector(".blog-section__slider");
  buttonsBlogSlider.addEventListener("click", updateVisibleBlog, false);
}

function updateVisibleBlog(e) {
  var length = Object.keys(blogData.articles).length;
  if (e.target !== e.currentTarget) {
    var clickedBlog = e.target.id;
    if(clickedBlog === 'right') currentBlog += 1;
    else if(clickedBlog === 'left') currentBlog -= 1;
    else currentBlog = clickedBlog;
    if (currentBlog >= length) currentBlog = 0;
    if (currentBlog < 0) currentBlog = length-1;
    updateSliderColor(currentBlog);
    modifyBlogData(currentBlog);
  }
  e.stopPropagation();
}

function updateSliderColor(currentSlider) {
  var buttons = document.getElementsByClassName("blog-section__slider-btn");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "#D1D6E3";
  }
  buttons[currentSlider].style.backgroundColor = "#5283FF";
}

function addButtonListenersCustomer(){
  var buttonsParent = document.querySelector(".customers-section__slider");
  buttonsParent.addEventListener("click", updateCurrentSlide, false);
}

function updateCurrentSlide(e) {
  if (e.target !== e.currentTarget) {
    var clickedCustomer = e.target.id;
    currentCustomer(clickedCustomer);
  }
  e.stopPropagation();
}


function mediaQueries() {
  var mobile = window.matchMedia("(max-width: 400px)");
  screenWidthChangeMobile(mobile);
  mobile.addListener(screenWidthChangeMobile);

  var tabletPortrait = window.matchMedia("(min-width: 401px) and (max-width: 768px)");
  screenWidthChangeTabletPortrait(tabletPortrait);
  tabletPortrait.addListener(screenWidthChangeTabletPortrait);

  var tabletLandscape = window.matchMedia("(min-width: 769px) and (max-width: 1024px)");
  screenWidthChangeTabletLandscape(tabletLandscape);
  tabletLandscape.addListener(screenWidthChangeTabletLandscape);

  var desktop = window.matchMedia("(min-width: 1025px)");
  screenWidthChangeDesktop(desktop);
  desktop.addListener(screenWidthChangeDesktop);
}

function screenWidthChangeDesktop(desktop){
  if(desktop.matches){
    var x = document.getElementsByClassName("customers-section__images");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
    var image = document.getElementsByClassName("blog-section__content-image");
    image[0].src = blogData.articles[currentBlog].images.desktop;
  }
}

function screenWidthChangeTabletLandscape(tabletLandscape){
  if (tabletLandscape.matches) {
    var image = document.getElementsByClassName("blog-section__content-image");
    image[0].src = blogData.articles[currentBlog].images.tablet;
  }
}

function screenWidthChangeTabletPortrait(tabletPortrait) {
  if (tabletPortrait.matches) {
    var image = document.getElementsByClassName("blog-section__content-image");
    image[0].src = blogData.articles[currentBlog].images.mobile2x;
  }
}

function screenWidthChangeMobile(mobile) {
  if (mobile.matches) {
    displayCustomer(customerInDisplay);
    var image = document.getElementsByClassName("blog-section__content-image");
    image[0].src = blogData.articles[currentBlog].images.mobile;
  }
}

function currentCustomer(n) {
  displayCustomer(customerInDisplay = n);
}
function displayCustomer(n) {
  var i;
  var x = document.getElementsByClassName("customers-section__images");
  var buttons = document.getElementsByClassName("customer-section__slider-btn");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "#D1D6E3";
  }
  x[customerInDisplay-1].style.display = "block";
  buttons[customerInDisplay-1].style.backgroundColor = "#5283FF";
}
