const { development } = require("./config/config");
const cookieParser = require("cookie-parser");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const path = require("path");

const cors = require("cors");

// Express Body parser
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
    // origin: "https://chat-app-ruddy-one.vercel.app",
    // allowedHeaders: ["Content-Type"],
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

app.use("/api", routes);
// app.use(express.static(path.join(__dirname, "./client")));
// app.get("*", (__, res) => {
//   res.sendFile(path.join(__dirname, "./client/index.htmls"), (err) => {
//     if (err) {
//       res.status(400).send(err);
//     }
//   });
// });

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
