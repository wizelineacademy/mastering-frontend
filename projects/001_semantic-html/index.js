var express = require("express");
var app = express();
var path = require("path");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/ok", function(req, res) {
  res.sendFile(path.join(__dirname + "/pages/page_ok.html"));
});

app.get("/bad", function(req, res) {
  res.sendFile(path.join(__dirname + "/pages/page_bad.html"));
});

const assets = ["style.css", "logo-square.svg", "logo.svg"];

assets.forEach(asset => {
  app.get(`/${asset}`, function(req, res) {
    res.sendFile(path.join(__dirname + `/assets/${asset}`));
  });
});

app.listen(3000);
console.log("page.html is being served at http://localhost:3000");
