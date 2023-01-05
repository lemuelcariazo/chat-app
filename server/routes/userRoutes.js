const express = require("express");
const router = express.Router();
const { authenticate, authorize } = require("../auth");
const { validateJWT, decodeJWT } = require("../helper/jwt");
const {
  handleLogin,
  handleRegister,
  handleProfile,
  handleLogout,
} = require("../controllers/userController");

router.post("/login", authenticate, handleLogin); // authenticate login
router.post("/register", handleRegister);
router.get("/protected", validateJWT, handleProfile);
router.delete("/logout", handleLogout);

module.exports = router;

// under construction
