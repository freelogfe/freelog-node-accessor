import { App, Provide } from '@midwayjs/decorator';
import { IWebMiddleware, IMidwayWebNext } from '@midwayjs/web';
import { Application, Context } from 'egg';

@Provide()
export class urlMiddleware implements IWebMiddleware {
  @App()
  app: Application;
  resolve() {
    return async (ctx: Context, next: IMidwayWebNext) => {
      if (ctx.request.header.origin) {
        ctx.baseUrl =
          ctx.request.header.origin.indexOf('.testfreelog.com') > -1
            ? 'http://qi.testfreelog.com/v2'
            : 'http://qi.freelog.com/v2';
      }
      ctx.publicPath =
        this.app.config.env === 'local'
          ? 'http://localhost:3000'
          : ctx.request.header.origin.indexOf('.testfreelog.com') > -1
          ? `https://runtime-freelog-test.oss-cn-shenzhen.aliyuncs.com`
          : `https://runtime-freelog.oss-cn-shenzhen.aliyuncs.com`;
      await next();
    };
  }
}
