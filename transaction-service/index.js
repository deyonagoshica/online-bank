const express = require("express");
const app = express();

app.use(express.json());

app.post("/transfer", (req, res) => {
  res.send("Transaction successful");
});

app.listen(5003, () => console.log("Transaction Service running on 5003"));