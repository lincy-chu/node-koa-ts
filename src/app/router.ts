import Router from "koa-router";
import {Methods, Route} from "./types";
import UserController from "./controllers/UserController";

const router = new Router();

const routes: Route[] = [
  {
    url: '/',
    method: Methods.GET,
    handler: UserController.index
  },
  {
    url: '/userList',
    method: Methods.GET,
    handler: UserController.userList
  }
];

routes.forEach(({method, url, handler}: Route) => {
  router[method](url, handler);
});

export default router;

