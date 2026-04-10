const express = require("express");
const app = express();

let balance = 1000;

app.get("/balance", (req, res) => {
  res.json({ balance });
});

app.listen(5002, () => console.log("Account Service running on 5002"));