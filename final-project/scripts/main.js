import "../styles/main.scss";

const articlesUrl = 'https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog'; 

getArticlesFromUrl();

async function getArticlesFromUrl(){
  fetch(articlesUrl)
  .then(resp => resp.json())
  .then(function(data) {
    loadCarousel(data.articles)
  });
}

function loadCarousel(articles){
  articles.forEach((article, index) => {
    // Create image
    var imageDiv = document.createElement('div');
    imageDiv.setAttribute('class', 'blog__content__articles__cards__content__image');
    var image = document.createElement('img');
    image.setAttribute('src', article.images.desktop);
    imageDiv.appendChild(image);
    // Create description
    var descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('class', 'blog__content__articles__cards__content__description');
    var articleTitle = document.createElement('h3');
    articleTitle.setAttribute('class', 'subtitle');
    articleTitle.innerHTML = article.title;
    var articleContent = document.createElement('p');
    articleContent.setAttribute('class', 'paragraph');
    articleContent.innerHTML = article.description;
    descriptionDiv.appendChild(articleTitle);
    descriptionDiv.appendChild(articleContent);
    // Create buttons
    var buttonsDiv = document.createElement('div');
    buttonsDiv.setAttribute('class', 'blog__content__articles__cards__content__description__buttons');
    var readButton = document.createElement('button');
    readButton.setAttribute('class', 'button button-blue-pale');
    readButton.innerHTML = 'Read now';
    var bookmarkButton = document.createElement('button');
    bookmarkButton.setAttribute('class', 'button button-bookmarks');
    bookmarkButton.innerHTML = 'Add to your bookmarks';
    buttonsDiv.appendChild(readButton);
    buttonsDiv.appendChild(bookmarkButton);
    descriptionDiv.appendChild(buttonsDiv);
    // Add to content div
    var containerDiv = document.getElementById('blog_container');
    containerDiv.appendChild(descriptionDiv);
    containerDiv.appendChild(imageDiv);
    // Create dots
    var dot = document.createElement('li');
    dot.setAttribute('class', 'carousel-index__dot');
    dot.addEventListener('click', function(){currentArticle(index + 1)}, false);
    var dotIcon = document.createElement('i');
    dotIcon.setAttribute('class', 'far fa-circle');
    dot.appendChild(dotIcon);
    document.getElementById('dots').appendChild(dot);
  });
  showArticles(articlesIndex);
  // Add event listener to arrows
  var rightArrow = document.getElementById('next-article');
  rightArrow.addEventListener('click', function(){nextArticle(1)}, false);
  var leftArrow = document.getElementById('past-article');
  leftArrow.addEventListener('click', function(){nextArticle(-1)}, false);
}

var articlesIndex = 1;

function nextArticle(index) {
  showArticles(articlesIndex += index);
}

function currentArticle(index) {
  showArticles (articlesIndex = index)
}

function showArticles(number) {
  var articles = document.getElementsByClassName('blog__content__articles__cards__content__description');
  var images = document.getElementsByClassName('blog__content__articles__cards__content__image');
  console.log(images);
  var dots = document.getElementsByClassName('far fa-circle');

  if (number > articles.length) {
    articlesIndex = 1;
  }
  if (number < 1) {
    articlesIndex = articles.length;
  }

  for (var i = 0; i < articles.length; i++) {
    articles[i].style.display = 'none';
    images[i].style.display = 'none';
  }
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('fas fa-circle', '');
  }

  articles[articlesIndex - 1].style.display = 'block';
  images[articlesIndex - 1].style.display = 'inline-flex';
  dots[articlesIndex - 1].className += ' fas fa-circle';
}