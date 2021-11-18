export enum Methods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete'
}

export type Route = {
  method: Methods,
  url: string,
  handler: any;
}

export type Response = {
  code?: number;
  msg?: string;
  data?: any;
}
