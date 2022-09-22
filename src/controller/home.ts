import { App, Controller, Get, Inject, Provide } from '@midwayjs/decorator';
import { Application, Context } from 'egg';
// import {
//   CurlResFormatEnum
// } from 'egg-freelog-base';
const mime = require("mime");
// const publicPath = 'https://frcdn.oss-cn-shenzhen.aliyuncs.com/runtime'


@Provide()
@Controller('/')
export class HomeController {
  @App()
  app: Application;

  @Inject()
  ctx: Context;

  @Get('/')
  async home() {
    const publicPath = this.ctx.publicPath
    const data = await this.app.curl(publicPath + '/index.html')
    const type = mime.getType(publicPath + '/index.html');
    console.log(this.ctx)
    this.ctx.set("content-type", type);
    this.ctx.body = data.data;
  }


  @Get('/*')
  async static() {
    const publicPath = this.ctx.publicPath
    let url = publicPath + this.ctx.url
    const data = await this.app.curl(url);
    // let type = mime.getType(url);
    // if(url.includes('localhost:3000')){
    // @ts-ignore
    Object.keys(data.headers).forEach((key:string)=>{
      // @ts-ignore
      this.ctx.set(key, data.headers[key]);
    })
    // }
    this.ctx.body = data.data;
  }
}
