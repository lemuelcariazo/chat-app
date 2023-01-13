const bcrypt = require("bcrypt");

const comparePassword = async (plainPwd, hashedPwd) => {
  return await bcrypt.compare(plainPwd, hashedPwd);
};

const hashPassword = async (password, salt) => {
  return await bcrypt.hash(password, salt);
};

module.exports = { comparePassword, hashPassword };

// already done
