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
exports.HomeController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const egg_1 = require("egg");
// import {
//   CurlResFormatEnum
// } from 'egg-freelog-base';
const mime = require("mime");
// const publicPath = 'https://frcdn.oss-cn-shenzhen.aliyuncs.com/runtime'
const publicPath = process.env.NODE_ENV === 'local' ? 'http://localhost:3000' : 'https://frcdn.oss-cn-shenzhen.aliyuncs.com/runtime';
let HomeController = class HomeController {
    async home() {
        console.log(this.ctx);
        const data = await this.app.curl(publicPath + '/index.html');
        const type = mime.getType(publicPath + '/index.html');
        this.ctx.set("content-type", type);
        this.ctx.body = data.data;
    }
    async static() {
        let url = publicPath + this.ctx.url;
        if (this.ctx.url.indexOf("/freelog-widget") === 0) {
            const arr = this.ctx.url.split('/');
            const widgetName = arr[2] + '/' + arr[3];
            url = this.ctx.url.replace("/freelog-widget/", '').replace(widgetName, '');
            const baseUrl = this.ctx.request.header.origin.indexOf('.testfreelog.com') > -1 ? 'http://qi.testfreelog.com/v2' : 'http://qi.freelog.com/v2';
            url = baseUrl + '/widgets/' + widgetName.replace('/', '-') + url;
        }
        // const data =  await this.ctx.curlIntranetApi(url, null, CurlResFormatEnum.Original);
        const data = await this.app.curl(url);
        const type = mime.getType(url);
        this.ctx.set("content-type", type);
        this.ctx.body = data.data;
    }
};
__decorate([
    decorator_1.App(),
    __metadata("design:type", egg_1.Application)
], HomeController.prototype, "app", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], HomeController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "home", null);
__decorate([
    decorator_1.Get('/*'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "static", null);
HomeController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/')
], HomeController);
exports.HomeController = HomeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9hcHAvZnJlZWxvZy1ub2RlLWFjY2Vzc29yL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBNEU7QUFDNUUsNkJBQTJDO0FBQzNDLFdBQVc7QUFDWCxzQkFBc0I7QUFDdEIsNkJBQTZCO0FBQzdCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QiwwRUFBMEU7QUFFMUUsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFBLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsb0RBQW9ELENBQUE7QUFJbkksSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQVF6QixLQUFLLENBQUMsSUFBSTtRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLE1BQU0sSUFBSSxHQUFJLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQyxDQUFBO1FBQzdELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFJRCxLQUFLLENBQUMsTUFBTTtRQUNWLElBQUksR0FBRyxHQUFHLFVBQVUsR0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQTtRQUNwQyxJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsRUFBQztZQUMvQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbkMsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDeEMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBQzFFLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQTtZQUM3SSxHQUFHLEdBQUcsT0FBTyxHQUFHLFdBQVcsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7U0FDakU7UUFDRCx1RkFBdUY7UUFDdkYsTUFBTSxJQUFJLEdBQUksTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9CLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzVCLENBQUM7Q0FDRixDQUFBO0FBaENDO0lBREMsZUFBRyxFQUFFOzhCQUNELGlCQUFXOzJDQUFDO0FBR2pCO0lBREMsa0JBQU0sRUFBRTs7MkNBQ0k7QUFHYjtJQURDLGVBQUcsQ0FBQyxHQUFHLENBQUM7Ozs7MENBT1I7QUFJRDtJQURDLGVBQUcsQ0FBQyxJQUFJLENBQUM7Ozs7NENBZ0JUO0FBakNVLGNBQWM7SUFGMUIsbUJBQU8sRUFBRTtJQUNULHNCQUFVLENBQUMsR0FBRyxDQUFDO0dBQ0gsY0FBYyxDQWtDMUI7QUFsQ1ksd0NBQWMifQ==