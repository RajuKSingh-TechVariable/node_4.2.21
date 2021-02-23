const { HttpNotFound } = require("../responses/httpErrorsResponses");
const { asyncResponseHandler } = require("../middlewares");
const { UserResponse } = require("../responses");
const { userErrorMsgs } = require("../resources/errorMessages");
const { userService } = require("../services");
const {
  HttpOk,
  HttpCreated,
  HttpNoContent,
} = require("../responses/httpSuccesResponses");
const { defaultLogger } = require("../appLogger");

module.exports = {
  getUsers: asyncResponseHandler(async () => {
    const users = await userService.getUsersAsync();
    const usersResponse = users.map((user) => new UserResponse(user));
    defaultLogger.debug(usersResponse);
    return new HttpOk(usersResponse);
  }),

  getUser: asyncResponseHandler(async (req) => {
    const user = await userService.getUserAsync(req.model.params.userId);
    //   defaultLogger.debug(user);
    if (!user) {
      throw new HttpNotFound(userErrorMsgs.userNotFound);
    }
    const userResponse = new UserResponse(user);
    defaultLogger.debug(userResponse);
    return new HttpOk(userResponse);
  }),

  createUser: asyncResponseHandler(async (req) => {
    const createdUser = await userService.createUserAsync(req.model.body);
    //  defaultLogger.debug(createdUser);
    const userResponse = new UserResponse(createdUser);
    defaultLogger.debug(userResponse);
    return new HttpCreated(userResponse);
  }),

  updateUser: asyncResponseHandler(async (req) => {
    const user = await userService.getUserAsync(req.model.params.userId);
    //  defaultLogger.debug(user);
    if (!user) {
      throw new HttpNotFound(userErrorMsgs.userNotFound);
    }
    const updatedUser = await userService.updateUserAsync(
      user.id,
      req.model.body
    );
    defaultLogger.debug(updatedUser);
    return new HttpOk(new UserResponse(updatedUser));
  }),

  deleteUser: asyncResponseHandler(async (req) => {
    const user = await userService.getUserAsync(req.params.userId);
    //  defaultLogger.debug(user);
    if (!user) {
      throw new HttpNotFound(userErrorMsgs.userNotFound);
    }
    await userService.deleteUserAsync(user.id);
    return new HttpNoContent();
  }),
};
