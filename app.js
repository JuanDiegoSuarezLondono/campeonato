const express = require ("express");
const jwt = require ("jsonwebtoken");

const app = express();

app.get("/home", (req, res) => {
    res.json({
        mesaje: "Nodejs and a JWT"
    });
});

app.listen(3000, function(){
    console.log("node js app running...");
});