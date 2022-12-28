const express = require("express");
const app = express();
const User = require("../models/User");
const bcrypt = require("bcrypt");
// const { createJWT } = require("./JWT");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

const handleNewUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Username and Password are Required" });
  }
  // TODO: check user if exists
  const user = await User.findOne({
    email: email,
  });

  if (user) {
    return res.status(401).json({ message: "User already exists!" });
  }

  try {
    const hashedPwd = await bcrypt.hash(password, 10); // hashed the password

    const newUser = await User.create({
      email: email,
      password: hashedPwd,
    }); // store new user

    const token = createJWT(newUser);

    res.cookie("jwt", token, { httpOnly: true });

    res.status(201).json({
      success: "New User has been created!",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { handleNewUser };
// find user is good to go
