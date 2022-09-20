const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/WikiDB", {useNewUrlParser: true});

articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("article", articleSchema);

//***************
//General routes
//***************

app.get("/articles", function(req, res){
    Article.find({}, function(err, ans){
        if(err){
            console.log(err);
        }else{
            res.send(ans);
        }
    });
});

app.post("/articles", function(req, res){
    const newArticle = new Article({title: req.body.title, content: req.body.content});
    newArticle.save(function(err){
        if(err){
            console.log(err);
        }else{
            res.send("Success");
        }
    });
});

app.delete("/articles", function(req, res){
    Article.deleteMany({}, {}, function(err, ans){
        if(err){
            console.log(err);
        }else{
            res.send("Deleted all");
        }
    });
});

//***************
//Specific routes
//***************

app.get("/articles/:article", function(req, res){
    Article.findOne({title: req.params.article}, function(err, ans){
        if(err){
            console.log(err);
        }else{
            res.send(ans);
        }
    });
});

app.put("/articles/:article", function(req, res){
    Article.update({title: req.params.article},
        {$set: {title: req.body.title, content: req.body.content}},
        {overwrite: true},
        function(err, ans){
            if(err){
                console.log(err);
            }else{
                res.send("Successfully Updated");
            }
    });
});

app.patch("/articles/:article", function(req, res){
    Article.findOneAndUpdate({title: req.params.article},
        {$set: req.body},
        {},
        function(err, ans){
            if(err){
                console.log(err);
            }else{
                res.send("Successfully Patched");
            }
    });
});

app.delete("/articles/:article", function(req, res){
    Article.deleteOne({title: req.params.article},
        function(err, ans){
            if(err){
                console.log(err);
            }else{
                res.send("Successfully Deleted");
            }
    });
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});  