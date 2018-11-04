import "../styles/main.scss";
import Blog from './blog';
import Faq from './faq';

Blog.initSlider();
Faq.init();

// testing that `const` and arrow functions transpile correctly
const before = "Hello -world!";
const after = before
  .split("")
  .filter(char => char !== "-")
  .join("");
console.log({ before });
console.log({ after });