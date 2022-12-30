const { handleLogin } = require("../controllers/loginController");
const router = require("./registerPath");
const express = require("express");
const router = express.Router;
const app = express();

app.use("/login", handleLogin);
// app.use("/", )

module.export = router;
