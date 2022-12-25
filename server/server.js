const express = require("express");
const app = express();
const sessions = require("express-session");
console.log(sessions);
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Server is up and running!");
});

app.post("/", async (req, res) => {
  const { username, password } = req.body;
  if (username === "ediwow" && password === "ediwow") {
    res.send("Login Successfully");
  } else {
    res.send("nah!");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
