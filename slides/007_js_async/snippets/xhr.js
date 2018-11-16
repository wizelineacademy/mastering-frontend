const Http = new XMLHttpRequest();
const url = "http://myapi.com/method";
Http.open("GET", url);
Http.send();

Http.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // do something with the response
    console.log(Http.responseText);
  } else {
    // Error handling
  }
};
