
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  res.send("<h1>Thx for coming</h1>");
})
app.listen(3000, function(){
  console.log("your server starts a port 3000");
});
