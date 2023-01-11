const userRoutes = require("./routes/userRoutes");
const { development } = require("./config/config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const cors = require("cors");

// Express Body parser
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    // origin: "http://localhost:5173",
    // origin: "*",
    origin: "https://chat-app-ruddy-one.vercel.app",
    credentials: true,
    allowedHeaders: ["Content-Type"],
  })
);

// connect db
mongoose.set("strictQuery", true);
mongoose.connect(
  development.database.user,
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

app.use("/api", userRoutes);
app.get("/", (req, res) => {
  res.send("Express is working");
});

const port = development.port || 5000;
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});

// config
// controllers
// models
// routes
// utils

//  Local:   http://127.0.0.1:5173/
