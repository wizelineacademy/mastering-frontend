/* Slider */

import { $, $$ } from './utils';
class Slider {
  constructor($container, slides) {
    this.$container = $container;
    this.$slidesContainer = null;
    this.$prevButton = null;
    this.$nextButton = null;
    this.$dotButtons = null;
    this.$slides = null;
    this.slides = slides;
    this.action = '';
    this.slideshow = null;
    this.touchStart = null;
    this.touchEnd = null;
  }

  createSliderContainer(slides, dots) {
    const swapSlides = slides.pop();
    slides.unshift(swapSlides);
    return `
      <div class="carousel">
        <div class="carousel__container">
          <button class="button__nav button__nav--left">
            <img src="/assets/images/arrow-left.svg" alt="previous button" />
          </button>
          <section class="cards__viewport">
            <ul class="cards__container">${slides.join('')}</ul>
          </section>
          <button class="button__nav button__nav--right">
            <img src="/assets/images/arrow-right.svg" alt="next button" />
          </button>
        </div>
        <ul class="dots__container">${dots.join('')}</ul>
      </div>
    `;
  }

  createDots(length) {
    const numbers = [...Array(length).keys()];
    return numbers.map((number, i) => (
      `<li class="dot ${i === 0 ? 'dot--active' : ''}" data-id="${number}"></li>`
    ));
  }

  addEndAnimationListener () {
    const self = this;
    const onAnimationEnds = () => {
      ['webkitTransitionEnd','otransitionend'].forEach( event =>
        this.$slidesContainer.removeEventListener(event, onAnimationEnds, false)
      );
      self.animationEnds();
    }
    ['webkitTransitionEnd','otransitionend'].forEach( event =>
      this.$slidesContainer.addEventListener(event, onAnimationEnds, false)
    );
  }

  animationEnds () {
    this.$slidesContainer.classList.remove('animate');
    this.$slidesContainer.classList.remove('move-left');
    this.$slidesContainer.classList.remove('move-right');

    if (this.action === 'prev') {
      const swapSlides = this.slides.pop();
      this.slides.unshift(swapSlides);
    } else if (this.action === 'next') {
      const swapSlides = this.slides.shift();
      this.slides.push(swapSlides);
    }

    this.action = null;
    this.$slidesContainer.innerHTML = this.slides.join('');
    const currentSlide = $$('.slide', this.$container)[1];
    const currentSlideId = currentSlide.getAttribute('data-id');
    const dots = $$('.dot', this.$dotButtons);
    dots.forEach(dot => {
      const id = dot.getAttribute('data-id');
      if (currentSlideId === id) {
        dot.classList.add('dot--active');
      } else {
        dot.classList.remove('dot--active');
      }
    })
  }

  prevSlide () {
    this.action = 'prev';
    this.addEndAnimationListener();
    this.$slidesContainer.classList.add('animate');
    this.$slidesContainer.classList.add('move-left');
  }

  nextSlide () {
    this.action = 'next';
    this.addEndAnimationListener();
    this.$slidesContainer.classList.add('animate');
    this.$slidesContainer.classList.add('move-right');
  }

  swipe() {
    const minSwipeDicestance = 50;
    const swipeDistance = Math.abs(this.touchStart - this.touchEnd);
    if (swipeDistance > minSwipeDicestance) {
      if (this.touchStart < this.touchEnd) this.prevSlide();
      else this.nextSlide();
    }
    this.touchStart = 0;
    this.touchEnd = 0;
  }

  addEventListeners() {
    this.$prevButton = $('.button__nav--left', this.$container);
    this.$nextButton = $('.button__nav--right', this.$container);
    this.$dotButtons = $('.dots__container', this.$container);

    this.$prevButton.addEventListener('click', e => {
      e.preventDefault();
      clearInterval(this.slideshow);
      this.prevSlide();
    });

    this.$nextButton.addEventListener('click', e => {
      e.preventDefault();
      clearInterval(this.slideshow);
      this.nextSlide();
    });

    this.$slidesContainer.addEventListener('touchstart', e => {
      e.preventDefault();
      const touch = e.touches.item(0);
      clearInterval(this.slideshow);
      this.touchStart = touch.clientX;
    });

    this.$slidesContainer.addEventListener('touchend', e => {
        e.preventDefault();
        const touch = e.changedTouches.item(0);
        this.touchEnd = touch.clientX;
        this.swipe();
    });
  }

  initSlideshow() {
    const DELAY_MILLISECONDS_TO_PLAY = 5000;
    const self = this;
    this.slideshow = setInterval(() => {
      self.nextSlide();
    }, DELAY_MILLISECONDS_TO_PLAY);
  }

  init() {
    const sliderLength = this.slides.length;
    const dots = this.createDots(sliderLength);
    const sliderContainer = this.createSliderContainer(this.slides, dots);
    this.$container.innerHTML = sliderContainer;
    this.$slidesContainer = $('.cards__container', this.$container);
    this.addEventListeners();
    this.initSlideshow();
  }
}

export default Slider;
