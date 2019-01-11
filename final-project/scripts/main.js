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
    var slideDiv = document.createElement('div');
    slideDiv.setAttribute('class', 'blog__content__articles__cards__content__description');
    var articleTitle = document.createElement('h3');
    articleTitle.setAttribute('class', 'subtitle');
    articleTitle.innerHTML = article.title;
    var articleContent = document.createElement('p');
    articleContent.setAttribute('class', 'paragraph');
    articleContent.innerHTML = article.description;
    document.getElementById('blog_container').appendChild(slideDiv);
    slideDiv.appendChild(articleTitle);
    slideDiv.appendChild(articleContent);

    //DOTS
    var dot = document.createElement('li');
    dot.setAttribute('class', 'carousel-index__dot');
    dot.addEventListener('click', function(){currentArticle(index + 1)}, false);
    var dotIcon = document.createElement('i');
    dotIcon.setAttribute('class', 'far fa-circle');
    dot.appendChild(dotIcon);
    document.getElementById('dots').appendChild(dot);
  });
  showArticles(articlesIndex);
  // ARROWS
  var rightArrow = document.getElementById('next-article');
  rightArrow.addEventListener('click', function(){nextArticle(1)}, false);
  var leftArrow = document.getElementById('past-article');
  leftArrow.addEventListener('click', function(){nextArticle(-1)}, false);
}

var articlesIndex = 1;

function nextArticle(n) {
  showArticles(articlesIndex += n);
}

function currentArticle(n) {
  showArticles (articlesIndex = n)
}

function showArticles(number) {
  var slides = document.getElementsByClassName('blog__content__articles__cards__content__description');
  var dots = document.getElementsByClassName('far fa-circle');
  if (number > slides.length) {
    articlesIndex = 1;
  }
  if (number < 1) {
    articlesIndex = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // slides.forEach(slide => {
  //   slide.style.display = 'none';
  // });

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('fas fa-circle', '');
  }
  // dots.forEach(dot => {
  //   dot.className = dot.className.replace('far fa-circle');
  // });

  slides[articlesIndex - 1].style.display = 'block';
  dots[articlesIndex - 1].className += ' fas fa-circle';
}