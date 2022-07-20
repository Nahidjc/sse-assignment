const { errorResponseHandler } = require("squad-helpers");

exports.check = async ctx => {
  try {
    console.log(ctx.db);
    ctx.response.ok({
      status: "ok",
      uptime: process.uptime(),
      logging: process.env.LOG_LEVEL
    });
  } catch (error) {
    errorResponseHandler(ctx, error);
  }
};
