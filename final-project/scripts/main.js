import "../styles/main.scss";

// testing that `const` and arrow functions transpile correctly
const before = "Hello -world!";
const after = before
  .split("")
  .filter(char => char !== "-")
  .join("");
console.log({ before });
console.log({ after });

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
