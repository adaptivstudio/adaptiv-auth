"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ADAPTIV_AUTH_ADAPTER: () => ADAPTIV_AUTH_ADAPTER,
  ADAPTIV_AUTH_OPTIONS: () => ADAPTIV_AUTH_OPTIONS,
  AdaptivAuthModule: () => AdaptivAuthModule,
  AssignPermissionDto: () => AssignPermissionDto,
  AssignRoleDto: () => AssignRoleDto,
  AuthService: () => AuthService,
  CreatePermissionDto: () => CreatePermissionDto,
  CreateRoleDto: () => CreateRoleDto,
  CreateUserDto: () => CreateUserDto,
  CurrentUser: () => CurrentUser,
  ForgotPasswordDto: () => ForgotPasswordDto,
  IS_PUBLIC_KEY: () => IS_PUBLIC_KEY,
  JwtAuthGuard: () => JwtAuthGuard,
  ListUsersQueryDto: () => ListUsersQueryDto,
  LocalAuthGuard: () => LocalAuthGuard,
  LoginDto: () => LoginDto,
  PaginatedUsersResponseDto: () => PaginatedUsersResponseDto,
  PasswordRecoveryService: () => PasswordRecoveryService,
  PermissionResponseDto: () => PermissionResponseDto,
  PermissionsGuard: () => PermissionsGuard,
  PermissionsService: () => PermissionsService,
  PrismaAuthAdapter: () => PrismaAuthAdapter,
  PrismaAuthModule: () => PrismaAuthModule,
  PrismaService: () => PrismaService,
  ProfileResponseDto: () => ProfileResponseDto,
  ProfilesService: () => ProfilesService,
  Public: () => Public,
  REQUIRED_PERMISSIONS_KEY: () => REQUIRED_PERMISSIONS_KEY,
  REQUIRED_ROLES_KEY: () => REQUIRED_ROLES_KEY,
  RefreshResponseDto: () => RefreshResponseDto,
  RefreshTokenDto: () => RefreshTokenDto,
  RequirePermissions: () => RequirePermissions,
  RequireRoles: () => RequireRoles,
  ResetPasswordDto: () => ResetPasswordDto,
  RoleResponseDto: () => RoleResponseDto,
  RolesGuard: () => RolesGuard,
  RolesService: () => RolesService,
  TokenResponseDto: () => TokenResponseDto,
  UpdateProfileDto: () => UpdateProfileDto,
  UpdateUserDto: () => UpdateUserDto,
  UserResponseDto: () => UserResponseDto,
  UsersService: () => UsersService,
  setupAdaptivAuthSwagger: () => setupAdaptivAuthSwagger
});
module.exports = __toCommonJS(index_exports);

// src/adaptiv-auth.module.ts
var import_common25 = require("@nestjs/common");

// src/adaptiv-auth.constants.ts
var ADAPTIV_AUTH_OPTIONS = "ADAPTIV_AUTH_OPTIONS";
var ADAPTIV_AUTH_ADAPTER = "ADAPTIV_AUTH_ADAPTER";
var IS_PUBLIC_KEY = "adaptiv:isPublic";
var REQUIRED_PERMISSIONS_KEY = "adaptiv:requiredPermissions";
var REQUIRED_ROLES_KEY = "adaptiv:requiredRoles";

// src/auth/auth.module.ts
var import_common12 = require("@nestjs/common");
var import_jwt2 = require("@nestjs/jwt");
var import_passport5 = require("@nestjs/passport");

// src/users/users.module.ts
var import_common4 = require("@nestjs/common");

// src/users/users.controller.ts
var import_common2 = require("@nestjs/common");
var import_swagger3 = require("@nestjs/swagger");

// src/auth/guards/jwt-auth.guard.ts
var import_common = require("@nestjs/common");
var import_passport = require("@nestjs/passport");
var JwtAuthGuard = class extends (0, import_passport.AuthGuard)("jwt") {
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
  (0, import_common.Injectable)()
], JwtAuthGuard);

// src/users/dto/user-response.dto.ts
var import_swagger = require("@nestjs/swagger");
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
  (0, import_swagger.ApiProperty)({ description: "User ID", example: "clxyz123" })
], _UserResponseDto.prototype, "id", 2);
__decorateClass([
  (0, import_swagger.ApiProperty)({ description: "Email address", example: "john@example.com" })
], _UserResponseDto.prototype, "email", 2);
__decorateClass([
  (0, import_swagger.ApiPropertyOptional)({ description: "Username", example: "johndoe", nullable: true })
], _UserResponseDto.prototype, "username", 2);
__decorateClass([
  (0, import_swagger.ApiProperty)({ description: "Whether the account is active", example: true })
], _UserResponseDto.prototype, "isActive", 2);
__decorateClass([
  (0, import_swagger.ApiProperty)({ description: "Creation timestamp" })
], _UserResponseDto.prototype, "createdAt", 2);
__decorateClass([
  (0, import_swagger.ApiProperty)({ description: "Last update timestamp" })
], _UserResponseDto.prototype, "updatedAt", 2);
var UserResponseDto = _UserResponseDto;

// src/users/dto/paginated-users-response.dto.ts
var import_swagger2 = require("@nestjs/swagger");
var PaginatedUsersResponseDto = class {
};
__decorateClass([
  (0, import_swagger2.ApiProperty)({ type: () => [UserResponseDto] })
], PaginatedUsersResponseDto.prototype, "data", 2);
__decorateClass([
  (0, import_swagger2.ApiProperty)({ description: "Total number of matching users", example: 42 })
], PaginatedUsersResponseDto.prototype, "total", 2);
__decorateClass([
  (0, import_swagger2.ApiProperty)({ description: "Number of records skipped", example: 0 })
], PaginatedUsersResponseDto.prototype, "skip", 2);
__decorateClass([
  (0, import_swagger2.ApiProperty)({ description: "Number of records returned", example: 20 })
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
  (0, import_common2.Post)(),
  (0, import_swagger3.ApiOperation)({ summary: "Create a new user" }),
  (0, import_swagger3.ApiResponse)({ status: 201, description: "User created", type: () => UserResponseDto }),
  (0, import_swagger3.ApiResponse)({ status: 409, description: "Email or username already in use" }),
  __decorateParam(0, (0, import_common2.Body)())
], UsersController.prototype, "create", 1);
__decorateClass([
  (0, import_common2.Get)(),
  (0, import_swagger3.ApiOperation)({ summary: "List users with optional pagination and search" }),
  (0, import_swagger3.ApiResponse)({ status: 200, description: "Paginated user list", type: () => PaginatedUsersResponseDto }),
  __decorateParam(0, (0, import_common2.Query)())
], UsersController.prototype, "list", 1);
__decorateClass([
  (0, import_common2.Get)(":id"),
  (0, import_swagger3.ApiOperation)({ summary: "Get a user by ID" }),
  (0, import_swagger3.ApiParam)({ name: "id", description: "User ID" }),
  (0, import_swagger3.ApiResponse)({ status: 200, description: "User found", type: () => UserResponseDto }),
  (0, import_swagger3.ApiResponse)({ status: 404, description: "User not found" }),
  __decorateParam(0, (0, import_common2.Param)("id"))
], UsersController.prototype, "findOne", 1);
__decorateClass([
  (0, import_common2.Patch)(":id"),
  (0, import_swagger3.ApiOperation)({ summary: "Update a user" }),
  (0, import_swagger3.ApiParam)({ name: "id", description: "User ID" }),
  (0, import_swagger3.ApiResponse)({ status: 200, description: "User updated", type: () => UserResponseDto }),
  (0, import_swagger3.ApiResponse)({ status: 404, description: "User not found" }),
  __decorateParam(0, (0, import_common2.Param)("id")),
  __decorateParam(1, (0, import_common2.Body)())
], UsersController.prototype, "update", 1);
__decorateClass([
  (0, import_common2.Delete)(":id"),
  (0, import_common2.HttpCode)(import_common2.HttpStatus.NO_CONTENT),
  (0, import_swagger3.ApiOperation)({ summary: "Delete a user" }),
  (0, import_swagger3.ApiParam)({ name: "id", description: "User ID" }),
  (0, import_swagger3.ApiResponse)({ status: 204, description: "User deleted" }),
  (0, import_swagger3.ApiResponse)({ status: 404, description: "User not found" }),
  __decorateParam(0, (0, import_common2.Param)("id"))
], UsersController.prototype, "remove", 1);
UsersController = __decorateClass([
  (0, import_swagger3.ApiTags)("users"),
  (0, import_swagger3.ApiBearerAuth)(),
  (0, import_common2.UseGuards)(JwtAuthGuard),
  (0, import_common2.Controller)("users")
], UsersController);

// src/users/users.service.ts
var import_common3 = require("@nestjs/common");
var bcrypt = __toESM(require("bcryptjs"));
var BCRYPT_ROUNDS = 12;
var UsersService = class {
  constructor(adapter) {
    this.adapter = adapter;
  }
  async create(dto) {
    const existing = await this.adapter.findUserByEmail(dto.email);
    if (existing) {
      throw new import_common3.ConflictException("Email already in use");
    }
    if (dto.username) {
      const existingByUsername = await this.adapter.findUserByUsername(dto.username);
      if (existingByUsername) {
        throw new import_common3.ConflictException("Username already taken");
      }
    }
    const passwordHash = await bcrypt.hash(dto.password, BCRYPT_ROUNDS);
    return this.adapter.createUser({ email: dto.email, username: dto.username, passwordHash });
  }
  async findById(id) {
    const user = await this.adapter.findUserById(id);
    if (!user) throw new import_common3.NotFoundException("User not found");
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
  (0, import_common3.Injectable)(),
  __decorateParam(0, (0, import_common3.Inject)(ADAPTIV_AUTH_ADAPTER))
], UsersService);

// src/users/users.module.ts
var UsersModule = class {
};
UsersModule = __decorateClass([
  (0, import_common4.Module)({
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
  })
], UsersModule);

// src/auth/auth.controller.ts
var import_common8 = require("@nestjs/common");
var import_swagger5 = require("@nestjs/swagger");

// src/decorators/current-user.decorator.ts
var import_common5 = require("@nestjs/common");
var CurrentUser = (0, import_common5.createParamDecorator)(
  (_data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);

// src/decorators/public.decorator.ts
var import_common6 = require("@nestjs/common");
var Public = () => (0, import_common6.SetMetadata)(IS_PUBLIC_KEY, true);

// src/auth/dto/token-response.dto.ts
var import_swagger4 = require("@nestjs/swagger");
var TokenResponseDto = class {
};
__decorateClass([
  (0, import_swagger4.ApiProperty)({ description: "Short-lived JWT access token" })
], TokenResponseDto.prototype, "accessToken", 2);
__decorateClass([
  (0, import_swagger4.ApiProperty)({ description: "Long-lived opaque refresh token" })
], TokenResponseDto.prototype, "refreshToken", 2);
__decorateClass([
  (0, import_swagger4.ApiProperty)({ type: () => UserResponseDto, required: false })
], TokenResponseDto.prototype, "user", 2);
var RefreshResponseDto = class {
};
__decorateClass([
  (0, import_swagger4.ApiProperty)({ description: "New short-lived JWT access token" })
], RefreshResponseDto.prototype, "accessToken", 2);
__decorateClass([
  (0, import_swagger4.ApiProperty)({ description: "New long-lived opaque refresh token (rotated)" })
], RefreshResponseDto.prototype, "refreshToken", 2);

// src/auth/guards/local-auth.guard.ts
var import_common7 = require("@nestjs/common");
var import_passport2 = require("@nestjs/passport");
var LocalAuthGuard = class extends (0, import_passport2.AuthGuard)("local") {
};
LocalAuthGuard = __decorateClass([
  (0, import_common7.Injectable)()
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
  (0, import_common8.UseGuards)(LocalAuthGuard),
  (0, import_common8.Post)("login"),
  (0, import_common8.HttpCode)(import_common8.HttpStatus.OK),
  (0, import_swagger5.ApiOperation)({ summary: "Login with email/username and password" }),
  (0, import_swagger5.ApiResponse)({ status: 200, description: "Login successful", type: () => TokenResponseDto }),
  (0, import_swagger5.ApiResponse)({ status: 401, description: "Invalid credentials" }),
  __decorateParam(0, (0, import_common8.Body)()),
  __decorateParam(1, (0, import_common8.Request)())
], AuthController.prototype, "login", 1);
__decorateClass([
  Public(),
  (0, import_common8.Post)("refresh"),
  (0, import_common8.HttpCode)(import_common8.HttpStatus.OK),
  (0, import_swagger5.ApiOperation)({ summary: "Rotate a refresh token and obtain new token pair" }),
  (0, import_swagger5.ApiResponse)({ status: 200, description: "Tokens refreshed", type: () => RefreshResponseDto }),
  (0, import_swagger5.ApiResponse)({ status: 401, description: "Invalid or expired refresh token" }),
  __decorateParam(0, (0, import_common8.Body)())
], AuthController.prototype, "refresh", 1);
__decorateClass([
  (0, import_common8.UseGuards)(JwtAuthGuard),
  (0, import_common8.Post)("logout"),
  (0, import_common8.HttpCode)(import_common8.HttpStatus.NO_CONTENT),
  (0, import_swagger5.ApiBearerAuth)(),
  (0, import_swagger5.ApiOperation)({ summary: "Revoke a single refresh token" }),
  (0, import_swagger5.ApiResponse)({ status: 204, description: "Logged out" }),
  __decorateParam(0, (0, import_common8.Body)())
], AuthController.prototype, "logout", 1);
__decorateClass([
  (0, import_common8.UseGuards)(JwtAuthGuard),
  (0, import_common8.Post)("logout-all"),
  (0, import_common8.HttpCode)(import_common8.HttpStatus.NO_CONTENT),
  (0, import_swagger5.ApiBearerAuth)(),
  (0, import_swagger5.ApiOperation)({ summary: "Revoke all refresh tokens for the current user" }),
  (0, import_swagger5.ApiResponse)({ status: 204, description: "All sessions terminated" }),
  __decorateParam(0, CurrentUser())
], AuthController.prototype, "logoutAll", 1);
AuthController = __decorateClass([
  (0, import_swagger5.ApiTags)("auth"),
  (0, import_common8.Controller)("auth")
], AuthController);

// src/auth/auth.service.ts
var import_common9 = require("@nestjs/common");
var import_jwt = require("@nestjs/jwt");
var crypto = __toESM(require("crypto"));
var AuthService = class {
  constructor(adapter, options, jwtService, usersService) {
    this.adapter = adapter;
    this.options = options;
    this.jwtService = jwtService;
    this.usersService = usersService;
    this.refreshJwtService = new import_jwt.JwtService({ secret: options.jwt.refreshSecret });
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
      throw new import_common9.UnauthorizedException("Invalid or expired refresh token");
    }
    const user = await this.adapter.findUserById(record.userId);
    if (!user || !user.isActive) {
      throw new import_common9.UnauthorizedException("User not found or inactive");
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
  (0, import_common9.Injectable)(),
  __decorateParam(0, (0, import_common9.Inject)(ADAPTIV_AUTH_ADAPTER)),
  __decorateParam(1, (0, import_common9.Inject)(ADAPTIV_AUTH_OPTIONS))
], AuthService);

// src/auth/strategies/jwt.strategy.ts
var import_common10 = require("@nestjs/common");
var import_passport3 = require("@nestjs/passport");
var import_passport_jwt = require("passport-jwt");
var JwtStrategy = class extends (0, import_passport3.PassportStrategy)(import_passport_jwt.Strategy) {
  constructor(options) {
    super({
      jwtFromRequest: import_passport_jwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: options.jwt.accessSecret
    });
  }
  validate(payload) {
    return payload;
  }
};
JwtStrategy = __decorateClass([
  (0, import_common10.Injectable)(),
  __decorateParam(0, (0, import_common10.Inject)(ADAPTIV_AUTH_OPTIONS))
], JwtStrategy);

// src/auth/strategies/local.strategy.ts
var import_common11 = require("@nestjs/common");
var import_passport4 = require("@nestjs/passport");
var import_passport_local = require("passport-local");
var LocalStrategy = class extends (0, import_passport4.PassportStrategy)(import_passport_local.Strategy) {
  constructor(authService) {
    super({ usernameField: "identifier" });
    this.authService = authService;
  }
  async validate(identifier, password) {
    const user = await this.authService.validateUser(identifier, password);
    if (!user) {
      throw new import_common11.UnauthorizedException("Invalid credentials");
    }
    return user;
  }
};
LocalStrategy = __decorateClass([
  (0, import_common11.Injectable)()
], LocalStrategy);

// src/auth/auth.module.ts
var AuthModule = class {
};
AuthModule = __decorateClass([
  (0, import_common12.Module)({
    imports: [
      UsersModule,
      import_passport5.PassportModule,
      import_jwt2.JwtModule.registerAsync({
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
var import_common15 = require("@nestjs/common");

// src/password-recovery/password-recovery.controller.ts
var import_common13 = require("@nestjs/common");
var import_swagger6 = require("@nestjs/swagger");
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
  (0, import_common13.Post)("forgot-password"),
  (0, import_common13.HttpCode)(import_common13.HttpStatus.OK),
  (0, import_swagger6.ApiOperation)({ summary: "Request a password reset email" }),
  (0, import_swagger6.ApiResponse)({
    status: 200,
    description: "If the email exists a reset link is sent (always returns 200 to avoid enumeration)"
  }),
  __decorateParam(0, (0, import_common13.Body)())
], PasswordRecoveryController.prototype, "forgotPassword", 1);
__decorateClass([
  Public(),
  (0, import_common13.Get)("reset-password/:token"),
  (0, import_swagger6.ApiOperation)({ summary: "Validate a password reset token" }),
  (0, import_swagger6.ApiParam)({ name: "token", description: "Password reset token" }),
  (0, import_swagger6.ApiResponse)({ status: 200, description: "Token is valid" }),
  (0, import_swagger6.ApiResponse)({ status: 400, description: "Token is invalid or expired" }),
  __decorateParam(0, (0, import_common13.Param)("token"))
], PasswordRecoveryController.prototype, "validateToken", 1);
__decorateClass([
  Public(),
  (0, import_common13.Post)("reset-password"),
  (0, import_common13.HttpCode)(import_common13.HttpStatus.OK),
  (0, import_swagger6.ApiOperation)({ summary: "Reset password using a valid token" }),
  (0, import_swagger6.ApiResponse)({ status: 200, description: "Password reset successfully" }),
  (0, import_swagger6.ApiResponse)({ status: 400, description: "Invalid or expired token" }),
  __decorateParam(0, (0, import_common13.Body)())
], PasswordRecoveryController.prototype, "resetPassword", 1);
PasswordRecoveryController = __decorateClass([
  (0, import_swagger6.ApiTags)("password-recovery"),
  (0, import_common13.Controller)("auth")
], PasswordRecoveryController);

// src/password-recovery/password-recovery.service.ts
var import_common14 = require("@nestjs/common");
var bcrypt2 = __toESM(require("bcryptjs"));
var crypto2 = __toESM(require("crypto"));
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
      throw new import_common14.BadRequestException("Invalid or expired reset token");
    }
    const passwordHash = await bcrypt2.hash(newPassword, BCRYPT_ROUNDS2);
    await this.adapter.setUserPassword(record.userId, passwordHash);
    await this.adapter.consumePasswordResetToken(token);
    await this.adapter.revokeAllRefreshTokensForUser(record.userId);
  }
};
PasswordRecoveryService = __decorateClass([
  (0, import_common14.Injectable)(),
  __decorateParam(0, (0, import_common14.Inject)(ADAPTIV_AUTH_ADAPTER)),
  __decorateParam(1, (0, import_common14.Inject)(ADAPTIV_AUTH_OPTIONS))
], PasswordRecoveryService);

// src/password-recovery/password-recovery.module.ts
var PasswordRecoveryModule = class {
};
PasswordRecoveryModule = __decorateClass([
  (0, import_common15.Module)({
    controllers: [PasswordRecoveryController],
    providers: [PasswordRecoveryService],
    exports: [PasswordRecoveryService]
  })
], PasswordRecoveryModule);

// src/permissions/permissions.module.ts
var import_common18 = require("@nestjs/common");

// src/permissions/permissions.controller.ts
var import_common16 = require("@nestjs/common");
var import_swagger8 = require("@nestjs/swagger");

// src/permissions/dto/permission-response.dto.ts
var import_swagger7 = require("@nestjs/swagger");
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
  (0, import_swagger7.ApiProperty)({ description: "Permission ID", example: "clxyz789" })
], _PermissionResponseDto.prototype, "id", 2);
__decorateClass([
  (0, import_swagger7.ApiProperty)({ description: "Permission key", example: "posts:create" })
], _PermissionResponseDto.prototype, "key", 2);
__decorateClass([
  (0, import_swagger7.ApiPropertyOptional)({ description: "Permission description", example: "Create new posts", nullable: true })
], _PermissionResponseDto.prototype, "description", 2);
__decorateClass([
  (0, import_swagger7.ApiProperty)({ description: "Creation timestamp" })
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
  (0, import_common16.Post)(),
  (0, import_swagger8.ApiOperation)({ summary: "Create a new permission" }),
  (0, import_swagger8.ApiResponse)({ status: 201, description: "Permission created", type: () => PermissionResponseDto }),
  (0, import_swagger8.ApiResponse)({ status: 409, description: "Permission key already exists" }),
  __decorateParam(0, (0, import_common16.Body)())
], PermissionsController.prototype, "create", 1);
__decorateClass([
  (0, import_common16.Get)(),
  (0, import_swagger8.ApiOperation)({ summary: "List all permissions" }),
  (0, import_swagger8.ApiResponse)({ status: 200, description: "List of permissions", type: () => [PermissionResponseDto] })
], PermissionsController.prototype, "list", 1);
__decorateClass([
  (0, import_common16.Get)(":id"),
  (0, import_swagger8.ApiOperation)({ summary: "Get a permission by ID" }),
  (0, import_swagger8.ApiParam)({ name: "id", description: "Permission ID" }),
  (0, import_swagger8.ApiResponse)({ status: 200, description: "Permission found", type: () => PermissionResponseDto }),
  (0, import_swagger8.ApiResponse)({ status: 404, description: "Permission not found" }),
  __decorateParam(0, (0, import_common16.Param)("id"))
], PermissionsController.prototype, "findOne", 1);
__decorateClass([
  (0, import_common16.Delete)(":id"),
  (0, import_common16.HttpCode)(import_common16.HttpStatus.NO_CONTENT),
  (0, import_swagger8.ApiOperation)({ summary: "Delete a permission" }),
  (0, import_swagger8.ApiParam)({ name: "id", description: "Permission ID" }),
  (0, import_swagger8.ApiResponse)({ status: 204, description: "Permission deleted" }),
  (0, import_swagger8.ApiResponse)({ status: 404, description: "Permission not found" }),
  __decorateParam(0, (0, import_common16.Param)("id"))
], PermissionsController.prototype, "remove", 1);
__decorateClass([
  (0, import_common16.Post)("roles/:roleId/assign"),
  (0, import_swagger8.ApiOperation)({ summary: "Assign a permission to a role" }),
  (0, import_swagger8.ApiParam)({ name: "roleId", description: "Role ID" }),
  (0, import_swagger8.ApiResponse)({ status: 201, description: "Permission assigned to role" }),
  (0, import_swagger8.ApiResponse)({ status: 404, description: "Permission not found" }),
  __decorateParam(0, (0, import_common16.Param)("roleId")),
  __decorateParam(1, (0, import_common16.Body)())
], PermissionsController.prototype, "assignToRole", 1);
__decorateClass([
  (0, import_common16.Delete)("roles/:roleId/assign/:permissionId"),
  (0, import_common16.HttpCode)(import_common16.HttpStatus.NO_CONTENT),
  (0, import_swagger8.ApiOperation)({ summary: "Remove a permission from a role" }),
  (0, import_swagger8.ApiParam)({ name: "roleId", description: "Role ID" }),
  (0, import_swagger8.ApiParam)({ name: "permissionId", description: "Permission ID" }),
  (0, import_swagger8.ApiResponse)({ status: 204, description: "Permission removed from role" }),
  __decorateParam(0, (0, import_common16.Param)("roleId")),
  __decorateParam(1, (0, import_common16.Param)("permissionId"))
], PermissionsController.prototype, "removeFromRole", 1);
__decorateClass([
  (0, import_common16.Get)("roles/:roleId"),
  (0, import_swagger8.ApiOperation)({ summary: "Get all permissions for a role" }),
  (0, import_swagger8.ApiParam)({ name: "roleId", description: "Role ID" }),
  (0, import_swagger8.ApiResponse)({ status: 200, description: "Role permissions", type: () => [PermissionResponseDto] }),
  __decorateParam(0, (0, import_common16.Param)("roleId"))
], PermissionsController.prototype, "getRolePermissions", 1);
__decorateClass([
  (0, import_common16.Get)("users/:userId"),
  (0, import_swagger8.ApiOperation)({ summary: "Get all resolved permissions for a user (across all roles)" }),
  (0, import_swagger8.ApiParam)({ name: "userId", description: "User ID" }),
  (0, import_swagger8.ApiResponse)({ status: 200, description: "User permissions", type: () => [PermissionResponseDto] }),
  __decorateParam(0, (0, import_common16.Param)("userId"))
], PermissionsController.prototype, "getUserPermissions", 1);
PermissionsController = __decorateClass([
  (0, import_swagger8.ApiTags)("permissions"),
  (0, import_swagger8.ApiBearerAuth)(),
  (0, import_common16.UseGuards)(JwtAuthGuard),
  (0, import_common16.Controller)("permissions")
], PermissionsController);

// src/permissions/permissions.service.ts
var import_common17 = require("@nestjs/common");
var PermissionsService = class {
  constructor(adapter) {
    this.adapter = adapter;
  }
  async create(dto) {
    const existing = await this.adapter.findPermissionByKey(dto.key);
    if (existing) throw new import_common17.ConflictException("Permission key already exists");
    return this.adapter.createPermission(dto);
  }
  async findById(id) {
    const permission = await this.adapter.findPermissionById(id);
    if (!permission) throw new import_common17.NotFoundException("Permission not found");
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
  (0, import_common17.Injectable)(),
  __decorateParam(0, (0, import_common17.Inject)(ADAPTIV_AUTH_ADAPTER))
], PermissionsService);

// src/permissions/permissions.module.ts
var PermissionsModule = class {
};
PermissionsModule = __decorateClass([
  (0, import_common18.Module)({
    controllers: [PermissionsController],
    providers: [PermissionsService, JwtAuthGuard],
    exports: [PermissionsService]
  })
], PermissionsModule);

// src/profiles/profiles.module.ts
var import_common21 = require("@nestjs/common");

// src/profiles/profiles.controller.ts
var import_common19 = require("@nestjs/common");
var import_swagger10 = require("@nestjs/swagger");

// src/profiles/dto/profile-response.dto.ts
var import_swagger9 = require("@nestjs/swagger");
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
  (0, import_swagger9.ApiProperty)({ description: "Profile ID", example: "clxyzabc" })
], _ProfileResponseDto.prototype, "id", 2);
__decorateClass([
  (0, import_swagger9.ApiProperty)({ description: "User ID this profile belongs to", example: "clxyz123" })
], _ProfileResponseDto.prototype, "userId", 2);
__decorateClass([
  (0, import_swagger9.ApiPropertyOptional)({ description: "First name", example: "John", nullable: true })
], _ProfileResponseDto.prototype, "firstName", 2);
__decorateClass([
  (0, import_swagger9.ApiPropertyOptional)({ description: "Last name", example: "Doe", nullable: true })
], _ProfileResponseDto.prototype, "lastName", 2);
__decorateClass([
  (0, import_swagger9.ApiPropertyOptional)({ description: "Avatar URL", example: "https://example.com/avatar.png", nullable: true })
], _ProfileResponseDto.prototype, "avatarUrl", 2);
__decorateClass([
  (0, import_swagger9.ApiProperty)({ description: "Extensible metadata", example: {}, type: Object })
], _ProfileResponseDto.prototype, "metadata", 2);
__decorateClass([
  (0, import_swagger9.ApiProperty)({ description: "Creation timestamp" })
], _ProfileResponseDto.prototype, "createdAt", 2);
__decorateClass([
  (0, import_swagger9.ApiProperty)({ description: "Last update timestamp" })
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
  (0, import_common19.Get)(),
  (0, import_swagger10.ApiOperation)({ summary: "Get the profile for a user" }),
  (0, import_swagger10.ApiParam)({ name: "userId", description: "User ID" }),
  (0, import_swagger10.ApiResponse)({ status: 200, description: "Profile found", type: () => ProfileResponseDto }),
  (0, import_swagger10.ApiResponse)({ status: 404, description: "Profile not found" }),
  __decorateParam(0, (0, import_common19.Param)("userId"))
], ProfilesController.prototype, "findOne", 1);
__decorateClass([
  (0, import_common19.Patch)(),
  (0, import_swagger10.ApiOperation)({ summary: "Create or update the profile for a user" }),
  (0, import_swagger10.ApiParam)({ name: "userId", description: "User ID" }),
  (0, import_swagger10.ApiResponse)({ status: 200, description: "Profile upserted", type: () => ProfileResponseDto }),
  __decorateParam(0, (0, import_common19.Param)("userId")),
  __decorateParam(1, (0, import_common19.Body)())
], ProfilesController.prototype, "upsert", 1);
ProfilesController = __decorateClass([
  (0, import_swagger10.ApiTags)("profiles"),
  (0, import_swagger10.ApiBearerAuth)(),
  (0, import_common19.UseGuards)(JwtAuthGuard),
  (0, import_common19.Controller)("users/:userId/profile")
], ProfilesController);

// src/profiles/profiles.service.ts
var import_common20 = require("@nestjs/common");
var ProfilesService = class {
  constructor(adapter) {
    this.adapter = adapter;
  }
  async findByUserId(userId) {
    const profile = await this.adapter.findProfileByUserId(userId);
    if (!profile) throw new import_common20.NotFoundException("Profile not found");
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
  (0, import_common20.Injectable)(),
  __decorateParam(0, (0, import_common20.Inject)(ADAPTIV_AUTH_ADAPTER))
], ProfilesService);

// src/profiles/profiles.module.ts
var ProfilesModule = class {
};
ProfilesModule = __decorateClass([
  (0, import_common21.Module)({
    controllers: [ProfilesController],
    providers: [ProfilesService, JwtAuthGuard],
    exports: [ProfilesService]
  })
], ProfilesModule);

// src/roles/roles.module.ts
var import_common24 = require("@nestjs/common");

// src/roles/roles.controller.ts
var import_common22 = require("@nestjs/common");
var import_swagger12 = require("@nestjs/swagger");

// src/roles/dto/role-response.dto.ts
var import_swagger11 = require("@nestjs/swagger");
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
  (0, import_swagger11.ApiProperty)({ description: "Role ID", example: "clxyz456" })
], _RoleResponseDto.prototype, "id", 2);
__decorateClass([
  (0, import_swagger11.ApiProperty)({ description: "Role name", example: "admin" })
], _RoleResponseDto.prototype, "name", 2);
__decorateClass([
  (0, import_swagger11.ApiPropertyOptional)({ description: "Role description", example: "Full system access", nullable: true })
], _RoleResponseDto.prototype, "description", 2);
__decorateClass([
  (0, import_swagger11.ApiProperty)({ description: "Creation timestamp" })
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
  (0, import_common22.Post)(),
  (0, import_swagger12.ApiOperation)({ summary: "Create a new role" }),
  (0, import_swagger12.ApiResponse)({ status: 201, description: "Role created", type: () => RoleResponseDto }),
  (0, import_swagger12.ApiResponse)({ status: 409, description: "Role name already exists" }),
  __decorateParam(0, (0, import_common22.Body)())
], RolesController.prototype, "create", 1);
__decorateClass([
  (0, import_common22.Get)(),
  (0, import_swagger12.ApiOperation)({ summary: "List all roles" }),
  (0, import_swagger12.ApiResponse)({ status: 200, description: "List of roles", type: () => [RoleResponseDto] })
], RolesController.prototype, "list", 1);
__decorateClass([
  (0, import_common22.Get)(":id"),
  (0, import_swagger12.ApiOperation)({ summary: "Get a role by ID" }),
  (0, import_swagger12.ApiParam)({ name: "id", description: "Role ID" }),
  (0, import_swagger12.ApiResponse)({ status: 200, description: "Role found", type: () => RoleResponseDto }),
  (0, import_swagger12.ApiResponse)({ status: 404, description: "Role not found" }),
  __decorateParam(0, (0, import_common22.Param)("id"))
], RolesController.prototype, "findOne", 1);
__decorateClass([
  (0, import_common22.Delete)(":id"),
  (0, import_common22.HttpCode)(import_common22.HttpStatus.NO_CONTENT),
  (0, import_swagger12.ApiOperation)({ summary: "Delete a role" }),
  (0, import_swagger12.ApiParam)({ name: "id", description: "Role ID" }),
  (0, import_swagger12.ApiResponse)({ status: 204, description: "Role deleted" }),
  (0, import_swagger12.ApiResponse)({ status: 404, description: "Role not found" }),
  __decorateParam(0, (0, import_common22.Param)("id"))
], RolesController.prototype, "remove", 1);
__decorateClass([
  (0, import_common22.Post)("users/:userId/assign"),
  (0, import_swagger12.ApiOperation)({ summary: "Assign a role to a user" }),
  (0, import_swagger12.ApiParam)({ name: "userId", description: "User ID" }),
  (0, import_swagger12.ApiResponse)({ status: 201, description: "Role assigned" }),
  (0, import_swagger12.ApiResponse)({ status: 404, description: "Role not found" }),
  __decorateParam(0, (0, import_common22.Param)("userId")),
  __decorateParam(1, (0, import_common22.Body)())
], RolesController.prototype, "assignToUser", 1);
__decorateClass([
  (0, import_common22.Delete)("users/:userId/assign/:roleId"),
  (0, import_common22.HttpCode)(import_common22.HttpStatus.NO_CONTENT),
  (0, import_swagger12.ApiOperation)({ summary: "Remove a role from a user" }),
  (0, import_swagger12.ApiParam)({ name: "userId", description: "User ID" }),
  (0, import_swagger12.ApiParam)({ name: "roleId", description: "Role ID" }),
  (0, import_swagger12.ApiResponse)({ status: 204, description: "Role removed from user" }),
  __decorateParam(0, (0, import_common22.Param)("userId")),
  __decorateParam(1, (0, import_common22.Param)("roleId"))
], RolesController.prototype, "removeFromUser", 1);
__decorateClass([
  (0, import_common22.Get)("users/:userId"),
  (0, import_swagger12.ApiOperation)({ summary: "Get all roles for a user" }),
  (0, import_swagger12.ApiParam)({ name: "userId", description: "User ID" }),
  (0, import_swagger12.ApiResponse)({ status: 200, description: "User roles", type: () => [RoleResponseDto] }),
  __decorateParam(0, (0, import_common22.Param)("userId"))
], RolesController.prototype, "getUserRoles", 1);
RolesController = __decorateClass([
  (0, import_swagger12.ApiTags)("roles"),
  (0, import_swagger12.ApiBearerAuth)(),
  (0, import_common22.UseGuards)(JwtAuthGuard),
  (0, import_common22.Controller)("roles")
], RolesController);

// src/roles/roles.service.ts
var import_common23 = require("@nestjs/common");
var RolesService = class {
  constructor(adapter) {
    this.adapter = adapter;
  }
  async create(dto) {
    const existing = await this.adapter.findRoleByName(dto.name);
    if (existing) throw new import_common23.ConflictException("Role name already exists");
    return this.adapter.createRole(dto);
  }
  async findById(id) {
    const role = await this.adapter.findRoleById(id);
    if (!role) throw new import_common23.NotFoundException("Role not found");
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
  (0, import_common23.Injectable)(),
  __decorateParam(0, (0, import_common23.Inject)(ADAPTIV_AUTH_ADAPTER))
], RolesService);

// src/roles/roles.module.ts
var RolesModule = class {
};
RolesModule = __decorateClass([
  (0, import_common24.Module)({
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
  (0, import_common25.Module)({})
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
var import_common26 = require("@nestjs/common");
var import_client = require("@prisma/client");
var PrismaService = class extends import_client.PrismaClient {
  async onModuleInit() {
    await this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
};
PrismaService = __decorateClass([
  (0, import_common26.Injectable)()
], PrismaService);

// src/adapter/prisma/prisma-auth.module.ts
var import_common27 = require("@nestjs/common");
var PrismaAuthModule = class {
};
PrismaAuthModule = __decorateClass([
  (0, import_common27.Module)({
    providers: [PrismaService],
    exports: [PrismaService]
  })
], PrismaAuthModule);

// src/guards/permissions.guard.ts
var import_common28 = require("@nestjs/common");
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
      throw new import_common28.ForbiddenException("Insufficient permissions");
    }
    return true;
  }
};
PermissionsGuard = __decorateClass([
  (0, import_common28.Injectable)()
], PermissionsGuard);

// src/guards/roles.guard.ts
var import_common29 = require("@nestjs/common");
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
      throw new import_common29.ForbiddenException("Insufficient role");
    }
    return true;
  }
};
RolesGuard = __decorateClass([
  (0, import_common29.Injectable)()
], RolesGuard);

// src/decorators/require-permissions.decorator.ts
var import_common30 = require("@nestjs/common");
var RequirePermissions = (...permissions) => (0, import_common30.SetMetadata)(REQUIRED_PERMISSIONS_KEY, permissions);

// src/decorators/require-roles.decorator.ts
var import_common31 = require("@nestjs/common");
var RequireRoles = (...roles) => (0, import_common31.SetMetadata)(REQUIRED_ROLES_KEY, roles);

// src/auth/dto/login.dto.ts
var import_swagger13 = require("@nestjs/swagger");
var import_class_validator = require("class-validator");
var LoginDto = class {
};
__decorateClass([
  (0, import_swagger13.ApiProperty)({
    description: "Email address or username",
    example: "john@example.com"
  }),
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.IsNotEmpty)()
], LoginDto.prototype, "identifier", 2);
__decorateClass([
  (0, import_swagger13.ApiProperty)({ description: "Account password", example: "S3cret!Pass" }),
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.IsNotEmpty)()
], LoginDto.prototype, "password", 2);

// src/auth/dto/refresh-token.dto.ts
var import_swagger14 = require("@nestjs/swagger");
var import_class_validator2 = require("class-validator");
var RefreshTokenDto = class {
};
__decorateClass([
  (0, import_swagger14.ApiProperty)({ description: "The refresh token issued at login", example: "abc123..." }),
  (0, import_class_validator2.IsString)(),
  (0, import_class_validator2.IsNotEmpty)()
], RefreshTokenDto.prototype, "refreshToken", 2);

// src/users/dto/create-user.dto.ts
var import_swagger15 = require("@nestjs/swagger");
var import_class_validator3 = require("class-validator");
var CreateUserDto = class {
};
__decorateClass([
  (0, import_swagger15.ApiProperty)({ description: "User email address", example: "john@example.com" }),
  (0, import_class_validator3.IsEmail)()
], CreateUserDto.prototype, "email", 2);
__decorateClass([
  (0, import_swagger15.ApiPropertyOptional)({ description: "Unique username", example: "johndoe" }),
  (0, import_class_validator3.IsOptional)(),
  (0, import_class_validator3.IsString)()
], CreateUserDto.prototype, "username", 2);
__decorateClass([
  (0, import_swagger15.ApiProperty)({ description: "Plain-text password (will be hashed)", example: "S3cret!Pass" }),
  (0, import_class_validator3.IsString)(),
  (0, import_class_validator3.IsNotEmpty)(),
  (0, import_class_validator3.MinLength)(8)
], CreateUserDto.prototype, "password", 2);

// src/users/dto/update-user.dto.ts
var import_swagger16 = require("@nestjs/swagger");
var import_class_validator4 = require("class-validator");
var UpdateUserDto = class {
};
__decorateClass([
  (0, import_swagger16.ApiPropertyOptional)({ description: "New email address", example: "new@example.com" }),
  (0, import_class_validator4.IsOptional)(),
  (0, import_class_validator4.IsEmail)()
], UpdateUserDto.prototype, "email", 2);
__decorateClass([
  (0, import_swagger16.ApiPropertyOptional)({ description: "New username", example: "janedoe" }),
  (0, import_class_validator4.IsOptional)(),
  (0, import_class_validator4.IsString)()
], UpdateUserDto.prototype, "username", 2);
__decorateClass([
  (0, import_swagger16.ApiPropertyOptional)({ description: "Whether the account is active", example: true }),
  (0, import_class_validator4.IsOptional)(),
  (0, import_class_validator4.IsBoolean)()
], UpdateUserDto.prototype, "isActive", 2);

// src/users/dto/list-users-query.dto.ts
var import_swagger17 = require("@nestjs/swagger");
var import_class_transformer = require("class-transformer");
var import_class_validator5 = require("class-validator");
var ListUsersQueryDto = class {
};
__decorateClass([
  (0, import_swagger17.ApiPropertyOptional)({ description: "Number of records to skip", example: 0, default: 0 }),
  (0, import_class_validator5.IsOptional)(),
  (0, import_class_transformer.Type)(() => Number),
  (0, import_class_validator5.IsInt)(),
  (0, import_class_validator5.Min)(0)
], ListUsersQueryDto.prototype, "skip", 2);
__decorateClass([
  (0, import_swagger17.ApiPropertyOptional)({ description: "Number of records to return", example: 20, default: 20 }),
  (0, import_class_validator5.IsOptional)(),
  (0, import_class_transformer.Type)(() => Number),
  (0, import_class_validator5.IsInt)(),
  (0, import_class_validator5.Min)(1)
], ListUsersQueryDto.prototype, "take", 2);
__decorateClass([
  (0, import_swagger17.ApiPropertyOptional)({ description: "Search by email or username", example: "john" }),
  (0, import_class_validator5.IsOptional)(),
  (0, import_class_validator5.IsString)()
], ListUsersQueryDto.prototype, "search", 2);

// src/profiles/dto/update-profile.dto.ts
var import_swagger18 = require("@nestjs/swagger");
var import_class_validator6 = require("class-validator");
var UpdateProfileDto = class {
};
__decorateClass([
  (0, import_swagger18.ApiPropertyOptional)({ description: "First name", example: "John" }),
  (0, import_class_validator6.IsOptional)(),
  (0, import_class_validator6.IsString)()
], UpdateProfileDto.prototype, "firstName", 2);
__decorateClass([
  (0, import_swagger18.ApiPropertyOptional)({ description: "Last name", example: "Doe" }),
  (0, import_class_validator6.IsOptional)(),
  (0, import_class_validator6.IsString)()
], UpdateProfileDto.prototype, "lastName", 2);
__decorateClass([
  (0, import_swagger18.ApiPropertyOptional)({ description: "Avatar URL", example: "https://example.com/avatar.png" }),
  (0, import_class_validator6.IsOptional)(),
  (0, import_class_validator6.IsUrl)()
], UpdateProfileDto.prototype, "avatarUrl", 2);
__decorateClass([
  (0, import_swagger18.ApiPropertyOptional)({
    description: "Arbitrary key-value metadata for extensibility",
    example: { bio: "Developer", timezone: "UTC" },
    type: Object
  }),
  (0, import_class_validator6.IsOptional)()
], UpdateProfileDto.prototype, "metadata", 2);

// src/roles/dto/create-role.dto.ts
var import_swagger19 = require("@nestjs/swagger");
var import_class_validator7 = require("class-validator");
var CreateRoleDto = class {
};
__decorateClass([
  (0, import_swagger19.ApiProperty)({ description: "Unique role name", example: "admin" }),
  (0, import_class_validator7.IsString)(),
  (0, import_class_validator7.IsNotEmpty)()
], CreateRoleDto.prototype, "name", 2);
__decorateClass([
  (0, import_swagger19.ApiPropertyOptional)({ description: "Role description", example: "Full system access" }),
  (0, import_class_validator7.IsOptional)(),
  (0, import_class_validator7.IsString)()
], CreateRoleDto.prototype, "description", 2);

// src/roles/dto/assign-role.dto.ts
var import_swagger20 = require("@nestjs/swagger");
var import_class_validator8 = require("class-validator");
var AssignRoleDto = class {
};
__decorateClass([
  (0, import_swagger20.ApiProperty)({ description: "ID of the role to assign", example: "clxyz456" }),
  (0, import_class_validator8.IsString)(),
  (0, import_class_validator8.IsNotEmpty)()
], AssignRoleDto.prototype, "roleId", 2);

// src/permissions/dto/create-permission.dto.ts
var import_swagger21 = require("@nestjs/swagger");
var import_class_validator9 = require("class-validator");
var CreatePermissionDto = class {
};
__decorateClass([
  (0, import_swagger21.ApiProperty)({
    description: 'Permission key in "resource:action" format',
    example: "posts:create"
  }),
  (0, import_class_validator9.IsString)(),
  (0, import_class_validator9.IsNotEmpty)(),
  (0, import_class_validator9.Matches)(/^[a-z0-9_-]+:[a-z0-9_-]+$/, {
    message: 'Permission key must follow the "resource:action" format'
  })
], CreatePermissionDto.prototype, "key", 2);
__decorateClass([
  (0, import_swagger21.ApiPropertyOptional)({ description: "Permission description", example: "Create new posts" }),
  (0, import_class_validator9.IsOptional)(),
  (0, import_class_validator9.IsString)()
], CreatePermissionDto.prototype, "description", 2);

// src/permissions/dto/assign-permission.dto.ts
var import_swagger22 = require("@nestjs/swagger");
var import_class_validator10 = require("class-validator");
var AssignPermissionDto = class {
};
__decorateClass([
  (0, import_swagger22.ApiProperty)({ description: "ID of the permission to assign", example: "clxyz789" }),
  (0, import_class_validator10.IsString)(),
  (0, import_class_validator10.IsNotEmpty)()
], AssignPermissionDto.prototype, "permissionId", 2);

// src/password-recovery/dto/forgot-password.dto.ts
var import_swagger23 = require("@nestjs/swagger");
var import_class_validator11 = require("class-validator");
var ForgotPasswordDto = class {
};
__decorateClass([
  (0, import_swagger23.ApiProperty)({ description: "Email address to send the reset link to", example: "john@example.com" }),
  (0, import_class_validator11.IsEmail)()
], ForgotPasswordDto.prototype, "email", 2);

// src/password-recovery/dto/reset-password.dto.ts
var import_swagger24 = require("@nestjs/swagger");
var import_class_validator12 = require("class-validator");
var ResetPasswordDto = class {
};
__decorateClass([
  (0, import_swagger24.ApiProperty)({ description: "The password reset token received via email", example: "abc123..." }),
  (0, import_class_validator12.IsString)(),
  (0, import_class_validator12.IsNotEmpty)()
], ResetPasswordDto.prototype, "token", 2);
__decorateClass([
  (0, import_swagger24.ApiProperty)({ description: "The new password", example: "N3wS3cret!" }),
  (0, import_class_validator12.IsString)(),
  (0, import_class_validator12.IsNotEmpty)(),
  (0, import_class_validator12.MinLength)(8)
], ResetPasswordDto.prototype, "newPassword", 2);

// src/swagger.ts
var import_swagger25 = require("@nestjs/swagger");
function setupAdaptivAuthSwagger(app, options) {
  const title = options?.title ?? "AdaptivAuth API";
  const version = options?.version ?? "1.0";
  const bearerName = options?.bearerName ?? "bearer";
  const path = options?.path ?? "api";
  const config = new import_swagger25.DocumentBuilder().setTitle(title).setVersion(version).addBearerAuth(
    { type: "http", scheme: "bearer", bearerFormat: "JWT" },
    bearerName
  ).build();
  const document = import_swagger25.SwaggerModule.createDocument(app, config);
  import_swagger25.SwaggerModule.setup(path, app, document);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
//# sourceMappingURL=index.js.map