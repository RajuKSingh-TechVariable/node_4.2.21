const fs = require('fs');
const path = require('path');
const httpResponse = require('http-response-rks');
const { asyncResponseHandler } = require('../middlewares');
const { UserResponse } = require('../responses');
const { userErrorMsgs } = require('../resources/errorMessages');
const { userService } = require('../services');
const { defaultLogger } = require('../appLogger');

module.exports = {
  getUsers: asyncResponseHandler(async () => {
    const users = await userService.getUsersAsync();
    const usersResponse = users.map((user) => new UserResponse(user));
    defaultLogger.debug(usersResponse);
    return new httpResponse.httpSucces.HttpOk(usersResponse);
  }),

  getUser: asyncResponseHandler(async (req) => {
    const user = await userService.getUserAsync(req.model.params.userId);
    //   defaultLogger.debug(user);
    if (!user) {
      throw new httpResponse.httpError.HttpNotFound(userErrorMsgs.userNotFound);
    }
    const userResponse = new UserResponse(user);
    defaultLogger.debug(userResponse);
    return new httpResponse.httpSucces.HttpOk(userResponse);
  }),

  getUserAvatar: asyncResponseHandler(async (req, res) => {
    const user = await userService.getUserAsync(req.model.params.userId);
    //   defaultLogger.debug(user);
    if (!user) {
      throw new httpResponse.httpError.HttpNotFound(userErrorMsgs.userNotFound);
    }
    const img = path.join(__dirname, `../uploads/${user.userImagePath}`);
    fs.access(img, fs.constants.F_OK, (err) => {
      // check that we can access  the file
      defaultLogger.info(`${img} ${err ? 'does not exist' : 'exists'}`);
    });

    const myPromise = await new Promise((resolve) => {
      fs.readFile(img, (err, content) => {
        if (err) {
          res.writeHead(404, { 'Content-type': 'text/html' });
          res.end('<h1>No such image</h1>');
        } else {
          resolve(content);
        }
      });
    });
    return new httpResponse.httpSucces.HttpFileOk(myPromise);
  }),

  createUser: asyncResponseHandler(async (req) => {
    const imagePath = req.file;
    const createdUser = await userService.createUserAsync(
      req.model.body,
      imagePath.slice(8, imagePath.length),
    );
    //  defaultLogger.debug(createdUser);
    const userResponse = new UserResponse(createdUser);
    defaultLogger.debug(userResponse);
    return new httpResponse.httpSucces.HttpCreated(userResponse);
  }),

  updateUser: asyncResponseHandler(async (req) => {
    const user = await userService.getUserAsync(req.model.params.userId);
    //  defaultLogger.debug(user);
    if (!user) {
      throw new httpResponse.httpError.HttpNotFound(userErrorMsgs.userNotFound);
    }
    const updatedUser = await userService.updateUserAsync(
      user.id,
      req.model.body,
    );
    defaultLogger.debug(updatedUser);
    return new httpResponse.httpSucces.HttpOk(new UserResponse(updatedUser));
  }),

  deleteUser: asyncResponseHandler(async (req) => {
    const user = await userService.getUserAsync(req.params.userId);
    //  defaultLogger.debug(user);
    if (!user) {
      throw new httpResponse.httpError.HttpNotFound(userErrorMsgs.userNotFound);
    }
    await userService.deleteUserAsync(user.id);
    return new httpResponse.httpSucces.HttpNoContent();
  }),
};
