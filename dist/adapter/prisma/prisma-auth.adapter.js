"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaAuthAdapter = void 0;
function toUserRecord(u) {
    return {
        id: u.id,
        email: u.email,
        username: u.username,
        passwordHash: u.passwordHash,
        isActive: u.isActive,
        createdAt: u.createdAt,
        updatedAt: u.updatedAt,
    };
}
function toProfileRecord(p) {
    return {
        id: p.id,
        userId: p.userId,
        firstName: p.firstName,
        lastName: p.lastName,
        avatarUrl: p.avatarUrl,
        metadata: (p.metadata ?? {}),
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
    };
}
function toRoleRecord(r) {
    return { id: r.id, name: r.name, description: r.description, createdAt: r.createdAt };
}
function toPermissionRecord(p) {
    return { id: p.id, key: p.key, description: p.description, createdAt: p.createdAt };
}
function toRefreshTokenRecord(r) {
    return {
        id: r.id,
        token: r.token,
        userId: r.userId,
        expiresAt: r.expiresAt,
        revokedAt: r.revokedAt,
        createdAt: r.createdAt,
    };
}
function toPasswordResetTokenRecord(r) {
    return {
        id: r.id,
        token: r.token,
        userId: r.userId,
        expiresAt: r.expiresAt,
        usedAt: r.usedAt,
        createdAt: r.createdAt,
    };
}
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
class PrismaAuthAdapter {
    constructor(prisma) {
        this.prisma = prisma;
    }
    // ---- User ----
    async findUserById(id) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        return user ? toUserRecord(user) : null;
    }
    async findUserByEmail(email) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        return user ? toUserRecord(user) : null;
    }
    async findUserByUsername(username) {
        const user = await this.prisma.user.findUnique({ where: { username } });
        return user ? toUserRecord(user) : null;
    }
    async findUserByIdentifier(identifier) {
        if (EMAIL_REGEX.test(identifier)) {
            return this.findUserByEmail(identifier);
        }
        return this.findUserByUsername(identifier);
    }
    async createUser(data) {
        const user = await this.prisma.user.create({
            data: {
                email: data.email,
                username: data.username ?? null,
                passwordHash: data.passwordHash,
                isActive: data.isActive ?? true,
            },
        });
        return toUserRecord(user);
    }
    async updateUser(id, data) {
        const user = await this.prisma.user.update({
            where: { id },
            data: {
                ...(data.email !== undefined && { email: data.email }),
                ...(data.username !== undefined && { username: data.username }),
                ...(data.isActive !== undefined && { isActive: data.isActive }),
            },
        });
        return toUserRecord(user);
    }
    async deleteUser(id) {
        await this.prisma.user.delete({ where: { id } });
    }
    async listUsers(opts) {
        const skip = opts.skip ?? 0;
        const take = opts.take ?? 20;
        const where = opts.search
            ? {
                OR: [
                    { email: { contains: opts.search, mode: 'insensitive' } },
                    { username: { contains: opts.search, mode: 'insensitive' } },
                ],
            }
            : undefined;
        const [users, total] = await this.prisma.$transaction([
            this.prisma.user.findMany({ where, skip, take, orderBy: { createdAt: 'desc' } }),
            this.prisma.user.count({ where }),
        ]);
        return { data: users.map(toUserRecord), total, skip, take };
    }
    async setUserPassword(id, passwordHash) {
        await this.prisma.user.update({ where: { id }, data: { passwordHash } });
    }
    // ---- Profile ----
    async findProfileByUserId(userId) {
        const profile = await this.prisma.profile.findUnique({ where: { userId } });
        return profile ? toProfileRecord(profile) : null;
    }
    async upsertProfile(userId, data) {
        const profile = await this.prisma.profile.upsert({
            where: { userId },
            create: {
                userId,
                firstName: data.firstName ?? null,
                lastName: data.lastName ?? null,
                avatarUrl: data.avatarUrl ?? null,
                metadata: data.metadata ?? {},
            },
            update: {
                ...(data.firstName !== undefined && { firstName: data.firstName }),
                ...(data.lastName !== undefined && { lastName: data.lastName }),
                ...(data.avatarUrl !== undefined && { avatarUrl: data.avatarUrl }),
                ...(data.metadata !== undefined && { metadata: data.metadata }),
            },
        });
        return toProfileRecord(profile);
    }
    // ---- Roles ----
    async createRole(data) {
        const role = await this.prisma.role.create({
            data: { name: data.name, description: data.description ?? null },
        });
        return toRoleRecord(role);
    }
    async findRoleById(id) {
        const role = await this.prisma.role.findUnique({ where: { id } });
        return role ? toRoleRecord(role) : null;
    }
    async findRoleByName(name) {
        const role = await this.prisma.role.findUnique({ where: { name } });
        return role ? toRoleRecord(role) : null;
    }
    async listRoles() {
        const roles = await this.prisma.role.findMany({ orderBy: { name: 'asc' } });
        return roles.map(toRoleRecord);
    }
    async deleteRole(id) {
        await this.prisma.role.delete({ where: { id } });
    }
    async assignRoleToUser(userId, roleId) {
        await this.prisma.userRole.upsert({
            where: { userId_roleId: { userId, roleId } },
            create: { userId, roleId },
            update: {},
        });
    }
    async removeRoleFromUser(userId, roleId) {
        await this.prisma.userRole.delete({
            where: { userId_roleId: { userId, roleId } },
        });
    }
    async getUserRoles(userId) {
        const userRoles = await this.prisma.userRole.findMany({
            where: { userId },
            include: { role: true },
        });
        return userRoles.map((ur) => toRoleRecord(ur.role));
    }
    // ---- Permissions ----
    async createPermission(data) {
        const permission = await this.prisma.permission.create({
            data: { key: data.key, description: data.description ?? null },
        });
        return toPermissionRecord(permission);
    }
    async findPermissionById(id) {
        const permission = await this.prisma.permission.findUnique({ where: { id } });
        return permission ? toPermissionRecord(permission) : null;
    }
    async findPermissionByKey(key) {
        const permission = await this.prisma.permission.findUnique({ where: { key } });
        return permission ? toPermissionRecord(permission) : null;
    }
    async listPermissions() {
        const permissions = await this.prisma.permission.findMany({ orderBy: { key: 'asc' } });
        return permissions.map(toPermissionRecord);
    }
    async deletePermission(id) {
        await this.prisma.permission.delete({ where: { id } });
    }
    async assignPermissionToRole(roleId, permissionId) {
        await this.prisma.rolePermission.upsert({
            where: { roleId_permissionId: { roleId, permissionId } },
            create: { roleId, permissionId },
            update: {},
        });
    }
    async removePermissionFromRole(roleId, permissionId) {
        await this.prisma.rolePermission.delete({
            where: { roleId_permissionId: { roleId, permissionId } },
        });
    }
    async getRolePermissions(roleId) {
        const rolePermissions = await this.prisma.rolePermission.findMany({
            where: { roleId },
            include: { permission: true },
        });
        return rolePermissions.map((rp) => toPermissionRecord(rp.permission));
    }
    async getUserPermissions(userId) {
        const userRoles = await this.prisma.userRole.findMany({
            where: { userId },
            include: {
                role: {
                    include: {
                        permissions: { include: { permission: true } },
                    },
                },
            },
        });
        const seen = new Set();
        const permissions = [];
        for (const ur of userRoles) {
            for (const rp of ur.role.permissions) {
                if (!seen.has(rp.permission.id)) {
                    seen.add(rp.permission.id);
                    permissions.push(toPermissionRecord(rp.permission));
                }
            }
        }
        return permissions;
    }
    // ---- Refresh Tokens ----
    async createRefreshToken(data) {
        const rt = await this.prisma.refreshToken.create({
            data: { token: data.token, userId: data.userId, expiresAt: data.expiresAt },
        });
        return toRefreshTokenRecord(rt);
    }
    async findRefreshToken(token) {
        const rt = await this.prisma.refreshToken.findUnique({ where: { token } });
        return rt ? toRefreshTokenRecord(rt) : null;
    }
    async revokeRefreshToken(token) {
        await this.prisma.refreshToken.updateMany({
            where: { token, revokedAt: null },
            data: { revokedAt: new Date() },
        });
    }
    async revokeAllRefreshTokensForUser(userId) {
        await this.prisma.refreshToken.updateMany({
            where: { userId, revokedAt: null },
            data: { revokedAt: new Date() },
        });
    }
    async deleteExpiredRefreshTokens() {
        await this.prisma.refreshToken.deleteMany({
            where: { expiresAt: { lt: new Date() } },
        });
    }
    // ---- Password Reset ----
    async createPasswordResetToken(data) {
        const prt = await this.prisma.passwordResetToken.create({
            data: { token: data.token, userId: data.userId, expiresAt: data.expiresAt },
        });
        return toPasswordResetTokenRecord(prt);
    }
    async findPasswordResetToken(token) {
        const prt = await this.prisma.passwordResetToken.findUnique({ where: { token } });
        return prt ? toPasswordResetTokenRecord(prt) : null;
    }
    async consumePasswordResetToken(token) {
        await this.prisma.passwordResetToken.update({
            where: { token },
            data: { usedAt: new Date() },
        });
    }
    async deleteExpiredPasswordResetTokens() {
        await this.prisma.passwordResetToken.deleteMany({
            where: { expiresAt: { lt: new Date() } },
        });
    }
}
exports.PrismaAuthAdapter = PrismaAuthAdapter;
//# sourceMappingURL=prisma-auth.adapter.js.map