"use strict";
require("newrelic");

require("dotenv").config();

const Koa = require("koa");
const koaBody = require("koa-body");
const cors = require("koa2-cors");

const variables = require("./config/variables");
const {
  log: logMiddleware,
  responseHandler,
  requestId,
  db
} = require("squad-helpers");
const logger = require("./logger");

const router = require("./route");

const app = new Koa();

app.use(requestId());
app.use(koaBody());
app.use(logMiddleware({ logger }));
app.use(cors({ origin: "*" }));
app.use(responseHandler());
app.use(db());

app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(variables.appPort, () => {
  logger.info(
    `API server listening on port ${variables.appPort}, in ${variables.appEnv}`
  );
});

module.exports = server;
