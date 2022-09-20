const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmi-calculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
    res.send((parseInt(req.body.number1) + parseInt(req.body.number2)).toString());
});

app.post("/bmi-calculator", function(req, res){
    res.send(Math.floor(parseFloat(req.body.weight) / ((parseFloat(req.body.height) * parseFloat(req.body.height))/10000)).toString());
});

app.listen(3000, function(){
    console.log("Starting server...");
    console.log("Server started.");
});