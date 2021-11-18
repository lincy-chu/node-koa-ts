import {Context} from "koa";
import * as mockjs from "mockjs";
import {response} from "../utils";

export default class UserController {
  static async index(ctx: Context) {
    ctx.status = 200;
    response(ctx)
  }
  static async userList(ctx: Context) {
    ctx.status = 200;
    const data = mockjs.mock({
      "list|20": [{"name": "@name", "city": "@city", "province": "@province"}]
    });
    response(ctx, { code: 200, msg: '', data });
  }
}
