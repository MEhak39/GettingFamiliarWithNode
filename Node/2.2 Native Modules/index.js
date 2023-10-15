// hold of the file system

const { isUtf8 } = require("buffer");
const { error } = require("console");
const fs = require("fs");
 fs.writeFile("message.txt", "Hello there!", (err) =>{
    if(err) throw err;
    console.log("The file has been saved");
 });
 fs.readFile("message.txt","Utf8", (err, data) => {
     if (err) throw err;
     console.log("The file has been saved");
 });