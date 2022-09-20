const express = require("express");
const bodyParser = require("body-parser");
const https = require("https")

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    console.log(req.body.fullName + req.body.emailAddress);

    const data = {
        fullName: req.body.fullName,
        emailAddress: req.body.emailAddress
    }

    jsonStringData = JSON.stringify(data);

    const options = {
        method: "POST",
        auth: "Auth:Code"
    }

    const url = "https://www.mailchamp.com";

    const request = https.request(url, options, function(response){
        response.on("data", function(data){
            if(response.statusCode === 200){
                res.sendFile(__dirname + "/success.html");
            }else{
                res.sendFile(__dirname + "/failure.html");
            }
        });
    });

    request.write(jsonStringData);
    request.end();
});

app.listen(3000, function(){
    console.log("Port 3000 started.")
});