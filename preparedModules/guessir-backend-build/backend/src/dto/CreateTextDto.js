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
exports.CreateTextDto = void 0;
const class_validator_1 = require("class-validator");
class CreateTextDto {
    constructor() {
        this.allowShowingFirstLetters = false;
        this.allowShowingText = false;
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CreateTextDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(4000),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTextDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(4000),
    __metadata("design:type", String)
], CreateTextDto.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Object)
], CreateTextDto.prototype, "allowShowingFirstLetters", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Object)
], CreateTextDto.prototype, "allowShowingText", void 0);
exports.CreateTextDto = CreateTextDto;
//# sourceMappingURL=CreateTextDto.js.map