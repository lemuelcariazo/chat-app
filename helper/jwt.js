const { sign, verify, decode } = require("jsonwebtoken");

const createJWT = (user) => {
  return sign({ user }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

const validateJWT = async (req, res, next) => {
  try {
    const cookieToken = await req.cookies.jwt;
    const decoded = verify(cookieToken, process.env.JWT_SECRET);

    req.validated = decoded;
    return next();
  } catch (e) {
    return res.status(403).json({
      message: e,
      error: "Please Login",
    });
  }
}; // need some changes

module.exports = { createJWT, validateJWT };
// already done

//   button <login> => handleLogin => axios.post {email, password} => must be async await =>
//   console.log(res {login successully} ) if success then call getProtectedProfile to get the userData
