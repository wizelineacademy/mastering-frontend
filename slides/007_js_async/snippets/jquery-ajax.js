$.ajax({
  url: "http://myapi.com/method",
  type: "GET",
  success: function(result) {
    // do something with the response
    console.log(result);
  },
  error: function(error) {
    // Error handling
  }
});
