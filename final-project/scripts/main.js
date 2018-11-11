import "../styles/main.scss";

// testing that `const` and arrow functions transpile correctly
const $ = (selector) => document.querySelector(selector);
const $$ = (selectors) => document.querySelectorAll(selectors);


let carouselItems = [];
let paginationPoints = [];

fetch('https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    createBlogStructure(data.articles);
    removeLoader();
    carouselItems[currentCarouselItem].classList.add('carousel__item--active');
    paginationPoints[currentCarouselItem].classList.add('blog__pagination__item--active');
  });
const leftArrow = $('.blog__arrow--left');
const rightArrow = $('.blog__arrow--right');
let currentCarouselItem = 0;

const moveToSide = side => {
  carouselItems[currentCarouselItem].classList.remove('carousel__item--active');
  paginationPoints[currentCarouselItem].classList.remove('blog__pagination__item--active');
  if(side === 'left') {
    currentCarouselItem = currentCarouselItem === 0 ? carouselItems.length - 1 : currentCarouselItem - 1;
  } else { 
    currentCarouselItem = currentCarouselItem === carouselItems.length - 1 ? 0 : currentCarouselItem + 1;
  }
  carouselItems[currentCarouselItem].classList.add('carousel__item--active');
  paginationPoints[currentCarouselItem].classList.add('blog__pagination__item--active');

}

const toggleAnswer = i => {
  const answer = $$('.faq__list__item__answer')[i];
  const arrow = $$('.faq__arrow')[i];
  const question = $$('.faq__list__item__question')[i];
  if(answer.classList.contains('faq__list__item__answer--active')) {
    arrow.src = 'reference/assets/down-arrow.png';
    answer.classList.remove('faq__list__item__answer--active');
    question.classList.remove('faq__list__item__question--active');
  } else {
    arrow.src = 'reference/assets/up-arrow.png';
    answer.classList.add('faq__list__item__answer--active');
    question.classList.add('faq__list__item__question--active');
  }
}

leftArrow.addEventListener('click', () => {
  moveToSide('left');
})

rightArrow.addEventListener('click', () => {
  moveToSide('right');
})

const faqItems = $$('.faq__list__item');
faqItems.forEach((item,index) => {
  item.addEventListener('click', () => {
    toggleAnswer(index);
  })
})

const faqButtons = $$('.faq__list__item__answer__btn');
faqButtons.forEach((button) => {
  button.addEventListener('click', e => e.stopPropagation())
})

const createBlogStructure = blogPosts => {
  const carousel = $('.blog__carousel .carousel');
  const pagination = $('.blog__pagination__bar');
  blogPosts.forEach(post => {
    const div = document.createElement('div');
    const point = document.createElement('li');
    div.className = 'carousel__item';
    div.innerHTML = `
    <div class="carousel__item__container">
    <picture>
      <source class="carousel__item__image" media="(max-width: 768px)" srcset=${post.images.mobile}>
      <source class="carousel__item__image" media="(min-width: 768px) and (max-width: 992px)" srcset=${post.images.mobile2x}>
      <source class="carousel__item__image" media="(min-width: 992px) and (max-width: 1200px)" srcset=${post.images.tablet}>
      <img class="carousel__item__image" src="${post.images.desktop}" alt="ilustrations">
    </picture>
  </div>
  <div class="carousel__item__info">
    <h3 class="carousel__info__title">${post.title}</h3>
    <p class="carousel__info__text">${post.description}</p>
    <div class="carousel__info__buttons">
      <a href="${post.url}">
        <button class="carousel__info__buttons carousel__info__buttons--blue">Read now</button>
      </a> 
      <button class="carousel__info__buttons carousel__info__buttons--light">Add to your bookmarks</button>
    </div>
  </div>
    `
    carousel.appendChild(div);
    point.classList.add('blog__pagination__item');
    pagination.appendChild(point);
  });
  carouselItems = $$('.carousel__item');
  paginationPoints = $$('.blog__pagination__item');

}

const removeLoader = () => {
  const loader = $('.loader-container');
  loader.classList.add('hide');
}