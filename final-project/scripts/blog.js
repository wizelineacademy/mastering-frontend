import "../styles/main.scss";
import { URL, DOT_COLORED, DOT_UNCOLORED} from "./constants";


class Blog {
  constructor() {
    this.articleNumber = 0;
    this.prevArticle = 0;
    this.blogArticle = null;
    this.blogArticles = null;
    this.url = URL;
    this.dotColored = DOT_COLORED;
    this.dotUncolored = DOT_UNCOLORED;
    this.getSiteElements = new Promise(
      (resolve) => {
        window.onload = function () {
          const article = {
            title: document.getElementById("blog_title"),
            description: document.getElementById("blog_description"),
            url: document.getElementById("blog_url"),
            images: {
              desktop: document.getElementById("blog_img_desktop"),
              tablet: document.getElementById("blog_img_tablet"),
              mobile2x: document.getElementById("blog_img_mobile_2x"),
              mobile: document.getElementById("blog_img_mobile")
            }
          };
          resolve(article);
        }
      }
    );
  }

  colorDots () {
    const dots = document.getElementsByClassName('_carousel__dot');
    dots[this.prevArticle].style.color = this.dotUncolored;
    dots[this.articleNumber].style.color = this.dotColored;
  }

  loadContent () {
    this.blogArticle.title.innerHTML = this.blogArticles[this.articleNumber].title;
    this.blogArticle.description.innerHTML = this.blogArticles[this.articleNumber].description;
    this.blogArticle.url.href = this.blogArticles[this.articleNumber].url;
    this.blogArticle.images.desktop.src = this.blogArticles[this.articleNumber].images.desktop;
    this.blogArticle.images.tablet.src = this.blogArticles[this.articleNumber].images.tablet;
    this.blogArticle.images.mobile2x.src = this.blogArticles[this.articleNumber].images.mobile2x;
    this.blogArticle.images.mobile.src = this.blogArticles[this.articleNumber].images.mobile;
    this.colorDots();
  }

  finishLoading() {
    document.getElementById("loading_blog").style.display = "none";
    document.getElementById("carousel_icons").style.display = "unset";
    document.getElementById("blog__carousel").style.display = "flex";
    document.getElementById("blog__btn__prev").onclick = this.loadPrev;
    document.getElementById("blog__btn__next").onclick = this.loadNext;
  }

  loadNext() {
    this.prevArticle = this.articleNumber;
    if (this.articleNumber+1 >= this.blogArticles.length){
      this.articleNumber = 0;
    }else{
      this.articleNumber++;
    }
    this.loadContent();
  }

  loadPrev() {
    this.prevArticle = this.articleNumber;
    if (this.articleNumber === 0){
      this.articleNumber = this.blogArticles.length-1;
    }else{
      this.articleNumber--;
    }
    this.loadContent();
  }

  async getData() {
    return new Promise(
      (resolve) => {
        fetch(url)
          .then(function(response) {
            resolve(response.json());
          })
      }
    )
  }

  async setData() {
    try {
      let article = await this.getSiteElements;
      let blogData = await this.getData(article);

      this.blogArticle = article;
      this.blogArticles = blogData.articles;
      this.loadContent();
      this.finishLoading();

    }catch(error){
      console.log(error.message);
    }
  }
}

export default Blog;
