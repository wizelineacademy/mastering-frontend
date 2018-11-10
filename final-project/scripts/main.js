import "../styles/main.scss";
import "../styles/navbar.scss";
import "../styles/hero.scss";
import "../styles/sponsors.scss";
import "../styles/demo.scss";
import "../styles/aboutus.scss";
import "../styles/metrics.scss";
import "../styles/subhero.scss";
import "../styles/newsletter.scss";
import "../styles/bottom-header.scss";
import "../styles/faq.scss";
import "../styles/blog.scss";
import "../styles/testimonials.scss";

// testing that `const` and arrow functions transpile correctly
const before = "Hello -world!";
const after = before
  .split("")
  .filter(char => char !== "-")
  .join("");
