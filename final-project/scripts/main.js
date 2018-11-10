import "../styles/main.scss";
import "../styles/css-loader/scss/index.scss";

const apiUrl = 'https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog';
let articles;
let slideIndicators = [];
let currentArticleIndex = 0;

function bookmark(title, url) {
  if(document.all) { // ie
    window.external.AddFavorite(url, title);
  }
  else if(window.sidebar) { // firefox
    window.sidebar.addPanel(title, url, "");
  }
  else if(window.opera && window.print) { // opera
    var elem = document.createElement('a');
    elem.setAttribute('href', url);
    elem.setAttribute('title', title);
    elem.setAttribute('rel','sidebar');
    elem.click(); // this.title=document.title;
  } else {
    // For the other browsers (mainly WebKit) we use a simple alert to inform users that they can add to bookmarks with ctrl+D/cmd+D
    alert('You can add this page to your bookmarks by pressing ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D on your keyboard.');

  }
}

const setLoader = ({visible}) => {
  const loaderContainer = document.querySelector('.blog .loader-container');
  if (visible) {
    loaderContainer.classList.remove("hidden");
  } else{
    loaderContainer.classList.add('hidden');
  }
};

const renderArticle = (article) => {
  setLoader({visible: false});
  const title = document.querySelector('.blog .slide__title');
  const articleText = document.querySelector('.blog .slide__article');
  const readButton = document.querySelector('.slide .btn--secondary');
  const bookmarkButton = document.querySelector('.slide .bookmark');
  bookmarkButton.removeEventListener('click', () => bookmark(article.title, article.url));
  title.innerHTML = article.title;
  articleText.innerHTML = article.description;
  readButton.href = article.url;
  bookmarkButton.addEventListener('click', () => bookmark(article.title, article.url))
  updateSlideIndicators();
};

const updateSlideIndicators = () => {
  slideIndicators.forEach((indicator, index) => {
    if(index === currentArticleIndex){
      indicator.classList.add('indicator__dot--active');
      indicator.classList.remove('indicator__dot--inactive');
    } else {
      indicator.classList.add('indicator__dot--inactive');
      indicator.classList.remove('indicator__dot--active');
    }
  });
};

window.addEventListener('load', async () => {
  setLoader({visible: true});
  const posts = await fetch(apiUrl);
  posts.json().then(function(data) {
    articles = data.articles;
    renderArticle(articles[currentArticleIndex]);
    for(let i=0; i<articles.length; i++) {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator__dot');
      // indicator.setAttribute('data-index', String(i));
      indicator.addEventListener('click', () => {
        currentArticleIndex = i;
        renderArticle(articles[currentArticleIndex]);
      });
      slideIndicators.push(indicator)
      document.querySelector('.blog .indicator').appendChild(indicator);
    }
    updateSlideIndicators()
  });
}, false );