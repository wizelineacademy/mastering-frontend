import "../styles/main.scss";

// testing that `const` and arrow functions transpile correctly
const before = "Hello -world!";
const after = before
  .split("")
  .filter(char => char !== "-")
  .join("");

var currentBlog = 0;
var data;

readBlogData();

function readBlogData() {
  let url = 'https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog';
  fetch(url)
  .then(res => res.json())
  .then((out) => {
    console.log('Checkout this JSON! ', Object.keys(out.articles).length);
    data = out;
    modifyBlogData(currentBlog);
  })
  .catch(err => { throw err });
}

function modifyBlogData(currentBlog) {
  var textSection = document.getElementsByClassName('blog-section__content-text');
  var titleText = textSection[0].getElementsByTagName('h1');
  var paragraphText = textSection[0].getElementsByTagName('p');
  titleText[0].innerHTML = data.articles[currentBlog].title;
  paragraphText[0].innerHTML = data.articles[currentBlog].description;
  var readButton = document.getElementsByClassName("blog-section__btn-read");
  readButton[0].addEventListener('click', function (event) {
    window.location.replace(data.articles[currentBlog].url);
  });
}

var buttonsBlogSlider = document.querySelector(".blog-section__slider");
buttonsBlogSlider.addEventListener("click", updateVisibleBlog, false);

function updateVisibleBlog(e) {
    if (e.target !== e.currentTarget) {
        var clickedBlog = e.target.id;
        currentBlog = clickedBlog;
        modifyBlogData(currentBlog);
    }
    e.stopPropagation();
}

var buttonsParent = document.querySelector(".customers-section__slider");
buttonsParent.addEventListener("click", updateCurrentCustomer, false);

function updateCurrentCustomer(e) {
    if (e.target !== e.currentTarget) {
        var clickedCustomer = e.target.id;
        currentCustomer(clickedCustomer);
    }
    e.stopPropagation();
}

var customerInDisplay = 1;
var x = window.matchMedia("(max-width: 400px)");
screenWidthChange(x);
x.addListener(screenWidthChange);

function screenWidthChange(x) {
  if (x.matches) {
      displayCustomer(customerInDisplay);
  }
  else {
    var x = document.getElementsByClassName("customers-section__images");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
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
