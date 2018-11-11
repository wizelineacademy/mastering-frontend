const hiddenClassname = "js-hidden";
const elements = document.querySelectorAll(`.${hiddenClassname}`);

if(elements && elements.length) {
  elements.forEach((element) => {
    element.classList.remove(hiddenClassname);
  });
}