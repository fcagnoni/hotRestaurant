// dependencies

var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

//express config

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Paths

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});


//Listener

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
