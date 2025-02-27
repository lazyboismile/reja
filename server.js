const http = require('http');
const mongodb = require('mongodb');

let db;
const connectionString = "mongodb+srv://suyarqulov2022:15317261@cluster0.p2ulg.mongodb.net/"

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err, client) => {
    if(err) console.error("Error connecting to MongoDB", err);
    else {
        console.log("Connected to MongoDB");
        module.exports = client;
        
        const app = require('./app');
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function() {
            console.log(`Server is running on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
});
