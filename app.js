console.log("Web Server is running");
const express = require('express');
const app = express();

// MongoDB configuration
const db = require("./server").db();

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
app.get("/",  function (req, res) {
    res.render("reja");
});

module.exports = app;