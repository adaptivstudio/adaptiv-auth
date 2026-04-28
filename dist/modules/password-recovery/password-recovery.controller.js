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
exports.PasswordRecoveryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../../decorators/public.decorator");
const forgot_password_dto_1 = require("./dto/forgot-password.dto");
const password_recovery_response_dto_1 = require("./dto/password-recovery-response.dto");
const reset_password_dto_1 = require("./dto/reset-password.dto");
const password_recovery_service_1 = require("./password-recovery.service");
let PasswordRecoveryController = class PasswordRecoveryController {
    constructor(passwordRecoveryService) {
        this.passwordRecoveryService = passwordRecoveryService;
    }
    async forgotPassword(dto) {
        await this.passwordRecoveryService.requestReset(dto.email);
        return { message: 'If that email exists, a reset link was sent.' };
    }
    async validateToken(token) {
        const valid = await this.passwordRecoveryService.validateToken(token);
        return { valid };
    }
    async resetPassword(dto) {
        await this.passwordRecoveryService.resetPassword(dto.token, dto.newPassword);
        return { message: 'Password reset successfully.' };
    }
};
exports.PasswordRecoveryController = PasswordRecoveryController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('forgot-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Request a password reset email',
        operationId: 'forgotPassword',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'If the email exists a reset link is sent (always returns 200 to avoid enumeration)',
        type: password_recovery_response_dto_1.PasswordRecoveryMessageResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgot_password_dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], PasswordRecoveryController.prototype, "forgotPassword", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('reset-password/:token'),
    (0, swagger_1.ApiOperation)({
        summary: 'Validate a password reset token',
        operationId: 'validateToken',
    }),
    (0, swagger_1.ApiParam)({ name: 'token', description: 'Password reset token' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Token is valid',
        type: password_recovery_response_dto_1.PasswordRecoveryTokenValidationResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Token is invalid or expired' }),
    __param(0, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PasswordRecoveryController.prototype, "validateToken", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('reset-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Reset password using a valid token',
        operationId: 'resetPassword',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Password reset successfully',
        type: password_recovery_response_dto_1.PasswordRecoveryMessageResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid or expired token' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], PasswordRecoveryController.prototype, "resetPassword", null);
exports.PasswordRecoveryController = PasswordRecoveryController = __decorate([
    (0, swagger_1.ApiTags)('password-recovery'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [password_recovery_service_1.PasswordRecoveryService])
], PasswordRecoveryController);
//# sourceMappingURL=password-recovery.controller.js.map