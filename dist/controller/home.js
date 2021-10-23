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
let HomeController = class HomeController {
    async home() {
        const publicPath = this.app.config.env === 'local' ? 'http://localhost:3000' : 'https://frcdn.oss-cn-shenzhen.aliyuncs.com/runtime';
        const data = await this.app.curl(publicPath + '/index.html');
        const type = mime.getType(publicPath + '/index.html');
        this.ctx.set("content-type", type);
        this.ctx.body = data.data;
    }
    async static() {
        console.log(this.ctx.url);
        if (this.ctx.url.indexOf('$freelog') > -1) {
            const publicPath = this.app.config.env === 'local' ? 'http://localhost:3000' : 'https://frcdn.oss-cn-shenzhen.aliyuncs.com/runtime';
            const data = await this.app.curl(publicPath + '/index.html');
            const type = mime.getType(publicPath + '/index.html');
            this.ctx.set("content-type", type);
            this.ctx.body = data.data;
            return;
        }
        const publicPath = this.app.config.env === 'local' ? 'http://localhost:3000' : 'https://frcdn.oss-cn-shenzhen.aliyuncs.com/runtime';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9hcHAvZnJlZWxvZy1ub2RlLWFjY2Vzc29yL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBNEU7QUFDNUUsNkJBQTJDO0FBQzNDLFdBQVc7QUFDWCxzQkFBc0I7QUFDdEIsNkJBQTZCO0FBQzdCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QiwwRUFBMEU7QUFLMUUsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQVF6QixLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxPQUFPLENBQUEsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxvREFBb0QsQ0FBQTtRQUNsSSxNQUFNLElBQUksR0FBSSxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsQ0FBQTtRQUM3RCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM1QixDQUFDO0lBSUQsS0FBSyxDQUFDLE1BQU07UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDekIsSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUM7WUFDdkMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFD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