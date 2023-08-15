const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//bodyParser pass all the data in the body of the html file
app.use(bodyParser.urlencoded({extended: true}))

app.get("/calculator/greeting",function(req,res){
    res.sendFile(__dirname + "/calculator/greeting.html");
    console.log("Hello World!")
});

app.get("/calculator/add", function(req, res){
    res.sendFile(__dirname + "/calculator/add.html");
});

app.get("/calculator/subtract", function(req, res){
    res.sendFile(__dirname + "/calculator/subtract.html");
});


app.post("/calculator/add",function(req,res){
    //num1,num2 are passed as strings so add Number()
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("The result of the addition calculator is " + result);
});

app.post("/calculator/subtract",function(req,res){
    //num1,num2 are passed as strings so add Number()
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 - num2;
    res.send("The result of the subtraction calculator is " + result);
});


app.listen(3000,function(){
    console.log("In the server localhost 3000");
});