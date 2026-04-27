export type ProfileMetadata = { [key: string]: string | number | boolean | null };

export interface UserRecord {
  id: string;
  email: string;
  username: string | null;
  passwordHash: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProfileRecord {
  id: string;
  userId: string;
  firstName: string | null;
  lastName: string | null;
  avatarUrl: string | null;
  metadata: ProfileMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export interface RoleRecord {
  id: string;
  name: string;
  description: string | null;
  createdAt: Date;
}

export interface PermissionRecord {
  id: string;
  key: string;
  description: string | null;
  createdAt: Date;
}

export interface RefreshTokenRecord {
  id: string;
  token: string;
  userId: string;
  expiresAt: Date;
  revokedAt: Date | null;
  createdAt: Date;
}

export interface PasswordResetTokenRecord {
  id: string;
  token: string;
  userId: string;
  expiresAt: Date;
  usedAt: Date | null;
  createdAt: Date;
}

export interface CreateUserData {
  email: string;
  username?: string;
  passwordHash: string;
  isActive?: boolean;
}

export interface UpdateUserData {
  email?: string;
  username?: string;
  isActive?: boolean;
}

export interface UpsertProfileData {
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  metadata?: ProfileMetadata;
}

export interface CreateRoleData {
  name: string;
  description?: string;
}

export interface CreatePermissionData {
  key: string;
  description?: string;
}

export interface CreateRefreshTokenData {
  token: string;
  userId: string;
  expiresAt: Date;
}

export interface CreatePasswordResetTokenData {
  token: string;
  userId: string;
  expiresAt: Date;
}

export interface ListUsersOptions {
  skip?: number;
  take?: number;
  search?: string;
}

export interface PaginatedUsersResult {
  data: UserRecord[];
  total: number;
  skip: number;
  take: number;
}

export interface IAuthAdapter {
  // User
  findUserById(id: string): Promise<UserRecord | null>;
  findUserByEmail(email: string): Promise<UserRecord | null>;
  findUserByUsername(username: string): Promise<UserRecord | null>;
  findUserByIdentifier(identifier: string): Promise<UserRecord | null>;
  createUser(data: CreateUserData): Promise<UserRecord>;
  updateUser(id: string, data: UpdateUserData): Promise<UserRecord>;
  deleteUser(id: string): Promise<void>;
  listUsers(opts: ListUsersOptions): Promise<PaginatedUsersResult>;
  setUserPassword(id: string, passwordHash: string): Promise<void>;

  // Profile
  findProfileByUserId(userId: string): Promise<ProfileRecord | null>;
  upsertProfile(userId: string, data: UpsertProfileData): Promise<ProfileRecord>;

  // Roles
  createRole(data: CreateRoleData): Promise<RoleRecord>;
  findRoleById(id: string): Promise<RoleRecord | null>;
  findRoleByName(name: string): Promise<RoleRecord | null>;
  listRoles(): Promise<RoleRecord[]>;
  deleteRole(id: string): Promise<void>;
  assignRoleToUser(userId: string, roleId: string): Promise<void>;
  removeRoleFromUser(userId: string, roleId: string): Promise<void>;
  getUserRoles(userId: string): Promise<RoleRecord[]>;

  // Permissions
  createPermission(data: CreatePermissionData): Promise<PermissionRecord>;
  findPermissionById(id: string): Promise<PermissionRecord | null>;
  findPermissionByKey(key: string): Promise<PermissionRecord | null>;
  listPermissions(): Promise<PermissionRecord[]>;
  deletePermission(id: string): Promise<void>;
  assignPermissionToRole(roleId: string, permissionId: string): Promise<void>;
  removePermissionFromRole(roleId: string, permissionId: string): Promise<void>;
  getRolePermissions(roleId: string): Promise<PermissionRecord[]>;
  getUserPermissions(userId: string): Promise<PermissionRecord[]>;

  // Refresh Tokens
  createRefreshToken(data: CreateRefreshTokenData): Promise<RefreshTokenRecord>;
  findRefreshToken(token: string): Promise<RefreshTokenRecord | null>;
  revokeRefreshToken(token: string): Promise<void>;
  revokeAllRefreshTokensForUser(userId: string): Promise<void>;
  deleteExpiredRefreshTokens(): Promise<void>;

  // Password Reset
  createPasswordResetToken(data: CreatePasswordResetTokenData): Promise<PasswordResetTokenRecord>;
  findPasswordResetToken(token: string): Promise<PasswordResetTokenRecord | null>;
  consumePasswordResetToken(token: string): Promise<void>;
  deleteExpiredPasswordResetTokens(): Promise<void>;
}
