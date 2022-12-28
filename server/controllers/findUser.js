const cookieParser = require("cookie-parser");
const User = require("../models/User");
// const { createJWT } = require("./JWT");
const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
app.use(cookieParser());

const findUser = async (email, password) => {
  const user = await User.findOne({ email: email });
  if (User) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = createJWT(user);
      res.cookie("jwt", token, { httpOnly: true });

      return user;
    } else {
      return null;
    }
  }
};
module.exports = { findUser };


// find user is good to go
