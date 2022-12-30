const { findUser } = require("./helper/findUser");
const { comparePassword } = require("./helper/bcrypt");

const authUser = async (email, password, user) => {
  if (!user) {
    return res.status(401).json({
      message: "Wrong Username and Password",
    });
  }
  const token = createJWT(user);
  const hashedPwd = user.password;
  const comparePwd = await comparePassword(password, hashedPwd);
  if (!comparePwd) {
    return res.status(401).json({
      message: "Wrong Username and Password",
    });
  }
};

module.exports = { authUser };
