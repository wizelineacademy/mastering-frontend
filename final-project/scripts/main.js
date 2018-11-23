import "../styles/main.scss";

// testing that `const` and arrow functions transpile correctly
const before = "Hello -world!";
const after = before
  .split("")
  .filter(char => char !== "-")
  .join("");
console.log({ before });
console.log({ after });

const Carrousel = (htmlSection,container,item,itemC,url) => {

  let selected = container 
  let theURL = url
  let itemTag = item
  let itemClass = itemC
  let section = htmlSection

  const loadCarrouselData = () => { 
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("progress", updateProgress);
    oReq.addEventListener("load", transferComplete);
    oReq.addEventListener("error", transferFailed);
    oReq.addEventListener("abort", transferCanceled);
  
    oReq.open("GET", theURL);
    oReq.send();

    function updateProgress (oEvent) {
      if (oEvent.lengthComputable) {
        var percentComplete = oEvent.loaded / oEvent.total * 100;
      } else {
        // Unable to compute progress information since the total size is unknown
      }
    } 

    function transferComplete(evt){
      let dataFromServer = this.responseText;
      generateCarrouselItem(dataFromServer);
    }

    function transferFailed(evt){
      console.log("An error occurred while transferring the file.");
    }
    
    function transferCanceled (evt){
      console.log("The transfer has been canceled by the user.");
    }

  }

  const generateCarrouselItem = (items) => {
    let jsonItem = JSON.parse(items);
    activatePager(jsonItem.articles.length);
    jsonItem.articles.forEach(element => {
      let htmlTemplate = htmlPart(section,element);
      let carrousel= selected;
      let carrouselContent = carrousel.querySelector('.carrousel__content');
      let asNode =  document.createElement(itemTag);
      asNode.innerHTML =  htmlTemplate;
      asNode.classList= itemClass + " carrousel__content__item";
      carrouselContent.appendChild(asNode);
    });
  }
  
  const currentPage = (page) => {
    let pageNum = page.target.dataset.index;
    let carrousel = selected;
    let carrouselContent = carrousel.querySelector('.carrousel__content');
    let currentlyActive = carrousel.querySelector('.carrousel__controls .page-controller__indicator--active');
    if (currentlyActive) {
      currentlyActive.classList.toggle('page-controller__indicator--active');
    }
    let carrouselVisor = carrousel.querySelector('.carrousel__visor');
    carrouselContent.style.left= (carrouselVisor.clientWidth*pageNum)*-1 +'px';
    page.target.classList.toggle('page-controller__indicator--active');
  }
  
  const activatePager = (numPages)  => {
    let carrousel= selected;
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

  const htmlPart = (section,element) => {
    switch (section) {
      case "blog":
        return `
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
      `
      case "testimonial":
        return `
          <div class="testimonials__gallery__item__quote">
            <blockquote>
              ${element.quote}
            </blockquote>
          </div>
          <div class="testimonials__gallery__item__photo">
              <picture >
                  <img src="${element.image}" alt="Happy user photo">
              </picture>
          </div>
      `
      case "customer":
        return `
        <span class="customers__list__item__${element.name} ">${element.name}</span>
      `
      default:
        break;
    }
  }

  return {loadCarrouselData}

}

let customerClass = "customers__list__item"; 
let customerTag = 'li'
let customerCarrouselElement = document.querySelector('.customers.carrousel');
let customerCarrousel = Carrousel('customer',customerCarrouselElement,customerTag,customerClass,"../data/customers.json");
customerCarrousel.loadCarrouselData();

let blogCarrouselElement = document.querySelector('.blog.carrousel');
let itemTag = 'article';
let itemTagClass = 'blog__content__article';
let blogCarrousel = Carrousel('blog',blogCarrouselElement,itemTag,itemTagClass,"https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog");
blogCarrousel.loadCarrouselData();

let testimonialClass = "testimonials__gallery__item"; 
let testimonialTag = 'div'
let testimonialCarrouselElement = document.querySelector('.testimonials__gallery.carrousel');
let testimonialsCarrousel = Carrousel('testimonial',testimonialCarrouselElement,testimonialTag,testimonialClass,"../data/testimonials.json");
testimonialsCarrousel.loadCarrouselData();
