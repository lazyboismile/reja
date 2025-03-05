console.log("Web Server is running");
const express = require('express');
const app = express();

// MongoDB configuration
const db = require("./server").db();
const mongodb = require("mongodb");

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

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    console.log("user entered /delete-item", id);
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, (err, result) => {
        res.json({ state: "success" });
    });
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log("user entered /edit-item", data);
    db.collection("plans").findOneAndUpdate({ _id: new mongodb.ObjectId(data.id)},  {$set: {reja: data.new_input}}, (err, result) => {
        res.json({ state: "success" });
    })
});

app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function() {
            res.json({state: "Hamma plan Delete buldi, pishdi"});
        })
    }
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
