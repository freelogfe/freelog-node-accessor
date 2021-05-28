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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const user_1 = require("../service/user");
let APIController = class APIController {
    async getUser(uid) {
        const user = await this.userService.getUser({ uid });
        return { success: true, message: 'OK', data: user };
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], APIController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", user_1.UserService)
], APIController.prototype, "userService", void 0);
__decorate([
    decorator_1.Post('/get_user'),
    __param(0, decorator_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], APIController.prototype, "getUser", null);
APIController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api')
], APIController);
exports.APIController = APIController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IkQ6L2FwcC9mcmVlbG9nLW5vZGUtYWNjZXNzb3Ivc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQStFO0FBRy9FLDBDQUE4QztBQUk5QyxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBUXhCLEtBQUssQ0FBQyxPQUFPLENBQVUsR0FBVztRQUNoQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0NBQ0YsQ0FBQTtBQVZDO0lBREMsa0JBQU0sRUFBRTs7MENBQ0k7QUFHYjtJQURDLGtCQUFNLEVBQUU7OEJBQ0ksa0JBQVc7a0RBQUM7QUFHekI7SUFEQyxnQkFBSSxDQUFDLFdBQVcsQ0FBQztJQUNILFdBQUEsaUJBQUssRUFBRSxDQUFBOzs7OzRDQUdyQjtBQVhVLGFBQWE7SUFGekIsbUJBQU8sRUFBRTtJQUNULHNCQUFVLENBQUMsTUFBTSxDQUFDO0dBQ04sYUFBYSxDQVl6QjtBQVpZLHNDQUFhIn0=