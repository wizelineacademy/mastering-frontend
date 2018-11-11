import api from './api';
import Slider from './slider';
import { $ } from './utils';

class Blog {
  constructor() {
    this.sliderContainer = $('#blog-slider');
  }

  createSlides(posts) {
    return posts.map(({description, images, title, url}, index) => (
      `
        <li class="slide" data-id="${index}">
          <div class="card">
            <picture class="card__image">
              <source media="(min-width: 1440px)" srcset="${images.desktop}">
              <source media="(min-width: 1024px)" srcset="${images.desktop}">
              <source media="(min-width: 768px)" srcset="${images.tablet}">
              <img src="${images.mobile}" alt="article image">
            </picture>
            <article class="card__article">
              <h1 class="card__title">${title}</h1>
              <p class="text">${description}</p>
              <div class="card__buttons">
                <a  href="${url}" class="button button--primary-light">
                  Read now
                </a>
                <button class="button button--normal--inverse">
                  Add your bookmarks
                </button>
              </div>
            </article>
          </div>
        </li>
      `
    ));
  }

  async init() {
    const posts = await api.retrieveBlogPosts();
    const slides = this.createSlides(posts);
    const slider = new Slider(this.sliderContainer, slides);
    slider.init();
  }
}

export default Blog;
