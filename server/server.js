const express = require("express");
const app = express();
const mongoose = require("mongoose");

const { handleNewUser } = require("./controllers/registerController");
const cors = require("cors");
const User = require("./models/User");
require("dotenv").config();

// Express Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// connect db
mongoose.set("strictQuery", true);
mongoose.connect(
  process.env.URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("connection established");
    }
  }
);

app.post("/register", handleNewUser);
// app.post("/login", handleLogin);

app.get("/", (req, res) => {
  res.send("Working properly");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});


