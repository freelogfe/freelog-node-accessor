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
exports.ContainerLifeCycle = void 0;
const decorator_1 = require("@midwayjs/decorator");
const egg_1 = require("egg");
const path_1 = require("path");
let ContainerLifeCycle = class ContainerLifeCycle {
    async onReady() { }
};
__decorate([
    decorator_1.App(),
    __metadata("design:type", egg_1.Application)
], ContainerLifeCycle.prototype, "app", void 0);
ContainerLifeCycle = __decorate([
    decorator_1.Configuration({
        importConfigs: [path_1.join(__dirname, './config')],
        conflictCheck: true,
    })
], ContainerLifeCycle);
exports.ContainerLifeCycle = ContainerLifeCycle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJEOi9hcHAvcnVudGltZS9mcmVlbG9nLW5vZGUtYWNjZXNzb3Ivc3JjLyIsInNvdXJjZXMiOlsiY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBeUQ7QUFFekQsNkJBQWtDO0FBQ2xDLCtCQUE0QjtBQU01QixJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQUk3QixLQUFLLENBQUMsT0FBTyxLQUFJLENBQUM7Q0FDbkIsQ0FBQTtBQUhDO0lBREMsZUFBRyxFQUFFOzhCQUNELGlCQUFXOytDQUFDO0FBRk4sa0JBQWtCO0lBSjlCLHlCQUFhLENBQUM7UUFDYixhQUFhLEVBQUUsQ0FBQyxXQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLGFBQWEsRUFBRSxJQUFJO0tBQ3BCLENBQUM7R0FDVyxrQkFBa0IsQ0FLOUI7QUFMWSxnREFBa0IifQ==