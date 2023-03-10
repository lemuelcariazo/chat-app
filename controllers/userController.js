const { deleteCookie } = require("../helper/cookie");
const { findUser } = require("../helper/findUser");
const { hashPassword } = require("../helper/bcrypt.js");
const User = require("../models/User");

const handleRegister = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Username and Password are Required" });
  }

  const user = await findUser(email);
  if (user) {
    return res.status(401).json({ message: "User already exists!" });
  }

  const usern = await User.findOne({ username });
  if (usern) {
    return res.status(401).json({ message: "Username already exists!" });
  }

  try {
    const hashedPwd = await hashPassword(password, 10); // hashed the password

    await User.create({
      email: email,
      username: username,
      password: hashedPwd,
    }); // store new user

    return res.status(201).json({
      message: "New User has been created!",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  // done
};

const handleLogin = async (req, res) => {
  try {
    return res.status(200).json({
      message: "Login Successfully!",
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

const handleProfile = async (req, res) => {
  // handleProfile has a job to display the users data after the jwt has been validated

  const { _id, email, password, username } = req.validated.user;
  try {
    return res.json({
      email: email,
      username: username,
    });
  } catch (e) {
    return res.send(e);
  }
};

const handleLogout = async (req, res) => {
  await deleteCookie(res);
  return res.status(200).json({ message: "Logout Successfully" });
};

module.exports = { handleRegister, handleLogin, handleLogout, handleProfile };
// handle Profile is under construction && handleLogout needs more review
