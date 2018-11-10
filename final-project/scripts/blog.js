const url = "https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog";

async function getBlogItems() {
  try {
    return new Promise(resolve => fetch(url).then(response => resolve(response.json())));
  } catch (err) {
    throw err;
  }
}

function createBlogItem(data, index) {
  const  itemId = index;
  const { images, title, description, url } = data;
  let image;
  if (screen.width > 768) image = images.desktop;
  else if (screen.width > 400) image = images.tablet;
  else image = images.mobile;
  const template = `
  <div class="blog__carrousel__inner__item" id="blog-item-${itemId}">
    <img class="blog__carrousel__inner__item__img" src="${image}">
    <p class="blog__carrousel__inner__item__title">${title}</p>
    <p class="blog__carrousel__inner__item__entry">${description}</p>
    <div class="blog__carrousel__inner__item__buttons">
      <button class="blog__carrousel__inner__item__buttons-b1" target="_blank" onclick="window.open('${url}')">Read Now</button>
      <button class="blog__carrousel__inner__item__buttons-b2">Add to you bookmarks</button>
    </div>
  </div>
  `;

  const div = document.createElement('div');
  div.innerHTML = template.trim();
  const newNode = div.firstChild;
  if(itemId > 0) newNode.style.display = "none";
  document.getElementById("blog-carousel").appendChild(newNode);


  const dot = `<p class="blog__dots-d" id="blog-dot-${itemId}"></p>`;
  const div2 = document.createElement('div');
  div2.innerHTML = dot.trim();
  const newDot = div2.firstChild;
  if(itemId === 0) newDot.style.backgroundColor = "#3A79FF";
  document.getElementById("blog-dots").appendChild(newDot);
}


let currentIndex = 0;
let numberOfElements = 0;

async function populateBlog() {
  const fetch = await getBlogItems();
  const { articles } = fetch;
  for(let i = 0; i < articles.length; i++){
    createBlogItem(articles[i], i);
  }
  numberOfElements = articles.length -1;
}


function decreaseIndex(){
  if(currentIndex === 0) currentIndex = numberOfElements
  else currentIndex--;
}

function increaseIndex(){
  if(currentIndex === numberOfElements) currentIndex = 0;
  else currentIndex++;
}

function unsetItem(){
  const element = document.getElementById(`blog-item-${currentIndex}`)
  if(element){
    element.style.display =  "none";
    document.getElementById(`blog-dot-${currentIndex}`).style.backgroundColor =  "#D1D6E3";
  }
}

function setItem(){
  const element = document.getElementById(`blog-item-${currentIndex}`)
  if(element){
    element.style.display =  "grid";
    document.getElementById(`blog-dot-${currentIndex}`).style.backgroundColor =  "#3A79FF";
  }
}

function moveBlogLeft(){ 
  unsetItem();
  decreaseIndex();
  setItem();
}

function moveBlogRight(){
  unsetItem();
  increaseIndex();
  setItem();
}

