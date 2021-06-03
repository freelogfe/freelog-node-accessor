import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import { FreelogContext } from 'egg-freelog-base';

export type DefaultConfig = PowerPartial<EggAppConfig>;
// https://frcdn.oss-cn-shenzhen.aliyuncs.com/runtime/index.html
export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1621911302983_1743';

  // add your config here
  config.middleware = ['errorAutoSnapHandler', 'jwtIdentityInfoHandler', 'urlMiddleware'];

  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true,
  };

  config.jwtAuth = {
    publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDR1CVtWu/jKC2xkZc50i/PHi8G
l+9bXUtYQNj+Pr7mSQi9qHB+xeBgoqgTzSXHPpZcNvYSI4X7Gc7JURPbhskgss+t
Wj01Gautann7hiCQY0UUpbvvoNPkyNTluC4KAjUazARda5isE9Na3CtU185EuQ7+
BMaN4BKSCPZWX/o1vQIDAQAB
-----END PUBLIC KEY-----`,
  };
  config.cors = {
    credentials: true,
    origin(ctx: FreelogContext) {
      const origin = /(test)?freelog\.com\/?$/.test(ctx.request.headers.origin)
        ? ctx.request.headers.origin
        : '*';
      return origin;
    },
  };
  return config;
};
