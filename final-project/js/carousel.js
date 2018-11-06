class Carourel {
    constructor(klass) {
        this.klass = klass;
        this.items = document.querySelectorAll(klass);
        this.pause = 3000;
        this.current = 0;
        this.interval = null;
        this.dotKlass = 'customer__dots-dot';
        this.working = false;
        this.swapItem = this.swapItem.bind(this);
        this.init = this.init.bind(this);
        this.stopInterval = this.stopInterval.bind(this);
        this.createDots = this.createDots.bind(this);
        this.isStarted = this.isStarted.bind(this);
        this.removeDots = this.removeDots.bind(this);
    }

    swapItem() {
        let dotItems = document.querySelectorAll(`.${this.dotKlass}`);
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
        dotContainer.classList.add('customer__dots');

        for(let i = 0; i< this.items.length; i++){
            let dot = document.createElement("span");
            dot.classList.add(this.dotKlass);
            dotContainer.appendChild(dot);
        }
        
        let item = document.querySelector(this.klass);
        let parent = item.parentElement.parentElement;
        parent.appendChild(dotContainer);
    }

    removeDots() {
      let dotsDiv = document.querySelector('.customer__dots');
      if(dotsDiv) {
        dotsDiv.remove();
      }
    }

    isStarted() {
      return this.working;
    }
}
