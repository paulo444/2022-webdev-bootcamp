const express = require("express");
const app = express();

app.get("/", function(request, response){
    response.send("<h1>This is an Express Server Response</h1>");
});

app.get("/dangerous-site", function(request, response){
    response.send("<h1>WAIT! Make sure that you're not a kid</h1>");
});

app.listen(3000, function(){
    console.log("Server started, listening to 3000.");
});