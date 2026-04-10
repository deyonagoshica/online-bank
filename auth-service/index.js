const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// In-memory users (demo purpose)
let users = [];

// Register API
app.post("/register", (req, res) => {
  users.push(req.body);
  res.send("User registered successfully");
});

// Login API
app.post("/login", (req, res) => {
  console.log("Auth service updated by developer A"); // 👈 collaboration line
  res.send("Login successful");
});

// Test route
app.get("/", (req, res) => {
  res.send("Auth Service is running");
});

// Start server
app.listen(5001, () => {
  console.log("Auth Service running on port 5001");
});