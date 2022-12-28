// const findUser = (email) => {
//   const user = User.findOne({
//     email: email,
//   });
//   if (user) {
//     return user;
//   } else {
//     return null;
//   }
// };

// const handleLogin = async (req, res) => {
//   const { email, password } = req.body;
//   // check value
//   if (!email || !password) {
//     return res
//       .status(400)
//       .json({ message: "Username and Password are required" });
//   }
//   try {
//     const user = findOne();
//   } catch (e) {}
// };

const cookieParser = require("cookie-parser");
const User = require("../models/User");
// const { createJWT } = require("./JWT");
const { findUser } = require("./findUser");
const express = require("express");
const app = express();

app.use(cookieParser);

const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await findUser(email, password);

  if (user) {
    const token = createJWT(user);
    res.send(token);
  }
};

module.exports = { handleLogin };
// under construction
