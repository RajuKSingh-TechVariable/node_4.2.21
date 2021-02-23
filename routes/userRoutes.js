const express = require("express");
const { userController } = require("../controllers");
const { validator } = require("../middlewares");
const { UserRequest } = require("../requests/UserRequest");
const { PARAMS, BODY, BODYANDPARAMS } = require("../constants/validateOn");

const router = express.Router();
router.get("/", userController.getUsers);
router.get(
  "/:userId",
  validator(UserRequest, [PARAMS]),
  userController.getUser
);
router.post("/", validator(UserRequest, [BODY]), userController.createUser);
router.put(
  "/:userId",
  validator(UserRequest, [BODY, PARAMS]),
  userController.updateUser
);
router.delete(
  "/:userId",
  validator(UserRequest, [PARAMS]),
  userController.deleteUser
);

module.exports = router;
