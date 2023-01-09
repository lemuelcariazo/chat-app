const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema);

// User.collection
//   .dropIndex(username)
//   .then(() => console.log("Index dropped"))
//   .catch((error) => console.log(error));

module.exports = User;
