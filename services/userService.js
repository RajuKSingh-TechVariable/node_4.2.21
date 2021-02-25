// const allUsers = require('../testData/users');
// eslint-disable-next-line no-unused-vars
require('../init');
const { User } = require('../models');

module.exports = {
  getUserAsync: async (userId) => {
    const userResult = await User.findById(userId);
    return userResult;
  },
  getUsersAsync: async () => User.find(),
  findAsync: async (userName, password) => User.findOne({
    userName,
    password,
  }),

  createUserAsync: async (userObj, path) => {
    const user = new User({
      userName: userObj.userName,
      password: userObj.password,
      userImagePath: path,
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
  },
};
