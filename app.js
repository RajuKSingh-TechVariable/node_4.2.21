/* eslint-disable vars-on-top */
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const { userRoutes } = require('./routes');
const {
  authorizationHandler,
  finalErrorHandler,
  routeHandler,
} = require('./middlewares');
const { defaultLogger } = require('./appLogger');
// const swaggerDocument = require("./swagger.json");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'REST API',
      description: 'Api Documentation',
      content: {
        name: 'qwerty',
      },
      servers: ['http://localhost:8081'],
    },
  },
  basePath: '/',
  apis: [
    './responses/*.yaml',
    './responses/httpErrorsResponses/*.yaml',
    './routes/*.yaml',
    './requests/UserRequest/*.yaml',
    './*.yaml',
  ],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//  app.use(criticalLogger);
app.use('/users', authorizationHandler, userRoutes);

app.all('*', routeHandler);
app.use(finalErrorHandler);

// eslint-disable-next-line vars-on-top
// eslint-disable-next-line no-var
var server = app.listen(8081, () => {
  const host = server.address().address;
  const { port } = server.address();

  defaultLogger.info('Example app listening at http://%s:%s', host, port);
});
