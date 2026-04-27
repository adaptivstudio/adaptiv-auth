var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// src/adaptiv-auth.module.ts
import { Module as Module7 } from "@nestjs/common";

// src/adaptiv-auth.constants.ts
var ADAPTIV_AUTH_OPTIONS = "ADAPTIV_AUTH_OPTIONS";
var ADAPTIV_AUTH_ADAPTER = "ADAPTIV_AUTH_ADAPTER";
var IS_PUBLIC_KEY = "adaptiv:isPublic";
var REQUIRED_PERMISSIONS_KEY = "adaptiv:requiredPermissions";
var REQUIRED_ROLES_KEY = "adaptiv:requiredRoles";

// src/auth/auth.module.ts
import { Module as Module2 } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

// src/users/users.module.ts
import { Module } from "@nestjs/common";

// src/users/users.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UseGuards
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags
} from "@nestjs/swagger";

// src/auth/guards/jwt-auth.guard.ts
import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
var JwtAuthGuard = class extends AuthGuard("jwt") {
  constructor(reflector) {
    super();
    this.reflector = reflector;
  }
  canActivate(context) {
    const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    if (isPublic) return true;
    return super.canActivate(context);
  }
};
JwtAuthGuard = __decorateClass([
  Injectable()
], JwtAuthGuard);

// src/users/dto/user-response.dto.ts
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
var _UserResponseDto = class _UserResponseDto {
  static from(user) {
    const dto = new _UserResponseDto();
    dto.id = user.id;
    dto.email = user.email;
    dto.username = user.username;
    dto.isActive = user.isActive;
    dto.createdAt = user.createdAt;
    dto.updatedAt = user.updatedAt;
    return dto;
  }
};
__decorateClass([
  ApiProperty({ description: "User ID", example: "clxyz123" })
], _UserResponseDto.prototype, "id", 2);
__decorateClass([
  ApiProperty({ description: "Email address", example: "john@example.com" })
], _UserResponseDto.prototype, "email", 2);
__decorateClass([
  ApiPropertyOptional({ description: "Username", example: "johndoe", nullable: true })
], _UserResponseDto.prototype, "username", 2);
__decorateClass([
  ApiProperty({ description: "Whether the account is active", example: true })
], _UserResponseDto.prototype, "isActive", 2);
__decorateClass([
  ApiProperty({ description: "Creation timestamp" })
], _UserResponseDto.prototype, "createdAt", 2);
__decorateClass([
  ApiProperty({ description: "Last update timestamp" })
], _UserResponseDto.prototype, "updatedAt", 2);
var UserResponseDto = _UserResponseDto;
var PaginatedUsersResponseDto = class {
};
__decorateClass([
  ApiProperty({ type: [UserResponseDto] })
], PaginatedUsersResponseDto.prototype, "data", 2);
__decorateClass([
  ApiProperty({ description: "Total number of matching users", example: 42 })
], PaginatedUsersResponseDto.prototype, "total", 2);
__decorateClass([
  ApiProperty({ description: "Number of records skipped", example: 0 })
], PaginatedUsersResponseDto.prototype, "skip", 2);
__decorateClass([
  ApiProperty({ description: "Number of records returned", example: 20 })
], PaginatedUsersResponseDto.prototype, "take", 2);

// src/users/users.controller.ts
var UsersController = class {
  constructor(usersService) {
    this.usersService = usersService;
  }
  async create(dto) {
    const user = await this.usersService.create(dto);
    return UserResponseDto.from(user);
  }
  async list(query) {
    const result = await this.usersService.list(query);
    return {
      data: result.data.map(UserResponseDto.from),
      total: result.total,
      skip: result.skip,
      take: result.take
    };
  }
  async findOne(id) {
    const user = await this.usersService.findById(id);
    return UserResponseDto.from(user);
  }
  async update(id, dto) {
    const user = await this.usersService.update(id, dto);
    return UserResponseDto.from(user);
  }
  async remove(id) {
    await this.usersService.remove(id);
  }
};
__decorateClass([
  Post(),
  ApiOperation({ summary: "Create a new user" }),
  ApiResponse({ status: 201, description: "User created", type: UserResponseDto }),
  ApiResponse({ status: 409, description: "Email or username already in use" }),
  __decorateParam(0, Body())
], UsersController.prototype, "create", 1);
__decorateClass([
  Get(),
  ApiOperation({ summary: "List users with optional pagination and search" }),
  ApiResponse({ status: 200, description: "Paginated user list", type: PaginatedUsersResponseDto }),
  __decorateParam(0, Query())
], UsersController.prototype, "list", 1);
__decorateClass([
  Get(":id"),
  ApiOperation({ summary: "Get a user by ID" }),
  ApiParam({ name: "id", description: "User ID" }),
  ApiResponse({ status: 200, description: "User found", type: UserResponseDto }),
  ApiResponse({ status: 404, description: "User not found" }),
  __decorateParam(0, Param("id"))
], UsersController.prototype, "findOne", 1);
__decorateClass([
  Patch(":id"),
  ApiOperation({ summary: "Update a user" }),
  ApiParam({ name: "id", description: "User ID" }),
  ApiResponse({ status: 200, description: "User updated", type: UserResponseDto }),
  ApiResponse({ status: 404, description: "User not found" }),
  __decorateParam(0, Param("id")),
  __decorateParam(1, Body())
], UsersController.prototype, "update", 1);
__decorateClass([
  Delete(":id"),
  HttpCode(HttpStatus.NO_CONTENT),
  ApiOperation({ summary: "Delete a user" }),
  ApiParam({ name: "id", description: "User ID" }),
  ApiResponse({ status: 204, description: "User deleted" }),
  ApiResponse({ status: 404, description: "User not found" }),
  __decorateParam(0, Param("id"))
], UsersController.prototype, "remove", 1);
UsersController = __decorateClass([
  ApiTags("users"),
  ApiBearerAuth(),
  UseGuards(JwtAuthGuard),
  Controller("users")
], UsersController);

// src/users/users.service.ts
import {
  ConflictException,
  Inject,
  Injectable as Injectable2,
  NotFoundException
} from "@nestjs/common";
import * as bcrypt from "bcryptjs";
var BCRYPT_ROUNDS = 12;
var UsersService = class {
  constructor(adapter) {
    this.adapter = adapter;
  }
  async create(dto) {
    const existing = await this.adapter.findUserByEmail(dto.email);
    if (existing) {
      throw new ConflictException("Email already in use");
    }
    if (dto.username) {
      const existingByUsername = await this.adapter.findUserByUsername(dto.username);
      if (existingByUsername) {
        throw new ConflictException("Username already taken");
      }
    }
    const passwordHash = await bcrypt.hash(dto.password, BCRYPT_ROUNDS);
    return this.adapter.createUser({ email: dto.email, username: dto.username, passwordHash });
  }
  async findById(id) {
    const user = await this.adapter.findUserById(id);
    if (!user) throw new NotFoundException("User not found");
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
UsersService = __decorateClass([
  Injectable2(),
  __decorateParam(0, Inject(ADAPTIV_AUTH_ADAPTER))
], UsersService);

// src/users/users.module.ts
var UsersModule = class {
};
UsersModule = __decorateClass([
  Module({
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
  })
], UsersModule);

// src/auth/auth.controller.ts
import {
  Body as Body2,
  Controller as Controller2,
  HttpCode as HttpCode2,
  HttpStatus as HttpStatus2,
  Post as Post2,
  Request,
  UseGuards as UseGuards2
} from "@nestjs/common";
import {
  ApiBearerAuth as ApiBearerAuth2,
  ApiOperation as ApiOperation2,
  ApiResponse as ApiResponse2,
  ApiTags as ApiTags2
} from "@nestjs/swagger";

// src/decorators/current-user.decorator.ts
import { createParamDecorator } from "@nestjs/common";
var CurrentUser = createParamDecorator(
  (_data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);

// src/decorators/public.decorator.ts
import { SetMetadata } from "@nestjs/common";
var Public = () => SetMetadata(IS_PUBLIC_KEY, true);

// src/auth/dto/token-response.dto.ts
import { ApiProperty as ApiProperty2 } from "@nestjs/swagger";
var TokenResponseDto = class {
};
__decorateClass([
  ApiProperty2({ description: "Short-lived JWT access token" })
], TokenResponseDto.prototype, "accessToken", 2);
__decorateClass([
  ApiProperty2({ description: "Long-lived opaque refresh token" })
], TokenResponseDto.prototype, "refreshToken", 2);
__decorateClass([
  ApiProperty2({ type: UserResponseDto, required: false })
], TokenResponseDto.prototype, "user", 2);
var RefreshResponseDto = class {
};
__decorateClass([
  ApiProperty2({ description: "New short-lived JWT access token" })
], RefreshResponseDto.prototype, "accessToken", 2);
__decorateClass([
  ApiProperty2({ description: "New long-lived opaque refresh token (rotated)" })
], RefreshResponseDto.prototype, "refreshToken", 2);

// src/auth/guards/local-auth.guard.ts
import { Injectable as Injectable3 } from "@nestjs/common";
import { AuthGuard as AuthGuard2 } from "@nestjs/passport";
var LocalAuthGuard = class extends AuthGuard2("local") {
};
LocalAuthGuard = __decorateClass([
  Injectable3()
], LocalAuthGuard);

// src/auth/auth.controller.ts
var AuthController = class {
  constructor(authService) {
    this.authService = authService;
  }
  async login(_dto, req) {
    const result = await this.authService.login(req.user);
    return {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      user: UserResponseDto.from(result.user)
    };
  }
  async refresh(dto) {
    return this.authService.refresh(dto.refreshToken);
  }
  async logout(dto) {
    await this.authService.logout(dto.refreshToken);
  }
  async logoutAll(user) {
    await this.authService.logoutAll(user.sub);
  }
};
__decorateClass([
  Public(),
  UseGuards2(LocalAuthGuard),
  Post2("login"),
  HttpCode2(HttpStatus2.OK),
  ApiOperation2({ summary: "Login with email/username and password" }),
  ApiResponse2({ status: 200, description: "Login successful", type: TokenResponseDto }),
  ApiResponse2({ status: 401, description: "Invalid credentials" }),
  __decorateParam(0, Body2()),
  __decorateParam(1, Request())
], AuthController.prototype, "login", 1);
__decorateClass([
  Public(),
  Post2("refresh"),
  HttpCode2(HttpStatus2.OK),
  ApiOperation2({ summary: "Rotate a refresh token and obtain new token pair" }),
  ApiResponse2({ status: 200, description: "Tokens refreshed", type: RefreshResponseDto }),
  ApiResponse2({ status: 401, description: "Invalid or expired refresh token" }),
  __decorateParam(0, Body2())
], AuthController.prototype, "refresh", 1);
__decorateClass([
  UseGuards2(JwtAuthGuard),
  Post2("logout"),
  HttpCode2(HttpStatus2.NO_CONTENT),
  ApiBearerAuth2(),
  ApiOperation2({ summary: "Revoke a single refresh token" }),
  ApiResponse2({ status: 204, description: "Logged out" }),
  __decorateParam(0, Body2())
], AuthController.prototype, "logout", 1);
__decorateClass([
  UseGuards2(JwtAuthGuard),
  Post2("logout-all"),
  HttpCode2(HttpStatus2.NO_CONTENT),
  ApiBearerAuth2(),
  ApiOperation2({ summary: "Revoke all refresh tokens for the current user" }),
  ApiResponse2({ status: 204, description: "All sessions terminated" }),
  __decorateParam(0, CurrentUser())
], AuthController.prototype, "logoutAll", 1);
AuthController = __decorateClass([
  ApiTags2("auth"),
  Controller2("auth")
], AuthController);

// src/auth/auth.service.ts
import { Inject as Inject2, Injectable as Injectable4, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as crypto from "crypto";
var AuthService = class {
  constructor(adapter, options, jwtService, usersService) {
    this.adapter = adapter;
    this.options = options;
    this.jwtService = jwtService;
    this.usersService = usersService;
    this.refreshJwtService = new JwtService({ secret: options.jwt.refreshSecret });
  }
  async validateUser(identifier, password) {
    const user = await this.adapter.findUserByIdentifier(identifier);
    if (!user || !user.isActive) return null;
    const valid = await this.usersService.validatePassword(user, password);
    return valid ? user : null;
  }
  async login(user) {
    const [roles, permissions] = await Promise.all([
      this.adapter.getUserRoles(user.id),
      this.adapter.getUserPermissions(user.id)
    ]);
    const payload = {
      sub: user.id,
      email: user.email,
      roles: roles.map((r) => r.name),
      permissions: permissions.map((p) => p.key)
    };
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = await this.issueRefreshToken(user.id);
    return { accessToken, refreshToken, user };
  }
  async refresh(refreshToken) {
    const record = await this.adapter.findRefreshToken(refreshToken);
    if (!record || record.revokedAt !== null || record.expiresAt <= /* @__PURE__ */ new Date()) {
      throw new UnauthorizedException("Invalid or expired refresh token");
    }
    const user = await this.adapter.findUserById(record.userId);
    if (!user || !user.isActive) {
      throw new UnauthorizedException("User not found or inactive");
    }
    await this.adapter.revokeRefreshToken(refreshToken);
    const { accessToken, refreshToken: newRefreshToken } = await this.login(user);
    return { accessToken, refreshToken: newRefreshToken };
  }
  async logout(refreshToken) {
    await this.adapter.revokeRefreshToken(refreshToken);
  }
  async logoutAll(userId) {
    await this.adapter.revokeAllRefreshTokensForUser(userId);
  }
  async issueRefreshToken(userId) {
    const token = crypto.randomBytes(64).toString("hex");
    const refreshExpiresIn = this.options.jwt.refreshExpiresIn;
    const expiresAt = this.parseExpiresIn(refreshExpiresIn);
    await this.adapter.createRefreshToken({ token, userId, expiresAt });
    return token;
  }
  parseExpiresIn(expiresIn) {
    const match = /^(\d+)([smhd])$/.exec(expiresIn);
    if (!match) throw new Error(`Invalid expiresIn format: ${expiresIn}`);
    const value = parseInt(match[1], 10);
    const unit = match[2];
    const multipliers = { s: 1e3, m: 6e4, h: 36e5, d: 864e5 };
    return new Date(Date.now() + value * multipliers[unit]);
  }
};
AuthService = __decorateClass([
  Injectable4(),
  __decorateParam(0, Inject2(ADAPTIV_AUTH_ADAPTER)),
  __decorateParam(1, Inject2(ADAPTIV_AUTH_OPTIONS))
], AuthService);

// src/auth/strategies/jwt.strategy.ts
import { Inject as Inject3, Injectable as Injectable5 } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
var JwtStrategy = class extends PassportStrategy(Strategy) {
  constructor(options) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: options.jwt.accessSecret
    });
  }
  validate(payload) {
    return payload;
  }
};
JwtStrategy = __decorateClass([
  Injectable5(),
  __decorateParam(0, Inject3(ADAPTIV_AUTH_OPTIONS))
], JwtStrategy);

// src/auth/strategies/local.strategy.ts
import { Injectable as Injectable6, UnauthorizedException as UnauthorizedException2 } from "@nestjs/common";
import { PassportStrategy as PassportStrategy2 } from "@nestjs/passport";
import { Strategy as Strategy2 } from "passport-local";
var LocalStrategy = class extends PassportStrategy2(Strategy2) {
  constructor(authService) {
    super({ usernameField: "identifier" });
    this.authService = authService;
  }
  async validate(identifier, password) {
    const user = await this.authService.validateUser(identifier, password);
    if (!user) {
      throw new UnauthorizedException2("Invalid credentials");
    }
    return user;
  }
};
LocalStrategy = __decorateClass([
  Injectable6()
], LocalStrategy);

// src/auth/auth.module.ts
var AuthModule = class {
};
AuthModule = __decorateClass([
  Module2({
    imports: [
      UsersModule,
      PassportModule,
      JwtModule.registerAsync({
        inject: [ADAPTIV_AUTH_OPTIONS],
        // expiresIn is typed as StringValue in newer ms, but accepts standard strings at runtime
        useFactory: (options) => ({
          secret: options.jwt.accessSecret,
          signOptions: { expiresIn: options.jwt.accessExpiresIn }
        })
      })
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy, LocalAuthGuard, JwtAuthGuard],
    exports: [AuthService, JwtAuthGuard]
  })
], AuthModule);

// src/password-recovery/password-recovery.module.ts
import { Module as Module3 } from "@nestjs/common";

// src/password-recovery/password-recovery.controller.ts
import { Body as Body3, Controller as Controller3, Get as Get2, HttpCode as HttpCode3, HttpStatus as HttpStatus3, Param as Param2, Post as Post3 } from "@nestjs/common";
import { ApiOperation as ApiOperation3, ApiParam as ApiParam2, ApiResponse as ApiResponse3, ApiTags as ApiTags3 } from "@nestjs/swagger";
var PasswordRecoveryController = class {
  constructor(passwordRecoveryService) {
    this.passwordRecoveryService = passwordRecoveryService;
  }
  async forgotPassword(dto) {
    await this.passwordRecoveryService.requestReset(dto.email);
    return { message: "If that email exists, a reset link was sent." };
  }
  async validateToken(token) {
    const valid = await this.passwordRecoveryService.validateToken(token);
    return { valid };
  }
  async resetPassword(dto) {
    await this.passwordRecoveryService.resetPassword(dto.token, dto.newPassword);
    return { message: "Password reset successfully." };
  }
};
__decorateClass([
  Public(),
  Post3("forgot-password"),
  HttpCode3(HttpStatus3.OK),
  ApiOperation3({ summary: "Request a password reset email" }),
  ApiResponse3({
    status: 200,
    description: "If the email exists a reset link is sent (always returns 200 to avoid enumeration)"
  }),
  __decorateParam(0, Body3())
], PasswordRecoveryController.prototype, "forgotPassword", 1);
__decorateClass([
  Public(),
  Get2("reset-password/:token"),
  ApiOperation3({ summary: "Validate a password reset token" }),
  ApiParam2({ name: "token", description: "Password reset token" }),
  ApiResponse3({ status: 200, description: "Token is valid" }),
  ApiResponse3({ status: 400, description: "Token is invalid or expired" }),
  __decorateParam(0, Param2("token"))
], PasswordRecoveryController.prototype, "validateToken", 1);
__decorateClass([
  Public(),
  Post3("reset-password"),
  HttpCode3(HttpStatus3.OK),
  ApiOperation3({ summary: "Reset password using a valid token" }),
  ApiResponse3({ status: 200, description: "Password reset successfully" }),
  ApiResponse3({ status: 400, description: "Invalid or expired token" }),
  __decorateParam(0, Body3())
], PasswordRecoveryController.prototype, "resetPassword", 1);
PasswordRecoveryController = __decorateClass([
  ApiTags3("password-recovery"),
  Controller3("auth")
], PasswordRecoveryController);

// src/password-recovery/password-recovery.service.ts
import { BadRequestException, Inject as Inject4, Injectable as Injectable7 } from "@nestjs/common";
import * as bcrypt2 from "bcryptjs";
import * as crypto2 from "crypto";
var DEFAULT_EXPIRES_MINUTES = 60;
var BCRYPT_ROUNDS2 = 12;
var PasswordRecoveryService = class {
  constructor(adapter, options) {
    this.adapter = adapter;
    this.options = options;
  }
  async requestReset(email) {
    const user = await this.adapter.findUserByEmail(email);
    if (!user || !user.isActive) return;
    const token = crypto2.randomBytes(32).toString("hex");
    const expiresInMinutes = this.options.passwordRecovery?.tokenExpiresInMinutes ?? DEFAULT_EXPIRES_MINUTES;
    const expiresAt = new Date(Date.now() + expiresInMinutes * 60 * 1e3);
    await this.adapter.createPasswordResetToken({ token, userId: user.id, expiresAt });
    if (this.options.passwordRecovery?.onTokenGenerated) {
      await this.options.passwordRecovery.onTokenGenerated(email, token, user);
    }
  }
  async validateToken(token) {
    const record = await this.adapter.findPasswordResetToken(token);
    if (!record) return false;
    if (record.usedAt !== null) return false;
    if (record.expiresAt <= /* @__PURE__ */ new Date()) return false;
    return true;
  }
  async resetPassword(token, newPassword) {
    const record = await this.adapter.findPasswordResetToken(token);
    if (!record || record.usedAt !== null || record.expiresAt <= /* @__PURE__ */ new Date()) {
      throw new BadRequestException("Invalid or expired reset token");
    }
    const passwordHash = await bcrypt2.hash(newPassword, BCRYPT_ROUNDS2);
    await this.adapter.setUserPassword(record.userId, passwordHash);
    await this.adapter.consumePasswordResetToken(token);
    await this.adapter.revokeAllRefreshTokensForUser(record.userId);
  }
};
PasswordRecoveryService = __decorateClass([
  Injectable7(),
  __decorateParam(0, Inject4(ADAPTIV_AUTH_ADAPTER)),
  __decorateParam(1, Inject4(ADAPTIV_AUTH_OPTIONS))
], PasswordRecoveryService);

// src/password-recovery/password-recovery.module.ts
var PasswordRecoveryModule = class {
};
PasswordRecoveryModule = __decorateClass([
  Module3({
    controllers: [PasswordRecoveryController],
    providers: [PasswordRecoveryService],
    exports: [PasswordRecoveryService]
  })
], PasswordRecoveryModule);

// src/permissions/permissions.module.ts
import { Module as Module4 } from "@nestjs/common";

// src/permissions/permissions.controller.ts
import {
  Body as Body4,
  Controller as Controller4,
  Delete as Delete2,
  Get as Get3,
  HttpCode as HttpCode4,
  HttpStatus as HttpStatus4,
  Param as Param3,
  Post as Post4,
  UseGuards as UseGuards3
} from "@nestjs/common";
import {
  ApiBearerAuth as ApiBearerAuth3,
  ApiOperation as ApiOperation4,
  ApiParam as ApiParam3,
  ApiResponse as ApiResponse4,
  ApiTags as ApiTags4
} from "@nestjs/swagger";

// src/permissions/dto/permission-response.dto.ts
import { ApiProperty as ApiProperty3, ApiPropertyOptional as ApiPropertyOptional2 } from "@nestjs/swagger";
var _PermissionResponseDto = class _PermissionResponseDto {
  static from(permission) {
    const dto = new _PermissionResponseDto();
    dto.id = permission.id;
    dto.key = permission.key;
    dto.description = permission.description;
    dto.createdAt = permission.createdAt;
    return dto;
  }
};
__decorateClass([
  ApiProperty3({ description: "Permission ID", example: "clxyz789" })
], _PermissionResponseDto.prototype, "id", 2);
__decorateClass([
  ApiProperty3({ description: "Permission key", example: "posts:create" })
], _PermissionResponseDto.prototype, "key", 2);
__decorateClass([
  ApiPropertyOptional2({ description: "Permission description", example: "Create new posts", nullable: true })
], _PermissionResponseDto.prototype, "description", 2);
__decorateClass([
  ApiProperty3({ description: "Creation timestamp" })
], _PermissionResponseDto.prototype, "createdAt", 2);
var PermissionResponseDto = _PermissionResponseDto;

// src/permissions/permissions.controller.ts
var PermissionsController = class {
  constructor(permissionsService) {
    this.permissionsService = permissionsService;
  }
  async create(dto) {
    const permission = await this.permissionsService.create(dto);
    return PermissionResponseDto.from(permission);
  }
  async list() {
    const permissions = await this.permissionsService.list();
    return permissions.map(PermissionResponseDto.from);
  }
  async findOne(id) {
    const permission = await this.permissionsService.findById(id);
    return PermissionResponseDto.from(permission);
  }
  async remove(id) {
    await this.permissionsService.remove(id);
  }
  async assignToRole(roleId, dto) {
    await this.permissionsService.assignToRole(roleId, dto.permissionId);
  }
  async removeFromRole(roleId, permissionId) {
    await this.permissionsService.removeFromRole(roleId, permissionId);
  }
  async getRolePermissions(roleId) {
    const permissions = await this.permissionsService.getRolePermissions(roleId);
    return permissions.map(PermissionResponseDto.from);
  }
  async getUserPermissions(userId) {
    const permissions = await this.permissionsService.getUserPermissions(userId);
    return permissions.map(PermissionResponseDto.from);
  }
};
__decorateClass([
  Post4(),
  ApiOperation4({ summary: "Create a new permission" }),
  ApiResponse4({ status: 201, description: "Permission created", type: PermissionResponseDto }),
  ApiResponse4({ status: 409, description: "Permission key already exists" }),
  __decorateParam(0, Body4())
], PermissionsController.prototype, "create", 1);
__decorateClass([
  Get3(),
  ApiOperation4({ summary: "List all permissions" }),
  ApiResponse4({ status: 200, description: "List of permissions", type: [PermissionResponseDto] })
], PermissionsController.prototype, "list", 1);
__decorateClass([
  Get3(":id"),
  ApiOperation4({ summary: "Get a permission by ID" }),
  ApiParam3({ name: "id", description: "Permission ID" }),
  ApiResponse4({ status: 200, description: "Permission found", type: PermissionResponseDto }),
  ApiResponse4({ status: 404, description: "Permission not found" }),
  __decorateParam(0, Param3("id"))
], PermissionsController.prototype, "findOne", 1);
__decorateClass([
  Delete2(":id"),
  HttpCode4(HttpStatus4.NO_CONTENT),
  ApiOperation4({ summary: "Delete a permission" }),
  ApiParam3({ name: "id", description: "Permission ID" }),
  ApiResponse4({ status: 204, description: "Permission deleted" }),
  ApiResponse4({ status: 404, description: "Permission not found" }),
  __decorateParam(0, Param3("id"))
], PermissionsController.prototype, "remove", 1);
__decorateClass([
  Post4("roles/:roleId/assign"),
  ApiOperation4({ summary: "Assign a permission to a role" }),
  ApiParam3({ name: "roleId", description: "Role ID" }),
  ApiResponse4({ status: 201, description: "Permission assigned to role" }),
  ApiResponse4({ status: 404, description: "Permission not found" }),
  __decorateParam(0, Param3("roleId")),
  __decorateParam(1, Body4())
], PermissionsController.prototype, "assignToRole", 1);
__decorateClass([
  Delete2("roles/:roleId/assign/:permissionId"),
  HttpCode4(HttpStatus4.NO_CONTENT),
  ApiOperation4({ summary: "Remove a permission from a role" }),
  ApiParam3({ name: "roleId", description: "Role ID" }),
  ApiParam3({ name: "permissionId", description: "Permission ID" }),
  ApiResponse4({ status: 204, description: "Permission removed from role" }),
  __decorateParam(0, Param3("roleId")),
  __decorateParam(1, Param3("permissionId"))
], PermissionsController.prototype, "removeFromRole", 1);
__decorateClass([
  Get3("roles/:roleId"),
  ApiOperation4({ summary: "Get all permissions for a role" }),
  ApiParam3({ name: "roleId", description: "Role ID" }),
  ApiResponse4({ status: 200, description: "Role permissions", type: [PermissionResponseDto] }),
  __decorateParam(0, Param3("roleId"))
], PermissionsController.prototype, "getRolePermissions", 1);
__decorateClass([
  Get3("users/:userId"),
  ApiOperation4({ summary: "Get all resolved permissions for a user (across all roles)" }),
  ApiParam3({ name: "userId", description: "User ID" }),
  ApiResponse4({ status: 200, description: "User permissions", type: [PermissionResponseDto] }),
  __decorateParam(0, Param3("userId"))
], PermissionsController.prototype, "getUserPermissions", 1);
PermissionsController = __decorateClass([
  ApiTags4("permissions"),
  ApiBearerAuth3(),
  UseGuards3(JwtAuthGuard),
  Controller4("permissions")
], PermissionsController);

// src/permissions/permissions.service.ts
import { ConflictException as ConflictException2, Inject as Inject5, Injectable as Injectable8, NotFoundException as NotFoundException2 } from "@nestjs/common";
var PermissionsService = class {
  constructor(adapter) {
    this.adapter = adapter;
  }
  async create(dto) {
    const existing = await this.adapter.findPermissionByKey(dto.key);
    if (existing) throw new ConflictException2("Permission key already exists");
    return this.adapter.createPermission(dto);
  }
  async findById(id) {
    const permission = await this.adapter.findPermissionById(id);
    if (!permission) throw new NotFoundException2("Permission not found");
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
PermissionsService = __decorateClass([
  Injectable8(),
  __decorateParam(0, Inject5(ADAPTIV_AUTH_ADAPTER))
], PermissionsService);

// src/permissions/permissions.module.ts
var PermissionsModule = class {
};
PermissionsModule = __decorateClass([
  Module4({
    controllers: [PermissionsController],
    providers: [PermissionsService, JwtAuthGuard],
    exports: [PermissionsService]
  })
], PermissionsModule);

// src/profiles/profiles.module.ts
import { Module as Module5 } from "@nestjs/common";

// src/profiles/profiles.controller.ts
import { Body as Body5, Controller as Controller5, Get as Get4, Param as Param4, Patch as Patch2, UseGuards as UseGuards4 } from "@nestjs/common";
import {
  ApiBearerAuth as ApiBearerAuth4,
  ApiOperation as ApiOperation5,
  ApiParam as ApiParam4,
  ApiResponse as ApiResponse5,
  ApiTags as ApiTags5
} from "@nestjs/swagger";

// src/profiles/dto/profile-response.dto.ts
import { ApiProperty as ApiProperty4, ApiPropertyOptional as ApiPropertyOptional3 } from "@nestjs/swagger";
var _ProfileResponseDto = class _ProfileResponseDto {
  static from(profile) {
    const dto = new _ProfileResponseDto();
    dto.id = profile.id;
    dto.userId = profile.userId;
    dto.firstName = profile.firstName;
    dto.lastName = profile.lastName;
    dto.avatarUrl = profile.avatarUrl;
    dto.metadata = profile.metadata;
    dto.createdAt = profile.createdAt;
    dto.updatedAt = profile.updatedAt;
    return dto;
  }
};
__decorateClass([
  ApiProperty4({ description: "Profile ID", example: "clxyzabc" })
], _ProfileResponseDto.prototype, "id", 2);
__decorateClass([
  ApiProperty4({ description: "User ID this profile belongs to", example: "clxyz123" })
], _ProfileResponseDto.prototype, "userId", 2);
__decorateClass([
  ApiPropertyOptional3({ description: "First name", example: "John", nullable: true })
], _ProfileResponseDto.prototype, "firstName", 2);
__decorateClass([
  ApiPropertyOptional3({ description: "Last name", example: "Doe", nullable: true })
], _ProfileResponseDto.prototype, "lastName", 2);
__decorateClass([
  ApiPropertyOptional3({ description: "Avatar URL", example: "https://example.com/avatar.png", nullable: true })
], _ProfileResponseDto.prototype, "avatarUrl", 2);
__decorateClass([
  ApiProperty4({ description: "Extensible metadata", example: {} })
], _ProfileResponseDto.prototype, "metadata", 2);
__decorateClass([
  ApiProperty4({ description: "Creation timestamp" })
], _ProfileResponseDto.prototype, "createdAt", 2);
__decorateClass([
  ApiProperty4({ description: "Last update timestamp" })
], _ProfileResponseDto.prototype, "updatedAt", 2);
var ProfileResponseDto = _ProfileResponseDto;

// src/profiles/profiles.controller.ts
var ProfilesController = class {
  constructor(profilesService) {
    this.profilesService = profilesService;
  }
  async findOne(userId) {
    const profile = await this.profilesService.findByUserId(userId);
    return ProfileResponseDto.from(profile);
  }
  async upsert(userId, dto) {
    const profile = await this.profilesService.upsert(userId, dto);
    return ProfileResponseDto.from(profile);
  }
};
__decorateClass([
  Get4(),
  ApiOperation5({ summary: "Get the profile for a user" }),
  ApiParam4({ name: "userId", description: "User ID" }),
  ApiResponse5({ status: 200, description: "Profile found", type: ProfileResponseDto }),
  ApiResponse5({ status: 404, description: "Profile not found" }),
  __decorateParam(0, Param4("userId"))
], ProfilesController.prototype, "findOne", 1);
__decorateClass([
  Patch2(),
  ApiOperation5({ summary: "Create or update the profile for a user" }),
  ApiParam4({ name: "userId", description: "User ID" }),
  ApiResponse5({ status: 200, description: "Profile upserted", type: ProfileResponseDto }),
  __decorateParam(0, Param4("userId")),
  __decorateParam(1, Body5())
], ProfilesController.prototype, "upsert", 1);
ProfilesController = __decorateClass([
  ApiTags5("profiles"),
  ApiBearerAuth4(),
  UseGuards4(JwtAuthGuard),
  Controller5("users/:userId/profile")
], ProfilesController);

// src/profiles/profiles.service.ts
import { Inject as Inject6, Injectable as Injectable9, NotFoundException as NotFoundException3 } from "@nestjs/common";
var ProfilesService = class {
  constructor(adapter) {
    this.adapter = adapter;
  }
  async findByUserId(userId) {
    const profile = await this.adapter.findProfileByUserId(userId);
    if (!profile) throw new NotFoundException3("Profile not found");
    return profile;
  }
  async upsert(userId, dto) {
    return this.adapter.upsertProfile(userId, {
      firstName: dto.firstName,
      lastName: dto.lastName,
      avatarUrl: dto.avatarUrl,
      metadata: dto.metadata
    });
  }
};
ProfilesService = __decorateClass([
  Injectable9(),
  __decorateParam(0, Inject6(ADAPTIV_AUTH_ADAPTER))
], ProfilesService);

// src/profiles/profiles.module.ts
var ProfilesModule = class {
};
ProfilesModule = __decorateClass([
  Module5({
    controllers: [ProfilesController],
    providers: [ProfilesService, JwtAuthGuard],
    exports: [ProfilesService]
  })
], ProfilesModule);

// src/roles/roles.module.ts
import { Module as Module6 } from "@nestjs/common";

// src/roles/roles.controller.ts
import {
  Body as Body6,
  Controller as Controller6,
  Delete as Delete3,
  Get as Get5,
  HttpCode as HttpCode5,
  HttpStatus as HttpStatus5,
  Param as Param5,
  Post as Post5,
  UseGuards as UseGuards5
} from "@nestjs/common";
import {
  ApiBearerAuth as ApiBearerAuth5,
  ApiOperation as ApiOperation6,
  ApiParam as ApiParam5,
  ApiResponse as ApiResponse6,
  ApiTags as ApiTags6
} from "@nestjs/swagger";

// src/roles/dto/role-response.dto.ts
import { ApiProperty as ApiProperty5, ApiPropertyOptional as ApiPropertyOptional4 } from "@nestjs/swagger";
var _RoleResponseDto = class _RoleResponseDto {
  static from(role) {
    const dto = new _RoleResponseDto();
    dto.id = role.id;
    dto.name = role.name;
    dto.description = role.description;
    dto.createdAt = role.createdAt;
    return dto;
  }
};
__decorateClass([
  ApiProperty5({ description: "Role ID", example: "clxyz456" })
], _RoleResponseDto.prototype, "id", 2);
__decorateClass([
  ApiProperty5({ description: "Role name", example: "admin" })
], _RoleResponseDto.prototype, "name", 2);
__decorateClass([
  ApiPropertyOptional4({ description: "Role description", example: "Full system access", nullable: true })
], _RoleResponseDto.prototype, "description", 2);
__decorateClass([
  ApiProperty5({ description: "Creation timestamp" })
], _RoleResponseDto.prototype, "createdAt", 2);
var RoleResponseDto = _RoleResponseDto;

// src/roles/roles.controller.ts
var RolesController = class {
  constructor(rolesService) {
    this.rolesService = rolesService;
  }
  async create(dto) {
    const role = await this.rolesService.create(dto);
    return RoleResponseDto.from(role);
  }
  async list() {
    const roles = await this.rolesService.list();
    return roles.map(RoleResponseDto.from);
  }
  async findOne(id) {
    const role = await this.rolesService.findById(id);
    return RoleResponseDto.from(role);
  }
  async remove(id) {
    await this.rolesService.remove(id);
  }
  async assignToUser(userId, dto) {
    await this.rolesService.assignToUser(userId, dto.roleId);
  }
  async removeFromUser(userId, roleId) {
    await this.rolesService.removeFromUser(userId, roleId);
  }
  async getUserRoles(userId) {
    const roles = await this.rolesService.getUserRoles(userId);
    return roles.map(RoleResponseDto.from);
  }
};
__decorateClass([
  Post5(),
  ApiOperation6({ summary: "Create a new role" }),
  ApiResponse6({ status: 201, description: "Role created", type: RoleResponseDto }),
  ApiResponse6({ status: 409, description: "Role name already exists" }),
  __decorateParam(0, Body6())
], RolesController.prototype, "create", 1);
__decorateClass([
  Get5(),
  ApiOperation6({ summary: "List all roles" }),
  ApiResponse6({ status: 200, description: "List of roles", type: [RoleResponseDto] })
], RolesController.prototype, "list", 1);
__decorateClass([
  Get5(":id"),
  ApiOperation6({ summary: "Get a role by ID" }),
  ApiParam5({ name: "id", description: "Role ID" }),
  ApiResponse6({ status: 200, description: "Role found", type: RoleResponseDto }),
  ApiResponse6({ status: 404, description: "Role not found" }),
  __decorateParam(0, Param5("id"))
], RolesController.prototype, "findOne", 1);
__decorateClass([
  Delete3(":id"),
  HttpCode5(HttpStatus5.NO_CONTENT),
  ApiOperation6({ summary: "Delete a role" }),
  ApiParam5({ name: "id", description: "Role ID" }),
  ApiResponse6({ status: 204, description: "Role deleted" }),
  ApiResponse6({ status: 404, description: "Role not found" }),
  __decorateParam(0, Param5("id"))
], RolesController.prototype, "remove", 1);
__decorateClass([
  Post5("users/:userId/assign"),
  ApiOperation6({ summary: "Assign a role to a user" }),
  ApiParam5({ name: "userId", description: "User ID" }),
  ApiResponse6({ status: 201, description: "Role assigned" }),
  ApiResponse6({ status: 404, description: "Role not found" }),
  __decorateParam(0, Param5("userId")),
  __decorateParam(1, Body6())
], RolesController.prototype, "assignToUser", 1);
__decorateClass([
  Delete3("users/:userId/assign/:roleId"),
  HttpCode5(HttpStatus5.NO_CONTENT),
  ApiOperation6({ summary: "Remove a role from a user" }),
  ApiParam5({ name: "userId", description: "User ID" }),
  ApiParam5({ name: "roleId", description: "Role ID" }),
  ApiResponse6({ status: 204, description: "Role removed from user" }),
  __decorateParam(0, Param5("userId")),
  __decorateParam(1, Param5("roleId"))
], RolesController.prototype, "removeFromUser", 1);
__decorateClass([
  Get5("users/:userId"),
  ApiOperation6({ summary: "Get all roles for a user" }),
  ApiParam5({ name: "userId", description: "User ID" }),
  ApiResponse6({ status: 200, description: "User roles", type: [RoleResponseDto] }),
  __decorateParam(0, Param5("userId"))
], RolesController.prototype, "getUserRoles", 1);
RolesController = __decorateClass([
  ApiTags6("roles"),
  ApiBearerAuth5(),
  UseGuards5(JwtAuthGuard),
  Controller6("roles")
], RolesController);

// src/roles/roles.service.ts
import { ConflictException as ConflictException3, Inject as Inject7, Injectable as Injectable10, NotFoundException as NotFoundException4 } from "@nestjs/common";
var RolesService = class {
  constructor(adapter) {
    this.adapter = adapter;
  }
  async create(dto) {
    const existing = await this.adapter.findRoleByName(dto.name);
    if (existing) throw new ConflictException3("Role name already exists");
    return this.adapter.createRole(dto);
  }
  async findById(id) {
    const role = await this.adapter.findRoleById(id);
    if (!role) throw new NotFoundException4("Role not found");
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
RolesService = __decorateClass([
  Injectable10(),
  __decorateParam(0, Inject7(ADAPTIV_AUTH_ADAPTER))
], RolesService);

// src/roles/roles.module.ts
var RolesModule = class {
};
RolesModule = __decorateClass([
  Module6({
    controllers: [RolesController],
    providers: [RolesService, JwtAuthGuard],
    exports: [RolesService]
  })
], RolesModule);

// src/adaptiv-auth.module.ts
function createCoreProviders(options) {
  return [
    { provide: ADAPTIV_AUTH_OPTIONS, useValue: options },
    { provide: ADAPTIV_AUTH_ADAPTER, useValue: options.adapter }
  ];
}
var AdaptivAuthModule = class {
  static register(options) {
    const coreProviders = createCoreProviders(options);
    return {
      module: AdaptivAuthModule,
      global: true,
      imports: [
        AuthModule,
        UsersModule,
        ProfilesModule,
        RolesModule,
        PermissionsModule,
        PasswordRecoveryModule
      ],
      providers: coreProviders,
      exports: coreProviders
    };
  }
  static registerAsync(asyncOptions) {
    const optionsProvider = {
      provide: ADAPTIV_AUTH_OPTIONS,
      useFactory: asyncOptions.useFactory,
      inject: asyncOptions.inject ?? []
    };
    const adapterProvider = {
      provide: ADAPTIV_AUTH_ADAPTER,
      useFactory: (options) => options.adapter,
      inject: [ADAPTIV_AUTH_OPTIONS]
    };
    return {
      module: AdaptivAuthModule,
      global: true,
      imports: [
        ...asyncOptions.imports ?? [],
        AuthModule,
        UsersModule,
        ProfilesModule,
        RolesModule,
        PermissionsModule,
        PasswordRecoveryModule
      ],
      providers: [optionsProvider, adapterProvider],
      exports: [optionsProvider, adapterProvider]
    };
  }
};
AdaptivAuthModule = __decorateClass([
  Module7({})
], AdaptivAuthModule);

// src/adapter/prisma/prisma-auth.adapter.ts
function toUserRecord(u) {
  return {
    id: u.id,
    email: u.email,
    username: u.username,
    passwordHash: u.passwordHash,
    isActive: u.isActive,
    createdAt: u.createdAt,
    updatedAt: u.updatedAt
  };
}
function toProfileRecord(p) {
  return {
    id: p.id,
    userId: p.userId,
    firstName: p.firstName,
    lastName: p.lastName,
    avatarUrl: p.avatarUrl,
    metadata: p.metadata ?? {},
    createdAt: p.createdAt,
    updatedAt: p.updatedAt
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
    createdAt: r.createdAt
  };
}
function toPasswordResetTokenRecord(r) {
  return {
    id: r.id,
    token: r.token,
    userId: r.userId,
    expiresAt: r.expiresAt,
    usedAt: r.usedAt,
    createdAt: r.createdAt
  };
}
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var PrismaAuthAdapter = class {
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
        isActive: data.isActive ?? true
      }
    });
    return toUserRecord(user);
  }
  async updateUser(id, data) {
    const user = await this.prisma.user.update({
      where: { id },
      data: {
        ...data.email !== void 0 && { email: data.email },
        ...data.username !== void 0 && { username: data.username },
        ...data.isActive !== void 0 && { isActive: data.isActive }
      }
    });
    return toUserRecord(user);
  }
  async deleteUser(id) {
    await this.prisma.user.delete({ where: { id } });
  }
  async listUsers(opts) {
    const skip = opts.skip ?? 0;
    const take = opts.take ?? 20;
    const where = opts.search ? {
      OR: [
        { email: { contains: opts.search, mode: "insensitive" } },
        { username: { contains: opts.search, mode: "insensitive" } }
      ]
    } : void 0;
    const [users, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({ where, skip, take, orderBy: { createdAt: "desc" } }),
      this.prisma.user.count({ where })
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
        metadata: data.metadata ?? {}
      },
      update: {
        ...data.firstName !== void 0 && { firstName: data.firstName },
        ...data.lastName !== void 0 && { lastName: data.lastName },
        ...data.avatarUrl !== void 0 && { avatarUrl: data.avatarUrl },
        ...data.metadata !== void 0 && { metadata: data.metadata }
      }
    });
    return toProfileRecord(profile);
  }
  // ---- Roles ----
  async createRole(data) {
    const role = await this.prisma.role.create({
      data: { name: data.name, description: data.description ?? null }
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
    const roles = await this.prisma.role.findMany({ orderBy: { name: "asc" } });
    return roles.map(toRoleRecord);
  }
  async deleteRole(id) {
    await this.prisma.role.delete({ where: { id } });
  }
  async assignRoleToUser(userId, roleId) {
    await this.prisma.userRole.upsert({
      where: { userId_roleId: { userId, roleId } },
      create: { userId, roleId },
      update: {}
    });
  }
  async removeRoleFromUser(userId, roleId) {
    await this.prisma.userRole.delete({
      where: { userId_roleId: { userId, roleId } }
    });
  }
  async getUserRoles(userId) {
    const userRoles = await this.prisma.userRole.findMany({
      where: { userId },
      include: { role: true }
    });
    return userRoles.map(
      (ur) => toRoleRecord(ur.role)
    );
  }
  // ---- Permissions ----
  async createPermission(data) {
    const permission = await this.prisma.permission.create({
      data: { key: data.key, description: data.description ?? null }
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
    const permissions = await this.prisma.permission.findMany({ orderBy: { key: "asc" } });
    return permissions.map(toPermissionRecord);
  }
  async deletePermission(id) {
    await this.prisma.permission.delete({ where: { id } });
  }
  async assignPermissionToRole(roleId, permissionId) {
    await this.prisma.rolePermission.upsert({
      where: { roleId_permissionId: { roleId, permissionId } },
      create: { roleId, permissionId },
      update: {}
    });
  }
  async removePermissionFromRole(roleId, permissionId) {
    await this.prisma.rolePermission.delete({
      where: { roleId_permissionId: { roleId, permissionId } }
    });
  }
  async getRolePermissions(roleId) {
    const rolePermissions = await this.prisma.rolePermission.findMany({
      where: { roleId },
      include: { permission: true }
    });
    return rolePermissions.map(
      (rp) => toPermissionRecord(rp.permission)
    );
  }
  async getUserPermissions(userId) {
    const userRoles = await this.prisma.userRole.findMany({
      where: { userId },
      include: {
        role: {
          include: {
            permissions: { include: { permission: true } }
          }
        }
      }
    });
    const seen = /* @__PURE__ */ new Set();
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
      data: { token: data.token, userId: data.userId, expiresAt: data.expiresAt }
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
      data: { revokedAt: /* @__PURE__ */ new Date() }
    });
  }
  async revokeAllRefreshTokensForUser(userId) {
    await this.prisma.refreshToken.updateMany({
      where: { userId, revokedAt: null },
      data: { revokedAt: /* @__PURE__ */ new Date() }
    });
  }
  async deleteExpiredRefreshTokens() {
    await this.prisma.refreshToken.deleteMany({
      where: { expiresAt: { lt: /* @__PURE__ */ new Date() } }
    });
  }
  // ---- Password Reset ----
  async createPasswordResetToken(data) {
    const prt = await this.prisma.passwordResetToken.create({
      data: { token: data.token, userId: data.userId, expiresAt: data.expiresAt }
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
      data: { usedAt: /* @__PURE__ */ new Date() }
    });
  }
  async deleteExpiredPasswordResetTokens() {
    await this.prisma.passwordResetToken.deleteMany({
      where: { expiresAt: { lt: /* @__PURE__ */ new Date() } }
    });
  }
};

// src/adapter/prisma/prisma.service.ts
import { Injectable as Injectable11 } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
var PrismaService = class extends PrismaClient {
  async onModuleInit() {
    await this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
};
PrismaService = __decorateClass([
  Injectable11()
], PrismaService);

// src/adapter/prisma/prisma-auth.module.ts
import { Module as Module8 } from "@nestjs/common";
var PrismaAuthModule = class {
};
PrismaAuthModule = __decorateClass([
  Module8({
    providers: [PrismaService],
    exports: [PrismaService]
  })
], PrismaAuthModule);

// src/guards/permissions.guard.ts
import { ForbiddenException, Injectable as Injectable12 } from "@nestjs/common";
var PermissionsGuard = class {
  constructor(reflector) {
    this.reflector = reflector;
  }
  canActivate(context) {
    const required = this.reflector.getAllAndOverride(REQUIRED_PERMISSIONS_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    if (!required || required.length === 0) return true;
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user) return false;
    const userPermissions = new Set(user.permissions);
    const hasAll = required.every((p) => userPermissions.has(p));
    if (!hasAll) {
      throw new ForbiddenException("Insufficient permissions");
    }
    return true;
  }
};
PermissionsGuard = __decorateClass([
  Injectable12()
], PermissionsGuard);

// src/guards/roles.guard.ts
import { ForbiddenException as ForbiddenException2, Injectable as Injectable13 } from "@nestjs/common";
var RolesGuard = class {
  constructor(reflector) {
    this.reflector = reflector;
  }
  canActivate(context) {
    const required = this.reflector.getAllAndOverride(REQUIRED_ROLES_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    if (!required || required.length === 0) return true;
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user) return false;
    const userRoles = new Set(user.roles);
    const hasAny = required.some((r) => userRoles.has(r));
    if (!hasAny) {
      throw new ForbiddenException2("Insufficient role");
    }
    return true;
  }
};
RolesGuard = __decorateClass([
  Injectable13()
], RolesGuard);

// src/decorators/require-permissions.decorator.ts
import { SetMetadata as SetMetadata2 } from "@nestjs/common";
var RequirePermissions = (...permissions) => SetMetadata2(REQUIRED_PERMISSIONS_KEY, permissions);

// src/decorators/require-roles.decorator.ts
import { SetMetadata as SetMetadata3 } from "@nestjs/common";
var RequireRoles = (...roles) => SetMetadata3(REQUIRED_ROLES_KEY, roles);

// src/auth/dto/login.dto.ts
import { ApiProperty as ApiProperty6 } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
var LoginDto = class {
};
__decorateClass([
  ApiProperty6({
    description: "Email address or username",
    example: "john@example.com"
  }),
  IsString(),
  IsNotEmpty()
], LoginDto.prototype, "identifier", 2);
__decorateClass([
  ApiProperty6({ description: "Account password", example: "S3cret!Pass" }),
  IsString(),
  IsNotEmpty()
], LoginDto.prototype, "password", 2);

// src/auth/dto/refresh-token.dto.ts
import { ApiProperty as ApiProperty7 } from "@nestjs/swagger";
import { IsNotEmpty as IsNotEmpty2, IsString as IsString2 } from "class-validator";
var RefreshTokenDto = class {
};
__decorateClass([
  ApiProperty7({ description: "The refresh token issued at login", example: "abc123..." }),
  IsString2(),
  IsNotEmpty2()
], RefreshTokenDto.prototype, "refreshToken", 2);

// src/users/dto/create-user.dto.ts
import { ApiProperty as ApiProperty8, ApiPropertyOptional as ApiPropertyOptional5 } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty as IsNotEmpty3, IsOptional, IsString as IsString3, MinLength } from "class-validator";
var CreateUserDto = class {
};
__decorateClass([
  ApiProperty8({ description: "User email address", example: "john@example.com" }),
  IsEmail()
], CreateUserDto.prototype, "email", 2);
__decorateClass([
  ApiPropertyOptional5({ description: "Unique username", example: "johndoe" }),
  IsOptional(),
  IsString3()
], CreateUserDto.prototype, "username", 2);
__decorateClass([
  ApiProperty8({ description: "Plain-text password (will be hashed)", example: "S3cret!Pass" }),
  IsString3(),
  IsNotEmpty3(),
  MinLength(8)
], CreateUserDto.prototype, "password", 2);

// src/users/dto/update-user.dto.ts
import { ApiPropertyOptional as ApiPropertyOptional6 } from "@nestjs/swagger";
import { IsBoolean, IsEmail as IsEmail2, IsOptional as IsOptional2, IsString as IsString4 } from "class-validator";
var UpdateUserDto = class {
};
__decorateClass([
  ApiPropertyOptional6({ description: "New email address", example: "new@example.com" }),
  IsOptional2(),
  IsEmail2()
], UpdateUserDto.prototype, "email", 2);
__decorateClass([
  ApiPropertyOptional6({ description: "New username", example: "janedoe" }),
  IsOptional2(),
  IsString4()
], UpdateUserDto.prototype, "username", 2);
__decorateClass([
  ApiPropertyOptional6({ description: "Whether the account is active", example: true }),
  IsOptional2(),
  IsBoolean()
], UpdateUserDto.prototype, "isActive", 2);

// src/users/dto/list-users-query.dto.ts
import { ApiPropertyOptional as ApiPropertyOptional7 } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsOptional as IsOptional3, IsString as IsString5, Min } from "class-validator";
var ListUsersQueryDto = class {
};
__decorateClass([
  ApiPropertyOptional7({ description: "Number of records to skip", example: 0, default: 0 }),
  IsOptional3(),
  Type(() => Number),
  IsInt(),
  Min(0)
], ListUsersQueryDto.prototype, "skip", 2);
__decorateClass([
  ApiPropertyOptional7({ description: "Number of records to return", example: 20, default: 20 }),
  IsOptional3(),
  Type(() => Number),
  IsInt(),
  Min(1)
], ListUsersQueryDto.prototype, "take", 2);
__decorateClass([
  ApiPropertyOptional7({ description: "Search by email or username", example: "john" }),
  IsOptional3(),
  IsString5()
], ListUsersQueryDto.prototype, "search", 2);

// src/profiles/dto/update-profile.dto.ts
import { ApiPropertyOptional as ApiPropertyOptional8 } from "@nestjs/swagger";
import { IsOptional as IsOptional4, IsString as IsString6, IsUrl } from "class-validator";
var UpdateProfileDto = class {
};
__decorateClass([
  ApiPropertyOptional8({ description: "First name", example: "John" }),
  IsOptional4(),
  IsString6()
], UpdateProfileDto.prototype, "firstName", 2);
__decorateClass([
  ApiPropertyOptional8({ description: "Last name", example: "Doe" }),
  IsOptional4(),
  IsString6()
], UpdateProfileDto.prototype, "lastName", 2);
__decorateClass([
  ApiPropertyOptional8({ description: "Avatar URL", example: "https://example.com/avatar.png" }),
  IsOptional4(),
  IsUrl()
], UpdateProfileDto.prototype, "avatarUrl", 2);
__decorateClass([
  ApiPropertyOptional8({
    description: "Arbitrary key-value metadata for extensibility",
    example: { bio: "Developer", timezone: "UTC" }
  }),
  IsOptional4()
], UpdateProfileDto.prototype, "metadata", 2);

// src/roles/dto/create-role.dto.ts
import { ApiProperty as ApiProperty9, ApiPropertyOptional as ApiPropertyOptional9 } from "@nestjs/swagger";
import { IsNotEmpty as IsNotEmpty4, IsOptional as IsOptional5, IsString as IsString7 } from "class-validator";
var CreateRoleDto = class {
};
__decorateClass([
  ApiProperty9({ description: "Unique role name", example: "admin" }),
  IsString7(),
  IsNotEmpty4()
], CreateRoleDto.prototype, "name", 2);
__decorateClass([
  ApiPropertyOptional9({ description: "Role description", example: "Full system access" }),
  IsOptional5(),
  IsString7()
], CreateRoleDto.prototype, "description", 2);

// src/roles/dto/assign-role.dto.ts
import { ApiProperty as ApiProperty10 } from "@nestjs/swagger";
import { IsNotEmpty as IsNotEmpty5, IsString as IsString8 } from "class-validator";
var AssignRoleDto = class {
};
__decorateClass([
  ApiProperty10({ description: "ID of the role to assign", example: "clxyz456" }),
  IsString8(),
  IsNotEmpty5()
], AssignRoleDto.prototype, "roleId", 2);

// src/permissions/dto/create-permission.dto.ts
import { ApiProperty as ApiProperty11, ApiPropertyOptional as ApiPropertyOptional10 } from "@nestjs/swagger";
import { IsNotEmpty as IsNotEmpty6, IsOptional as IsOptional6, IsString as IsString9, Matches } from "class-validator";
var CreatePermissionDto = class {
};
__decorateClass([
  ApiProperty11({
    description: 'Permission key in "resource:action" format',
    example: "posts:create"
  }),
  IsString9(),
  IsNotEmpty6(),
  Matches(/^[a-z0-9_-]+:[a-z0-9_-]+$/, {
    message: 'Permission key must follow the "resource:action" format'
  })
], CreatePermissionDto.prototype, "key", 2);
__decorateClass([
  ApiPropertyOptional10({ description: "Permission description", example: "Create new posts" }),
  IsOptional6(),
  IsString9()
], CreatePermissionDto.prototype, "description", 2);

// src/permissions/dto/assign-permission.dto.ts
import { ApiProperty as ApiProperty12 } from "@nestjs/swagger";
import { IsNotEmpty as IsNotEmpty7, IsString as IsString10 } from "class-validator";
var AssignPermissionDto = class {
};
__decorateClass([
  ApiProperty12({ description: "ID of the permission to assign", example: "clxyz789" }),
  IsString10(),
  IsNotEmpty7()
], AssignPermissionDto.prototype, "permissionId", 2);

// src/password-recovery/dto/forgot-password.dto.ts
import { ApiProperty as ApiProperty13 } from "@nestjs/swagger";
import { IsEmail as IsEmail3 } from "class-validator";
var ForgotPasswordDto = class {
};
__decorateClass([
  ApiProperty13({ description: "Email address to send the reset link to", example: "john@example.com" }),
  IsEmail3()
], ForgotPasswordDto.prototype, "email", 2);

// src/password-recovery/dto/reset-password.dto.ts
import { ApiProperty as ApiProperty14 } from "@nestjs/swagger";
import { IsNotEmpty as IsNotEmpty8, IsString as IsString11, MinLength as MinLength2 } from "class-validator";
var ResetPasswordDto = class {
};
__decorateClass([
  ApiProperty14({ description: "The password reset token received via email", example: "abc123..." }),
  IsString11(),
  IsNotEmpty8()
], ResetPasswordDto.prototype, "token", 2);
__decorateClass([
  ApiProperty14({ description: "The new password", example: "N3wS3cret!" }),
  IsString11(),
  IsNotEmpty8(),
  MinLength2(8)
], ResetPasswordDto.prototype, "newPassword", 2);

// src/swagger.ts
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
function setupAdaptivAuthSwagger(app, options) {
  const title = options?.title ?? "AdaptivAuth API";
  const version = options?.version ?? "1.0";
  const bearerName = options?.bearerName ?? "bearer";
  const path = options?.path ?? "api";
  const config = new DocumentBuilder().setTitle(title).setVersion(version).addBearerAuth(
    { type: "http", scheme: "bearer", bearerFormat: "JWT" },
    bearerName
  ).build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(path, app, document);
}
export {
  ADAPTIV_AUTH_ADAPTER,
  ADAPTIV_AUTH_OPTIONS,
  AdaptivAuthModule,
  AssignPermissionDto,
  AssignRoleDto,
  AuthService,
  CreatePermissionDto,
  CreateRoleDto,
  CreateUserDto,
  CurrentUser,
  ForgotPasswordDto,
  IS_PUBLIC_KEY,
  JwtAuthGuard,
  ListUsersQueryDto,
  LocalAuthGuard,
  LoginDto,
  PaginatedUsersResponseDto,
  PasswordRecoveryService,
  PermissionResponseDto,
  PermissionsGuard,
  PermissionsService,
  PrismaAuthAdapter,
  PrismaAuthModule,
  PrismaService,
  ProfileResponseDto,
  ProfilesService,
  Public,
  REQUIRED_PERMISSIONS_KEY,
  REQUIRED_ROLES_KEY,
  RefreshResponseDto,
  RefreshTokenDto,
  RequirePermissions,
  RequireRoles,
  ResetPasswordDto,
  RoleResponseDto,
  RolesGuard,
  RolesService,
  TokenResponseDto,
  UpdateProfileDto,
  UpdateUserDto,
  UserResponseDto,
  UsersService,
  setupAdaptivAuthSwagger
};
//# sourceMappingURL=index.mjs.map