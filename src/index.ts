import app from "./app/app";
import router from "./app/router";
import config from "./config";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";

app.use(logger())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(config.port, () => {
    console.log(`server is running at http://localhost:${config.port}`);
  });
