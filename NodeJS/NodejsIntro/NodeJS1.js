const fs = require("fs");

var fileName = "fileTest";

for(var i=0; i<3; i++){
    fs.copyFileSync("fileTest1.txt", fileName + (i+2).toString() + ".txt");
}