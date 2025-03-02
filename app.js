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
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});

app.get("/", function (req, res) {
    console.log("user entered /");
    console.log("STEP2: Backendga kirish");

    console.log("STEP3: Backend => Database bormoqdamiz");
    db.collection("plans").find().toArray((err, data) => {
        if(err) {
            console.log(err);
            res.send("ERROR: something went wrong");
        } else {
            console.log("STEP4: Databasedan data => Backendga Junatildi");
            console.log(data);
            console.log("STEP5: Frontedga Data junatildi");
            res.render("reja", {items: data});
        }
    });
});

module.exports = app;
