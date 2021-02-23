function responseHandler(res, response) {
  // if (!response.location) {
  //   res.status(response.statusCode).send(response.payload || undefined);
  // }
  res
    .status(response.statusCode)
    //    .location(response.location)
    .send(response.payload || undefined);
}

module.exports = { responseHandler };
