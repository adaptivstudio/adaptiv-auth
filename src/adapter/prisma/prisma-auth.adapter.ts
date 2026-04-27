import { PrismaClient } from '@prisma/client';
import type {
  IAuthAdapter,
  UserRecord,
  ProfileRecord,
  ProfileMetadata,
  RoleRecord,
  PermissionRecord,
  RefreshTokenRecord,
  PasswordResetTokenRecord,
  CreateUserData,
  UpdateUserData,
  UpsertProfileData,
  CreateRoleData,
  CreatePermissionData,
  CreateRefreshTokenData,
  CreatePasswordResetTokenData,
  ListUsersOptions,
  PaginatedUsersResult,
} from '../adapter.interface';

function toUserRecord(u: {
  id: string;
  email: string;
  username: string | null;
  passwordHash: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}): UserRecord {
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

function toProfileRecord(p: {
  id: string;
  userId: string;
  firstName: string | null;
  lastName: string | null;
  avatarUrl: string | null;
  metadata: unknown;
  createdAt: Date;
  updatedAt: Date;
}): ProfileRecord {
  return {
    id: p.id,
    userId: p.userId,
    firstName: p.firstName,
    lastName: p.lastName,
    avatarUrl: p.avatarUrl,
    metadata: (p.metadata ?? {}) as ProfileMetadata,
    createdAt: p.createdAt,
    updatedAt: p.updatedAt,
  };
}

function toRoleRecord(r: {
  id: string;
  name: string;
  description: string | null;
  createdAt: Date;
}): RoleRecord {
  return { id: r.id, name: r.name, description: r.description, createdAt: r.createdAt };
}

function toPermissionRecord(p: {
  id: string;
  key: string;
  description: string | null;
  createdAt: Date;
}): PermissionRecord {
  return { id: p.id, key: p.key, description: p.description, createdAt: p.createdAt };
}

function toRefreshTokenRecord(r: {
  id: string;
  token: string;
  userId: string;
  expiresAt: Date;
  revokedAt: Date | null;
  createdAt: Date;
}): RefreshTokenRecord {
  return {
    id: r.id,
    token: r.token,
    userId: r.userId,
    expiresAt: r.expiresAt,
    revokedAt: r.revokedAt,
    createdAt: r.createdAt,
  };
}

function toPasswordResetTokenRecord(r: {
  id: string;
  token: string;
  userId: string;
  expiresAt: Date;
  usedAt: Date | null;
  createdAt: Date;
}): PasswordResetTokenRecord {
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

export class PrismaAuthAdapter implements IAuthAdapter {
  constructor(private readonly prisma: PrismaClient) {}

  // ---- User ----

  async findUserById(id: string): Promise<UserRecord | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user ? toUserRecord(user) : null;
  }

  async findUserByEmail(email: string): Promise<UserRecord | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return user ? toUserRecord(user) : null;
  }

  async findUserByUsername(username: string): Promise<UserRecord | null> {
    const user = await this.prisma.user.findUnique({ where: { username } });
    return user ? toUserRecord(user) : null;
  }

  async findUserByIdentifier(identifier: string): Promise<UserRecord | null> {
    if (EMAIL_REGEX.test(identifier)) {
      return this.findUserByEmail(identifier);
    }
    return this.findUserByUsername(identifier);
  }

  async createUser(data: CreateUserData): Promise<UserRecord> {
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

  async updateUser(id: string, data: UpdateUserData): Promise<UserRecord> {
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

  async deleteUser(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }

  async listUsers(opts: ListUsersOptions): Promise<PaginatedUsersResult> {
    const skip = opts.skip ?? 0;
    const take = opts.take ?? 20;
    const where = opts.search
      ? {
          OR: [
            { email: { contains: opts.search, mode: 'insensitive' as const } },
            { username: { contains: opts.search, mode: 'insensitive' as const } },
          ],
        }
      : undefined;

    const [users, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({ where, skip, take, orderBy: { createdAt: 'desc' } }),
      this.prisma.user.count({ where }),
    ]);

    return { data: users.map(toUserRecord), total, skip, take };
  }

  async setUserPassword(id: string, passwordHash: string): Promise<void> {
    await this.prisma.user.update({ where: { id }, data: { passwordHash } });
  }

  // ---- Profile ----

  async findProfileByUserId(userId: string): Promise<ProfileRecord | null> {
    const profile = await this.prisma.profile.findUnique({ where: { userId } });
    return profile ? toProfileRecord(profile) : null;
  }

  async upsertProfile(userId: string, data: UpsertProfileData): Promise<ProfileRecord> {
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

  async createRole(data: CreateRoleData): Promise<RoleRecord> {
    const role = await this.prisma.role.create({
      data: { name: data.name, description: data.description ?? null },
    });
    return toRoleRecord(role);
  }

  async findRoleById(id: string): Promise<RoleRecord | null> {
    const role = await this.prisma.role.findUnique({ where: { id } });
    return role ? toRoleRecord(role) : null;
  }

  async findRoleByName(name: string): Promise<RoleRecord | null> {
    const role = await this.prisma.role.findUnique({ where: { name } });
    return role ? toRoleRecord(role) : null;
  }

  async listRoles(): Promise<RoleRecord[]> {
    const roles = await this.prisma.role.findMany({ orderBy: { name: 'asc' } });
    return roles.map(toRoleRecord);
  }

  async deleteRole(id: string): Promise<void> {
    await this.prisma.role.delete({ where: { id } });
  }

  async assignRoleToUser(userId: string, roleId: string): Promise<void> {
    await this.prisma.userRole.upsert({
      where: { userId_roleId: { userId, roleId } },
      create: { userId, roleId },
      update: {},
    });
  }

  async removeRoleFromUser(userId: string, roleId: string): Promise<void> {
    await this.prisma.userRole.delete({
      where: { userId_roleId: { userId, roleId } },
    });
  }

  async getUserRoles(userId: string): Promise<RoleRecord[]> {
    const userRoles = await this.prisma.userRole.findMany({
      where: { userId },
      include: { role: true },
    });
    return (userRoles as Array<{ role: Parameters<typeof toRoleRecord>[0] }>).map((ur) =>
      toRoleRecord(ur.role),
    );
  }

  // ---- Permissions ----

  async createPermission(data: CreatePermissionData): Promise<PermissionRecord> {
    const permission = await this.prisma.permission.create({
      data: { key: data.key, description: data.description ?? null },
    });
    return toPermissionRecord(permission);
  }

  async findPermissionById(id: string): Promise<PermissionRecord | null> {
    const permission = await this.prisma.permission.findUnique({ where: { id } });
    return permission ? toPermissionRecord(permission) : null;
  }

  async findPermissionByKey(key: string): Promise<PermissionRecord | null> {
    const permission = await this.prisma.permission.findUnique({ where: { key } });
    return permission ? toPermissionRecord(permission) : null;
  }

  async listPermissions(): Promise<PermissionRecord[]> {
    const permissions = await this.prisma.permission.findMany({ orderBy: { key: 'asc' } });
    return permissions.map(toPermissionRecord);
  }

  async deletePermission(id: string): Promise<void> {
    await this.prisma.permission.delete({ where: { id } });
  }

  async assignPermissionToRole(roleId: string, permissionId: string): Promise<void> {
    await this.prisma.rolePermission.upsert({
      where: { roleId_permissionId: { roleId, permissionId } },
      create: { roleId, permissionId },
      update: {},
    });
  }

  async removePermissionFromRole(roleId: string, permissionId: string): Promise<void> {
    await this.prisma.rolePermission.delete({
      where: { roleId_permissionId: { roleId, permissionId } },
    });
  }

  async getRolePermissions(roleId: string): Promise<PermissionRecord[]> {
    const rolePermissions = await this.prisma.rolePermission.findMany({
      where: { roleId },
      include: { permission: true },
    });
    return (rolePermissions as Array<{ permission: Parameters<typeof toPermissionRecord>[0] }>).map(
      (rp) => toPermissionRecord(rp.permission),
    );
  }

  async getUserPermissions(userId: string): Promise<PermissionRecord[]> {
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

    type UserRoleWithPerms = {
      role: { permissions: Array<{ permission: Parameters<typeof toPermissionRecord>[0] }> };
    };

    const seen = new Set<string>();
    const permissions: PermissionRecord[] = [];

    for (const ur of userRoles as UserRoleWithPerms[]) {
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

  async createRefreshToken(data: CreateRefreshTokenData): Promise<RefreshTokenRecord> {
    const rt = await this.prisma.refreshToken.create({
      data: { token: data.token, userId: data.userId, expiresAt: data.expiresAt },
    });
    return toRefreshTokenRecord(rt);
  }

  async findRefreshToken(token: string): Promise<RefreshTokenRecord | null> {
    const rt = await this.prisma.refreshToken.findUnique({ where: { token } });
    return rt ? toRefreshTokenRecord(rt) : null;
  }

  async revokeRefreshToken(token: string): Promise<void> {
    await this.prisma.refreshToken.updateMany({
      where: { token, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  async revokeAllRefreshTokensForUser(userId: string): Promise<void> {
    await this.prisma.refreshToken.updateMany({
      where: { userId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  async deleteExpiredRefreshTokens(): Promise<void> {
    await this.prisma.refreshToken.deleteMany({
      where: { expiresAt: { lt: new Date() } },
    });
  }

  // ---- Password Reset ----

  async createPasswordResetToken(data: CreatePasswordResetTokenData): Promise<PasswordResetTokenRecord> {
    const prt = await this.prisma.passwordResetToken.create({
      data: { token: data.token, userId: data.userId, expiresAt: data.expiresAt },
    });
    return toPasswordResetTokenRecord(prt);
  }

  async findPasswordResetToken(token: string): Promise<PasswordResetTokenRecord | null> {
    const prt = await this.prisma.passwordResetToken.findUnique({ where: { token } });
    return prt ? toPasswordResetTokenRecord(prt) : null;
  }

  async consumePasswordResetToken(token: string): Promise<void> {
    await this.prisma.passwordResetToken.update({
      where: { token },
      data: { usedAt: new Date() },
    });
  }

  async deleteExpiredPasswordResetTokens(): Promise<void> {
    await this.prisma.passwordResetToken.deleteMany({
      where: { expiresAt: { lt: new Date() } },
    });
  }
}
