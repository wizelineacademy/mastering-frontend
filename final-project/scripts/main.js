import "../styles/main.scss";


let articleNumber = 0;
let prevArticle = 0;
let blogArticle = null;
let blogArticles = null;
const url = 'https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog';
const dotColored = '#5283FF';
const dotUncolored = '#D1D6E3'

function colorDots () {
  const dots = document.getElementsByClassName('_carousel__dot');
  dots[prevArticle].style.color = dotUncolored;
  dots[articleNumber].style.color = dotColored;
}

function loadContent () {
  blogArticle.title.innerHTML=blogArticles[articleNumber].title;
  blogArticle.description.innerHTML=blogArticles[articleNumber].description;
  blogArticle.url.href = blogArticles[articleNumber].url;
  blogArticle.images.desktop.src = blogArticles[articleNumber].images.desktop;
  blogArticle.images.tablet.src = blogArticles[articleNumber].images.tablet;
  blogArticle.images.mobile2x.src = blogArticles[articleNumber].images.mobile2x;
  blogArticle.images.mobile.src = blogArticles[articleNumber].images.mobile;
  colorDots();
}

function finishLoading() {
  document.getElementById("loading_blog").style.display = "none";
  document.getElementById("carousel_icons").style.display = "unset";
  document.getElementById("blog__carousel").style.display = "flex";
  document.getElementById("blog__btn__prev").onclick = loadPrev;
  document.getElementById("blog__btn__next").onclick = loadNext;
}

function loadNext() {
  prevArticle = articleNumber;
  if (articleNumber+1 >= blogArticles.length){
    articleNumber = 0;
  }else{
    articleNumber++;
  }
  loadContent();
}

function loadPrev() {
  prevArticle = articleNumber;
  if (articleNumber === 0){
    articleNumber = blogArticles.length-1;
  }else{
    articleNumber--;
  }
  loadContent();
}

const getSiteElements = new Promise(
  (resolve) => {
    window.onload = function () {
      const article = {
        title: document.getElementById("blog_title"),
        description: document.getElementById("blog_description"),
        url: document.getElementById("blog_url"),
        images: {
          desktop: document.getElementById("blog_img_desktop"),
          tablet: document.getElementById("blog_img_tablet"),
          mobile2x: document.getElementById("blog_img_mobile_2x"),
          mobile: document.getElementById("blog_img_mobile")
        }
      };
      resolve(article);
    }
  }
);

async function getData() {
  return new Promise(
    (resolve) => {
      fetch(url)
        .then(function(response) {
          resolve(response.json());
        })
    }
  )
}

async function setData() {
  try {
    // console.log('starting');

    let article = await getSiteElements;
    let blogData = await getData(article);

    blogArticle = article;
    blogArticles = blogData.articles;
    loadContent();
    finishLoading();

  }catch(error){
    console.log(error.message);
  }
}


(async () => {
  await setData();
})();
