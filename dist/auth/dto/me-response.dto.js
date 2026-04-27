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
exports.MeResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_response_dto_1 = require("../../users/dto/user-response.dto");
class MeResponseDto {
}
exports.MeResponseDto = MeResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => user_response_dto_1.UserResponseDto }),
    __metadata("design:type", user_response_dto_1.UserResponseDto)
], MeResponseDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], description: 'Role names assigned to the user', example: ['admin'] }),
    __metadata("design:type", Array)
], MeResponseDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        description: 'Resolved permission keys across all roles',
        example: ['posts:create', 'users:read'],
    }),
    __metadata("design:type", Array)
], MeResponseDto.prototype, "permissions", void 0);
//# sourceMappingURL=me-response.dto.js.map