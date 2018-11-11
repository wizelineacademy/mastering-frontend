class Carourel {
    constructor(config) {
        this.klass = config.klass;
        this.items = document.querySelectorAll(config.klass);
        this.prefix = config.prefix || 'carousel';
        this.pause = 3000;
        this.current = 0;
        this.interval = null;
        this.dotKlass = `${this.prefix}__dots-dot`;
        this.working = false;
        this.swapItem = this.swapItem.bind(this);
        this.init = this.init.bind(this);
        this.stopInterval = this.stopInterval.bind(this);
        this.createDots = this.createDots.bind(this);
        this.isStarted = this.isStarted.bind(this);
        this.removeDots = this.removeDots.bind(this);
        this.dotClick = this.dotClick.bind(this);
        this.repaintDots = this.repaintDots.bind(this);
        this.repaintSlider = this.repaintSlider.bind(this);
    }

    swapItem() {
        let item = document.querySelector(this.klass);
        let parent = item.parentElement.parentElement;
        let dotItems = parent.querySelectorAll(`.${this.dotKlass}`);
        let saveCurrend = this.current;

        if(this.current < (this.items.length - 1)){
            this.current = this.current + 1;
        }else{
            this.current = 0;
        }

        dotItems[saveCurrend].classList.remove('active');
        dotItems[this.current].classList.add('active');

        this.items[saveCurrend].classList.remove('current');
        this.items[this.current].classList.add('current');
    }

    stopInterval() {
        this.working = false;
        this.removeDots();
        this.current = 0;
        clearInterval(this.interval);

        // Removing current from items
        let currentItem = document.querySelectorAll('.customer__container-image.current')
        if(currentItem.length){
          currentItem[0].classList.remove('current');
        }
    }

    init() {
        this.working = true;
        this.createDots();
        let dotItems = document.querySelectorAll(`.${this.dotKlass}`);
        dotItems[this.current].classList.add('active');
        this.items[this.current].classList.add('current');
        this.interval = setInterval(this.swapItem, this.pause);
    }

    createDots() {
        this.removeDots();
        let dotContainer = document.createElement("div");
        dotContainer.classList.add(`${this.prefix}__dots`);

        for(let i = 0; i< this.items.length; i++){
            let dot = document.createElement("div");
            dot.dataset.index = `${i}`;
            dot.addEventListener('click', this.dotClick);
            dot.classList.add(this.dotKlass);
            dotContainer.appendChild(dot);
        }
        
        let item = document.querySelector(this.klass);
        let parent = item.parentElement.parentElement;
        parent.appendChild(dotContainer);
    }

    dotClick(ev) {
        let el = ev.target;
        let index = el.getAttribute('data-index');

        clearInterval(this.interval)

        this.current = parseInt(index);
        this.repaintDots();
        this.repaintSlider();
        this.interval = setInterval(this.swapItem, this.pause);
    }

    repaintSlider(){
        let item = document.querySelector(this.klass);
        let container = item.parentElement;
        
        let active = container.querySelector('.current');
        active.classList.remove('current');

        let slider = container.querySelectorAll('.item');
        slider[this.current].classList.add('current');
    }

    repaintDots(){
        let item = document.querySelector(this.klass);
        item = item.parentElement.parentElement;
        let container = document.querySelector(`.${this.prefix}__dots`);
        
        let active = container.querySelector('.active');
        active.classList.remove('active');

        let dots = container.querySelectorAll(`.${this.prefix}__dots-dot`);
        dots[this.current].classList.add('active');
    }

    removeDots() {
        let item = document.querySelector(this.klass);
        let parent = item.parentElement.parentElement;
        let dotsDiv = parent.querySelector(`.${this.prefix}__dots`);
        if(dotsDiv) {
            dotsDiv.remove();
        }
    }

    isStarted() {
      return this.working;
    }
}
