console.log("Web Server is running");
const express = require('express');
const app = express();
const http = require('http');

// 1  Introduction 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session code
// 3  Views code
app.set("views", "views");
app.set("view engine", "ejs")

// 4 Routings code

app.get("/", function(req, res) {
    res.end(`<h1 >Hello, world! by Tony</h1>`);
});

app.get("/gift", function(req, res) {
    res.end(`<h1 >Siz sovg'alar bo'limidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log("Server is running on port", PORT);
});