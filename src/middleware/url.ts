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
          ? `https://freelog-runtime-test.oss-cn-hangzhou.aliyuncs.com`
          : `https://freelog-runtime.oss-cn-beijing.aliyuncs.com`;
      await next();
    };
  }
}