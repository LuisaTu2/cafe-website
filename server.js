const path = require("path");
const express = require("express");
//const bodyParser = require("body-parser");


var app = express();
//app.set("view engine", "html");
app.use(express.static(__dirname + "/public"));  
//app.use(bodyParser.json());

app.post("/hours", function(req, res){
    var a = {"hours":"7:30AM - 6:00PM"};
    res.status(200).send(a);
    console.log("Hello there");
    console.log(a);
})

app.listen(8080, () => {
    console.log("Server is up on port 8080.");
    // handle_user_input();
});




// app.get("/", function(req, res){
//     console.log(__dirname);         
//     res.sendFile(path.join(__dirname + "/index.html"));
//     //console.log("You requested: " + req.url);
// });

// function handle_user_input(){
//     app.get("/", function(req, res){
//             //console.log(__dirname);         
//             res.sendFile(path.join(__dirname + "/index.html"));
//             console.log("You requested: " + req.url);
//     });

//     app.post("/hours", function(req, res){
//         var ajaxmsg = {"hours":"7:00AM - 6:00PM"};
//         res.json(200, ajaxmsg);
//         console.log(ajaxmsg);
//     })

// }; // End of handle_user_input function