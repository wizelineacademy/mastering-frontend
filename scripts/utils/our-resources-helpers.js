/**
 * handleResponse
 * 
 * @param {object} response 
 */
export function handleResponse(response) {
  if (response.status >= 400) {
    throw new Error("Bad response from server");
  }
  return response.json();
}

/**
 * responseToHTML
 * 
 * @param {object} param0 
 */
export function responseToHTML({ articles: posts }) {
  let html = '';

  posts.forEach((post) => {
    const postHTML = createPost(post);
    html += postHTML;
  });

  return html;
}

/**
 * createPost
 * 
 * @param {object} post 
 */
export function createPost(post) {
  // Extract properties
  const {
    title = "Dummy title",
    description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quod.",
    url = "#",
    images = {
      desktop: "http://picsum.photos/407/267/?random",
      tablet: "http://picsum.photos/643/267/?random",
      mobile: "http://picsum.photos/270/184/?random"
    }
  } = post;

  const html =
`
<div class="our-resources__posts__slides__slide">
            
  <div class="our-resources__posts__slides__slide__inner">
    <picture class="our-resources__posts__slides__slide__img">
      <source media="(min-width: 1024px)" srcset="${ images.desktop }">
        <source media="(min-width: 768px)" srcset="${ images.tablet }">
      <img src="${ images.mobile }">
    </picture>

    <div class="our-resources__posts__slides__slide__content">
      <h3 class="our-resources__posts__slides__slide__content__title">${ title }</h3>
      <p class="our-resources__posts__slides__slide__content__description">${ description }</p>

      <div class="our-resources__posts__slides__slide__content__actions">
          <a href="${ url }" class="our-resources__posts__slides__slide__content__actions__btn our-resources__posts__slides__slide__content__actions__btn--read-more">Read now</a>
          <button class="our-resources__posts__slides__slide__content__actions__btn our-resources__posts__slides__slide__content__actions__btn--bookmark">Add to your bookmarks</button>
        </div><!-- /.our-resources__posts__slides__slide__content__actions -->
    </div><!-- /.our-resources__posts__slides__slide__content -->
    
  </div><!-- /.our-resources__posts__slides__slide__inner -->

</div><!-- /.our-resources__posts__slides__slide -->`;

return html;
}

/**
 * createLoader
 */
export function createLoader() {
  const html =
`<div class="loader">
  <div class="loader__spinner"></div>
</div>`;

return html;
}