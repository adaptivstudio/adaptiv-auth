"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const crypto = __importStar(require("crypto"));
const adaptiv_auth_constants_1 = require("../../adaptiv-auth.constants");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(adapter, options, jwtService, usersService) {
        this.adapter = adapter;
        this.options = options;
        this.jwtService = jwtService;
        this.usersService = usersService;
        this.refreshJwtService = new jwt_1.JwtService({ secret: options.jwt.refreshSecret });
    }
    async validateUser(identifier, password) {
        const user = await this.adapter.findUserByIdentifier(identifier);
        if (!user || !user.isActive)
            return null;
        const valid = await this.usersService.validatePassword(user, password);
        return valid ? user : null;
    }
    async login(user) {
        const [roles, permissions] = await Promise.all([
            this.adapter.getUserRoles(user.id),
            this.adapter.getUserPermissions(user.id),
        ]);
        const payload = {
            sub: user.id,
            email: user.email,
            roles: roles.map((r) => r.name),
            permissions: permissions.map((p) => p.key),
        };
        const accessToken = this.jwtService.sign(payload);
        const refreshToken = await this.issueRefreshToken(user.id);
        return { accessToken, refreshToken, user };
    }
    async refresh(refreshToken) {
        const record = await this.adapter.findRefreshToken(refreshToken);
        if (!record || record.revokedAt !== null || record.expiresAt <= new Date()) {
            throw new common_1.UnauthorizedException('Invalid or expired refresh token');
        }
        const user = await this.adapter.findUserById(record.userId);
        if (!user || !user.isActive) {
            throw new common_1.UnauthorizedException('User not found or inactive');
        }
        await this.adapter.revokeRefreshToken(refreshToken);
        const { accessToken, refreshToken: newRefreshToken } = await this.login(user);
        return { accessToken, refreshToken: newRefreshToken };
    }
    async me(userId) {
        const user = await this.adapter.findUserById(userId);
        if (!user || !user.isActive) {
            throw new common_1.UnauthorizedException('User not found or inactive');
        }
        const [roles, permissions] = await Promise.all([
            this.adapter.getUserRoles(userId),
            this.adapter.getUserPermissions(userId),
        ]);
        return {
            user,
            roles: roles.map((r) => r.name),
            permissions: permissions.map((p) => p.key),
        };
    }
    async logout(refreshToken) {
        await this.adapter.revokeRefreshToken(refreshToken);
    }
    async logoutAll(userId) {
        await this.adapter.revokeAllRefreshTokensForUser(userId);
    }
    async issueRefreshToken(userId) {
        const token = crypto.randomBytes(64).toString('hex');
        const refreshExpiresIn = this.options.jwt.refreshExpiresIn;
        const expiresAt = this.parseExpiresIn(refreshExpiresIn);
        await this.adapter.createRefreshToken({ token, userId, expiresAt });
        return token;
    }
    parseExpiresIn(expiresIn) {
        const match = /^(\d+)([smhd])$/.exec(expiresIn);
        if (!match)
            throw new Error(`Invalid expiresIn format: ${expiresIn}`);
        const value = parseInt(match[1], 10);
        const unit = match[2];
        const multipliers = { s: 1000, m: 60000, h: 3600000, d: 86400000 };
        return new Date(Date.now() + value * multipliers[unit]);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(adaptiv_auth_constants_1.ADAPTIV_AUTH_ADAPTER)),
    __param(1, (0, common_1.Inject)(adaptiv_auth_constants_1.ADAPTIV_AUTH_OPTIONS)),
    __metadata("design:paramtypes", [Object, Object, jwt_1.JwtService,
        users_service_1.UsersService])
], AuthService);
//# sourceMappingURL=auth.service.js.map