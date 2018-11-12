// API

const blogEndpoint = 'https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog';

const Api = {
  retrieveBlogPosts: async () => {
    try{
      const response =  await fetch(blogEndpoint);
      const data = await response.json();
      return data.articles;
    } catch (error) {
      console.warn(error);
      return [];
    }
  }
}

export default Api;
