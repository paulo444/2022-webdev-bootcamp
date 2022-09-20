const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("public"));

var todoItems = [];

app.get("/", function(req, res){
    var today = new Date();
    var options = {
        day: "numeric",
        weekday: "long"
    }

    res.render("todoTemplate", { day: today.toLocaleDateString("en-US", options),
                                todoList: todoItems });
});

app.post("/", function(req, res){
    todoItems.push(req.body.todoItem);

    res.redirect("/");
});

app.listen("3000", function(){
    console.log("Server started at 3000.")
});