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
exports.PasswordRecoveryService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcryptjs"));
const crypto = __importStar(require("crypto"));
const adaptiv_auth_constants_1 = require("../../adaptiv-auth.constants");
const DEFAULT_EXPIRES_MINUTES = 60;
const BCRYPT_ROUNDS = 12;
let PasswordRecoveryService = class PasswordRecoveryService {
    constructor(adapter, options) {
        this.adapter = adapter;
        this.options = options;
    }
    async requestReset(email) {
        const user = await this.adapter.findUserByEmail(email);
        if (!user || !user.isActive)
            return;
        const token = crypto.randomBytes(32).toString('hex');
        const expiresInMinutes = this.options.passwordRecovery?.tokenExpiresInMinutes ?? DEFAULT_EXPIRES_MINUTES;
        const expiresAt = new Date(Date.now() + expiresInMinutes * 60 * 1000);
        await this.adapter.createPasswordResetToken({ token, userId: user.id, expiresAt });
        if (this.options.passwordRecovery?.onTokenGenerated) {
            await this.options.passwordRecovery.onTokenGenerated(email, token, user);
        }
    }
    async validateToken(token) {
        const record = await this.adapter.findPasswordResetToken(token);
        if (!record)
            return false;
        if (record.usedAt !== null)
            return false;
        if (record.expiresAt <= new Date())
            return false;
        return true;
    }
    async resetPassword(token, newPassword) {
        const record = await this.adapter.findPasswordResetToken(token);
        if (!record || record.usedAt !== null || record.expiresAt <= new Date()) {
            throw new common_1.BadRequestException('Invalid or expired reset token');
        }
        const passwordHash = await bcrypt.hash(newPassword, BCRYPT_ROUNDS);
        await this.adapter.setUserPassword(record.userId, passwordHash);
        await this.adapter.consumePasswordResetToken(token);
        await this.adapter.revokeAllRefreshTokensForUser(record.userId);
    }
};
exports.PasswordRecoveryService = PasswordRecoveryService;
exports.PasswordRecoveryService = PasswordRecoveryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(adaptiv_auth_constants_1.ADAPTIV_AUTH_ADAPTER)),
    __param(1, (0, common_1.Inject)(adaptiv_auth_constants_1.ADAPTIV_AUTH_OPTIONS)),
    __metadata("design:paramtypes", [Object, Object])
], PasswordRecoveryService);
//# sourceMappingURL=password-recovery.service.js.map