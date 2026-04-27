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
exports.PermissionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const assign_permission_dto_1 = require("./dto/assign-permission.dto");
const create_permission_dto_1 = require("./dto/create-permission.dto");
const permission_response_dto_1 = require("./dto/permission-response.dto");
const permissions_service_1 = require("./permissions.service");
let PermissionsController = class PermissionsController {
    constructor(permissionsService) {
        this.permissionsService = permissionsService;
    }
    async create(dto) {
        const permission = await this.permissionsService.create(dto);
        return permission_response_dto_1.PermissionResponseDto.from(permission);
    }
    async list() {
        const permissions = await this.permissionsService.list();
        return permissions.map(permission_response_dto_1.PermissionResponseDto.from);
    }
    async findOne(id) {
        const permission = await this.permissionsService.findById(id);
        return permission_response_dto_1.PermissionResponseDto.from(permission);
    }
    async remove(id) {
        await this.permissionsService.remove(id);
    }
    async assignToRole(roleId, dto) {
        await this.permissionsService.assignToRole(roleId, dto.permissionId);
    }
    async removeFromRole(roleId, permissionId) {
        await this.permissionsService.removeFromRole(roleId, permissionId);
    }
    async getRolePermissions(roleId) {
        const permissions = await this.permissionsService.getRolePermissions(roleId);
        return permissions.map(permission_response_dto_1.PermissionResponseDto.from);
    }
    async getUserPermissions(userId) {
        const permissions = await this.permissionsService.getUserPermissions(userId);
        return permissions.map(permission_response_dto_1.PermissionResponseDto.from);
    }
};
exports.PermissionsController = PermissionsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new permission' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Permission created', type: () => permission_response_dto_1.PermissionResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Permission key already exists' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_permission_dto_1.CreatePermissionDto]),
    __metadata("design:returntype", Promise)
], PermissionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List all permissions' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of permissions', type: () => [permission_response_dto_1.PermissionResponseDto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PermissionsController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a permission by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Permission ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Permission found', type: () => permission_response_dto_1.PermissionResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Permission not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PermissionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a permission' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Permission ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Permission deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Permission not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PermissionsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('roles/:roleId/assign'),
    (0, swagger_1.ApiOperation)({ summary: 'Assign a permission to a role' }),
    (0, swagger_1.ApiParam)({ name: 'roleId', description: 'Role ID' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Permission assigned to role' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Permission not found' }),
    __param(0, (0, common_1.Param)('roleId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, assign_permission_dto_1.AssignPermissionDto]),
    __metadata("design:returntype", Promise)
], PermissionsController.prototype, "assignToRole", null);
__decorate([
    (0, common_1.Delete)('roles/:roleId/assign/:permissionId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a permission from a role' }),
    (0, swagger_1.ApiParam)({ name: 'roleId', description: 'Role ID' }),
    (0, swagger_1.ApiParam)({ name: 'permissionId', description: 'Permission ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Permission removed from role' }),
    __param(0, (0, common_1.Param)('roleId')),
    __param(1, (0, common_1.Param)('permissionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PermissionsController.prototype, "removeFromRole", null);
__decorate([
    (0, common_1.Get)('roles/:roleId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all permissions for a role' }),
    (0, swagger_1.ApiParam)({ name: 'roleId', description: 'Role ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Role permissions', type: () => [permission_response_dto_1.PermissionResponseDto] }),
    __param(0, (0, common_1.Param)('roleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PermissionsController.prototype, "getRolePermissions", null);
__decorate([
    (0, common_1.Get)('users/:userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all resolved permissions for a user (across all roles)' }),
    (0, swagger_1.ApiParam)({ name: 'userId', description: 'User ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User permissions', type: () => [permission_response_dto_1.PermissionResponseDto] }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PermissionsController.prototype, "getUserPermissions", null);
exports.PermissionsController = PermissionsController = __decorate([
    (0, swagger_1.ApiTags)('permissions'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('permissions'),
    __metadata("design:paramtypes", [permissions_service_1.PermissionsService])
], PermissionsController);
//# sourceMappingURL=permissions.controller.js.map