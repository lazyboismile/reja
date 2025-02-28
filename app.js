console.log("Web Server is running");
const express = require('express');
const app = express();

// MongoDB configuration
const db = require("./server").db();

// 1 Introduction 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session code
// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routings code
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        if (err) {
            console.log(err);
            res.send("ERROR: something went wrong");
        } else {
            res.send("Reja successfully saved");
        }
    });
});

app.get("/", function (req, res) {
    console.log("user entered /");
    db.collection("plans").find().toArray((err, data) => {
        if(err) {
            console.log(err);
            res.send("ERROR: something went wrong");
        } else {
            console.log(data);
            res.render("reja", {items: data});
        }
    });
});

module.exports = app;