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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IkQ6L2FwcC9ydW50aW1lL2ZyZWVsb2ctbm9kZS1hY2Nlc3Nvci9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVyL2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBK0U7QUFHL0UsMENBQThDO0FBSTlDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFReEIsS0FBSyxDQUFDLE9BQU8sQ0FBVSxHQUFXO1FBQ2hDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3RELENBQUM7Q0FDRixDQUFBO0FBVkM7SUFEQyxrQkFBTSxFQUFFOzswQ0FDSTtBQUdiO0lBREMsa0JBQU0sRUFBRTs4QkFDSSxrQkFBVztrREFBQztBQUd6QjtJQURDLGdCQUFJLENBQUMsV0FBVyxDQUFDO0lBQ0gsV0FBQSxpQkFBSyxFQUFFLENBQUE7Ozs7NENBR3JCO0FBWFUsYUFBYTtJQUZ6QixtQkFBTyxFQUFFO0lBQ1Qsc0JBQVUsQ0FBQyxNQUFNLENBQUM7R0FDTixhQUFhLENBWXpCO0FBWlksc0NBQWEifQ==