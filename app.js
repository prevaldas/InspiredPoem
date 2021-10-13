const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.set('view engine', "ejs");

//First page rendering.

app.get("/", function(req, res){
  res.sendFile(__dirname + "/first.html");
});

app.post("/", function(require, respond){
  respond.redirect("/");
});

//Button press to second page.

app.get("/page2.html", function(require, respond){
  respond.sendFile(__dirname + "/page2.html");
});

app.post("/page2.html", function(require, respond){
  respond.redirect("/page2.html");
});



//Button press to third page.

app.get("/page3.html", function(require, respond){
  respond.sendFile(__dirname + "/page3.html");
});

app.post("/page3.html", function(require, respond){
  respond.redirect("/page3.html");
});

//Server function

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000.");
});
