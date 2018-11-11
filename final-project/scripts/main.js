// import "../styles/main.css";

const $ = (selector) => {
  return document.querySelector(selector)
}
const $$ = (selector) => {
  return document.querySelectorAll(selector)
}

const articlesUrl = 'https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog'

const blogImgElement = $('.main-content \
.blog \
.carousel-container \
.carousel \
.carousel-images')

const blogContentElement = $('.main-content \
.blog \
.carousel-container \
.carousel \
.carousel-content')

const blogButtons = $('.main-content \
.blog \
.carousel-container \
.carousel \
.carousel-content \
.buttons')

const blogIndicators = $('.main-content \
.blog \
.carousel-indicators \
.indicator-list')

const imgUrls = [
  './reference/assets/blog/image_1.jpg',
  './reference/assets/blog/image_2.jpg',
  './reference/assets/blog/image_3.jpg'
]
let articlesData = []

let articleIndex = 0;

function fetchArticles() {
  fetch(articlesUrl)
    .then(res => {
      res.json()        
        .then(({ articles }) => {
          const mappedArticles = articles.map(article => {
            return {            
              title: article.title,
              description: article.description,
              url: article.url
            }
          })
          return mappedArticles
        })
        .then(mappedArticles => {
          articlesData = mappedArticles
          updateArticleContent()
        })
    })
    .catch(error => console.log(error))
}

document.addEventListener('DOMContentLoaded', fetchArticles)

function changeImg() {
  blogImgElement.style.backgroundImage = `url(\"${imgUrls[articleIndex]}\")`
}

function updateArticleContent() {
  const contentElements = Object.values(blogContentElement.children)

  const title = contentElements[0]
  const description = contentElements[1]
  const urlButton = contentElements[2].children[0]

  title.innerText = articlesData[articleIndex].title
  description.innerText = articlesData[articleIndex].description
  urlButton.value = articlesData[articleIndex].url
}

function updateIndicators() {
  const indicatorElements = Object.values(blogIndicators.children)
  
  indicatorElements.forEach((indicator, index) => {
    indicator.classList.remove('active')

    if (index === articleIndex) {
      indicator.classList.add('active')
    }
  })
}

function setBlogContent() {
  updateArticleContent()
  changeImg()
  updateIndicators()
}

function prevImg() {
  if (articleIndex === 0) {
    articleIndex = 2
  } else {
    articleIndex--
  }
  setBlogContent()
}

function nextImg() {
  if (articleIndex === 2) {
    articleIndex = 0
  } else {
    articleIndex++
  }        
  setBlogContent()
}

function openArticle() {
  window.open(
    articlesData[articleIndex].url,
    '_blank'
  )
}