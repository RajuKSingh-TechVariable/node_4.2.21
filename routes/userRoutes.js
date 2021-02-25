const express = require('express');
const multer = require('multer');
const { userController } = require('../controllers');
const { validator } = require('../middlewares');
const { UserRequest } = require('../requests/UserRequest');
const { PARAMS, BODY } = require('../constants/validateOn');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads');
  },
  filename(req, file, cb) {
    try {
      cb(null, +new Date() + file.originalname);
    } catch (err) {
      // console.log(err);
    }
  },
});
const upload = multer({ storage });

const router = express.Router();
router.get('/', userController.getUsers);
router.get(
  '/:userId',
  validator(UserRequest, [PARAMS]),
  userController.getUser,
);
router.get(
  '/:userId/avatar',
  validator(UserRequest, [PARAMS]),
  userController.getUserAvatar,
);
router.post(
  '/',
  upload.single('userImage'),
  validator(UserRequest, [BODY]),
  userController.createUser,
);
router.put(
  '/:userId',
  validator(UserRequest, [BODY, PARAMS]),
  userController.updateUser,
);
router.delete(
  '/:userId',
  validator(UserRequest, [PARAMS]),
  userController.deleteUser,
);

// router.get("/profile/qwerty", (req, res, next) => {
//   let img = path.join(
//     __dirname,
//     "../uploads/2021-02-23T095133.253ZIMG_20190928_225159.jpg"
//   );
//   fs.access(img, fs.constants.F_OK, (err) => {
//     //check that we can access  the file
//     console.log(`${img} ${err ? "does not exist" : "exists"}`);
//   });

//   fs.readFile(img, function (err, content) {
//     if (err) {
//       res.writeHead(404, { "Content-type": "text/html" });
//       res.end("<h1>No such image</h1>");
//     } else {
//       //specify the content type in the response will be an image
//       res.writeHead(200, { "Content-type": "image/jpg" });
//       res.end(content);
//     }
//   });
// });

module.exports = router;
