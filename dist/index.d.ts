import { DynamicModule, InjectionToken, OptionalFactoryDependency, OnModuleInit, OnModuleDestroy, ExecutionContext, CanActivate, SetMetadata, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as _nestjs_passport from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

type ProfileMetadata = {
    [key: string]: string | number | boolean | null;
};
interface UserRecord {
    id: string;
    email: string;
    username: string | null;
    passwordHash: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
interface ProfileRecord {
    id: string;
    userId: string;
    firstName: string | null;
    lastName: string | null;
    avatarUrl: string | null;
    metadata: ProfileMetadata;
    createdAt: Date;
    updatedAt: Date;
}
interface RoleRecord {
    id: string;
    name: string;
    description: string | null;
    createdAt: Date;
}
interface PermissionRecord {
    id: string;
    key: string;
    description: string | null;
    createdAt: Date;
}
interface RefreshTokenRecord {
    id: string;
    token: string;
    userId: string;
    expiresAt: Date;
    revokedAt: Date | null;
    createdAt: Date;
}
interface PasswordResetTokenRecord {
    id: string;
    token: string;
    userId: string;
    expiresAt: Date;
    usedAt: Date | null;
    createdAt: Date;
}
interface CreateUserData {
    email: string;
    username?: string;
    passwordHash: string;
    isActive?: boolean;
}
interface UpdateUserData {
    email?: string;
    username?: string;
    isActive?: boolean;
}
interface UpsertProfileData {
    firstName?: string;
    lastName?: string;
    avatarUrl?: string;
    metadata?: ProfileMetadata;
}
interface CreateRoleData {
    name: string;
    description?: string;
}
interface CreatePermissionData {
    key: string;
    description?: string;
}
interface CreateRefreshTokenData {
    token: string;
    userId: string;
    expiresAt: Date;
}
interface CreatePasswordResetTokenData {
    token: string;
    userId: string;
    expiresAt: Date;
}
interface ListUsersOptions {
    skip?: number;
    take?: number;
    search?: string;
}
interface PaginatedUsersResult {
    data: UserRecord[];
    total: number;
    skip: number;
    take: number;
}
interface IAuthAdapter {
    findUserById(id: string): Promise<UserRecord | null>;
    findUserByEmail(email: string): Promise<UserRecord | null>;
    findUserByUsername(username: string): Promise<UserRecord | null>;
    findUserByIdentifier(identifier: string): Promise<UserRecord | null>;
    createUser(data: CreateUserData): Promise<UserRecord>;
    updateUser(id: string, data: UpdateUserData): Promise<UserRecord>;
    deleteUser(id: string): Promise<void>;
    listUsers(opts: ListUsersOptions): Promise<PaginatedUsersResult>;
    setUserPassword(id: string, passwordHash: string): Promise<void>;
    findProfileByUserId(userId: string): Promise<ProfileRecord | null>;
    upsertProfile(userId: string, data: UpsertProfileData): Promise<ProfileRecord>;
    createRole(data: CreateRoleData): Promise<RoleRecord>;
    findRoleById(id: string): Promise<RoleRecord | null>;
    findRoleByName(name: string): Promise<RoleRecord | null>;
    listRoles(): Promise<RoleRecord[]>;
    deleteRole(id: string): Promise<void>;
    assignRoleToUser(userId: string, roleId: string): Promise<void>;
    removeRoleFromUser(userId: string, roleId: string): Promise<void>;
    getUserRoles(userId: string): Promise<RoleRecord[]>;
    createPermission(data: CreatePermissionData): Promise<PermissionRecord>;
    findPermissionById(id: string): Promise<PermissionRecord | null>;
    findPermissionByKey(key: string): Promise<PermissionRecord | null>;
    listPermissions(): Promise<PermissionRecord[]>;
    deletePermission(id: string): Promise<void>;
    assignPermissionToRole(roleId: string, permissionId: string): Promise<void>;
    removePermissionFromRole(roleId: string, permissionId: string): Promise<void>;
    getRolePermissions(roleId: string): Promise<PermissionRecord[]>;
    getUserPermissions(userId: string): Promise<PermissionRecord[]>;
    createRefreshToken(data: CreateRefreshTokenData): Promise<RefreshTokenRecord>;
    findRefreshToken(token: string): Promise<RefreshTokenRecord | null>;
    revokeRefreshToken(token: string): Promise<void>;
    revokeAllRefreshTokensForUser(userId: string): Promise<void>;
    deleteExpiredRefreshTokens(): Promise<void>;
    createPasswordResetToken(data: CreatePasswordResetTokenData): Promise<PasswordResetTokenRecord>;
    findPasswordResetToken(token: string): Promise<PasswordResetTokenRecord | null>;
    consumePasswordResetToken(token: string): Promise<void>;
    deleteExpiredPasswordResetTokens(): Promise<void>;
}

interface AdaptivAuthJwtOptions {
    accessSecret: string;
    refreshSecret: string;
    accessExpiresIn: string;
    refreshExpiresIn: string;
}
interface AdaptivAuthPasswordRecoveryOptions {
    tokenExpiresInMinutes?: number;
    onTokenGenerated: (email: string, token: string, user: UserRecord) => Promise<void>;
}
interface AdaptivAuthControllersOptions {
    auth?: boolean;
    users?: boolean;
    profiles?: boolean;
    roles?: boolean;
    permissions?: boolean;
    passwordRecovery?: boolean;
}
interface AdaptivAuthSwaggerOptions {
    title?: string;
    version?: string;
    bearerName?: string;
}
interface AdaptivAuthOptions {
    adapter: IAuthAdapter;
    jwt: AdaptivAuthJwtOptions;
    passwordRecovery?: AdaptivAuthPasswordRecoveryOptions;
    controllers?: AdaptivAuthControllersOptions;
    swagger?: AdaptivAuthSwaggerOptions;
}
interface JwtPayload {
    sub: string;
    email: string;
    roles: string[];
    permissions: string[];
    iat: number;
    exp: number;
}

interface AdaptivAuthAsyncOptions {
    imports?: DynamicModule['imports'];
    inject?: Array<InjectionToken | OptionalFactoryDependency>;
    useFactory: (...args: unknown[]) => Promise<AdaptivAuthOptions> | AdaptivAuthOptions;
}
declare class AdaptivAuthModule {
    static register(options: AdaptivAuthOptions): DynamicModule;
    static registerAsync(asyncOptions: AdaptivAuthAsyncOptions): DynamicModule;
}

declare const ADAPTIV_AUTH_OPTIONS = "ADAPTIV_AUTH_OPTIONS";
declare const ADAPTIV_AUTH_ADAPTER = "ADAPTIV_AUTH_ADAPTER";
declare const IS_PUBLIC_KEY = "adaptiv:isPublic";
declare const REQUIRED_PERMISSIONS_KEY = "adaptiv:requiredPermissions";
declare const REQUIRED_ROLES_KEY = "adaptiv:requiredRoles";

declare class PrismaAuthAdapter implements IAuthAdapter {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    findUserById(id: string): Promise<UserRecord | null>;
    findUserByEmail(email: string): Promise<UserRecord | null>;
    findUserByUsername(username: string): Promise<UserRecord | null>;
    findUserByIdentifier(identifier: string): Promise<UserRecord | null>;
    createUser(data: CreateUserData): Promise<UserRecord>;
    updateUser(id: string, data: UpdateUserData): Promise<UserRecord>;
    deleteUser(id: string): Promise<void>;
    listUsers(opts: ListUsersOptions): Promise<PaginatedUsersResult>;
    setUserPassword(id: string, passwordHash: string): Promise<void>;
    findProfileByUserId(userId: string): Promise<ProfileRecord | null>;
    upsertProfile(userId: string, data: UpsertProfileData): Promise<ProfileRecord>;
    createRole(data: CreateRoleData): Promise<RoleRecord>;
    findRoleById(id: string): Promise<RoleRecord | null>;
    findRoleByName(name: string): Promise<RoleRecord | null>;
    listRoles(): Promise<RoleRecord[]>;
    deleteRole(id: string): Promise<void>;
    assignRoleToUser(userId: string, roleId: string): Promise<void>;
    removeRoleFromUser(userId: string, roleId: string): Promise<void>;
    getUserRoles(userId: string): Promise<RoleRecord[]>;
    createPermission(data: CreatePermissionData): Promise<PermissionRecord>;
    findPermissionById(id: string): Promise<PermissionRecord | null>;
    findPermissionByKey(key: string): Promise<PermissionRecord | null>;
    listPermissions(): Promise<PermissionRecord[]>;
    deletePermission(id: string): Promise<void>;
    assignPermissionToRole(roleId: string, permissionId: string): Promise<void>;
    removePermissionFromRole(roleId: string, permissionId: string): Promise<void>;
    getRolePermissions(roleId: string): Promise<PermissionRecord[]>;
    getUserPermissions(userId: string): Promise<PermissionRecord[]>;
    createRefreshToken(data: CreateRefreshTokenData): Promise<RefreshTokenRecord>;
    findRefreshToken(token: string): Promise<RefreshTokenRecord | null>;
    revokeRefreshToken(token: string): Promise<void>;
    revokeAllRefreshTokensForUser(userId: string): Promise<void>;
    deleteExpiredRefreshTokens(): Promise<void>;
    createPasswordResetToken(data: CreatePasswordResetTokenData): Promise<PasswordResetTokenRecord>;
    findPasswordResetToken(token: string): Promise<PasswordResetTokenRecord | null>;
    consumePasswordResetToken(token: string): Promise<void>;
    deleteExpiredPasswordResetTokens(): Promise<void>;
}

declare class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}

declare class PrismaAuthModule {
}

declare const JwtAuthGuard_base: _nestjs_passport.Type<_nestjs_passport.IAuthGuard>;
declare class JwtAuthGuard extends JwtAuthGuard_base {
    private readonly reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}

declare const LocalAuthGuard_base: _nestjs_passport.Type<_nestjs_passport.IAuthGuard>;
declare class LocalAuthGuard extends LocalAuthGuard_base {
}

declare class PermissionsGuard implements CanActivate {
    private readonly reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): boolean;
}

declare class RolesGuard implements CanActivate {
    private readonly reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): boolean;
}

declare const Public: () => ReturnType<typeof SetMetadata>;

declare const CurrentUser: (...dataOrPipes: unknown[]) => ParameterDecorator;

declare const RequirePermissions: (...permissions: string[]) => ReturnType<typeof SetMetadata>;

declare const RequireRoles: (...roles: string[]) => ReturnType<typeof SetMetadata>;

declare class CreateUserDto {
    email: string;
    username?: string;
    password: string;
}

declare class UpdateUserDto {
    email?: string;
    username?: string;
    isActive?: boolean;
}

declare class ListUsersQueryDto {
    skip?: number;
    take?: number;
    search?: string;
}

declare class UsersService {
    private readonly adapter;
    constructor(adapter: IAuthAdapter);
    create(dto: CreateUserDto): Promise<UserRecord>;
    findById(id: string): Promise<UserRecord>;
    findByEmail(email: string): Promise<UserRecord | null>;
    findByIdentifier(identifier: string): Promise<UserRecord | null>;
    list(query: ListUsersQueryDto): Promise<PaginatedUsersResult>;
    update(id: string, dto: UpdateUserDto): Promise<UserRecord>;
    remove(id: string): Promise<void>;
    setPassword(id: string, plainPassword: string): Promise<void>;
    validatePassword(user: UserRecord, plainPassword: string): Promise<boolean>;
}

declare class AuthService {
    private readonly adapter;
    private readonly options;
    private readonly jwtService;
    private readonly usersService;
    private readonly refreshJwtService;
    constructor(adapter: IAuthAdapter, options: AdaptivAuthOptions, jwtService: JwtService, usersService: UsersService);
    validateUser(identifier: string, password: string): Promise<UserRecord | null>;
    login(user: UserRecord): Promise<{
        accessToken: string;
        refreshToken: string;
        user: UserRecord;
    }>;
    refresh(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(refreshToken: string): Promise<void>;
    logoutAll(userId: string): Promise<void>;
    private issueRefreshToken;
    private parseExpiresIn;
}

declare class UpdateProfileDto {
    firstName?: string;
    lastName?: string;
    avatarUrl?: string;
    metadata?: ProfileMetadata;
}

declare class ProfilesService {
    private readonly adapter;
    constructor(adapter: IAuthAdapter);
    findByUserId(userId: string): Promise<ProfileRecord>;
    upsert(userId: string, dto: UpdateProfileDto): Promise<ProfileRecord>;
}

declare class CreateRoleDto {
    name: string;
    description?: string;
}

declare class RolesService {
    private readonly adapter;
    constructor(adapter: IAuthAdapter);
    create(dto: CreateRoleDto): Promise<RoleRecord>;
    findById(id: string): Promise<RoleRecord>;
    list(): Promise<RoleRecord[]>;
    remove(id: string): Promise<void>;
    assignToUser(userId: string, roleId: string): Promise<void>;
    removeFromUser(userId: string, roleId: string): Promise<void>;
    getUserRoles(userId: string): Promise<RoleRecord[]>;
}

declare class CreatePermissionDto {
    key: string;
    description?: string;
}

declare class PermissionsService {
    private readonly adapter;
    constructor(adapter: IAuthAdapter);
    create(dto: CreatePermissionDto): Promise<PermissionRecord>;
    findById(id: string): Promise<PermissionRecord>;
    list(): Promise<PermissionRecord[]>;
    remove(id: string): Promise<void>;
    assignToRole(roleId: string, permissionId: string): Promise<void>;
    removeFromRole(roleId: string, permissionId: string): Promise<void>;
    getRolePermissions(roleId: string): Promise<PermissionRecord[]>;
    getUserPermissions(userId: string): Promise<PermissionRecord[]>;
}

declare class PasswordRecoveryService {
    private readonly adapter;
    private readonly options;
    constructor(adapter: IAuthAdapter, options: AdaptivAuthOptions);
    requestReset(email: string): Promise<void>;
    validateToken(token: string): Promise<boolean>;
    resetPassword(token: string, newPassword: string): Promise<void>;
}

declare class LoginDto {
    identifier: string;
    password: string;
}

declare class RefreshTokenDto {
    refreshToken: string;
}

declare class UserResponseDto {
    id: string;
    email: string;
    username: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    static from(user: UserRecord): UserResponseDto;
}
declare class PaginatedUsersResponseDto {
    data: UserResponseDto[];
    total: number;
    skip: number;
    take: number;
}

declare class TokenResponseDto {
    accessToken: string;
    refreshToken: string;
    user?: UserResponseDto;
}
declare class RefreshResponseDto {
    accessToken: string;
    refreshToken: string;
}

declare class ProfileResponseDto {
    id: string;
    userId: string;
    firstName: string | null;
    lastName: string | null;
    avatarUrl: string | null;
    metadata: ProfileMetadata;
    createdAt: Date;
    updatedAt: Date;
    static from(profile: ProfileRecord): ProfileResponseDto;
}

declare class AssignRoleDto {
    roleId: string;
}

declare class RoleResponseDto {
    id: string;
    name: string;
    description: string | null;
    createdAt: Date;
    static from(role: RoleRecord): RoleResponseDto;
}

declare class AssignPermissionDto {
    permissionId: string;
}

declare class PermissionResponseDto {
    id: string;
    key: string;
    description: string | null;
    createdAt: Date;
    static from(permission: PermissionRecord): PermissionResponseDto;
}

declare class ForgotPasswordDto {
    email: string;
}

declare class ResetPasswordDto {
    token: string;
    newPassword: string;
}

interface SwaggerSetupOptions extends AdaptivAuthSwaggerOptions {
    path?: string;
}
declare function setupAdaptivAuthSwagger(app: INestApplication, options?: SwaggerSetupOptions): void;

export { ADAPTIV_AUTH_ADAPTER, ADAPTIV_AUTH_OPTIONS, type AdaptivAuthAsyncOptions, type AdaptivAuthControllersOptions, type AdaptivAuthJwtOptions, AdaptivAuthModule, type AdaptivAuthOptions, type AdaptivAuthPasswordRecoveryOptions, type AdaptivAuthSwaggerOptions, AssignPermissionDto, AssignRoleDto, AuthService, type CreatePasswordResetTokenData, type CreatePermissionData, CreatePermissionDto, type CreateRefreshTokenData, type CreateRoleData, CreateRoleDto, type CreateUserData, CreateUserDto, CurrentUser, ForgotPasswordDto, type IAuthAdapter, IS_PUBLIC_KEY, JwtAuthGuard, type JwtPayload, type ListUsersOptions, ListUsersQueryDto, LocalAuthGuard, LoginDto, PaginatedUsersResponseDto, type PaginatedUsersResult, PasswordRecoveryService, type PasswordResetTokenRecord, type PermissionRecord, PermissionResponseDto, PermissionsGuard, PermissionsService, PrismaAuthAdapter, PrismaAuthModule, PrismaService, type ProfileMetadata, type ProfileRecord, ProfileResponseDto, ProfilesService, Public, REQUIRED_PERMISSIONS_KEY, REQUIRED_ROLES_KEY, RefreshResponseDto, RefreshTokenDto, type RefreshTokenRecord, RequirePermissions, RequireRoles, ResetPasswordDto, type RoleRecord, RoleResponseDto, RolesGuard, RolesService, type SwaggerSetupOptions, TokenResponseDto, UpdateProfileDto, type UpdateUserData, UpdateUserDto, type UpsertProfileData, type UserRecord, UserResponseDto, UsersService, setupAdaptivAuthSwagger };
