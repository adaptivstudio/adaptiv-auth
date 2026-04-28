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
exports.PermissionsService = void 0;
const common_1 = require("@nestjs/common");
const adaptiv_auth_constants_1 = require("../../adaptiv-auth.constants");
let PermissionsService = class PermissionsService {
    constructor(adapter) {
        this.adapter = adapter;
    }
    async create(dto) {
        const existing = await this.adapter.findPermissionByKey(dto.key);
        if (existing)
            throw new common_1.ConflictException('Permission key already exists');
        return this.adapter.createPermission(dto);
    }
    async findById(id) {
        const permission = await this.adapter.findPermissionById(id);
        if (!permission)
            throw new common_1.NotFoundException('Permission not found');
        return permission;
    }
    async list() {
        return this.adapter.listPermissions();
    }
    async remove(id) {
        await this.findById(id);
        await this.adapter.deletePermission(id);
    }
    async assignToRole(roleId, permissionId) {
        await this.findById(permissionId);
        await this.adapter.assignPermissionToRole(roleId, permissionId);
    }
    async removeFromRole(roleId, permissionId) {
        await this.adapter.removePermissionFromRole(roleId, permissionId);
    }
    async getRolePermissions(roleId) {
        return this.adapter.getRolePermissions(roleId);
    }
    async getUserPermissions(userId) {
        return this.adapter.getUserPermissions(userId);
    }
};
exports.PermissionsService = PermissionsService;
exports.PermissionsService = PermissionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(adaptiv_auth_constants_1.ADAPTIV_AUTH_ADAPTER)),
    __metadata("design:paramtypes", [Object])
], PermissionsService);
//# sourceMappingURL=permissions.service.js.map