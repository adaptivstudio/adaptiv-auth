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
exports.PermissionResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class PermissionResponseDto {
    static from(permission) {
        const dto = new PermissionResponseDto();
        dto.id = permission.id;
        dto.key = permission.key;
        dto.description = permission.description;
        dto.createdAt = permission.createdAt;
        return dto;
    }
}
exports.PermissionResponseDto = PermissionResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Permission ID', example: 'clxyz789' }),
    __metadata("design:type", String)
], PermissionResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Permission key', example: 'posts:create' }),
    __metadata("design:type", String)
], PermissionResponseDto.prototype, "key", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, description: 'Permission description', example: 'Create new posts', nullable: true }),
    __metadata("design:type", Object)
], PermissionResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, description: 'Creation timestamp' }),
    __metadata("design:type", Date)
], PermissionResponseDto.prototype, "createdAt", void 0);
//# sourceMappingURL=permission-response.dto.js.map