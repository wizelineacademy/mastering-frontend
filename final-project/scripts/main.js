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
  loadCarrouselData();
  
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
  activatePager(jsonItem.articles.length);
  jsonItem.articles.forEach(element => {
    let htmlTemplate = `
      <div class="blog__content__article__image">
        <picture>
            <source srcset="${element.images.desktop}"
            media="(min-width:992px)">
            <source srcset="${element.images.tablet}"
            media="(min-width:768px)">
            <img src="${element.images.mobile}" alt="upload" >
        </picture>
      </div>
      <div class="blog__content__article__info">
        <div  class="blog__content__article__data">
          <header>
            <h1>${element.title}</h1>
          </header>
          <p>
            ${element.description}  
          </p>
        </div>
        <div class="blog__content__article__actions">
            <a href="${element.url}" target="_blank" class="blog__content__article__actions__read" > Read Now </a>
            <button class="blog__content__article__actions__bookmark" >Add to your bookmarks</button>
          </div>
      </div>
    `;
    let carrousel= document.querySelector('.carrousel');
    let carrouselContent = carrousel.querySelector('.carrousel__content');
    let asNode =  document.createElement('article');
    asNode.innerHTML =  htmlTemplate;
    asNode.classList="blog__content__article carrousel__content__item";
    carrouselContent.appendChild(asNode);
  });
}

function updateProgress (oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = oEvent.loaded / oEvent.total * 100;
  } else {
    // Unable to compute progress information since the total size is unknown
  }
}

function transferComplete(evt) {
  let dataFromServer = this.responseText;
  generateCarrouselItem(dataFromServer);
}

function transferFailed(evt) {
  console.log("An error occurred while transferring the file.");
}

function transferCanceled(evt) {
  console.log("The transfer has been canceled by the user.");
}

function currentPage(page){
  let pageNum = page.target.dataset.index;
  let carrousel = document.querySelector('.carrousel');
  let carrouselContent = carrousel.querySelector('.carrousel__content');
  let currentlyActive = carrousel.querySelector('.carrousel__controls .page-controller__indicator--active');
  if (currentlyActive) {
    currentlyActive.classList.toggle('page-controller__indicator--active');
  }
  let carrouselVisor = carrousel.querySelector('.carrousel__visor');
  carrouselContent.style.left= (carrouselVisor.clientWidth*pageNum)*-1 +'px';
  page.target.classList.toggle('page-controller__indicator--active');
}

function activatePager(numPages){
  let carrousel= document.querySelector('.carrousel');
  let carrouselControls = carrousel.querySelector('.carrousel__controls');
  for (let i = 0; i < numPages; i++) {
    let pageNode =  document.createElement('span');
    let addClass = i == 0 ? 'page-controller__indicator page-controller__indicator--active' : 'page-controller__indicator ';
    pageNode.classList= addClass ;
    pageNode.addEventListener("click", currentPage); 
    pageNode.dataset.index = i;
    carrouselControls.appendChild(pageNode);
  }
}