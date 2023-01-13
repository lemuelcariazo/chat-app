const User = require("../models/User");

const findUser = async (email) => {
  const user = await User.findOne({
    email: email,
  });
  if (user) {
    return user;
  } else {
    return null;
  }
};
module.exports = { findUser };

// already done
