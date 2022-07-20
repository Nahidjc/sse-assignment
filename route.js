const router = require("koa-router");

const routes = new router();

const { handleSSE } = require("./controllers/handlesse");

routes.get("/stream", handleSSE)

module.exports = routes;
