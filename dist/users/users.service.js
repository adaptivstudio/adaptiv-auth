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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcryptjs"));
const adaptiv_auth_constants_1 = require("../adaptiv-auth.constants");
const BCRYPT_ROUNDS = 12;
let UsersService = class UsersService {
    constructor(adapter) {
        this.adapter = adapter;
    }
    async create(dto) {
        const existing = await this.adapter.findUserByEmail(dto.email);
        if (existing) {
            throw new common_1.ConflictException('Email already in use');
        }
        if (dto.username) {
            const existingByUsername = await this.adapter.findUserByUsername(dto.username);
            if (existingByUsername) {
                throw new common_1.ConflictException('Username already taken');
            }
        }
        const passwordHash = await bcrypt.hash(dto.password, BCRYPT_ROUNDS);
        return this.adapter.createUser({ email: dto.email, username: dto.username, passwordHash });
    }
    async findById(id) {
        const user = await this.adapter.findUserById(id);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return user;
    }
    async findByEmail(email) {
        return this.adapter.findUserByEmail(email);
    }
    async findByIdentifier(identifier) {
        return this.adapter.findUserByIdentifier(identifier);
    }
    async list(query) {
        return this.adapter.listUsers({ skip: query.skip, take: query.take, search: query.search });
    }
    async update(id, dto) {
        await this.findById(id);
        return this.adapter.updateUser(id, dto);
    }
    async remove(id) {
        await this.findById(id);
        await this.adapter.deleteUser(id);
    }
    async setPassword(id, plainPassword) {
        await this.findById(id);
        const passwordHash = await bcrypt.hash(plainPassword, BCRYPT_ROUNDS);
        await this.adapter.setUserPassword(id, passwordHash);
    }
    async validatePassword(user, plainPassword) {
        return bcrypt.compare(plainPassword, user.passwordHash);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(adaptiv_auth_constants_1.ADAPTIV_AUTH_ADAPTER)),
    __metadata("design:paramtypes", [Object])
], UsersService);
//# sourceMappingURL=users.service.js.map