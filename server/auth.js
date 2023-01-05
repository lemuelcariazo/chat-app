const { findUser } = require("./helper/findUser");
const { comparePassword } = require("./helper/bcrypt");
const { createJWT, validateJWT } = require("./helper/jwt");
const { saveCookie } = require("./helper/cookie");
const { validate } = require("./models/User");

const authenticate = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await findUser(email);
  if (!user) {
    return res.status(401).json({
      message: "Wrong Username and Password",
    });
  }
  const hashedPwd = user.password;
  const comparePwd = await comparePassword(password, hashedPwd);
  if (!comparePwd) {
    return res.status(401).json({
      message: "Wrong Username and Password",
    });
  }

  const token = createJWT(user, res);

  saveCookie(token, res);
  try {
    return next();
  } catch (e) {
    res.status(e.status).json({
      message: e.message,
    });
  }
};

const authorize = async (req, res, next) => {
  try {
    await validateJWT(req);
    return next();
  } catch (e) {
    res.status(403).json({
      message: "Not Authorized",
    });
  }
}; // need some changes

module.exports = {
  authenticate,
  authorize,
};
