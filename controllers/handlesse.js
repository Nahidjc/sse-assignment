const { PassThrough } = require("stream");
const { errorResponseHandler } = require("squad-helpers");
const EventEmitter = require("events");

const events = new EventEmitter();
events.setMaxListeners(0);



exports.handleSSE = async ctx => {


    try {
        ctx.request.socket.setTimeout(0);
        ctx.req.socket.setNoDelay(true);
        ctx.req.socket.setKeepAlive(true);

        ctx.set({
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
        });

        const stream = new PassThrough();


        ctx.status = 200;
        ctx.body = stream;
        const listener = (data) => {
            stream.write(`data: ${data}\n\n`);
        }

        events.on("data", listener);

        stream.on("close", () => {
            events.off("data", listener);
        });
        var counter = 1
        setInterval(() => {

            events.emit("data", counter);
            counter += 1
        }, 5000);

    } catch (err) {
        errorResponseHandler(ctx, err)
    }


}
