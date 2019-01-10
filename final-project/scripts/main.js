import "../styles/main.scss";

const articlesUrl = 'https://wt-4662f45b9eefda7172b747b28d23efdb-0.sandbox.auth0-extend.com/blog'; 

getArticlesFromUrl();

async function getArticlesFromUrl(){
  fetch(articlesUrl)
  .then(resp => resp.json()) // Transform the data into json
  .then(function(data) {
    console.log(data);
  });
}
