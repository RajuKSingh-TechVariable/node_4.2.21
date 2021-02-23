const config = require("./config");
const log4js = require("log4js");

log4js.configure(config.logger);

const defaultLogger = log4js.getLogger();
const criticalLogger = log4js.getLogger(config.loggerCategories.critical);
const emailLogger = log4js.getLogger(config.loggerCategories.email);

module.exports = {
  defaultLogger,
  criticalLogger,
  emailLogger,
};
