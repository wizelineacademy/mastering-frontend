import "../styles/main.scss";

const url = "https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog";
var articlesIndex = 1;

getArticlesFromUrl();

async function getArticlesFromUrl() {
  fetch(url).then(resp => resp.json()).then(function(data) {
    loadCarousel(data.articles);
  });
}

function loadCarousel(articles) {
  articles.forEach((article, index) => {
    var containerDiv = document.getElementById("carousel_container");

    var descriptionContainer = document.createElement("div");
    descriptionContainer.setAttribute("class", "section__six__carousel__cards__content__description" );
    
    var imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "section__six__carousel__cards__image");

    var buttonsContainer = document.createElement("div");
    buttonsContainer.setAttribute("class", "section__six__carousel__cards__content__description__buttons");
    
    var image = document.createElement("img");
    image.setAttribute("src", article.images.desktop);
    imageContainer.appendChild(image);
    
    var subHeader = document.createElement("h3");
    subHeader.setAttribute("class", "text__subheader section__six__subheader");
    subHeader.innerHTML = article.title;

    var paragraph = document.createElement("p");
    paragraph.setAttribute("class", "text__paragraph section__six__text");
    paragraph.innerHTML = article.description;

    var readButton = document.createElement("button");
    readButton.setAttribute("class", "section__six__carousel__cards__content__description__buttons__readButton");
    readButton.innerHTML = "Read now";
    
    var addButton = document.createElement("button");
    addButton.setAttribute("class", "section__six__carousel__cards__content__description__buttons__addButton");
    addButton.innerHTML = "Add to your bookmarks";

    buttonsContainer.appendChild(readButton);
    buttonsContainer.appendChild(addButton);

    descriptionContainer.appendChild(subHeader);
    descriptionContainer.appendChild(paragraph);
    descriptionContainer.appendChild(buttonsContainer);

    containerDiv.appendChild(descriptionContainer);
    containerDiv.appendChild(imageContainer);

    var dot = document.createElement("div");
    dot.addEventListener("click", function() {
        currentArticle(index + 1);
      });
    document.getElementById("dots").appendChild(dot);
      
    dot.setAttribute("class", "carousel__dot");
  });

  
  var rightArrow = document.getElementById("next");
  rightArrow.addEventListener("click", function() {
    nextArticle(1);
  });
  
  var leftArrow = document.getElementById("previous");
  leftArrow.addEventListener("click", function() {
    nextArticle(-1);
  });
  
  showArticles(articlesIndex);
}

function nextArticle(value) {
  showArticles((articlesIndex += value));
}

function currentArticle(value) {
  showArticles((articlesIndex = value));
}

function showArticles(activeArticle) {
  var articles = document.getElementsByClassName("section__six__carousel__cards__content__description");
  var images = document.getElementsByClassName("section__six__carousel__cards__image");
  var dots = document.getElementsByClassName("carousel__dot");

  if (activeArticle > articles.length) articlesIndex = 1;
  if (activeArticle < 1) articlesIndex = articles.length;

  for (var i = 0; i < articles.length; i++) {
    articles[i].style.display = "none";
    images[i].style.display = "none";
  }

  articles[articlesIndex - 1].style.display = "block";
  images[articlesIndex - 1].style.display = "block";
  
  for(var i = 0; i<dots.length; i++){
    dots[i].setAttribute("class", "carousel__dot");
  }

  dots[articlesIndex - 1].setAttribute("class", "carousel__dot activeDot");

}
