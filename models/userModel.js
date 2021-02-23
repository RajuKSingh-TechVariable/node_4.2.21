const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    min: [5, "userName lenth should be alleast 5"],
    required: true,
  },
  password: {
    type: String,
    min: [5, "password lenth should be alleast 5"],
    rerquired: true,
  },
});

module.exports = mongoose.model("User", userSchema);
