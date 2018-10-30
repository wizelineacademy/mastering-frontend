const url = "http://myapi.com/method";
$.get(url, function(data) {
  // do something with the response
  console.log(data);
}).catch(function(error) {
  // Error handling
});
