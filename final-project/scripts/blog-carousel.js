const Direction = {
  NEXT: 1,
  PREV: -1
};

export class BlogCarousel {
  constructor() {
    this.carouselIndicatorsEl = null;
    this.carouselItemsEl = null;
    this.carouselPrevCtrlEl = null;
    this.carouselNextCtrlEl = null;
  }

  async init(carouselHostEl) {
    const carouselInnerEl = document.createElement("div");
    carouselInnerEl.setAttribute("class", "carousel__inner");

    this.carouselItemsEl = document.createElement("div");
    this.carouselItemsEl.setAttribute("class", "carousel__items");

    this.carouselPrevCtrlEl = document.createElement("a");
    this.carouselPrevCtrlEl.innerHTML = `<i class="icon--arrow-prev"></i>`;
    this.carouselPrevCtrlEl.setAttribute("class", "carousel__control-prev");

    this.carouselNextCtrlEl = document.createElement("a");
    this.carouselNextCtrlEl.innerHTML = `<i class="icon--arrow-next"></i>`;
    this.carouselNextCtrlEl.setAttribute("class", "carousel__control-next");

    carouselInnerEl.appendChild(this.carouselPrevCtrlEl);
    carouselInnerEl.appendChild(this.carouselItemsEl);
    carouselInnerEl.appendChild(this.carouselNextCtrlEl);

    this.carouselIndicatorsEl = document.createElement("ol");
    this.carouselIndicatorsEl.setAttribute("class", "carousel__indicators");

    carouselHostEl.classList.add("carousel");

    // Fetch blog entries and create <article> elements
    carouselHostEl.classList.add("wave-spread");
    const entries = await this.getBlogEntries();
    entries.forEach(this.addArticle.bind(this));
    carouselHostEl.classList.remove("wave-spread");

    carouselHostEl.appendChild(carouselInnerEl);
    carouselHostEl.appendChild(this.carouselIndicatorsEl);

    this.addEventListeners();
  }

  addEventListeners() {
    this.carouselPrevCtrlEl.addEventListener("click", event => {
      this.slide(Direction.PREV);
    });

    this.carouselNextCtrlEl.addEventListener("click", event => {
      this.slide(Direction.NEXT);
    });
  }

  async getBlogEntries() {
    const response = await fetch(
      "https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog"
    );

    // Simulate a long request to get the loader displayed
    return new Promise(resolve =>
      setTimeout(async () => resolve((await response.json()).articles), 3000)
    );
  }

  addArticle(article, index) {
    const articleEl = document.createElement("article");
    articleEl.setAttribute("class", "carousel__item");
    articleEl.innerHTML = `
        <figure class="carousel__item__img--mobile">
          <img src="${article.images.mobile}">
        </figure>
        <figure class="carousel__item__img--mobile2x">
          <img src="${article.images.mobile2x}">
        </figure>
        <figure class="carousel__item__img--tablet">
          <img src="${article.images.tablet}">
        </figure>
        <figure class="carousel__item__img--desktop">
          <img src="${article.images.desktop}">
        </figure>
        <div class="carousel__item__content">
          <div class="carousel__item__text">
            <h1 href="${
              article.url
            }" target="_blank" class="carousel__item__title">
            ${article.title}
            </h1>
            <p class="carousel__item__description">${article.description}</p>
          </div>
          <div class="carousel__item__button-group">
            <a href="${article.url}" target="_blank" class="btn--primary">
              Read now
            </a>
            <a href="#" class="carousel__item__bookmarks-lnk">
              Add to your bookmarks
            </a>
          <div>
        <div>
      `;
    this.carouselItemsEl.appendChild(articleEl);

    const indicatorEl = document.createElement("li");
    indicatorEl.setAttribute("data-index", index);
    indicatorEl.addEventListener("click", this.onIndicatorClick.bind(this));
    this.carouselIndicatorsEl.appendChild(indicatorEl);

    if (index === 0) {
      indicatorEl.classList.add("active");
      articleEl.classList.add("active");
    }
  }

  onIndicatorClick(event) {
    const selectedIndex = event.target.getAttribute("data-index");

    const activeIndicators = this.carouselIndicatorsEl.querySelectorAll(
      ".active"
    );
    activeIndicators.forEach(i => {
      if (i.classList.contains("active")) {
        i.classList.remove("active");
      }
    });

    const activeItems = this.carouselItemsEl.querySelectorAll(".active");
    activeItems.forEach(i => {
      if (i.classList.contains("active")) {
        i.classList.remove("active");
      }
    });

    this.carouselIndicatorsEl.children[selectedIndex].classList.add("active");
    this.carouselItemsEl.children[selectedIndex].classList.add("active");
  }

  slide(direction) {
    const finalIndex = this.carouselIndicatorsEl.children.length - 1;
    const activeIndicators = this.carouselIndicatorsEl.querySelectorAll(
      ".active"
    );
    const activeItems = this.carouselItemsEl.querySelectorAll(".active");

    const currentIndex = activeIndicators[0].getAttribute("data-index");
    let newActiveIndex = Number(currentIndex) + direction;

    if (newActiveIndex > finalIndex) {
      newActiveIndex = 0;
    } else if (newActiveIndex < 0) {
      newActiveIndex = finalIndex;
    }

    activeIndicators.forEach(i => {
      if (i.classList.contains("active")) {
        i.classList.remove("active");
      }
    });

    activeItems.forEach(i => {
      if (i.classList.contains("active")) {
        i.classList.remove("active");
      }
    });

    this.carouselIndicatorsEl.children[newActiveIndex].classList.add("active");
    this.carouselItemsEl.children[newActiveIndex].classList.add("active");
  }
}
