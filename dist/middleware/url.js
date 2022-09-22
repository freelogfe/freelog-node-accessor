"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlMiddleware = void 0;
const decorator_1 = require("@midwayjs/decorator");
const egg_1 = require("egg");
let urlMiddleware = class urlMiddleware {
    resolve() {
        return async (ctx, next) => {
            console.log(ctx.publicPath, ctx.request.header.origin);
            if (ctx.request.header.origin) {
                ctx.baseUrl =
                    ctx.request.header.origin.indexOf('.testfreelog.com') > -1
                        ? 'http://qi.testfreelog.com/v2'
                        : 'https://qi.freelog.com/v2';
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
};
__decorate([
    decorator_1.App(),
    __metadata("design:type", egg_1.Application)
], urlMiddleware.prototype, "app", void 0);
urlMiddleware = __decorate([
    decorator_1.Provide()
], urlMiddleware);
exports.urlMiddleware = urlMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLmpzIiwic291cmNlUm9vdCI6IkQ6L2FwcC9ydW50aW1lL2ZyZWVsb2ctbm9kZS1hY2Nlc3Nvci9zcmMvIiwic291cmNlcyI6WyJtaWRkbGV3YXJlL3VybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBbUQ7QUFFbkQsNkJBQTJDO0FBRzNDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFHeEIsT0FBTztRQUNMLE9BQU8sS0FBSyxFQUFFLEdBQVksRUFBRSxJQUFvQixFQUFFLEVBQUU7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZELElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUM3QixHQUFHLENBQUMsT0FBTztvQkFDVCxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN4RCxDQUFDLENBQUMsOEJBQThCO3dCQUNoQyxDQUFDLENBQUMsMkJBQTJCLENBQUM7YUFDbkM7WUFDRCxHQUFHLENBQUMsVUFBVTtnQkFDWixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssT0FBTztvQkFDN0IsQ0FBQyxDQUFDLHVCQUF1QjtvQkFDekIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzVELENBQUMsQ0FBQywyREFBMkQ7d0JBQzdELENBQUMsQ0FBQyxzREFBc0QsQ0FBQztZQUM3RCxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFuQkM7SUFEQyxlQUFHLEVBQUU7OEJBQ0QsaUJBQVc7MENBQUM7QUFGTixhQUFhO0lBRHpCLG1CQUFPLEVBQUU7R0FDRyxhQUFhLENBcUJ6QjtBQXJCWSxzQ0FBYSJ9