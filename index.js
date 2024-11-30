const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/user/purchases", (req, res) => {
    res.json({ message: "success purchases" });
});


app.post("/user/signin", (req, res) => {
  res.json({ message: "success signin" });
});


app.post("/user/signup", (req, res) => {
  res.json({ message: "success signup" });
});


app.get("/courses", (req, res) => {});



app.listen(3000);
