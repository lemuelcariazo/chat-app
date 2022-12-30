const { sign, verify } = require("jsonwebtoken");

const createJWT = (user) => {
  const accessToken = sign({ user }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return accessToken;
};

const validateJWT = async (req, res, next) => {
  const cookie = await req.cookies.jwt;
  try {
    verify(cookie, process.env.JWT_SECRET);
    return next();
  } catch (e) {
    res.status(404).json({
      message: "Not Accessible",
    });
  }
};

module.exports = { createJWT, validateJWT };
// already done
