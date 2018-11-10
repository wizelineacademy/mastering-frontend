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
    let elem = document.createElement('a');
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
  const mainSlide = document.getElementById('main_slide');
  if (visible) {
    loaderContainer.classList.remove("hidden");
    mainSlide.classList.add("hidden");
  } else{
    loaderContainer.classList.add('hidden');
    mainSlide.classList.remove('hidden');
  }
};

const getImages = (article) => {
  const pictureContainer = document.createElement('picture');
  const viewPorts = [
    {
      viewport: 'desktop',
      mediaQuery: '(min-width: 1024px)',
    },
    {
      viewport: 'tablet',
      mediaQuery: '(min-width: 768px)',
    },
    {
      viewport: 'mobile',
      mediaQuery: '(min-width: 481px)',
    },
    {
      viewport: 'mobile2x',
      mediaQuery: '(min-width: 320px)',
    },
  ];
  viewPorts.forEach((viewPort) => {
    const source = document.createElement('source');
    source.srcset = article.images[viewPort.viewport];
    source.media = viewPort.mediaQuery;
    pictureContainer.appendChild(source);
  });
  const defaultImage = document.createElement('img');
  defaultImage.src = article.images.desktop;
  pictureContainer.appendChild(defaultImage);
  return pictureContainer;
};

const renderArticle = (article) => {
  setLoader({visible: false});
  const title = document.querySelector('.blog .slide__title');
  const articleText = document.querySelector('.blog .slide__article');
  const readButton = document.querySelector('.slide .btn--secondary');
  const bookmarkButton = document.querySelector('.slide .bookmark');
  const imageContainer = document.querySelector('.slide .slide__image');
  bookmarkButton.removeEventListener('click', () => bookmark(article.title, article.url));
  title.innerHTML = article.title;
  articleText.innerHTML = article.description;
  readButton.href = article.url;

  imageContainer.innerHTML = '';
  const pictureContainer = getImages(article);
  imageContainer.appendChild(pictureContainer);

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

const previousArticle = () => {
  setLoader({visible: true});
  if(currentArticleIndex === 0){
    currentArticleIndex = articles.length - 1;
  } else {
    currentArticleIndex -= 1;
  }
  renderArticle(articles[currentArticleIndex]);
};

const nextArticle = () => {
  setLoader({visible: true});
  if(currentArticleIndex === articles.length - 1){
    currentArticleIndex = 0;
  } else {
    currentArticleIndex += 1;
  }
  renderArticle(articles[currentArticleIndex]);
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
      slideIndicators.push(indicator);
      document.querySelector('.blog .indicator').appendChild(indicator);
    }
    updateSlideIndicators();
    const leftArrow = document.querySelector('.slider__control--left');
    const rightArrow = document.querySelector('.slider__control--right');
    leftArrow.addEventListener('click', previousArticle);
    rightArrow.addEventListener('click', nextArticle);
  });
}, false );