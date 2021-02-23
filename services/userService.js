const allUsers = require("../testData/users");
const initialisation = require("../init");
const { User } = require("../models");
module.exports = {
  getUserAsync: async (userId) => {
    const userResult = await User.findById(userId);
    return userResult;
  },
  getUsersAsync: async () => {
    return await User.find();
  },
  findAsync: async (userName, password) => {
    return await User.findOne({
      userName: userName,
      password: password,
    });
  },

  createUserAsync: async (userObj) => {
    const user = new User({
      userName: userObj.userName,
      password: userObj.password,
    });
    const createdUser = await user.save();
    return createdUser;
  },

  updateUserAsync: async (userId, userObj) => {
    const updateUserObj = await User.findById(userId);
    updateUserObj.userName = userObj.userName;
    updateUserObj.password = userObj.password;
    await updateUserObj.save();
    return updateUserObj;
  },

  deleteUserAsync: async (userId) => {
    const deleteUserObj = await User.findById(userId);
    await deleteUserObj.delete();
    return;
  },
};
