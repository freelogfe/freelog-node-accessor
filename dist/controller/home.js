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
        const publicPath = this.ctx.publicPath;
        console.log(111, publicPath);
        const data = await this.app.curl(publicPath + '/index.html');
        const type = mime.getType(publicPath + '/index.html');
        this.ctx.set("content-type", type);
        this.ctx.body = data.data;
    }
    async static() {
        if (this.ctx.url.indexOf('$freelog') > -1) {
            const publicPath = this.ctx.publicPath;
            const data = await this.app.curl(publicPath + '/index.html');
            let type = mime.getType(publicPath + '/index.html');
            this.ctx.set("content-type", type);
            if (mime.getExtension(publicPath + '/index.html') && mime.getExtension(publicPath + '/index.html').indexOf('ts') > -1) {
                type = 'application/javascript';
            }
            console.log(mime.getExtension(publicPath + '/index.html'), type);
            this.ctx.body = data.data;
            return;
        }
        const publicPath = this.ctx.publicPath;
        let url = publicPath + this.ctx.url;
        if (this.ctx.url.indexOf("/freelog-widget") === 0) {
            const arr = this.ctx.url.split('/');
            const widgetName = arr[2] + '/' + arr[3];
            url = this.ctx.url.replace("/freelog-widget/", '').replace(widgetName, '');
            url = this.ctx.baseUrl + '/widgets/' + widgetName.replace('/', '-') + url;
        }
        const data = await this.app.curl(url);
        // let type = mime.getType(url);
        // if(url.includes('localhost:3000')){
        // @ts-ignore
        Object.keys(data.headers).forEach((key) => {
            // @ts-ignore
            this.ctx.set(key, data.headers[key]);
        });
        console.log(data);
        // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9hcHAvcnVudGltZS9mcmVlbG9nLW5vZGUtYWNjZXNzb3Ivc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9ob21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE0RTtBQUM1RSw2QkFBMkM7QUFDM0MsV0FBVztBQUNYLHNCQUFzQjtBQUN0Qiw2QkFBNkI7QUFDN0IsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLDBFQUEwRTtBQUsxRSxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBUXpCLEtBQUssQ0FBQyxJQUFJO1FBQ1IsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDN0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLENBQUE7UUFDNUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUlELEtBQUssQ0FBQyxNQUFNO1FBQ1YsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDekMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUE7WUFDdEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLENBQUE7WUFDNUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25DLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNySCxJQUFJLEdBQUcsd0JBQXdCLENBQUE7YUFDaEM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ2hFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDMUIsT0FBTTtTQUNQO1FBQ0QsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUE7UUFDdEMsSUFBSSxHQUFHLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFBO1FBQ25DLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNuQyxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUN4QyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDMUUsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLFdBQVcsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7U0FDMUU7UUFDRCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLGdDQUFnQztRQUNoQyxzQ0FBc0M7UUFDdEMsYUFBYTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQVUsRUFBQyxFQUFFO1lBQzlDLGFBQWE7WUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNqQixJQUFJO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM1QixDQUFDO0NBQ0YsQ0FBQTtBQWxEQztJQURDLGVBQUcsRUFBRTs4QkFDRCxpQkFBVzsyQ0FBQztBQUdqQjtJQURDLGtCQUFNLEVBQUU7OzJDQUNJO0FBR2I7SUFEQyxlQUFHLENBQUMsR0FBRyxDQUFDOzs7OzBDQVFSO0FBSUQ7SUFEQyxlQUFHLENBQUMsSUFBSSxDQUFDOzs7OzRDQWlDVDtBQW5EVSxjQUFjO0lBRjFCLG1CQUFPLEVBQUU7SUFDVCxzQkFBVSxDQUFDLEdBQUcsQ0FBQztHQUNILGNBQWMsQ0FvRDFCO0FBcERZLHdDQUFjIn0=