const express = require("express");
const app = express ();
const port = process.env.port || 2000;
app.get("/test", (req, res, next) => {

    res.send("Welcome to Employee Dashboard");
}); 
app.listen(port);
