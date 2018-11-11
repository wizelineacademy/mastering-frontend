import PrettySlider from "../utils/pretty-slider";
import { handleResponse, responseToHTML, createLoader } from "../utils/our-resources-helpers";

const url = "https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog";
const sliderContainer = document.querySelector(".our-resources .js-slider");
const sliderArrowLeft = document.querySelector(".our-resources .our-resources__posts__arrows__arrow--left");
const sliderArrowRight = document.querySelector(".our-resources .our-resources__posts__arrows__arrow--right");
const sliderDots = document.querySelector(".our-resources .our-resources__posts__dots");

// Insert loader
const loader = createLoader();
sliderContainer.innerHTML = loader;

fetch(url)
  // Let's hope cats videos don't crash Internet
  // and we have enought bandwidth for this request
  .then(handleResponse)

  // Now let's create the HTML for the retrieved posts
  .then(responseToHTML)

  // Inject the resulting html into the our-resources articles wrapper
  .then((html) => {
    sliderContainer.innerHTML = html;
  
    return true;
  })

  // There's only left to turn it into an actual slider ;)
  .then((success) => {
    if(!success) {
      return false;
    }
  
    new PrettySlider(sliderContainer, {
      arrows: {
        left: sliderArrowLeft,
        right: sliderArrowRight
      },
      dots: sliderDots
    });

  });