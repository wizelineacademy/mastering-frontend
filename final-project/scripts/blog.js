
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const blogPostElement = $('.blog__post');
const indicatorsElement = $('.blog__indicators');

let blogPosts = [];
let currentBlogPost = 0;
let blogPostTimeout;

async function getBlogPosts() {
  const res = await fetch('https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog');
  ({ articles: blogPosts } = await res.json());

  $('.spinner').classList.add('hidden');
  $('.blog__post-container').classList.remove('hidden');

  renderCarousel();
}


function renderCarousel() {
  renderBlogPost();
  renderIndicators();

  clearTimeout(blogPostTimeout);
  blogPostTimeout = setTimeout(nextBlogPost, 5000);
}

function renderBlogPost() {
  const post = blogPosts[currentBlogPost];

  blogPostElement.innerHTML = `
    <picture class="blog__post-image">
      <source media="(min-width: 800px)" srcset="${post.images.desktop}">
      <source media="(min-width: 600px)" srcset="${post.images.tablet}">
      <source media="(min-width: 500px)" srcset="${post.images.mobile2x}">
      <img src="${post.images.mobile}">
    </picture>
    <section class="blog__post-content">
      <h2 class="blog__post-header">${post.title}</h2>
      <p class="blog__post-description">${post.description}</p>
      <a href="${post.url}">
        <button class="blog__post-read-button">Read now</button>
      </a>
    </section>
  `;
}

function renderIndicators() {
  indicatorsElement.innerHTML = blogPosts.map((_, i) => (
    `<button class="blog__indicator ${i === currentBlogPost ? 'selected' : ''}"></button>`
  )).join('');

  $$('.blog__indicator').forEach((indicator, i) => {
    indicator.addEventListener('click', () => goToBlogPost(i))
  });
}

function nextBlogPost() {
  currentBlogPost = (currentBlogPost + 1) % blogPosts.length;
  renderCarousel();
}

function previousBlogPost() {
  currentBlogPost = (currentBlogPost - 1 + blogPosts.length) % blogPosts.length;
  renderCarousel();
}

function goToBlogPost(index) {
  currentBlogPost = index;
  renderCarousel();
}

$('.blog__arrow.left').addEventListener('click', previousBlogPost);
$('.blog__arrow.right').addEventListener('click', nextBlogPost);

getBlogPosts();
