const express = require("express");
const { userRoutes } = require("./routes");
const {
  authorizationHandler,
  finalErrorHandler,
  routeHandler,
} = require("./middlewares");
const bodyParser = require("body-parser");
const { defaultLogger } = require("./appLogger");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
//const swaggerDocument = require("./swagger.json");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "REST API",
      description: "Api Documentation",
      content: {
        name: "qwerty",
      },
      servers: ["http://localhost:8081"],
    },
  },
  basePath: "/",
  apis: [
    "./responses/*.yaml",
    "./responses/httpErrorsResponses/*.yaml",
    "./routes/*.yaml",
    "./requests/UserRequest/*.yaml",
    "./*.yaml",
  ],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//  app.use(criticalLogger);
app.use("/users", userRoutes);

app.all("*", routeHandler);
app.use(finalErrorHandler);

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  defaultLogger.info("Example app listening at http://%s:%s", host, port);
});
