console.log("Web Server is running");
const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading user.json", err);
    } else {
        user = JSON.parse(data);
    }
});


// 1  Introduction 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session code
// 3  Views code
app.set("views", "views");
app.set("view engine", "ejs")

// 4 Routings code
app.post("/create-item", (req, res) => {
    console.log(req);
    res.json("Item created successfully");
});
app.get("/author", (req, res) => {
    res.render("author", {user: user});
})
app.get("/",  function (req, res) {
    res.render("reja");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`Server is running on port: ${PORT}, http://localhost:${PORT}`);
});