const { HttpUnauthorised } = require("../responses/httpErrorsResponses");
const { userService } = require("../services");
const { authorisationErrorMsgs } = require("../resources/errorMessages");

module.exports = async (req, _res, next) => {
  const authHeader = req.headers.authorization;

  const encodedCredentials = authHeader.slice(
    authHeader.indexOf(" ") + 1,
    authHeader.length
  );
  const credentialsBuffer = Buffer.from(encodedCredentials, "base64");
  const userCredentials = credentialsBuffer.toString("utf-8");

  const userName = userCredentials.slice(0, userCredentials.indexOf(":"));
  const password = userCredentials.slice(
    userCredentials.indexOf(":") + 1,
    userCredentials.length
  );
  req.user = await userService.findAsync(userName, password);
  if (!req.user) {
    next(new HttpUnauthorised(authorisationErrorMsgs.permissionDenied));
  }
  return next();
};
