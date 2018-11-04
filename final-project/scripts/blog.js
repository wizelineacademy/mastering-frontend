import Api from './api';

class Blog {
    constructor() {
        this.blogApi         = new Api('https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog');
        this.articles        = [];
        this.slider          = document.querySelector('#blog__slider');
        this.slidesContainer = document.querySelector('#blog__slider__slides');
        this.leftArrow       = document.querySelector('#blog__slider__left-arrow');
        this.rightArrow      = document.querySelector('#blog__slider__right-arrow');
        this.preLoader       = document.querySelector('#blog__pre-loader');
        this.sliderControls  = document.querySelector('#blog__slider__controls');
        this.currentSlide    = 0;
        this.totalSlides     = 0;
        this.touchStartX     = 0;
        this.touchEndX       = 0;
    }

    async fetchBlogArticles () {
        const {success, data} = await this.blogApi.get();
        if (!success) {
            return [];
        }
        return data;
    }

    moveSlider (target) {
        const slides    = document.querySelectorAll('.blog__slider__slide'); // reference to the slides
        const controls  = document.querySelectorAll('#blog__slider__controls li a'); // reference to the dots
        
        // Hide the current slide and display the new selected one
        slides[this.currentSlide].classList.add('blog__slider__slide--hidden');
        slides[target].classList.remove('blog__slider__slide--hidden'); 
    
        // Remove the selected class from the current dot and add it to the new selected one
        controls.forEach(el => {
            el.classList.remove('selectted');
        });
        controls[target].classList.add('selectted');
        this.currentSlide = target;
    }

    nextSlide () {
        const target = this.currentSlide < (this.totalSlides - 1) ? (parseInt(this.currentSlide) + 1) : 0;
        this.moveSlider(target); 
    }

    previousSlide () {
        const target = this.currentSlide > 0 ? (this.currentSlide - 1) : (this.totalSlides - 1);
        this.moveSlider(target); 
    }

    swipeSlide () {
        const swipeLength = this.touchStartX > 0 ? Math.abs(this.touchStartX - this.touchEndX) : 0;
        if (swipeLength === 0 || swipeLength < 40) {
            return;
        }
        if (this.touchStartX < this.touchEndX) {
            this.previousSlide();
        } else {
            this.nextSlide();
        }
        this.touchStartX = 0;
        this.touchEndX   = 0;
    }

    setSliderEventListeners () {
        this.sliderControls.addEventListener('click', e => {
            e.preventDefault();
            if (e.target.tagName === 'A') {
                this.moveSlider(e.target.getAttribute('data-slide'));
            }
        });

        this.leftArrow.addEventListener('click', e => {
            e.preventDefault();
            this.previousSlide();
        });

        this.rightArrow.addEventListener('click', e => {
            e.preventDefault();
            this.nextSlide();
        });

        this.slidesContainer.addEventListener('touchstart', e => {
            e.preventDefault();
            const touch = e.touches.item(0);
            this.touchStartX = touch.clientX;
        });

        this.slidesContainer.addEventListener('touchend', e => {
            e.preventDefault();
            const touch = e.changedTouches.item(0);
            this.touchEndX = touch.clientX;
            this.swipeSlide();
        });
    }

    createSlides () {
        let slides = '';
        let controls = '';
        this.articles.forEach((item, index) => {
            slides += `<div class='blog__slider__slide ${index > 0 ? 'blog__slider__slide--hidden' : ''}'>
                            <div class='blog__slider__slide__section'>
                                <img src='${item.images.desktop}' />
                            </div>
                            <div class='blog__slider__slide__section'>
                                <h2>${item.title}</h2>
                                <p>${item.description}</p>
                                <div class='buttons'>
                                    <a href='${item.url}' class='button button--blue'>Read now</a>
                                    <span class='button'>Add your bookmarks</span>
                                </div>
                            </div>
                        </div>`
            
            controls += `<li><a href='#' data-slide='${index}' class='${index === 0 ? 'selectted' : ''}'></a></li>`;
        });
        this.slidesContainer.innerHTML = slides;
        this.sliderControls.innerHTML = controls;
    }

    async initSlider () {
        this.articles = await this.fetchBlogArticles();
        this.totalSlides = this.articles.length;

        this.createSlides();
        this.setSliderEventListeners();
        
        setTimeout(() => {
            this.preLoader.classList.add('pre-loader--hidden');
            this.slider.classList.remove('blog__slider--hidden');
        } ,1000);
        
        
    }
}

export default new Blog();