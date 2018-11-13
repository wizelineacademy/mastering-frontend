// import "../styles/main.scss";

setTimeout(() => {
  const blogBackArrow = document.getElementById("blogBackArrow");
  const blogNextArrow = document.getElementById("blogNextArrow");

  const blogSelection = document.getElementsByClassName("selection--blog")[0];
  const blogNodes = Array.prototype.slice.call(document.getElementsByClassName('blog')[0].children);
  const selectionBlog = document.getElementsByClassName("selection--blog")[0].children;

  blogBackArrow.addEventListener("click", () => {
    const curBlogNode = document.getElementsByClassName("blog__item--selected")[0];
    const prevBlogNode =
      document.getElementsByClassName("blog__item--selected")[0].previousElementSibling ||
      document.getElementsByClassName("blog")[0].lastElementChild;
    curBlogNode.classList.remove("blog__item--selected");
    prevBlogNode.classList.add("blog__item--selected");

    const prevBlogNodeIdx = blogNodes.indexOf(prevBlogNode);
    const curBlogNodeIdx = blogNodes.indexOf(curBlogNode);
    selectionBlog[curBlogNodeIdx].classList.remove("selection__item--selected");        
    selectionBlog[prevBlogNodeIdx].classList.add("selection__item--selected");
  })

  blogNextArrow.addEventListener("click", () => {
    const curBlogNode = document.getElementsByClassName("blog__item--selected")[0];
    const nextBlogNode =
      document.getElementsByClassName("blog__item--selected")[0].nextElementSibling ||
      document.getElementsByClassName("blog")[0].firstElementChild;
    curBlogNode.classList.remove("blog__item--selected");
    nextBlogNode.classList.add("blog__item--selected");
    const nextBlogNodeIdx = blogNodes.indexOf(nextBlogNode);
    const curBlogNodeIdx = blogNodes.indexOf(curBlogNode);
    selectionBlog[curBlogNodeIdx].classList.remove("selection__item--selected");        
    selectionBlog[nextBlogNodeIdx].classList.add("selection__item--selected");
  })


  const faqItems =  Array.prototype.slice.call(document.getElementsByClassName("faq__item"));

  faqItems.forEach(faqItem => {
    faqItem.addEventListener("click", (e) => {
      const curFaqNode = document.getElementsByClassName("faq__item--selected")[0];
      const targetedFaqNode = e.target.parentElement.tagName == 'LI' ? e.target.parentElement : e.target.parentElement.parentElement;

      curFaqNode.classList.remove("faq__item--selected");        
      targetedFaqNode.classList.add("faq__item--selected");

      targetedFaqNode.firstElementChild.firstElementChild.classList.remove("fa-angle-down");
      targetedFaqNode.firstElementChild.firstElementChild.classList.add("fa-angle-up");
      console.log(targetedFaqNode.firstElementChild.firstElementChild);
    })
  }); 
})

