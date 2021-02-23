const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect(config.mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const con = mongoose.connection;
con.on("open", function () {
  console.log("connected");
});

module.exports = con;
