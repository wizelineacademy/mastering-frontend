const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const indicatorsElement = $('.blog__indicators');
const imageElement = $('.blog__post-image');
const headerElement = $('.blog__post-header');
const descriptionElement = $('.blog__post-description');
const linkElement = $('.blog__post-content a');

let blogPosts = [];
let currentBlogPost = 0;
let blogPostTimeout;

async function getBlogPosts() {
  const res = await fetch('https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog');
  ({ articles: blogPosts } = await res.json());

  $('.spinner').classList.add('hidden');
  $('.blog__post-container').classList.remove('hidden');
  createIndicators();
  renderCarousel();
}

function renderCarousel() {
  updateBlogPost();
  updateIndicators();

  clearTimeout(blogPostTimeout);
  blogPostTimeout = setTimeout(nextBlogPost, 5000);
}

function updateBlogPost() {
  const post = blogPosts[currentBlogPost];
  imageElement.children[0].srcset = post.images.desktop;
  imageElement.children[1].srcset = post.images.tablet;
  imageElement.children[2].srcset = post.images.mobile2x;
  imageElement.children[3].src = post.images.mobile;

  headerElement.innerText = post.title;
  descriptionElement.innerText = post.description;
  linkElement.href = post.url;
}

function createIndicators() {
  blogPosts.forEach((_,i)=>{
    const indicator = document.createElement('button');
    indicator.classList.add('blog__indicator');
    indicator.addEventListener('click', () => goToBlogPost(i));
    indicatorsElement.appendChild(indicator);
  });
}

function updateIndicators() {
  $$('.blog__indicator').forEach((indicator, i) => {
    if(i === currentBlogPost) {
      indicator.classList.add('selected');
    }
    else {
      indicator.classList.remove('selected');
    }
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
