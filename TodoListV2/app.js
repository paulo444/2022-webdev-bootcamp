const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todoListDB", {useNewUrlParser: true});

const todoObjectSchema = {
    done: Boolean,
    activity: String,
};

const listSchema = {
    name: String,
    items: [todoObjectSchema]
};

const todoObject = mongoose.model("todo", todoObjectSchema);
const listObject = mongoose.model("list", listSchema);

const todo1 = new todoObject({done: false, activity: "Finish that."});
const todo2 = new todoObject({done: false, activity: "Finish that2."});
const todo3 = new todoObject({done: false, activity: "Finish that3."});

// todoObject.insertMany([todo1, todo2, todo3], function(err, ans){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Inserted");
//     }
// });

var todoItems = [];

async function LoadData(){
    todoItems = await todoObject.find();
}

app.get("/", function(req, res){
    var today = new Date();
    var options = {
        day: "numeric",
        weekday: "long"
    }

    let path = today.toLocaleDateString("en-US", options);
    path = path.replace(" ", "-");
    path = _.capitalize(path);

    res.redirect("/" + path);
});

app.get("/:specificList", function(req, res){
    const specificList = _.capitalize(req.params.specificList);

    listObject.find({name: specificList}, function(err, ans){
        if(ans.length === 0){
            const newList = new listObject({name: specificList, items: []});
            newList.save(function(err2, ans2){
                if(err2){
                    console.log("Error");
                }else{
                    res.redirect("/" + specificList);
                }
            });
        }else{
            res.render("todoTemplate", { day: specificList,
                                        todoList: ans[0].items });
        }
    });
});

app.post("/", function(req, res){
    listObject.updateOne({name: req.body.title}, {$push: {items: {done: false, activity: req.body.todoItem}}}, function(err, ans){
        if(err){
            console.log("Error");
        }else{
            res.redirect("/" + req.body.title);
        }
    });
});

app.post("/deleteItem", function(req, res){
    listObject.findOneAndUpdate({ name: req.body.title }, { $pull: { items: {_id: req.body.check} } } , function(err, ans){
        if(err){
            console.log(err);
        }else{
            res.redirect("/" + req.body.title);
        }
    });
});

app.listen("3000", function(){
    console.log("Server started at 3000.")
});