class PrettySlider {

  constructor(element, options) {
    const {
      arrows: {
        left: arrowLeft = null,
        right: arrowRight = null
      },
      dots = null
    } = options;
    
    this.current = 0;
    this.total = (element.children.length - 1);
    this.slidesContainer = element;
    this.slidesElements = Array.from(element.children);
    this.dotsContainer = dots;
    this.prevBtn = arrowLeft;
    this.nextBtn = arrowRight;
    this.dots = this.addDots();

    // Events
    this.slideToPrev = this.slideToPrev.bind(this);
    this.slideToNext = this.slideToNext.bind(this);
    this.addEvents();
  }

  addEvents() {
    this.prevBtn.addEventListener("click", this.slideToPrev, false);
    this.nextBtn.addEventListener("click", this.slideToNext, false);
  }

  slideToPrev() {
    this.slideTo(this.current - 1);
  }

  slideToNext() {
    this.slideTo(this.current + 1);
  }

  slideTo(index) {
    if(index > this.total) {
      index = 0;
    } else if(index < 0) {
      index = this.total;
    }

    const newTransformX = `translateX(${ -100 * index }%);`;
    
    this.slidesElements.forEach((slideElement) => {
      slideElement.setAttribute("style", `transform: ${ newTransformX }`);
    });

    this.current = index;
    this.updateDots();
  }

  addDots() {
    const dots = [];
    
    this.slidesElements.map((slide, index) => {
      const dot = createDot(index === 0);
      this.dotsContainer.appendChild(dot);

      dot.addEventListener("click", this.slideTo.bind(this, index));

      dots.push(dot);
    });

    return dots;
  }

  updateDots() {
    this.dots.forEach((dot, index) => {
      if(index !== this.current) {
        dot.classList.remove("active");
      } else {
        dot.classList.add("active");
      }
    });
  }

}

/**
 * createDot
 * 
 * @param {boolean} isActive
 */
function createDot(isActive = false) {
  const dot = document.createElement("span");
  
  dot.classList.add("dot");
  if(isActive) {
    dot.classList.add("active");
  }

  return dot;
}

export default PrettySlider;