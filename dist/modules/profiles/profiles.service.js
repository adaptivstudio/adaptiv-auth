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
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const adaptiv_auth_constants_1 = require("../../adaptiv-auth.constants");
let ProfilesService = class ProfilesService {
    constructor(adapter) {
        this.adapter = adapter;
    }
    async findByUserId(userId) {
        const profile = await this.adapter.findProfileByUserId(userId);
        if (!profile)
            throw new common_1.NotFoundException('Profile not found');
        return profile;
    }
    async upsert(userId, dto) {
        return this.adapter.upsertProfile(userId, {
            firstName: dto.firstName,
            lastName: dto.lastName,
            avatarUrl: dto.avatarUrl,
            metadata: dto.metadata,
        });
    }
};
exports.ProfilesService = ProfilesService;
exports.ProfilesService = ProfilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(adaptiv_auth_constants_1.ADAPTIV_AUTH_ADAPTER)),
    __metadata("design:paramtypes", [Object])
], ProfilesService);
//# sourceMappingURL=profiles.service.js.map