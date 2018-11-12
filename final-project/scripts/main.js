import "../styles/main.scss";
import Blog from './blog';
import { $ } from './utils';

class App {
  constructor() {
    this.blogSection = $('.section.blog');
    this.blog = new Blog();
  }

  init() {
    const DELAY_MILLISECONDS_TO_INIT = 3000;
    const blog = this.blog;
    this.blogSection.style.display = 'flex';
    setTimeout(() => blog.init(), DELAY_MILLISECONDS_TO_INIT);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.init();
});
