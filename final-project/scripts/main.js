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
  jsonItem.articles.forEach(element => {
    let htmlTemplate = `
      <div class="blog__content__article__image">
        <picture>
            <img src="/reference/assets/sample-blog-entry.png" alt="upload" >
        </picture>
      </div>
      <div class="blog__content__article__info">
        <div  class="blog__content__article__data">
          <header>
            <h1>How start planning</h1>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita provident consequatur quod numquam saepe maiores placeat libero, incidunt nisi unde adipisci dolor nobis nam pariatur quis earum laudantium reprehenderit praesentium.
          </p>
        </div>
        <div class="blog__content__article__actions">
            <button class="blog__content__article__actions__read" >Read Now</button>
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