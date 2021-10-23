"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://frcdn.oss-cn-shenzhen.aliyuncs.com/runtime/index.html
exports.default = (appInfo) => {
    const config = {};
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1621911302983_1743';
    // add your config here
    config.middleware = ['errorAutoSnapHandler', 'jwtIdentityInfoHandler'];
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
        origin(ctx) {
            const origin = /(test)?freelog\.com\/?$/.test(ctx.request.headers.origin)
                ? ctx.request.headers.origin
                : '*';
            return origin;
        },
    };
    return config;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiRDovYXBwL2ZyZWVsb2ctbm9kZS1hY2Nlc3Nvci9zcmMvIiwic291cmNlcyI6WyJjb25maWcvY29uZmlnLmRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxnRUFBZ0U7QUFDaEUsa0JBQWUsQ0FBQyxPQUFtQixFQUFFLEVBQUU7SUFDckMsTUFBTSxNQUFNLEdBQUcsRUFBbUIsQ0FBQztJQUVuQyx1RUFBdUU7SUFDdkUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO0lBRW5ELHVCQUF1QjtJQUN2QixNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsc0JBQXNCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztJQUV2RSxNQUFNLENBQUMsYUFBYSxHQUFHO1FBQ3JCLDBCQUEwQjtRQUMxQiw0QkFBNEI7UUFDNUIsZ0JBQWdCLEVBQUUsSUFBSTtLQUN2QixDQUFDO0lBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRztRQUNmLFNBQVMsRUFBRTs7Ozs7eUJBS1U7S0FDdEIsQ0FBQztJQUNGLE1BQU0sQ0FBQyxJQUFJLEdBQUc7UUFDWixXQUFXLEVBQUUsSUFBSTtRQUNqQixNQUFNLENBQUMsR0FBbUI7WUFDeEIsTUFBTSxNQUFNLEdBQUcseUJBQXlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDdkUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU07Z0JBQzVCLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDUixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO0tBQ0YsQ0FBQztJQUNGLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyJ9