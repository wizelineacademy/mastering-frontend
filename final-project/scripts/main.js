import "../styles/main.scss";
import Axios from "axios";

function showPage() {
  document.getElementById("body-layout").classList.toggle("layout-wrapper--loading");
  document.getElementById("page-loader").style.display = "none";
}

window.onload = function () {
  //Wait just to simulate a low connection and a delay
  setTimeout(showPage, 3000);

  //Retrieve blog posts
  const url = 'https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog';
  Axios
    .get(url)
    .then(data => {
      const articles = data.data.articles;
      for (let i = 0; i < articles.length; i++) {
        const article = articles[i];

        // Add articles
        $('#main-blog-articles')
          .append(`
            <li id="blog-article-${i+2}" class="main-blog-carousel-slides__slide">
              <img src="${article.images.mobile}" />
              <article>
                <h1>${article.title}</h1>
                <p>${article.description}</p>
                <div class="main-blog-controls">
                  <button><a href="${article.url}" target="_blank">Read now</a></button>
                  <span><a>Add to your bookmarks</a></span>
                </div>
              </article>
            </li>
          `);
        
        // Add navigation circles
        $('#main-blog-carousel')
          .append(`
          <li class="carousel__li"><i id="carousel-blog-${i+2}" class="fas fa-circle"></i></li>
          `);
      }

      // Click on a carousel circle, show blog's article index
      $('#main-blog-carousel>li>i').click(event => {
        const match = event.target.id.match('.$')
        const prev_idx = current_article_idx;
        current_article_idx = Number(match[0]);
        move_carousel_to("blog-article-", prev_idx, current_article_idx, "main-blog-carousel-slides__slide--visible");
        move_carousel_to("carousel-blog-", prev_idx, current_article_idx, "carousel__li--selected");
      });
    })
    .catch(error => {
      console.error(error);
    });
}

var current_article_idx = 1;
var current_customer_idx = 1;

function move_carousel_to(id_prefix, prev_idx, new_idx, class_name) {
  document.getElementById(id_prefix + prev_idx)
    .classList.remove(class_name);

  document.getElementById(id_prefix + new_idx)
    .classList.add(class_name);
}

$('#btn-previous-customer').click(event => {
  var prev_idx = current_customer_idx;
  if (--current_customer_idx == 0) {
    current_customer_idx = 6;
  }
  move_carousel_to("customer-logo-", prev_idx, current_customer_idx, "main-customers-images__li--selected");
  move_carousel_to("carousel-logo-", prev_idx, current_customer_idx, "carousel__li--selected");
});

$('#btn-next-customer').click(event => {
  var prev_idx = current_customer_idx;
  if (++current_customer_idx > 5) {
    current_customer_idx = 1;
  }
  move_carousel_to("customer-logo-", prev_idx, current_customer_idx, "main-customers-images__li--selected");
  move_carousel_to("carousel-logo-", prev_idx, current_customer_idx, "carousel__li--selected");
});

$('#customers-carousel-dots>li>i').click(event => {
  const match = event.target.id.match('.$');
  const prev_idx = current_customer_idx;
  current_customer_idx = Number(match[0]);
  move_carousel_to("customer-logo-", prev_idx, current_customer_idx, "main-customers-images__li--selected");
  move_carousel_to("carousel-logo-", prev_idx, current_customer_idx, "carousel__li--selected");
});

$('.main-faq-list__li').click(event => {
  const li_element = $(event.currentTarget);
  if(li_element.hasClass('main-faq-list__li')) {
    li_element.toggleClass("main-faq-list__li--selected");
    const icon = li_element.children("article>header>i");
    if(li_element.hasClass("fa-chevron-up")){
      icon.removeClass("fa-chevron-up");
      icon.addClass("fa-chevron-down");
    } else {
      icon.removeClass("fa-chevron-down");
      icon.addClass("fa-chevron-up");
    }
    event.stopPropagation();
  }
});
