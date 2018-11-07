
function showAnswer(event){
  const id = event.id.replace("faq-item-","");

  const answerElement = document.getElementById(`faq-item-${id}-answer`);
  const style = window.getComputedStyle(answerElement);
  const currentDisplay = style.getPropertyValue('display');
  toggleDisplay(currentDisplay, answerElement, id);
  hiddeOtherElements(parseInt(id));
}

function toggleDisplay(currentDisplay, element, id){
  const newDisplay = currentDisplay === "none" ? "flex" :"none";
  const newRotation = currentDisplay === "none" ? "rotate(180deg)" : "rotate(360deg)";
  element.style.display = newDisplay;
  const imgElement =  document.getElementById(`faq-item-${id}-img`);
  imgElement.style.transform = newRotation;
}

function hiddeOtherElements(id){
  for(let i = 1; i < 6; i++){
    if(i !== id) {
      document.getElementById(`faq-item-${i}-answer`).style.display = "none";
      document.getElementById(`faq-item-${i}-img`).style.transform = "rotate(360deg)"
    }
  }
}