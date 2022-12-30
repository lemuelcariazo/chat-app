const express = require("express");
const app = express();
const User = require("../models/User");
const { findUser } = require("../helper/findUser");
const { hashPassword, comparePassword } = require("../helper/bcrypt");
const { createJWT } = require("../helper/jwt");
const cookieParser = require("cookie-parser");
const { authenticate } = require("../auth");

app.use(cookieParser());

const handleRegister = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Username and Password are Required" });
  }
  // TODO: check user if exists
  const user = await findUser(email);
  if (user) {
    return res.status(401).json({ message: "User already exists!" });
  }
  try {
    const hashedPwd = await hashPassword(password, 10); // hashed the password
    await User.create({
      email: email,
      password: hashedPwd,
    }); // store new user

    res.status(201).json({
      success: "New User has been created!",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUser(email);
  if (!user) {
    return res.status(401).json({
      message: "Invalid User",
    });
  }
  const hashedPwd = user.password;
  const comparePwd = await comparePassword(password, hashedPwd);
  if (!comparePwd) {
    return res.status(401).json({
      message: "Wrong Username and Password",
    });
  } // ------ AUTHENTCATED

  const token = createJWT(user);

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    expires: new Date(Date.now() + 3600000),
  });

  try {
    res.json("Login Succesfully!");
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

const handleProfile = async (req, res) => {
  try {
    const user = await User.find({});
    res.send(user);
  } catch (e) {
    res.status(e.status).json({
      message: e.message,
    });
  }
};

module.exports = { handleRegister, handleLogin, handleProfile };
// checking in console.log is not displaying password and user.password
