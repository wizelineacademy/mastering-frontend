

class Slider {
  constructor($container, slides) {
    this.container = $container;
    this.slides = slides;
  }

  static createSliderContainer(slides, dots) {
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

  static createDots(length) {
    const numbers = [...Array(length).keys()];
    return numbers.map(number => (`<li class="dot" data-id="${number}"></li>`));
  }

  init() {
    const sliderLength = this.slides.length;
    const dots = Slider.createDots(sliderLength);
    const sliderContainer = Slider.createSliderContainer(this.slides, dots);
    this.container.innerHTML = sliderContainer;
  }
}

export default Slider;
