const express = require("express");
const router = express.Router();
const { validateJWT } = require("../helper/jwt");
const {
  handleLogin,
  handleRegister,
  handleProfile,
} = require("../controllers/userController");

router.post("/login", handleLogin);
router.post("/register", handleRegister);

router.get("/profile", validateJWT, handleProfile);

module.exports = router;

// under construction
