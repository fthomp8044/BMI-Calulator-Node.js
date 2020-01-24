//jshint esverson:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmicalculator");
})

app.post("/bmicalculator", function(req, res){
  var weight = req.body.weight;
  var height = req.body.height;

  var result = 
})

app.post("/", function(req, res){
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var results = num1 + num2;
    res.send("The result is " + results);
})
app.listen(3000, function(){
  console.log("your server starts a port 3000");
});
