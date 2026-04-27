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
exports.ProfileResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ProfileResponseDto {
    static from(profile) {
        const dto = new ProfileResponseDto();
        dto.id = profile.id;
        dto.userId = profile.userId;
        dto.firstName = profile.firstName;
        dto.lastName = profile.lastName;
        dto.avatarUrl = profile.avatarUrl;
        dto.metadata = profile.metadata;
        dto.createdAt = profile.createdAt;
        dto.updatedAt = profile.updatedAt;
        return dto;
    }
}
exports.ProfileResponseDto = ProfileResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Profile ID', example: 'clxyzabc' }),
    __metadata("design:type", String)
], ProfileResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'User ID this profile belongs to', example: 'clxyz123' }),
    __metadata("design:type", String)
], ProfileResponseDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, description: 'First name', example: 'John', nullable: true }),
    __metadata("design:type", Object)
], ProfileResponseDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, description: 'Last name', example: 'Doe', nullable: true }),
    __metadata("design:type", Object)
], ProfileResponseDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, description: 'Avatar URL', example: 'https://example.com/avatar.png', nullable: true }),
    __metadata("design:type", Object)
], ProfileResponseDto.prototype, "avatarUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Object, description: 'Extensible metadata', example: {} }),
    __metadata("design:type", Object)
], ProfileResponseDto.prototype, "metadata", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, description: 'Creation timestamp' }),
    __metadata("design:type", Date)
], ProfileResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, description: 'Last update timestamp' }),
    __metadata("design:type", Date)
], ProfileResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=profile-response.dto.js.map