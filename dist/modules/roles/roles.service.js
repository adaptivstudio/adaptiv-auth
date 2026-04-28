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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const adaptiv_auth_constants_1 = require("../../adaptiv-auth.constants");
let RolesService = class RolesService {
    constructor(adapter) {
        this.adapter = adapter;
    }
    async create(dto) {
        const existing = await this.adapter.findRoleByName(dto.name);
        if (existing)
            throw new common_1.ConflictException('Role name already exists');
        return this.adapter.createRole(dto);
    }
    async findById(id) {
        const role = await this.adapter.findRoleById(id);
        if (!role)
            throw new common_1.NotFoundException('Role not found');
        return role;
    }
    async list() {
        return this.adapter.listRoles();
    }
    async remove(id) {
        await this.findById(id);
        await this.adapter.deleteRole(id);
    }
    async assignToUser(userId, roleId) {
        await this.findById(roleId);
        await this.adapter.assignRoleToUser(userId, roleId);
    }
    async removeFromUser(userId, roleId) {
        await this.adapter.removeRoleFromUser(userId, roleId);
    }
    async getUserRoles(userId) {
        return this.adapter.getUserRoles(userId);
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(adaptiv_auth_constants_1.ADAPTIV_AUTH_ADAPTER)),
    __metadata("design:paramtypes", [Object])
], RolesService);
//# sourceMappingURL=roles.service.js.map