const path = require("path");
const express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));  
app.use(express.static(__dirname + "/views"));  

app.post("/gethours", function(req, res){
    var a = {"MF": "6:00AM - 3:00PM", "WH": "7:00AM - 2:00PM"};
    res.status(200).send(a);
    // console.log("Hello there");
    console.log(a);
})

// app.get("/partnership", function(req, res){  
//     res.sendFile(path.join(__dirname + "/views/partnership.html")); // This is not working
//     console.log("Here is the request from partnership: ");
//     console.log("You requested: " + req.url);
// });

app.listen(8080, () => {
    console.log("Server is up on port 8080."); 
});