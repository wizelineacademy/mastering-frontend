function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}


ready(() => {
    document.getElementsByClassName('section-six')[0].classList.add('section-six--show');
})
function blogPrevClick() {
    const curBlogNode = document.getElementsByClassName("blog__item--selected")[0];
    const prevBlogNode =
    document.getElementsByClassName("blog__item--selected")[0].previousElementSibling ||
    document.getElementsByClassName("blog")[0].lastElementChild;
    curBlogNode.classList.remove("blog__item--selected");
    prevBlogNode.classList.add("blog__item--selected");

    const blogNodes = Array.prototype.slice.call(document.getElementsByClassName("blog")[0].children)
    const selectionBlog = Array.prototype.slice.call(document.getElementsByClassName("selection--blog")[0].children)

    const prevBlogNodeIdx = blogNodes.indexOf(prevBlogNode);
    const curBlogNodeIdx = blogNodes.indexOf(curBlogNode);

    selectionBlog[curBlogNodeIdx].classList.remove("selection__item--selected");        
    selectionBlog[prevBlogNodeIdx].classList.add("selection__item--selected");
}

function blogNextClick() {
    const curBlogNode = document.getElementsByClassName("blog__item--selected")[0];
    const nextBlogNode =
    document.getElementsByClassName("blog__item--selected")[0].nextElementSibling ||
    document.getElementsByClassName("blog")[0].firstElementChild;
    curBlogNode.classList.remove("blog__item--selected");
    nextBlogNode.classList.add("blog__item--selected");

    const blogNodes = Array.prototype.slice.call(document.getElementsByClassName("blog")[0].children)
    const selectionBlog = Array.prototype.slice.call(document.getElementsByClassName("selection--blog")[0].children)
    
    const nextBlogNodeIdx = blogNodes.indexOf(nextBlogNode);
    const curBlogNodeIdx = blogNodes.indexOf(curBlogNode);

    selectionBlog[curBlogNodeIdx].classList.remove("selection__item--selected");        
    selectionBlog[nextBlogNodeIdx].classList.add("selection__item--selected");
}

fetch('https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog')
    .then(function(response) {
        return response.json();
    })
    .then(function(res) {
        let blogItems = [];
        const selection = document.getElementsByClassName("selection--blog")[0]

        res.articles.forEach((article, idx) => {
            const isSelected = idx == 0 ? 'blog__item--selected' : '';
            const img =
                screen.width >= 1440 ?  article.images.desktop :
                screen.width >= 1200 ? article.images.tablet :
                screen.width >= 768 ? article.images.mobile2x : article.images.mobile
                
            blogItems.push(`<div class="blog__item ${isSelected}">
            <img src=${img} class="blog__img">
            <div class="blog__content">
              <div class="text--one text--font36 text--navy">${article.title}</div>
              <div class="text--two text--tall27 text--font14 text--narrow text--navy text--grey1">${article.description}</div>
              <div class="section-six__btn">
                <a href=${article.url} class="btn btn__five">Read now</a>
                <span class="section-six__tip">Add to your bookmarks</span>
              </div>
            </div>
          </div>`);

          let selectionSpan = document.createElement('SPAN')
          selectionSpan.classList.add('selection__item');
          
          idx ? selection.appendChild(selectionSpan): ''
        })
        const divHtml = `<div class="section-six__blog">
        <img src="./reference/assets/arrow-blog.png" alt="arrow" id="blogBackArrow" class="blog__arrow blog__arrow--left" onclick="blogPrevClick();">
        <div class="blog">
          ${blogItems}

        </div>
        <img src="./reference/assets/Vector.png" alt="arrow" id="blogNextArrow" class="blog__arrow blog__arrow--right" onclick="blogNextClick();">
      </div>`

      let node = document.createElement('DIV')
      node.innerHTML = divHtml;
      const sectionSixNode = document.getElementsByClassName("section-six")[0]
      document.getElementsByClassName("section-six")[0].removeChild(document.getElementsByClassName("section-six__spinner")[0])
      document.getElementsByClassName("section-six")[0].firstElementChild.appendChild(node)
      document.getElementsByClassName("selection--blog")[0].classList.add("selection--blog--shown")
    })
    .catch(err =>  {
        console.log(err)
    })