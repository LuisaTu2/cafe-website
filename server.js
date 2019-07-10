const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const port =  process.env.PORT || 8080;
const app = express();

const p = path.join(__dirname, "./public");
console.log(p);
app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    console.log("Hello there");   
    res.sendFile(path.join(__dirname, './public/index.html'));
}
);

app.listen(port, () => {
    console.log("Server is up on port " + port + ".");
});




// const path = require("path");
// const express = require("express");
// const app = express();
// const PORT = process.env.port || 3000; 

// // app.use(express.static(__dirname + "/public"));  
// app.use(express.static('public'));
// // console.log(path.join(__dirname + "/public/index.html"));
// // app.use(express.static(__dirname + "/views"));  

// app.get("/", function(req, res){  
//     // res.sendFile(path.join(__dirname + "/public/index.html")); 
//     res.sendFile("index.html"); 
// });

// app.post("/gethours", function(req, res){
//     var a = {"MF": "6:00AM - 3:00PM", "WH": "7:00AM - 2:00PM"};
//     res.status(200).send(a);
//     console.log(a);
// });



// // app.get("/partnership", function(req, res){  
// //     res.sendFile(path.join(__dirname + "/views/partnership.html")); // This is not working
// //     console.log("Here is the request from partnership: ");
// //     console.log("You requested: " + req.url);
// // });

// app.listen(PORT, () => {
//     console.log(`Server is up on port ${ PORT }.`); 
// });