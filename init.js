const mongoose = require('mongoose');
const config = require('./config');
const { defaultLogger } = require('./appLogger');

mongoose.connect(config.mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const con = mongoose.connection;
con.on('open', () => {
  defaultLogger.info('connected');
});

module.exports = con;
