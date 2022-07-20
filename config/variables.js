// default
require("dotenv").config();

const appPort = process.env.APP_PORT;
const loggerName = process.env.LOGGER_NAME;
const serviceName = process.env.SERVICE_NAME;
const serviceDomain = process.env.SERVICE_DOMAIN;
const logLevel = process.env.LOG_LEVEL;
const connectionString = process.env.MONGODB_CONN_STRING;
const secretKey = process.env.SECRET_KEY;
const variables = {
  appPort,
  loggerName,
  logLevel,
  serviceName,
  serviceDomain,
  connectionString,
  secretKey
};

module.exports = variables;
