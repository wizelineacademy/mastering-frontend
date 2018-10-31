const url = "http://myapi.com/method";
axios
  .get(url)
  .then(data => {
    // do something with the response
    console.log(data);
  })
  .catch(function(error) {
    // Error handling
  });
