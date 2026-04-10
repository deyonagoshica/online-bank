const express = require("express");
const app = express();

app.use(express.json());

let users = [];

app.post("/register", (req, res) => {
  users.push(req.body);
  res.send("User registered");
});

app.post("/login", (req, res) => {
  res.send("Login successful");
});

app.listen(5001, () => console.log("Auth Service running on 5001"));