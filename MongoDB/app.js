const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/TheShopDB", {useNewUrlParser: true});

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
});

const User = mongoose.model("Users", userSchema);

const user = new User({ name: "ElNiu", age: 12 });

//user.save();

const user1 = new User({ name: "ElNiu1", age: 22 });

const user2 = new User({ name: "ElNiu2", age: 32 });

const user3 = new User({ name: "ElNiu3", age: 42 });

User.updateOne({name: "ElNiu"}, {name: "Yanoniu"},{}, function(err,res){
    if(err){
        console.log("Errror");
    }else{
        console.log("Updated");
    }
});

User.deleteOne({name: "ElNiu3", age:42}, function(err,res){
    if(err){
        console.log("Errror");
    }else{
        console.log("Deleted");
    }
});

User.findOneAndUpdate(
    {name: "Yanoniu2"},
    {$set: {"friends.$[friend].name": "Yani4" } },
    { 
      arrayFilters: [{ "friend.id": "1" }],
    }
);


User.find(function(err, users){
    if(err){
        console.log("Error: " + err);
    }else{
        console.log(users);

        for(let i=0; i<users.length; i++){
            console.log(users[i].name);
        }
    }
});
