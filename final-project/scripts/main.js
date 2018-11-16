import "../styles/main.scss";

// testing that `const` and arrow functions transpile correctly
const before = "Hello -world!";
const after = before
  .split("")
  .filter(char => char !== "-")
  .join("");
console.log({ before });
console.log({ after });

// data from
// https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog

carrousel();
function carrousel(){
  let carrousel= document.querySelector('.carrousel');
  let carrouselContent = carrousel.querySelector('.carrousel__content');
  loadCarrouselData();
  let carrouselContentItems = carrouselContent.children;
  console.log(carrouselContentItems );
}
function loadCarrouselData(){
  let oReq = new XMLHttpRequest();

  oReq.addEventListener("progress", updateProgress);
  oReq.addEventListener("load", transferComplete);
  oReq.addEventListener("error", transferFailed);
  oReq.addEventListener("abort", transferCanceled);

  oReq.open("GET", "https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog");
  oReq.send();
}

function generateCarrouselItem(items){
  let jsonItem = JSON.parse(items);
  jsonItem.articles.forEach(element => {
    console.log(element);
  });
}

function updateProgress (oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = oEvent.loaded / oEvent.total * 100;
    console.log(percentComplete);
  } else {
    // Unable to compute progress information since the total size is unknown
  }
}

function transferComplete(evt) {
  console.log("The transfer is complete.");
  let dataFromServer = this.responseText;
  generateCarrouselItem(dataFromServer);
}

function transferFailed(evt) {
  console.log("An error occurred while transferring the file.");
}

function transferCanceled(evt) {
  console.log("The transfer has been canceled by the user.");
}