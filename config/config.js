require("dotenv").config();

module.exports = {
  development: {
    database: {
      user: process.env.DB_USER,
    },

    port: process.env.PORT,
  },
};
