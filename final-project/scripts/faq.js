function faqClick(element) {
    element.classList.toggle("faq__item--selected");
    element.firstElementChild.firstElementChild.classList.toggle("fa-angle-down");
    element.firstElementChild.firstElementChild.classList.toggle("fa-angle-up");   
}
  
  