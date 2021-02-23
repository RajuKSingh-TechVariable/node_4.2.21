const responseHandler = require("../responses/responseHandlerResult");
module.exports = (controller) => async (req, res, _next) => {
  const response = await controller(req);
  //  responseHandler(res, response);
  // console.log("jygxcsc", response);
  res
    // .status(response.statusCode)
    //   .location("back")
    .send(response.payload);
};
