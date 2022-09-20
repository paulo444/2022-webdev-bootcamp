//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

//---------------Encryption------------------------
const encrypt = require("mongoose-encryption");
const md5 = require("md5");
const bcrypt = require("bcrypt");
const rounds = 10;

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/secretsDB", {useNewUrlParser: true});

//-----------------------------Mongoose-Encryption----------------------------------
// const userSchema = new mongoose.Schema({
//     email: String,
//     password: String
// });
//userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ["password"]});

const userSchema = {
    email: String,
    password: String
};

const User = mongoose.model("User", userSchema);

app.get("/", function(req, res){
    res.render("home");
});

app.get("/login", function(req, res){
    res.render("login");
});

app.get("/register", function(req, res){
    res.render("register");
});

app.post("/register", function(req, res){
    // MD5 const newUser = new User({email: req.body.username, password: md5(req.body.password)});

    bcrypt.hash(req.body.password, rounds, function(err, hash){
        if(err){
            console.log("Hash Error");
        }else{
            const newUser = new User({email: req.body.username, password: hash});

            newUser.save(function(err){
                if(err){
                    console.log("Error");
                }else{
                    res.render("secrets");
                }
            });
        }
    });
});

app.post("/login", function(req, res){
    // MD5
    // User.findOne({email: req.body.username}, function(err, ans){
    //     if(err){
    //         console.log("Error");
    //     }else{
    //         if(md5(req.body.password) === ans.password){
    //             res.render("secrets");
    //         }else{
    //             console.log("Wrong data");
    //         }
    //     }
    // });

    User.findOne({email: req.body.username}, function(err, ans){
            if(err){
                console.log("Error");
            }else{
                bcrypt.compare(req.body.password, ans.password, function(herr, hash){
                    if(hash){
                        res.render("secrets");
                    }else{
                        console.log("Wrong data");
                    }
                });
            }
        });
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});  