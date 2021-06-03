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
    const data =  await this.app.curl(publicPath + '/index.html')
    const type = mime.getType(publicPath + '/index.html');
    this.ctx.set("content-type", type);
    this.ctx.body = data.data;
  }

  
  @Get('/*')
  async static() {
    if(this.ctx.url.indexOf('$freelog') > -1){
      const publicPath = this.ctx.publicPath
      const data =  await this.app.curl(publicPath + '/index.html')
      const type = mime.getType(publicPath + '/index.html');
      this.ctx.set("content-type", type);
      this.ctx.body = data.data;
      return 
    }
    const publicPath = this.ctx.publicPath
    let url = publicPath  + this.ctx.url
    if(this.ctx.url.indexOf("/freelog-widget") === 0){
      const arr = this.ctx.url.split('/')
      const widgetName = arr[2] + '/' + arr[3]
      url = this.ctx.url.replace("/freelog-widget/", '').replace(widgetName, '')
      url = this.ctx.baseUrl + '/widgets/' + widgetName.replace('/', '-') + url
    }
    const data =  await this.app.curl(url);
    const type = mime.getType(url);
    this.ctx.set("content-type", type);
    this.ctx.body = data.data;
  }
}
