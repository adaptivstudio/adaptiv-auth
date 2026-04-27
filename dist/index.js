"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

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
var import_common3 = require("@nestjs/common");
var import_swagger6 = require("@nestjs/swagger");

// src/auth/guards/jwt-auth.guard.ts
var import_common = require("@nestjs/common");
var import_core = require("@nestjs/core");
var import_passport = require("@nestjs/passport");
function _ts_decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate, "_ts_decorate");
function _ts_metadata(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata, "_ts_metadata");
var _JwtAuthGuard = class _JwtAuthGuard extends (0, import_passport.AuthGuard)("jwt") {
  constructor(reflector) {
    super();
    __publicField(this, "reflector");
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
__name(_JwtAuthGuard, "JwtAuthGuard");
var JwtAuthGuard = _JwtAuthGuard;
JwtAuthGuard = _ts_decorate([
  (0, import_common.Injectable)(),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof import_core.Reflector === "undefined" ? Object : import_core.Reflector
  ])
], JwtAuthGuard);

// src/users/dto/create-user.dto.ts
var import_swagger = require("@nestjs/swagger");
var import_class_validator = require("class-validator");
function _ts_decorate2(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate2, "_ts_decorate");
function _ts_metadata2(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata2, "_ts_metadata");
var _CreateUserDto = class _CreateUserDto {
  constructor() {
    __publicField(this, "email");
    __publicField(this, "username");
    __publicField(this, "password");
  }
};
__name(_CreateUserDto, "CreateUserDto");
var CreateUserDto = _CreateUserDto;
_ts_decorate2([
  (0, import_swagger.ApiProperty)({
    type: String,
    description: "User email address",
    example: "john@example.com"
  }),
  (0, import_class_validator.IsEmail)(),
  _ts_metadata2("design:type", String)
], CreateUserDto.prototype, "email", void 0);
_ts_decorate2([
  (0, import_swagger.ApiPropertyOptional)({
    type: String,
    description: "Unique username",
    example: "johndoe"
  }),
  (0, import_class_validator.IsOptional)(),
  (0, import_class_validator.IsString)(),
  _ts_metadata2("design:type", String)
], CreateUserDto.prototype, "username", void 0);
_ts_decorate2([
  (0, import_swagger.ApiProperty)({
    type: String,
    description: "Plain-text password (will be hashed)",
    example: "S3cret!Pass"
  }),
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.IsNotEmpty)(),
  (0, import_class_validator.MinLength)(8),
  _ts_metadata2("design:type", String)
], CreateUserDto.prototype, "password", void 0);

// src/users/dto/update-user.dto.ts
var import_swagger2 = require("@nestjs/swagger");
var import_class_validator2 = require("class-validator");
function _ts_decorate3(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate3, "_ts_decorate");
function _ts_metadata3(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata3, "_ts_metadata");
var _UpdateUserDto = class _UpdateUserDto {
  constructor() {
    __publicField(this, "email");
    __publicField(this, "username");
    __publicField(this, "isActive");
  }
};
__name(_UpdateUserDto, "UpdateUserDto");
var UpdateUserDto = _UpdateUserDto;
_ts_decorate3([
  (0, import_swagger2.ApiPropertyOptional)({
    type: String,
    description: "New email address",
    example: "new@example.com"
  }),
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsEmail)(),
  _ts_metadata3("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
_ts_decorate3([
  (0, import_swagger2.ApiPropertyOptional)({
    type: String,
    description: "New username",
    example: "janedoe"
  }),
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsString)(),
  _ts_metadata3("design:type", String)
], UpdateUserDto.prototype, "username", void 0);
_ts_decorate3([
  (0, import_swagger2.ApiPropertyOptional)({
    type: Boolean,
    description: "Whether the account is active",
    example: true
  }),
  (0, import_class_validator2.IsOptional)(),
  (0, import_class_validator2.IsBoolean)(),
  _ts_metadata3("design:type", Boolean)
], UpdateUserDto.prototype, "isActive", void 0);

// src/users/dto/list-users-query.dto.ts
var import_swagger3 = require("@nestjs/swagger");
var import_class_transformer = require("class-transformer");
var import_class_validator3 = require("class-validator");
function _ts_decorate4(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate4, "_ts_decorate");
function _ts_metadata4(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata4, "_ts_metadata");
var _ListUsersQueryDto = class _ListUsersQueryDto {
  constructor() {
    __publicField(this, "skip");
    __publicField(this, "take");
    __publicField(this, "search");
  }
};
__name(_ListUsersQueryDto, "ListUsersQueryDto");
var ListUsersQueryDto = _ListUsersQueryDto;
_ts_decorate4([
  (0, import_swagger3.ApiPropertyOptional)({
    type: Number,
    description: "Number of records to skip",
    example: 0,
    default: 0
  }),
  (0, import_class_validator3.IsOptional)(),
  (0, import_class_transformer.Type)(() => Number),
  (0, import_class_validator3.IsInt)(),
  (0, import_class_validator3.Min)(0),
  _ts_metadata4("design:type", Number)
], ListUsersQueryDto.prototype, "skip", void 0);
_ts_decorate4([
  (0, import_swagger3.ApiPropertyOptional)({
    type: Number,
    description: "Number of records to return",
    example: 20,
    default: 20
  }),
  (0, import_class_validator3.IsOptional)(),
  (0, import_class_transformer.Type)(() => Number),
  (0, import_class_validator3.IsInt)(),
  (0, import_class_validator3.Min)(1),
  _ts_metadata4("design:type", Number)
], ListUsersQueryDto.prototype, "take", void 0);
_ts_decorate4([
  (0, import_swagger3.ApiPropertyOptional)({
    type: String,
    description: "Search by email or username",
    example: "john"
  }),
  (0, import_class_validator3.IsOptional)(),
  (0, import_class_validator3.IsString)(),
  _ts_metadata4("design:type", String)
], ListUsersQueryDto.prototype, "search", void 0);

// src/users/dto/user-response.dto.ts
var import_swagger4 = require("@nestjs/swagger");
function _ts_decorate5(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate5, "_ts_decorate");
function _ts_metadata5(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata5, "_ts_metadata");
var _UserResponseDto = class _UserResponseDto {
  constructor() {
    __publicField(this, "id");
    __publicField(this, "email");
    __publicField(this, "username");
    __publicField(this, "isActive");
    __publicField(this, "createdAt");
    __publicField(this, "updatedAt");
  }
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
__name(_UserResponseDto, "UserResponseDto");
var UserResponseDto = _UserResponseDto;
_ts_decorate5([
  (0, import_swagger4.ApiProperty)({
    type: String,
    description: "User ID",
    example: "clxyz123"
  }),
  _ts_metadata5("design:type", String)
], UserResponseDto.prototype, "id", void 0);
_ts_decorate5([
  (0, import_swagger4.ApiProperty)({
    type: String,
    description: "Email address",
    example: "john@example.com"
  }),
  _ts_metadata5("design:type", String)
], UserResponseDto.prototype, "email", void 0);
_ts_decorate5([
  (0, import_swagger4.ApiPropertyOptional)({
    type: String,
    description: "Username",
    example: "johndoe",
    nullable: true
  }),
  _ts_metadata5("design:type", Object)
], UserResponseDto.prototype, "username", void 0);
_ts_decorate5([
  (0, import_swagger4.ApiProperty)({
    type: Boolean,
    description: "Whether the account is active",
    example: true
  }),
  _ts_metadata5("design:type", Boolean)
], UserResponseDto.prototype, "isActive", void 0);
_ts_decorate5([
  (0, import_swagger4.ApiProperty)({
    type: Date,
    description: "Creation timestamp"
  }),
  _ts_metadata5("design:type", typeof Date === "undefined" ? Object : Date)
], UserResponseDto.prototype, "createdAt", void 0);
_ts_decorate5([
  (0, import_swagger4.ApiProperty)({
    type: Date,
    description: "Last update timestamp"
  }),
  _ts_metadata5("design:type", typeof Date === "undefined" ? Object : Date)
], UserResponseDto.prototype, "updatedAt", void 0);

// src/users/dto/paginated-users-response.dto.ts
var import_swagger5 = require("@nestjs/swagger");
function _ts_decorate6(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate6, "_ts_decorate");
function _ts_metadata6(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata6, "_ts_metadata");
var _PaginatedUsersResponseDto = class _PaginatedUsersResponseDto {
  constructor() {
    __publicField(this, "data");
    __publicField(this, "total");
    __publicField(this, "skip");
    __publicField(this, "take");
  }
};
__name(_PaginatedUsersResponseDto, "PaginatedUsersResponseDto");
var PaginatedUsersResponseDto = _PaginatedUsersResponseDto;
_ts_decorate6([
  (0, import_swagger5.ApiProperty)({
    type: /* @__PURE__ */ __name(() => [
      UserResponseDto
    ], "type")
  }),
  _ts_metadata6("design:type", Array)
], PaginatedUsersResponseDto.prototype, "data", void 0);
_ts_decorate6([
  (0, import_swagger5.ApiProperty)({
    type: Number,
    description: "Total number of matching users",
    example: 42
  }),
  _ts_metadata6("design:type", Number)
], PaginatedUsersResponseDto.prototype, "total", void 0);
_ts_decorate6([
  (0, import_swagger5.ApiProperty)({
    type: Number,
    description: "Number of records skipped",
    example: 0
  }),
  _ts_metadata6("design:type", Number)
], PaginatedUsersResponseDto.prototype, "skip", void 0);
_ts_decorate6([
  (0, import_swagger5.ApiProperty)({
    type: Number,
    description: "Number of records returned",
    example: 20
  }),
  _ts_metadata6("design:type", Number)
], PaginatedUsersResponseDto.prototype, "take", void 0);

// src/users/users.service.ts
var import_common2 = require("@nestjs/common");
var bcrypt = __toESM(require("bcryptjs"));
function _ts_decorate7(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate7, "_ts_decorate");
function _ts_metadata7(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata7, "_ts_metadata");
function _ts_param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param, "_ts_param");
var BCRYPT_ROUNDS = 12;
var _UsersService = class _UsersService {
  constructor(adapter) {
    __publicField(this, "adapter");
    this.adapter = adapter;
  }
  async create(dto) {
    const existing = await this.adapter.findUserByEmail(dto.email);
    if (existing) {
      throw new import_common2.ConflictException("Email already in use");
    }
    if (dto.username) {
      const existingByUsername = await this.adapter.findUserByUsername(dto.username);
      if (existingByUsername) {
        throw new import_common2.ConflictException("Username already taken");
      }
    }
    const passwordHash = await bcrypt.hash(dto.password, BCRYPT_ROUNDS);
    return this.adapter.createUser({
      email: dto.email,
      username: dto.username,
      passwordHash
    });
  }
  async findById(id) {
    const user = await this.adapter.findUserById(id);
    if (!user) throw new import_common2.NotFoundException("User not found");
    return user;
  }
  async findByEmail(email) {
    return this.adapter.findUserByEmail(email);
  }
  async findByIdentifier(identifier) {
    return this.adapter.findUserByIdentifier(identifier);
  }
  async list(query) {
    return this.adapter.listUsers({
      skip: query.skip,
      take: query.take,
      search: query.search
    });
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
__name(_UsersService, "UsersService");
var UsersService = _UsersService;
UsersService = _ts_decorate7([
  (0, import_common2.Injectable)(),
  _ts_param(0, (0, import_common2.Inject)(ADAPTIV_AUTH_ADAPTER)),
  _ts_metadata7("design:type", Function),
  _ts_metadata7("design:paramtypes", [
    typeof IAuthAdapter === "undefined" ? Object : IAuthAdapter
  ])
], UsersService);

// src/users/users.controller.ts
function _ts_decorate8(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate8, "_ts_decorate");
function _ts_metadata8(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata8, "_ts_metadata");
function _ts_param2(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param2, "_ts_param");
var _UsersController = class _UsersController {
  constructor(usersService) {
    __publicField(this, "usersService");
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
__name(_UsersController, "UsersController");
var UsersController = _UsersController;
_ts_decorate8([
  (0, import_common3.Post)(),
  (0, import_swagger6.ApiOperation)({
    summary: "Create a new user"
  }),
  (0, import_swagger6.ApiResponse)({
    status: 201,
    description: "User created",
    type: /* @__PURE__ */ __name(() => UserResponseDto, "type")
  }),
  (0, import_swagger6.ApiResponse)({
    status: 409,
    description: "Email or username already in use"
  }),
  _ts_param2(0, (0, import_common3.Body)()),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    typeof CreateUserDto === "undefined" ? Object : CreateUserDto
  ]),
  _ts_metadata8("design:returntype", Promise)
], UsersController.prototype, "create", null);
_ts_decorate8([
  (0, import_common3.Get)(),
  (0, import_swagger6.ApiOperation)({
    summary: "List users with optional pagination and search"
  }),
  (0, import_swagger6.ApiResponse)({
    status: 200,
    description: "Paginated user list",
    type: /* @__PURE__ */ __name(() => PaginatedUsersResponseDto, "type")
  }),
  _ts_param2(0, (0, import_common3.Query)()),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    typeof ListUsersQueryDto === "undefined" ? Object : ListUsersQueryDto
  ]),
  _ts_metadata8("design:returntype", Promise)
], UsersController.prototype, "list", null);
_ts_decorate8([
  (0, import_common3.Get)(":id"),
  (0, import_swagger6.ApiOperation)({
    summary: "Get a user by ID"
  }),
  (0, import_swagger6.ApiParam)({
    name: "id",
    description: "User ID"
  }),
  (0, import_swagger6.ApiResponse)({
    status: 200,
    description: "User found",
    type: /* @__PURE__ */ __name(() => UserResponseDto, "type")
  }),
  (0, import_swagger6.ApiResponse)({
    status: 404,
    description: "User not found"
  }),
  _ts_param2(0, (0, import_common3.Param)("id")),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    String
  ]),
  _ts_metadata8("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
_ts_decorate8([
  (0, import_common3.Patch)(":id"),
  (0, import_swagger6.ApiOperation)({
    summary: "Update a user"
  }),
  (0, import_swagger6.ApiParam)({
    name: "id",
    description: "User ID"
  }),
  (0, import_swagger6.ApiResponse)({
    status: 200,
    description: "User updated",
    type: /* @__PURE__ */ __name(() => UserResponseDto, "type")
  }),
  (0, import_swagger6.ApiResponse)({
    status: 404,
    description: "User not found"
  }),
  _ts_param2(0, (0, import_common3.Param)("id")),
  _ts_param2(1, (0, import_common3.Body)()),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    String,
    typeof UpdateUserDto === "undefined" ? Object : UpdateUserDto
  ]),
  _ts_metadata8("design:returntype", Promise)
], UsersController.prototype, "update", null);
_ts_decorate8([
  (0, import_common3.Delete)(":id"),
  (0, import_common3.HttpCode)(import_common3.HttpStatus.NO_CONTENT),
  (0, import_swagger6.ApiOperation)({
    summary: "Delete a user"
  }),
  (0, import_swagger6.ApiParam)({
    name: "id",
    description: "User ID"
  }),
  (0, import_swagger6.ApiResponse)({
    status: 204,
    description: "User deleted"
  }),
  (0, import_swagger6.ApiResponse)({
    status: 404,
    description: "User not found"
  }),
  _ts_param2(0, (0, import_common3.Param)("id")),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    String
  ]),
  _ts_metadata8("design:returntype", Promise)
], UsersController.prototype, "remove", null);
UsersController = _ts_decorate8([
  (0, import_swagger6.ApiTags)("users"),
  (0, import_swagger6.ApiBearerAuth)(),
  (0, import_common3.UseGuards)(JwtAuthGuard),
  (0, import_common3.Controller)("users"),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    typeof UsersService === "undefined" ? Object : UsersService
  ])
], UsersController);

// src/users/users.module.ts
function _ts_decorate9(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate9, "_ts_decorate");
var _UsersModule = class _UsersModule {
};
__name(_UsersModule, "UsersModule");
var UsersModule = _UsersModule;
UsersModule = _ts_decorate9([
  (0, import_common4.Module)({
    controllers: [
      UsersController
    ],
    providers: [
      UsersService
    ],
    exports: [
      UsersService
    ]
  })
], UsersModule);

// src/auth/auth.controller.ts
var import_common9 = require("@nestjs/common");
var import_swagger10 = require("@nestjs/swagger");

// src/decorators/current-user.decorator.ts
var import_common5 = require("@nestjs/common");
var CurrentUser = (0, import_common5.createParamDecorator)((_data, ctx) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});

// src/decorators/public.decorator.ts
var import_common6 = require("@nestjs/common");
var Public = /* @__PURE__ */ __name(() => (0, import_common6.SetMetadata)(IS_PUBLIC_KEY, true), "Public");

// src/auth/auth.service.ts
var import_common7 = require("@nestjs/common");
var import_jwt = require("@nestjs/jwt");
var crypto = __toESM(require("crypto"));
function _ts_decorate10(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate10, "_ts_decorate");
function _ts_metadata9(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata9, "_ts_metadata");
function _ts_param3(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param3, "_ts_param");
var _AuthService = class _AuthService {
  constructor(adapter, options, jwtService, usersService) {
    __publicField(this, "adapter");
    __publicField(this, "options");
    __publicField(this, "jwtService");
    __publicField(this, "usersService");
    __publicField(this, "refreshJwtService");
    this.adapter = adapter;
    this.options = options;
    this.jwtService = jwtService;
    this.usersService = usersService;
    this.refreshJwtService = new import_jwt.JwtService({
      secret: options.jwt.refreshSecret
    });
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
    return {
      accessToken,
      refreshToken,
      user
    };
  }
  async refresh(refreshToken) {
    const record = await this.adapter.findRefreshToken(refreshToken);
    if (!record || record.revokedAt !== null || record.expiresAt <= /* @__PURE__ */ new Date()) {
      throw new import_common7.UnauthorizedException("Invalid or expired refresh token");
    }
    const user = await this.adapter.findUserById(record.userId);
    if (!user || !user.isActive) {
      throw new import_common7.UnauthorizedException("User not found or inactive");
    }
    await this.adapter.revokeRefreshToken(refreshToken);
    const { accessToken, refreshToken: newRefreshToken } = await this.login(user);
    return {
      accessToken,
      refreshToken: newRefreshToken
    };
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
    await this.adapter.createRefreshToken({
      token,
      userId,
      expiresAt
    });
    return token;
  }
  parseExpiresIn(expiresIn) {
    const match = /^(\d+)([smhd])$/.exec(expiresIn);
    if (!match) throw new Error(`Invalid expiresIn format: ${expiresIn}`);
    const value = parseInt(match[1], 10);
    const unit = match[2];
    const multipliers = {
      s: 1e3,
      m: 6e4,
      h: 36e5,
      d: 864e5
    };
    return new Date(Date.now() + value * multipliers[unit]);
  }
};
__name(_AuthService, "AuthService");
var AuthService = _AuthService;
AuthService = _ts_decorate10([
  (0, import_common7.Injectable)(),
  _ts_param3(0, (0, import_common7.Inject)(ADAPTIV_AUTH_ADAPTER)),
  _ts_param3(1, (0, import_common7.Inject)(ADAPTIV_AUTH_OPTIONS)),
  _ts_metadata9("design:type", Function),
  _ts_metadata9("design:paramtypes", [
    typeof IAuthAdapter === "undefined" ? Object : IAuthAdapter,
    typeof AdaptivAuthOptions === "undefined" ? Object : AdaptivAuthOptions,
    typeof import_jwt.JwtService === "undefined" ? Object : import_jwt.JwtService,
    typeof UsersService === "undefined" ? Object : UsersService
  ])
], AuthService);

// src/auth/dto/login.dto.ts
var import_swagger7 = require("@nestjs/swagger");
var import_class_validator4 = require("class-validator");
function _ts_decorate11(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate11, "_ts_decorate");
function _ts_metadata10(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata10, "_ts_metadata");
var _LoginDto = class _LoginDto {
  constructor() {
    __publicField(this, "identifier");
    __publicField(this, "password");
  }
};
__name(_LoginDto, "LoginDto");
var LoginDto = _LoginDto;
_ts_decorate11([
  (0, import_swagger7.ApiProperty)({
    type: String,
    description: "Email address or username",
    example: "john@example.com"
  }),
  (0, import_class_validator4.IsString)(),
  (0, import_class_validator4.IsNotEmpty)(),
  _ts_metadata10("design:type", String)
], LoginDto.prototype, "identifier", void 0);
_ts_decorate11([
  (0, import_swagger7.ApiProperty)({
    type: String,
    description: "Account password",
    example: "S3cret!Pass"
  }),
  (0, import_class_validator4.IsString)(),
  (0, import_class_validator4.IsNotEmpty)(),
  _ts_metadata10("design:type", String)
], LoginDto.prototype, "password", void 0);

// src/auth/dto/refresh-token.dto.ts
var import_swagger8 = require("@nestjs/swagger");
var import_class_validator5 = require("class-validator");
function _ts_decorate12(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate12, "_ts_decorate");
function _ts_metadata11(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata11, "_ts_metadata");
var _RefreshTokenDto = class _RefreshTokenDto {
  constructor() {
    __publicField(this, "refreshToken");
  }
};
__name(_RefreshTokenDto, "RefreshTokenDto");
var RefreshTokenDto = _RefreshTokenDto;
_ts_decorate12([
  (0, import_swagger8.ApiProperty)({
    type: String,
    description: "The refresh token issued at login",
    example: "abc123..."
  }),
  (0, import_class_validator5.IsString)(),
  (0, import_class_validator5.IsNotEmpty)(),
  _ts_metadata11("design:type", String)
], RefreshTokenDto.prototype, "refreshToken", void 0);

// src/auth/dto/token-response.dto.ts
var import_swagger9 = require("@nestjs/swagger");
function _ts_decorate13(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate13, "_ts_decorate");
function _ts_metadata12(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata12, "_ts_metadata");
var _TokenResponseDto = class _TokenResponseDto {
  constructor() {
    __publicField(this, "accessToken");
    __publicField(this, "refreshToken");
    __publicField(this, "user");
  }
};
__name(_TokenResponseDto, "TokenResponseDto");
var TokenResponseDto = _TokenResponseDto;
_ts_decorate13([
  (0, import_swagger9.ApiProperty)({
    type: String,
    description: "Short-lived JWT access token"
  }),
  _ts_metadata12("design:type", String)
], TokenResponseDto.prototype, "accessToken", void 0);
_ts_decorate13([
  (0, import_swagger9.ApiProperty)({
    type: String,
    description: "Long-lived opaque refresh token"
  }),
  _ts_metadata12("design:type", String)
], TokenResponseDto.prototype, "refreshToken", void 0);
_ts_decorate13([
  (0, import_swagger9.ApiProperty)({
    type: /* @__PURE__ */ __name(() => UserResponseDto, "type"),
    required: false
  }),
  _ts_metadata12("design:type", typeof UserResponseDto === "undefined" ? Object : UserResponseDto)
], TokenResponseDto.prototype, "user", void 0);
var _RefreshResponseDto = class _RefreshResponseDto {
  constructor() {
    __publicField(this, "accessToken");
    __publicField(this, "refreshToken");
  }
};
__name(_RefreshResponseDto, "RefreshResponseDto");
var RefreshResponseDto = _RefreshResponseDto;
_ts_decorate13([
  (0, import_swagger9.ApiProperty)({
    type: String,
    description: "New short-lived JWT access token"
  }),
  _ts_metadata12("design:type", String)
], RefreshResponseDto.prototype, "accessToken", void 0);
_ts_decorate13([
  (0, import_swagger9.ApiProperty)({
    type: String,
    description: "New long-lived opaque refresh token (rotated)"
  }),
  _ts_metadata12("design:type", String)
], RefreshResponseDto.prototype, "refreshToken", void 0);

// src/auth/guards/local-auth.guard.ts
var import_common8 = require("@nestjs/common");
var import_passport2 = require("@nestjs/passport");
function _ts_decorate14(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate14, "_ts_decorate");
var _LocalAuthGuard = class _LocalAuthGuard extends (0, import_passport2.AuthGuard)("local") {
};
__name(_LocalAuthGuard, "LocalAuthGuard");
var LocalAuthGuard = _LocalAuthGuard;
LocalAuthGuard = _ts_decorate14([
  (0, import_common8.Injectable)()
], LocalAuthGuard);

// src/auth/auth.controller.ts
function _ts_decorate15(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate15, "_ts_decorate");
function _ts_metadata13(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata13, "_ts_metadata");
function _ts_param4(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param4, "_ts_param");
var _AuthController = class _AuthController {
  constructor(authService) {
    __publicField(this, "authService");
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
__name(_AuthController, "AuthController");
var AuthController = _AuthController;
_ts_decorate15([
  Public(),
  (0, import_common9.UseGuards)(LocalAuthGuard),
  (0, import_common9.Post)("login"),
  (0, import_common9.HttpCode)(import_common9.HttpStatus.OK),
  (0, import_swagger10.ApiOperation)({
    summary: "Login with email/username and password"
  }),
  (0, import_swagger10.ApiResponse)({
    status: 200,
    description: "Login successful",
    type: /* @__PURE__ */ __name(() => TokenResponseDto, "type")
  }),
  (0, import_swagger10.ApiResponse)({
    status: 401,
    description: "Invalid credentials"
  }),
  _ts_param4(0, (0, import_common9.Body)()),
  _ts_param4(1, (0, import_common9.Request)()),
  _ts_metadata13("design:type", Function),
  _ts_metadata13("design:paramtypes", [
    typeof LoginDto === "undefined" ? Object : LoginDto,
    Object
  ]),
  _ts_metadata13("design:returntype", Promise)
], AuthController.prototype, "login", null);
_ts_decorate15([
  Public(),
  (0, import_common9.Post)("refresh"),
  (0, import_common9.HttpCode)(import_common9.HttpStatus.OK),
  (0, import_swagger10.ApiOperation)({
    summary: "Rotate a refresh token and obtain new token pair"
  }),
  (0, import_swagger10.ApiResponse)({
    status: 200,
    description: "Tokens refreshed",
    type: /* @__PURE__ */ __name(() => RefreshResponseDto, "type")
  }),
  (0, import_swagger10.ApiResponse)({
    status: 401,
    description: "Invalid or expired refresh token"
  }),
  _ts_param4(0, (0, import_common9.Body)()),
  _ts_metadata13("design:type", Function),
  _ts_metadata13("design:paramtypes", [
    typeof RefreshTokenDto === "undefined" ? Object : RefreshTokenDto
  ]),
  _ts_metadata13("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
_ts_decorate15([
  (0, import_common9.UseGuards)(JwtAuthGuard),
  (0, import_common9.Post)("logout"),
  (0, import_common9.HttpCode)(import_common9.HttpStatus.NO_CONTENT),
  (0, import_swagger10.ApiBearerAuth)(),
  (0, import_swagger10.ApiOperation)({
    summary: "Revoke a single refresh token"
  }),
  (0, import_swagger10.ApiResponse)({
    status: 204,
    description: "Logged out"
  }),
  _ts_param4(0, (0, import_common9.Body)()),
  _ts_metadata13("design:type", Function),
  _ts_metadata13("design:paramtypes", [
    typeof RefreshTokenDto === "undefined" ? Object : RefreshTokenDto
  ]),
  _ts_metadata13("design:returntype", Promise)
], AuthController.prototype, "logout", null);
_ts_decorate15([
  (0, import_common9.UseGuards)(JwtAuthGuard),
  (0, import_common9.Post)("logout-all"),
  (0, import_common9.HttpCode)(import_common9.HttpStatus.NO_CONTENT),
  (0, import_swagger10.ApiBearerAuth)(),
  (0, import_swagger10.ApiOperation)({
    summary: "Revoke all refresh tokens for the current user"
  }),
  (0, import_swagger10.ApiResponse)({
    status: 204,
    description: "All sessions terminated"
  }),
  _ts_param4(0, CurrentUser()),
  _ts_metadata13("design:type", Function),
  _ts_metadata13("design:paramtypes", [
    typeof JwtPayload === "undefined" ? Object : JwtPayload
  ]),
  _ts_metadata13("design:returntype", Promise)
], AuthController.prototype, "logoutAll", null);
AuthController = _ts_decorate15([
  (0, import_swagger10.ApiTags)("auth"),
  (0, import_common9.Controller)("auth"),
  _ts_metadata13("design:type", Function),
  _ts_metadata13("design:paramtypes", [
    typeof AuthService === "undefined" ? Object : AuthService
  ])
], AuthController);

// src/auth/strategies/jwt.strategy.ts
var import_common10 = require("@nestjs/common");
var import_passport3 = require("@nestjs/passport");
var import_passport_jwt = require("passport-jwt");
function _ts_decorate16(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate16, "_ts_decorate");
function _ts_metadata14(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata14, "_ts_metadata");
function _ts_param5(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param5, "_ts_param");
var _JwtStrategy = class _JwtStrategy extends (0, import_passport3.PassportStrategy)(import_passport_jwt.Strategy) {
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
__name(_JwtStrategy, "JwtStrategy");
var JwtStrategy = _JwtStrategy;
JwtStrategy = _ts_decorate16([
  (0, import_common10.Injectable)(),
  _ts_param5(0, (0, import_common10.Inject)(ADAPTIV_AUTH_OPTIONS)),
  _ts_metadata14("design:type", Function),
  _ts_metadata14("design:paramtypes", [
    typeof AdaptivAuthOptions === "undefined" ? Object : AdaptivAuthOptions
  ])
], JwtStrategy);

// src/auth/strategies/local.strategy.ts
var import_common11 = require("@nestjs/common");
var import_passport4 = require("@nestjs/passport");
var import_passport_local = require("passport-local");
function _ts_decorate17(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate17, "_ts_decorate");
function _ts_metadata15(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata15, "_ts_metadata");
var _LocalStrategy = class _LocalStrategy extends (0, import_passport4.PassportStrategy)(import_passport_local.Strategy) {
  constructor(authService) {
    super({
      usernameField: "identifier"
    });
    __publicField(this, "authService");
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
__name(_LocalStrategy, "LocalStrategy");
var LocalStrategy = _LocalStrategy;
LocalStrategy = _ts_decorate17([
  (0, import_common11.Injectable)(),
  _ts_metadata15("design:type", Function),
  _ts_metadata15("design:paramtypes", [
    typeof AuthService === "undefined" ? Object : AuthService
  ])
], LocalStrategy);

// src/auth/auth.module.ts
function _ts_decorate18(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate18, "_ts_decorate");
var _AuthModule = class _AuthModule {
};
__name(_AuthModule, "AuthModule");
var AuthModule = _AuthModule;
AuthModule = _ts_decorate18([
  (0, import_common12.Module)({
    imports: [
      UsersModule,
      import_passport5.PassportModule,
      import_jwt2.JwtModule.registerAsync({
        inject: [
          ADAPTIV_AUTH_OPTIONS
        ],
        // expiresIn is typed as StringValue in newer ms, but accepts standard strings at runtime
        useFactory: /* @__PURE__ */ __name((options) => ({
          secret: options.jwt.accessSecret,
          signOptions: {
            expiresIn: options.jwt.accessExpiresIn
          }
        }), "useFactory")
      })
    ],
    controllers: [
      AuthController
    ],
    providers: [
      AuthService,
      LocalStrategy,
      JwtStrategy,
      LocalAuthGuard,
      JwtAuthGuard
    ],
    exports: [
      AuthService,
      JwtAuthGuard
    ]
  })
], AuthModule);

// src/password-recovery/password-recovery.module.ts
var import_common15 = require("@nestjs/common");

// src/password-recovery/password-recovery.controller.ts
var import_common14 = require("@nestjs/common");
var import_swagger13 = require("@nestjs/swagger");

// src/password-recovery/dto/forgot-password.dto.ts
var import_swagger11 = require("@nestjs/swagger");
var import_class_validator6 = require("class-validator");
function _ts_decorate19(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate19, "_ts_decorate");
function _ts_metadata16(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata16, "_ts_metadata");
var _ForgotPasswordDto = class _ForgotPasswordDto {
  constructor() {
    __publicField(this, "email");
  }
};
__name(_ForgotPasswordDto, "ForgotPasswordDto");
var ForgotPasswordDto = _ForgotPasswordDto;
_ts_decorate19([
  (0, import_swagger11.ApiProperty)({
    type: String,
    description: "Email address to send the reset link to",
    example: "john@example.com"
  }),
  (0, import_class_validator6.IsEmail)(),
  _ts_metadata16("design:type", String)
], ForgotPasswordDto.prototype, "email", void 0);

// src/password-recovery/dto/reset-password.dto.ts
var import_swagger12 = require("@nestjs/swagger");
var import_class_validator7 = require("class-validator");
function _ts_decorate20(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate20, "_ts_decorate");
function _ts_metadata17(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata17, "_ts_metadata");
var _ResetPasswordDto = class _ResetPasswordDto {
  constructor() {
    __publicField(this, "token");
    __publicField(this, "newPassword");
  }
};
__name(_ResetPasswordDto, "ResetPasswordDto");
var ResetPasswordDto = _ResetPasswordDto;
_ts_decorate20([
  (0, import_swagger12.ApiProperty)({
    type: String,
    description: "The password reset token received via email",
    example: "abc123..."
  }),
  (0, import_class_validator7.IsString)(),
  (0, import_class_validator7.IsNotEmpty)(),
  _ts_metadata17("design:type", String)
], ResetPasswordDto.prototype, "token", void 0);
_ts_decorate20([
  (0, import_swagger12.ApiProperty)({
    type: String,
    description: "The new password",
    example: "N3wS3cret!"
  }),
  (0, import_class_validator7.IsString)(),
  (0, import_class_validator7.IsNotEmpty)(),
  (0, import_class_validator7.MinLength)(8),
  _ts_metadata17("design:type", String)
], ResetPasswordDto.prototype, "newPassword", void 0);

// src/password-recovery/password-recovery.service.ts
var import_common13 = require("@nestjs/common");
var bcrypt2 = __toESM(require("bcryptjs"));
var crypto2 = __toESM(require("crypto"));
function _ts_decorate21(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate21, "_ts_decorate");
function _ts_metadata18(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata18, "_ts_metadata");
function _ts_param6(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param6, "_ts_param");
var DEFAULT_EXPIRES_MINUTES = 60;
var BCRYPT_ROUNDS2 = 12;
var _PasswordRecoveryService = class _PasswordRecoveryService {
  constructor(adapter, options) {
    __publicField(this, "adapter");
    __publicField(this, "options");
    this.adapter = adapter;
    this.options = options;
  }
  async requestReset(email) {
    const user = await this.adapter.findUserByEmail(email);
    if (!user || !user.isActive) return;
    const token = crypto2.randomBytes(32).toString("hex");
    const expiresInMinutes = this.options.passwordRecovery?.tokenExpiresInMinutes ?? DEFAULT_EXPIRES_MINUTES;
    const expiresAt = new Date(Date.now() + expiresInMinutes * 60 * 1e3);
    await this.adapter.createPasswordResetToken({
      token,
      userId: user.id,
      expiresAt
    });
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
      throw new import_common13.BadRequestException("Invalid or expired reset token");
    }
    const passwordHash = await bcrypt2.hash(newPassword, BCRYPT_ROUNDS2);
    await this.adapter.setUserPassword(record.userId, passwordHash);
    await this.adapter.consumePasswordResetToken(token);
    await this.adapter.revokeAllRefreshTokensForUser(record.userId);
  }
};
__name(_PasswordRecoveryService, "PasswordRecoveryService");
var PasswordRecoveryService = _PasswordRecoveryService;
PasswordRecoveryService = _ts_decorate21([
  (0, import_common13.Injectable)(),
  _ts_param6(0, (0, import_common13.Inject)(ADAPTIV_AUTH_ADAPTER)),
  _ts_param6(1, (0, import_common13.Inject)(ADAPTIV_AUTH_OPTIONS)),
  _ts_metadata18("design:type", Function),
  _ts_metadata18("design:paramtypes", [
    typeof IAuthAdapter === "undefined" ? Object : IAuthAdapter,
    typeof AdaptivAuthOptions === "undefined" ? Object : AdaptivAuthOptions
  ])
], PasswordRecoveryService);

// src/password-recovery/password-recovery.controller.ts
function _ts_decorate22(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate22, "_ts_decorate");
function _ts_metadata19(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata19, "_ts_metadata");
function _ts_param7(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param7, "_ts_param");
var _PasswordRecoveryController = class _PasswordRecoveryController {
  constructor(passwordRecoveryService) {
    __publicField(this, "passwordRecoveryService");
    this.passwordRecoveryService = passwordRecoveryService;
  }
  async forgotPassword(dto) {
    await this.passwordRecoveryService.requestReset(dto.email);
    return {
      message: "If that email exists, a reset link was sent."
    };
  }
  async validateToken(token) {
    const valid = await this.passwordRecoveryService.validateToken(token);
    return {
      valid
    };
  }
  async resetPassword(dto) {
    await this.passwordRecoveryService.resetPassword(dto.token, dto.newPassword);
    return {
      message: "Password reset successfully."
    };
  }
};
__name(_PasswordRecoveryController, "PasswordRecoveryController");
var PasswordRecoveryController = _PasswordRecoveryController;
_ts_decorate22([
  Public(),
  (0, import_common14.Post)("forgot-password"),
  (0, import_common14.HttpCode)(import_common14.HttpStatus.OK),
  (0, import_swagger13.ApiOperation)({
    summary: "Request a password reset email"
  }),
  (0, import_swagger13.ApiResponse)({
    status: 200,
    description: "If the email exists a reset link is sent (always returns 200 to avoid enumeration)"
  }),
  _ts_param7(0, (0, import_common14.Body)()),
  _ts_metadata19("design:type", Function),
  _ts_metadata19("design:paramtypes", [
    typeof ForgotPasswordDto === "undefined" ? Object : ForgotPasswordDto
  ]),
  _ts_metadata19("design:returntype", Promise)
], PasswordRecoveryController.prototype, "forgotPassword", null);
_ts_decorate22([
  Public(),
  (0, import_common14.Get)("reset-password/:token"),
  (0, import_swagger13.ApiOperation)({
    summary: "Validate a password reset token"
  }),
  (0, import_swagger13.ApiParam)({
    name: "token",
    description: "Password reset token"
  }),
  (0, import_swagger13.ApiResponse)({
    status: 200,
    description: "Token is valid"
  }),
  (0, import_swagger13.ApiResponse)({
    status: 400,
    description: "Token is invalid or expired"
  }),
  _ts_param7(0, (0, import_common14.Param)("token")),
  _ts_metadata19("design:type", Function),
  _ts_metadata19("design:paramtypes", [
    String
  ]),
  _ts_metadata19("design:returntype", Promise)
], PasswordRecoveryController.prototype, "validateToken", null);
_ts_decorate22([
  Public(),
  (0, import_common14.Post)("reset-password"),
  (0, import_common14.HttpCode)(import_common14.HttpStatus.OK),
  (0, import_swagger13.ApiOperation)({
    summary: "Reset password using a valid token"
  }),
  (0, import_swagger13.ApiResponse)({
    status: 200,
    description: "Password reset successfully"
  }),
  (0, import_swagger13.ApiResponse)({
    status: 400,
    description: "Invalid or expired token"
  }),
  _ts_param7(0, (0, import_common14.Body)()),
  _ts_metadata19("design:type", Function),
  _ts_metadata19("design:paramtypes", [
    typeof ResetPasswordDto === "undefined" ? Object : ResetPasswordDto
  ]),
  _ts_metadata19("design:returntype", Promise)
], PasswordRecoveryController.prototype, "resetPassword", null);
PasswordRecoveryController = _ts_decorate22([
  (0, import_swagger13.ApiTags)("password-recovery"),
  (0, import_common14.Controller)("auth"),
  _ts_metadata19("design:type", Function),
  _ts_metadata19("design:paramtypes", [
    typeof PasswordRecoveryService === "undefined" ? Object : PasswordRecoveryService
  ])
], PasswordRecoveryController);

// src/password-recovery/password-recovery.module.ts
function _ts_decorate23(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate23, "_ts_decorate");
var _PasswordRecoveryModule = class _PasswordRecoveryModule {
};
__name(_PasswordRecoveryModule, "PasswordRecoveryModule");
var PasswordRecoveryModule = _PasswordRecoveryModule;
PasswordRecoveryModule = _ts_decorate23([
  (0, import_common15.Module)({
    controllers: [
      PasswordRecoveryController
    ],
    providers: [
      PasswordRecoveryService
    ],
    exports: [
      PasswordRecoveryService
    ]
  })
], PasswordRecoveryModule);

// src/permissions/permissions.module.ts
var import_common18 = require("@nestjs/common");

// src/permissions/permissions.controller.ts
var import_common17 = require("@nestjs/common");
var import_swagger17 = require("@nestjs/swagger");

// src/permissions/dto/assign-permission.dto.ts
var import_swagger14 = require("@nestjs/swagger");
var import_class_validator8 = require("class-validator");
function _ts_decorate24(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate24, "_ts_decorate");
function _ts_metadata20(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata20, "_ts_metadata");
var _AssignPermissionDto = class _AssignPermissionDto {
  constructor() {
    __publicField(this, "permissionId");
  }
};
__name(_AssignPermissionDto, "AssignPermissionDto");
var AssignPermissionDto = _AssignPermissionDto;
_ts_decorate24([
  (0, import_swagger14.ApiProperty)({
    type: String,
    description: "ID of the permission to assign",
    example: "clxyz789"
  }),
  (0, import_class_validator8.IsString)(),
  (0, import_class_validator8.IsNotEmpty)(),
  _ts_metadata20("design:type", String)
], AssignPermissionDto.prototype, "permissionId", void 0);

// src/permissions/dto/create-permission.dto.ts
var import_swagger15 = require("@nestjs/swagger");
var import_class_validator9 = require("class-validator");
function _ts_decorate25(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate25, "_ts_decorate");
function _ts_metadata21(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata21, "_ts_metadata");
var _CreatePermissionDto = class _CreatePermissionDto {
  constructor() {
    __publicField(this, "key");
    __publicField(this, "description");
  }
};
__name(_CreatePermissionDto, "CreatePermissionDto");
var CreatePermissionDto = _CreatePermissionDto;
_ts_decorate25([
  (0, import_swagger15.ApiProperty)({
    type: String,
    description: 'Permission key in "resource:action" format',
    example: "posts:create"
  }),
  (0, import_class_validator9.IsString)(),
  (0, import_class_validator9.IsNotEmpty)(),
  (0, import_class_validator9.Matches)(/^[a-z0-9_-]+:[a-z0-9_-]+$/, {
    message: 'Permission key must follow the "resource:action" format'
  }),
  _ts_metadata21("design:type", String)
], CreatePermissionDto.prototype, "key", void 0);
_ts_decorate25([
  (0, import_swagger15.ApiPropertyOptional)({
    type: String,
    description: "Permission description",
    example: "Create new posts"
  }),
  (0, import_class_validator9.IsOptional)(),
  (0, import_class_validator9.IsString)(),
  _ts_metadata21("design:type", String)
], CreatePermissionDto.prototype, "description", void 0);

// src/permissions/dto/permission-response.dto.ts
var import_swagger16 = require("@nestjs/swagger");
function _ts_decorate26(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate26, "_ts_decorate");
function _ts_metadata22(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata22, "_ts_metadata");
var _PermissionResponseDto = class _PermissionResponseDto {
  constructor() {
    __publicField(this, "id");
    __publicField(this, "key");
    __publicField(this, "description");
    __publicField(this, "createdAt");
  }
  static from(permission) {
    const dto = new _PermissionResponseDto();
    dto.id = permission.id;
    dto.key = permission.key;
    dto.description = permission.description;
    dto.createdAt = permission.createdAt;
    return dto;
  }
};
__name(_PermissionResponseDto, "PermissionResponseDto");
var PermissionResponseDto = _PermissionResponseDto;
_ts_decorate26([
  (0, import_swagger16.ApiProperty)({
    type: String,
    description: "Permission ID",
    example: "clxyz789"
  }),
  _ts_metadata22("design:type", String)
], PermissionResponseDto.prototype, "id", void 0);
_ts_decorate26([
  (0, import_swagger16.ApiProperty)({
    type: String,
    description: "Permission key",
    example: "posts:create"
  }),
  _ts_metadata22("design:type", String)
], PermissionResponseDto.prototype, "key", void 0);
_ts_decorate26([
  (0, import_swagger16.ApiPropertyOptional)({
    type: String,
    description: "Permission description",
    example: "Create new posts",
    nullable: true
  }),
  _ts_metadata22("design:type", Object)
], PermissionResponseDto.prototype, "description", void 0);
_ts_decorate26([
  (0, import_swagger16.ApiProperty)({
    type: Date,
    description: "Creation timestamp"
  }),
  _ts_metadata22("design:type", typeof Date === "undefined" ? Object : Date)
], PermissionResponseDto.prototype, "createdAt", void 0);

// src/permissions/permissions.service.ts
var import_common16 = require("@nestjs/common");
function _ts_decorate27(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate27, "_ts_decorate");
function _ts_metadata23(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata23, "_ts_metadata");
function _ts_param8(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param8, "_ts_param");
var _PermissionsService = class _PermissionsService {
  constructor(adapter) {
    __publicField(this, "adapter");
    this.adapter = adapter;
  }
  async create(dto) {
    const existing = await this.adapter.findPermissionByKey(dto.key);
    if (existing) throw new import_common16.ConflictException("Permission key already exists");
    return this.adapter.createPermission(dto);
  }
  async findById(id) {
    const permission = await this.adapter.findPermissionById(id);
    if (!permission) throw new import_common16.NotFoundException("Permission not found");
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
__name(_PermissionsService, "PermissionsService");
var PermissionsService = _PermissionsService;
PermissionsService = _ts_decorate27([
  (0, import_common16.Injectable)(),
  _ts_param8(0, (0, import_common16.Inject)(ADAPTIV_AUTH_ADAPTER)),
  _ts_metadata23("design:type", Function),
  _ts_metadata23("design:paramtypes", [
    typeof IAuthAdapter === "undefined" ? Object : IAuthAdapter
  ])
], PermissionsService);

// src/permissions/permissions.controller.ts
function _ts_decorate28(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate28, "_ts_decorate");
function _ts_metadata24(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata24, "_ts_metadata");
function _ts_param9(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param9, "_ts_param");
var _PermissionsController = class _PermissionsController {
  constructor(permissionsService) {
    __publicField(this, "permissionsService");
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
__name(_PermissionsController, "PermissionsController");
var PermissionsController = _PermissionsController;
_ts_decorate28([
  (0, import_common17.Post)(),
  (0, import_swagger17.ApiOperation)({
    summary: "Create a new permission"
  }),
  (0, import_swagger17.ApiResponse)({
    status: 201,
    description: "Permission created",
    type: /* @__PURE__ */ __name(() => PermissionResponseDto, "type")
  }),
  (0, import_swagger17.ApiResponse)({
    status: 409,
    description: "Permission key already exists"
  }),
  _ts_param9(0, (0, import_common17.Body)()),
  _ts_metadata24("design:type", Function),
  _ts_metadata24("design:paramtypes", [
    typeof CreatePermissionDto === "undefined" ? Object : CreatePermissionDto
  ]),
  _ts_metadata24("design:returntype", Promise)
], PermissionsController.prototype, "create", null);
_ts_decorate28([
  (0, import_common17.Get)(),
  (0, import_swagger17.ApiOperation)({
    summary: "List all permissions"
  }),
  (0, import_swagger17.ApiResponse)({
    status: 200,
    description: "List of permissions",
    type: /* @__PURE__ */ __name(() => [
      PermissionResponseDto
    ], "type")
  }),
  _ts_metadata24("design:type", Function),
  _ts_metadata24("design:paramtypes", []),
  _ts_metadata24("design:returntype", Promise)
], PermissionsController.prototype, "list", null);
_ts_decorate28([
  (0, import_common17.Get)(":id"),
  (0, import_swagger17.ApiOperation)({
    summary: "Get a permission by ID"
  }),
  (0, import_swagger17.ApiParam)({
    name: "id",
    description: "Permission ID"
  }),
  (0, import_swagger17.ApiResponse)({
    status: 200,
    description: "Permission found",
    type: /* @__PURE__ */ __name(() => PermissionResponseDto, "type")
  }),
  (0, import_swagger17.ApiResponse)({
    status: 404,
    description: "Permission not found"
  }),
  _ts_param9(0, (0, import_common17.Param)("id")),
  _ts_metadata24("design:type", Function),
  _ts_metadata24("design:paramtypes", [
    String
  ]),
  _ts_metadata24("design:returntype", Promise)
], PermissionsController.prototype, "findOne", null);
_ts_decorate28([
  (0, import_common17.Delete)(":id"),
  (0, import_common17.HttpCode)(import_common17.HttpStatus.NO_CONTENT),
  (0, import_swagger17.ApiOperation)({
    summary: "Delete a permission"
  }),
  (0, import_swagger17.ApiParam)({
    name: "id",
    description: "Permission ID"
  }),
  (0, import_swagger17.ApiResponse)({
    status: 204,
    description: "Permission deleted"
  }),
  (0, import_swagger17.ApiResponse)({
    status: 404,
    description: "Permission not found"
  }),
  _ts_param9(0, (0, import_common17.Param)("id")),
  _ts_metadata24("design:type", Function),
  _ts_metadata24("design:paramtypes", [
    String
  ]),
  _ts_metadata24("design:returntype", Promise)
], PermissionsController.prototype, "remove", null);
_ts_decorate28([
  (0, import_common17.Post)("roles/:roleId/assign"),
  (0, import_swagger17.ApiOperation)({
    summary: "Assign a permission to a role"
  }),
  (0, import_swagger17.ApiParam)({
    name: "roleId",
    description: "Role ID"
  }),
  (0, import_swagger17.ApiResponse)({
    status: 201,
    description: "Permission assigned to role"
  }),
  (0, import_swagger17.ApiResponse)({
    status: 404,
    description: "Permission not found"
  }),
  _ts_param9(0, (0, import_common17.Param)("roleId")),
  _ts_param9(1, (0, import_common17.Body)()),
  _ts_metadata24("design:type", Function),
  _ts_metadata24("design:paramtypes", [
    String,
    typeof AssignPermissionDto === "undefined" ? Object : AssignPermissionDto
  ]),
  _ts_metadata24("design:returntype", Promise)
], PermissionsController.prototype, "assignToRole", null);
_ts_decorate28([
  (0, import_common17.Delete)("roles/:roleId/assign/:permissionId"),
  (0, import_common17.HttpCode)(import_common17.HttpStatus.NO_CONTENT),
  (0, import_swagger17.ApiOperation)({
    summary: "Remove a permission from a role"
  }),
  (0, import_swagger17.ApiParam)({
    name: "roleId",
    description: "Role ID"
  }),
  (0, import_swagger17.ApiParam)({
    name: "permissionId",
    description: "Permission ID"
  }),
  (0, import_swagger17.ApiResponse)({
    status: 204,
    description: "Permission removed from role"
  }),
  _ts_param9(0, (0, import_common17.Param)("roleId")),
  _ts_param9(1, (0, import_common17.Param)("permissionId")),
  _ts_metadata24("design:type", Function),
  _ts_metadata24("design:paramtypes", [
    String,
    String
  ]),
  _ts_metadata24("design:returntype", Promise)
], PermissionsController.prototype, "removeFromRole", null);
_ts_decorate28([
  (0, import_common17.Get)("roles/:roleId"),
  (0, import_swagger17.ApiOperation)({
    summary: "Get all permissions for a role"
  }),
  (0, import_swagger17.ApiParam)({
    name: "roleId",
    description: "Role ID"
  }),
  (0, import_swagger17.ApiResponse)({
    status: 200,
    description: "Role permissions",
    type: /* @__PURE__ */ __name(() => [
      PermissionResponseDto
    ], "type")
  }),
  _ts_param9(0, (0, import_common17.Param)("roleId")),
  _ts_metadata24("design:type", Function),
  _ts_metadata24("design:paramtypes", [
    String
  ]),
  _ts_metadata24("design:returntype", Promise)
], PermissionsController.prototype, "getRolePermissions", null);
_ts_decorate28([
  (0, import_common17.Get)("users/:userId"),
  (0, import_swagger17.ApiOperation)({
    summary: "Get all resolved permissions for a user (across all roles)"
  }),
  (0, import_swagger17.ApiParam)({
    name: "userId",
    description: "User ID"
  }),
  (0, import_swagger17.ApiResponse)({
    status: 200,
    description: "User permissions",
    type: /* @__PURE__ */ __name(() => [
      PermissionResponseDto
    ], "type")
  }),
  _ts_param9(0, (0, import_common17.Param)("userId")),
  _ts_metadata24("design:type", Function),
  _ts_metadata24("design:paramtypes", [
    String
  ]),
  _ts_metadata24("design:returntype", Promise)
], PermissionsController.prototype, "getUserPermissions", null);
PermissionsController = _ts_decorate28([
  (0, import_swagger17.ApiTags)("permissions"),
  (0, import_swagger17.ApiBearerAuth)(),
  (0, import_common17.UseGuards)(JwtAuthGuard),
  (0, import_common17.Controller)("permissions"),
  _ts_metadata24("design:type", Function),
  _ts_metadata24("design:paramtypes", [
    typeof PermissionsService === "undefined" ? Object : PermissionsService
  ])
], PermissionsController);

// src/permissions/permissions.module.ts
function _ts_decorate29(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate29, "_ts_decorate");
var _PermissionsModule = class _PermissionsModule {
};
__name(_PermissionsModule, "PermissionsModule");
var PermissionsModule = _PermissionsModule;
PermissionsModule = _ts_decorate29([
  (0, import_common18.Module)({
    controllers: [
      PermissionsController
    ],
    providers: [
      PermissionsService,
      JwtAuthGuard
    ],
    exports: [
      PermissionsService
    ]
  })
], PermissionsModule);

// src/profiles/profiles.module.ts
var import_common21 = require("@nestjs/common");

// src/profiles/profiles.controller.ts
var import_common20 = require("@nestjs/common");
var import_swagger20 = require("@nestjs/swagger");

// src/profiles/dto/profile-response.dto.ts
var import_swagger18 = require("@nestjs/swagger");
function _ts_decorate30(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate30, "_ts_decorate");
function _ts_metadata25(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata25, "_ts_metadata");
var _ProfileResponseDto = class _ProfileResponseDto {
  constructor() {
    __publicField(this, "id");
    __publicField(this, "userId");
    __publicField(this, "firstName");
    __publicField(this, "lastName");
    __publicField(this, "avatarUrl");
    __publicField(this, "metadata");
    __publicField(this, "createdAt");
    __publicField(this, "updatedAt");
  }
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
__name(_ProfileResponseDto, "ProfileResponseDto");
var ProfileResponseDto = _ProfileResponseDto;
_ts_decorate30([
  (0, import_swagger18.ApiProperty)({
    type: String,
    description: "Profile ID",
    example: "clxyzabc"
  }),
  _ts_metadata25("design:type", String)
], ProfileResponseDto.prototype, "id", void 0);
_ts_decorate30([
  (0, import_swagger18.ApiProperty)({
    type: String,
    description: "User ID this profile belongs to",
    example: "clxyz123"
  }),
  _ts_metadata25("design:type", String)
], ProfileResponseDto.prototype, "userId", void 0);
_ts_decorate30([
  (0, import_swagger18.ApiPropertyOptional)({
    type: String,
    description: "First name",
    example: "John",
    nullable: true
  }),
  _ts_metadata25("design:type", Object)
], ProfileResponseDto.prototype, "firstName", void 0);
_ts_decorate30([
  (0, import_swagger18.ApiPropertyOptional)({
    type: String,
    description: "Last name",
    example: "Doe",
    nullable: true
  }),
  _ts_metadata25("design:type", Object)
], ProfileResponseDto.prototype, "lastName", void 0);
_ts_decorate30([
  (0, import_swagger18.ApiPropertyOptional)({
    type: String,
    description: "Avatar URL",
    example: "https://example.com/avatar.png",
    nullable: true
  }),
  _ts_metadata25("design:type", Object)
], ProfileResponseDto.prototype, "avatarUrl", void 0);
_ts_decorate30([
  (0, import_swagger18.ApiProperty)({
    type: Object,
    description: "Extensible metadata",
    example: {}
  }),
  _ts_metadata25("design:type", typeof ProfileMetadata === "undefined" ? Object : ProfileMetadata)
], ProfileResponseDto.prototype, "metadata", void 0);
_ts_decorate30([
  (0, import_swagger18.ApiProperty)({
    type: Date,
    description: "Creation timestamp"
  }),
  _ts_metadata25("design:type", typeof Date === "undefined" ? Object : Date)
], ProfileResponseDto.prototype, "createdAt", void 0);
_ts_decorate30([
  (0, import_swagger18.ApiProperty)({
    type: Date,
    description: "Last update timestamp"
  }),
  _ts_metadata25("design:type", typeof Date === "undefined" ? Object : Date)
], ProfileResponseDto.prototype, "updatedAt", void 0);

// src/profiles/dto/update-profile.dto.ts
var import_swagger19 = require("@nestjs/swagger");
var import_class_validator10 = require("class-validator");
function _ts_decorate31(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate31, "_ts_decorate");
function _ts_metadata26(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata26, "_ts_metadata");
var _UpdateProfileDto = class _UpdateProfileDto {
  constructor() {
    __publicField(this, "firstName");
    __publicField(this, "lastName");
    __publicField(this, "avatarUrl");
    __publicField(this, "metadata");
  }
};
__name(_UpdateProfileDto, "UpdateProfileDto");
var UpdateProfileDto = _UpdateProfileDto;
_ts_decorate31([
  (0, import_swagger19.ApiPropertyOptional)({
    type: String,
    description: "First name",
    example: "John"
  }),
  (0, import_class_validator10.IsOptional)(),
  (0, import_class_validator10.IsString)(),
  _ts_metadata26("design:type", String)
], UpdateProfileDto.prototype, "firstName", void 0);
_ts_decorate31([
  (0, import_swagger19.ApiPropertyOptional)({
    type: String,
    description: "Last name",
    example: "Doe"
  }),
  (0, import_class_validator10.IsOptional)(),
  (0, import_class_validator10.IsString)(),
  _ts_metadata26("design:type", String)
], UpdateProfileDto.prototype, "lastName", void 0);
_ts_decorate31([
  (0, import_swagger19.ApiPropertyOptional)({
    type: String,
    description: "Avatar URL",
    example: "https://example.com/avatar.png"
  }),
  (0, import_class_validator10.IsOptional)(),
  (0, import_class_validator10.IsUrl)(),
  _ts_metadata26("design:type", String)
], UpdateProfileDto.prototype, "avatarUrl", void 0);
_ts_decorate31([
  (0, import_swagger19.ApiPropertyOptional)({
    type: Object,
    description: "Arbitrary key-value metadata for extensibility",
    example: {
      bio: "Developer",
      timezone: "UTC"
    }
  }),
  (0, import_class_validator10.IsOptional)(),
  _ts_metadata26("design:type", typeof ProfileMetadata === "undefined" ? Object : ProfileMetadata)
], UpdateProfileDto.prototype, "metadata", void 0);

// src/profiles/profiles.service.ts
var import_common19 = require("@nestjs/common");
function _ts_decorate32(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate32, "_ts_decorate");
function _ts_metadata27(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata27, "_ts_metadata");
function _ts_param10(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param10, "_ts_param");
var _ProfilesService = class _ProfilesService {
  constructor(adapter) {
    __publicField(this, "adapter");
    this.adapter = adapter;
  }
  async findByUserId(userId) {
    const profile = await this.adapter.findProfileByUserId(userId);
    if (!profile) throw new import_common19.NotFoundException("Profile not found");
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
__name(_ProfilesService, "ProfilesService");
var ProfilesService = _ProfilesService;
ProfilesService = _ts_decorate32([
  (0, import_common19.Injectable)(),
  _ts_param10(0, (0, import_common19.Inject)(ADAPTIV_AUTH_ADAPTER)),
  _ts_metadata27("design:type", Function),
  _ts_metadata27("design:paramtypes", [
    typeof IAuthAdapter === "undefined" ? Object : IAuthAdapter
  ])
], ProfilesService);

// src/profiles/profiles.controller.ts
function _ts_decorate33(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate33, "_ts_decorate");
function _ts_metadata28(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata28, "_ts_metadata");
function _ts_param11(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param11, "_ts_param");
var _ProfilesController = class _ProfilesController {
  constructor(profilesService) {
    __publicField(this, "profilesService");
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
__name(_ProfilesController, "ProfilesController");
var ProfilesController = _ProfilesController;
_ts_decorate33([
  (0, import_common20.Get)(),
  (0, import_swagger20.ApiOperation)({
    summary: "Get the profile for a user"
  }),
  (0, import_swagger20.ApiParam)({
    name: "userId",
    description: "User ID"
  }),
  (0, import_swagger20.ApiResponse)({
    status: 200,
    description: "Profile found",
    type: /* @__PURE__ */ __name(() => ProfileResponseDto, "type")
  }),
  (0, import_swagger20.ApiResponse)({
    status: 404,
    description: "Profile not found"
  }),
  _ts_param11(0, (0, import_common20.Param)("userId")),
  _ts_metadata28("design:type", Function),
  _ts_metadata28("design:paramtypes", [
    String
  ]),
  _ts_metadata28("design:returntype", Promise)
], ProfilesController.prototype, "findOne", null);
_ts_decorate33([
  (0, import_common20.Patch)(),
  (0, import_swagger20.ApiOperation)({
    summary: "Create or update the profile for a user"
  }),
  (0, import_swagger20.ApiParam)({
    name: "userId",
    description: "User ID"
  }),
  (0, import_swagger20.ApiResponse)({
    status: 200,
    description: "Profile upserted",
    type: /* @__PURE__ */ __name(() => ProfileResponseDto, "type")
  }),
  _ts_param11(0, (0, import_common20.Param)("userId")),
  _ts_param11(1, (0, import_common20.Body)()),
  _ts_metadata28("design:type", Function),
  _ts_metadata28("design:paramtypes", [
    String,
    typeof UpdateProfileDto === "undefined" ? Object : UpdateProfileDto
  ]),
  _ts_metadata28("design:returntype", Promise)
], ProfilesController.prototype, "upsert", null);
ProfilesController = _ts_decorate33([
  (0, import_swagger20.ApiTags)("profiles"),
  (0, import_swagger20.ApiBearerAuth)(),
  (0, import_common20.UseGuards)(JwtAuthGuard),
  (0, import_common20.Controller)("users/:userId/profile"),
  _ts_metadata28("design:type", Function),
  _ts_metadata28("design:paramtypes", [
    typeof ProfilesService === "undefined" ? Object : ProfilesService
  ])
], ProfilesController);

// src/profiles/profiles.module.ts
function _ts_decorate34(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate34, "_ts_decorate");
var _ProfilesModule = class _ProfilesModule {
};
__name(_ProfilesModule, "ProfilesModule");
var ProfilesModule = _ProfilesModule;
ProfilesModule = _ts_decorate34([
  (0, import_common21.Module)({
    controllers: [
      ProfilesController
    ],
    providers: [
      ProfilesService,
      JwtAuthGuard
    ],
    exports: [
      ProfilesService
    ]
  })
], ProfilesModule);

// src/roles/roles.module.ts
var import_common24 = require("@nestjs/common");

// src/roles/roles.controller.ts
var import_common23 = require("@nestjs/common");
var import_swagger24 = require("@nestjs/swagger");

// src/roles/dto/assign-role.dto.ts
var import_swagger21 = require("@nestjs/swagger");
var import_class_validator11 = require("class-validator");
function _ts_decorate35(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate35, "_ts_decorate");
function _ts_metadata29(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata29, "_ts_metadata");
var _AssignRoleDto = class _AssignRoleDto {
  constructor() {
    __publicField(this, "roleId");
  }
};
__name(_AssignRoleDto, "AssignRoleDto");
var AssignRoleDto = _AssignRoleDto;
_ts_decorate35([
  (0, import_swagger21.ApiProperty)({
    type: String,
    description: "ID of the role to assign",
    example: "clxyz456"
  }),
  (0, import_class_validator11.IsString)(),
  (0, import_class_validator11.IsNotEmpty)(),
  _ts_metadata29("design:type", String)
], AssignRoleDto.prototype, "roleId", void 0);

// src/roles/dto/create-role.dto.ts
var import_swagger22 = require("@nestjs/swagger");
var import_class_validator12 = require("class-validator");
function _ts_decorate36(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate36, "_ts_decorate");
function _ts_metadata30(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata30, "_ts_metadata");
var _CreateRoleDto = class _CreateRoleDto {
  constructor() {
    __publicField(this, "name");
    __publicField(this, "description");
  }
};
__name(_CreateRoleDto, "CreateRoleDto");
var CreateRoleDto = _CreateRoleDto;
_ts_decorate36([
  (0, import_swagger22.ApiProperty)({
    type: String,
    description: "Unique role name",
    example: "admin"
  }),
  (0, import_class_validator12.IsString)(),
  (0, import_class_validator12.IsNotEmpty)(),
  _ts_metadata30("design:type", String)
], CreateRoleDto.prototype, "name", void 0);
_ts_decorate36([
  (0, import_swagger22.ApiPropertyOptional)({
    type: String,
    description: "Role description",
    example: "Full system access"
  }),
  (0, import_class_validator12.IsOptional)(),
  (0, import_class_validator12.IsString)(),
  _ts_metadata30("design:type", String)
], CreateRoleDto.prototype, "description", void 0);

// src/roles/dto/role-response.dto.ts
var import_swagger23 = require("@nestjs/swagger");
function _ts_decorate37(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate37, "_ts_decorate");
function _ts_metadata31(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata31, "_ts_metadata");
var _RoleResponseDto = class _RoleResponseDto {
  constructor() {
    __publicField(this, "id");
    __publicField(this, "name");
    __publicField(this, "description");
    __publicField(this, "createdAt");
  }
  static from(role) {
    const dto = new _RoleResponseDto();
    dto.id = role.id;
    dto.name = role.name;
    dto.description = role.description;
    dto.createdAt = role.createdAt;
    return dto;
  }
};
__name(_RoleResponseDto, "RoleResponseDto");
var RoleResponseDto = _RoleResponseDto;
_ts_decorate37([
  (0, import_swagger23.ApiProperty)({
    type: String,
    description: "Role ID",
    example: "clxyz456"
  }),
  _ts_metadata31("design:type", String)
], RoleResponseDto.prototype, "id", void 0);
_ts_decorate37([
  (0, import_swagger23.ApiProperty)({
    type: String,
    description: "Role name",
    example: "admin"
  }),
  _ts_metadata31("design:type", String)
], RoleResponseDto.prototype, "name", void 0);
_ts_decorate37([
  (0, import_swagger23.ApiPropertyOptional)({
    type: String,
    description: "Role description",
    example: "Full system access",
    nullable: true
  }),
  _ts_metadata31("design:type", Object)
], RoleResponseDto.prototype, "description", void 0);
_ts_decorate37([
  (0, import_swagger23.ApiProperty)({
    type: Date,
    description: "Creation timestamp"
  }),
  _ts_metadata31("design:type", typeof Date === "undefined" ? Object : Date)
], RoleResponseDto.prototype, "createdAt", void 0);

// src/roles/roles.service.ts
var import_common22 = require("@nestjs/common");
function _ts_decorate38(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate38, "_ts_decorate");
function _ts_metadata32(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata32, "_ts_metadata");
function _ts_param12(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param12, "_ts_param");
var _RolesService = class _RolesService {
  constructor(adapter) {
    __publicField(this, "adapter");
    this.adapter = adapter;
  }
  async create(dto) {
    const existing = await this.adapter.findRoleByName(dto.name);
    if (existing) throw new import_common22.ConflictException("Role name already exists");
    return this.adapter.createRole(dto);
  }
  async findById(id) {
    const role = await this.adapter.findRoleById(id);
    if (!role) throw new import_common22.NotFoundException("Role not found");
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
__name(_RolesService, "RolesService");
var RolesService = _RolesService;
RolesService = _ts_decorate38([
  (0, import_common22.Injectable)(),
  _ts_param12(0, (0, import_common22.Inject)(ADAPTIV_AUTH_ADAPTER)),
  _ts_metadata32("design:type", Function),
  _ts_metadata32("design:paramtypes", [
    typeof IAuthAdapter === "undefined" ? Object : IAuthAdapter
  ])
], RolesService);

// src/roles/roles.controller.ts
function _ts_decorate39(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate39, "_ts_decorate");
function _ts_metadata33(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata33, "_ts_metadata");
function _ts_param13(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param13, "_ts_param");
var _RolesController = class _RolesController {
  constructor(rolesService) {
    __publicField(this, "rolesService");
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
__name(_RolesController, "RolesController");
var RolesController = _RolesController;
_ts_decorate39([
  (0, import_common23.Post)(),
  (0, import_swagger24.ApiOperation)({
    summary: "Create a new role"
  }),
  (0, import_swagger24.ApiResponse)({
    status: 201,
    description: "Role created",
    type: /* @__PURE__ */ __name(() => RoleResponseDto, "type")
  }),
  (0, import_swagger24.ApiResponse)({
    status: 409,
    description: "Role name already exists"
  }),
  _ts_param13(0, (0, import_common23.Body)()),
  _ts_metadata33("design:type", Function),
  _ts_metadata33("design:paramtypes", [
    typeof CreateRoleDto === "undefined" ? Object : CreateRoleDto
  ]),
  _ts_metadata33("design:returntype", Promise)
], RolesController.prototype, "create", null);
_ts_decorate39([
  (0, import_common23.Get)(),
  (0, import_swagger24.ApiOperation)({
    summary: "List all roles"
  }),
  (0, import_swagger24.ApiResponse)({
    status: 200,
    description: "List of roles",
    type: /* @__PURE__ */ __name(() => [
      RoleResponseDto
    ], "type")
  }),
  _ts_metadata33("design:type", Function),
  _ts_metadata33("design:paramtypes", []),
  _ts_metadata33("design:returntype", Promise)
], RolesController.prototype, "list", null);
_ts_decorate39([
  (0, import_common23.Get)(":id"),
  (0, import_swagger24.ApiOperation)({
    summary: "Get a role by ID"
  }),
  (0, import_swagger24.ApiParam)({
    name: "id",
    description: "Role ID"
  }),
  (0, import_swagger24.ApiResponse)({
    status: 200,
    description: "Role found",
    type: /* @__PURE__ */ __name(() => RoleResponseDto, "type")
  }),
  (0, import_swagger24.ApiResponse)({
    status: 404,
    description: "Role not found"
  }),
  _ts_param13(0, (0, import_common23.Param)("id")),
  _ts_metadata33("design:type", Function),
  _ts_metadata33("design:paramtypes", [
    String
  ]),
  _ts_metadata33("design:returntype", Promise)
], RolesController.prototype, "findOne", null);
_ts_decorate39([
  (0, import_common23.Delete)(":id"),
  (0, import_common23.HttpCode)(import_common23.HttpStatus.NO_CONTENT),
  (0, import_swagger24.ApiOperation)({
    summary: "Delete a role"
  }),
  (0, import_swagger24.ApiParam)({
    name: "id",
    description: "Role ID"
  }),
  (0, import_swagger24.ApiResponse)({
    status: 204,
    description: "Role deleted"
  }),
  (0, import_swagger24.ApiResponse)({
    status: 404,
    description: "Role not found"
  }),
  _ts_param13(0, (0, import_common23.Param)("id")),
  _ts_metadata33("design:type", Function),
  _ts_metadata33("design:paramtypes", [
    String
  ]),
  _ts_metadata33("design:returntype", Promise)
], RolesController.prototype, "remove", null);
_ts_decorate39([
  (0, import_common23.Post)("users/:userId/assign"),
  (0, import_swagger24.ApiOperation)({
    summary: "Assign a role to a user"
  }),
  (0, import_swagger24.ApiParam)({
    name: "userId",
    description: "User ID"
  }),
  (0, import_swagger24.ApiResponse)({
    status: 201,
    description: "Role assigned"
  }),
  (0, import_swagger24.ApiResponse)({
    status: 404,
    description: "Role not found"
  }),
  _ts_param13(0, (0, import_common23.Param)("userId")),
  _ts_param13(1, (0, import_common23.Body)()),
  _ts_metadata33("design:type", Function),
  _ts_metadata33("design:paramtypes", [
    String,
    typeof AssignRoleDto === "undefined" ? Object : AssignRoleDto
  ]),
  _ts_metadata33("design:returntype", Promise)
], RolesController.prototype, "assignToUser", null);
_ts_decorate39([
  (0, import_common23.Delete)("users/:userId/assign/:roleId"),
  (0, import_common23.HttpCode)(import_common23.HttpStatus.NO_CONTENT),
  (0, import_swagger24.ApiOperation)({
    summary: "Remove a role from a user"
  }),
  (0, import_swagger24.ApiParam)({
    name: "userId",
    description: "User ID"
  }),
  (0, import_swagger24.ApiParam)({
    name: "roleId",
    description: "Role ID"
  }),
  (0, import_swagger24.ApiResponse)({
    status: 204,
    description: "Role removed from user"
  }),
  _ts_param13(0, (0, import_common23.Param)("userId")),
  _ts_param13(1, (0, import_common23.Param)("roleId")),
  _ts_metadata33("design:type", Function),
  _ts_metadata33("design:paramtypes", [
    String,
    String
  ]),
  _ts_metadata33("design:returntype", Promise)
], RolesController.prototype, "removeFromUser", null);
_ts_decorate39([
  (0, import_common23.Get)("users/:userId"),
  (0, import_swagger24.ApiOperation)({
    summary: "Get all roles for a user"
  }),
  (0, import_swagger24.ApiParam)({
    name: "userId",
    description: "User ID"
  }),
  (0, import_swagger24.ApiResponse)({
    status: 200,
    description: "User roles",
    type: /* @__PURE__ */ __name(() => [
      RoleResponseDto
    ], "type")
  }),
  _ts_param13(0, (0, import_common23.Param)("userId")),
  _ts_metadata33("design:type", Function),
  _ts_metadata33("design:paramtypes", [
    String
  ]),
  _ts_metadata33("design:returntype", Promise)
], RolesController.prototype, "getUserRoles", null);
RolesController = _ts_decorate39([
  (0, import_swagger24.ApiTags)("roles"),
  (0, import_swagger24.ApiBearerAuth)(),
  (0, import_common23.UseGuards)(JwtAuthGuard),
  (0, import_common23.Controller)("roles"),
  _ts_metadata33("design:type", Function),
  _ts_metadata33("design:paramtypes", [
    typeof RolesService === "undefined" ? Object : RolesService
  ])
], RolesController);

// src/roles/roles.module.ts
function _ts_decorate40(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate40, "_ts_decorate");
var _RolesModule = class _RolesModule {
};
__name(_RolesModule, "RolesModule");
var RolesModule = _RolesModule;
RolesModule = _ts_decorate40([
  (0, import_common24.Module)({
    controllers: [
      RolesController
    ],
    providers: [
      RolesService,
      JwtAuthGuard
    ],
    exports: [
      RolesService
    ]
  })
], RolesModule);

// src/adaptiv-auth.module.ts
function _ts_decorate41(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate41, "_ts_decorate");
function createCoreProviders(options) {
  return [
    {
      provide: ADAPTIV_AUTH_OPTIONS,
      useValue: options
    },
    {
      provide: ADAPTIV_AUTH_ADAPTER,
      useValue: options.adapter
    }
  ];
}
__name(createCoreProviders, "createCoreProviders");
var _AdaptivAuthModule = class _AdaptivAuthModule {
  static register(options) {
    const coreProviders = createCoreProviders(options);
    return {
      module: _AdaptivAuthModule,
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
      useFactory: /* @__PURE__ */ __name((options) => options.adapter, "useFactory"),
      inject: [
        ADAPTIV_AUTH_OPTIONS
      ]
    };
    return {
      module: _AdaptivAuthModule,
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
      providers: [
        optionsProvider,
        adapterProvider
      ],
      exports: [
        optionsProvider,
        adapterProvider
      ]
    };
  }
};
__name(_AdaptivAuthModule, "AdaptivAuthModule");
var AdaptivAuthModule = _AdaptivAuthModule;
AdaptivAuthModule = _ts_decorate41([
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
__name(toUserRecord, "toUserRecord");
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
__name(toProfileRecord, "toProfileRecord");
function toRoleRecord(r) {
  return {
    id: r.id,
    name: r.name,
    description: r.description,
    createdAt: r.createdAt
  };
}
__name(toRoleRecord, "toRoleRecord");
function toPermissionRecord(p) {
  return {
    id: p.id,
    key: p.key,
    description: p.description,
    createdAt: p.createdAt
  };
}
__name(toPermissionRecord, "toPermissionRecord");
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
__name(toRefreshTokenRecord, "toRefreshTokenRecord");
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
__name(toPasswordResetTokenRecord, "toPasswordResetTokenRecord");
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var _PrismaAuthAdapter = class _PrismaAuthAdapter {
  constructor(prisma) {
    __publicField(this, "prisma");
    this.prisma = prisma;
  }
  // ---- User ----
  async findUserById(id) {
    const user = await this.prisma.user.findUnique({
      where: {
        id
      }
    });
    return user ? toUserRecord(user) : null;
  }
  async findUserByEmail(email) {
    const user = await this.prisma.user.findUnique({
      where: {
        email
      }
    });
    return user ? toUserRecord(user) : null;
  }
  async findUserByUsername(username) {
    const user = await this.prisma.user.findUnique({
      where: {
        username
      }
    });
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
      where: {
        id
      },
      data: {
        ...data.email !== void 0 && {
          email: data.email
        },
        ...data.username !== void 0 && {
          username: data.username
        },
        ...data.isActive !== void 0 && {
          isActive: data.isActive
        }
      }
    });
    return toUserRecord(user);
  }
  async deleteUser(id) {
    await this.prisma.user.delete({
      where: {
        id
      }
    });
  }
  async listUsers(opts) {
    const skip = opts.skip ?? 0;
    const take = opts.take ?? 20;
    const where = opts.search ? {
      OR: [
        {
          email: {
            contains: opts.search,
            mode: "insensitive"
          }
        },
        {
          username: {
            contains: opts.search,
            mode: "insensitive"
          }
        }
      ]
    } : void 0;
    const [users, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        where,
        skip,
        take,
        orderBy: {
          createdAt: "desc"
        }
      }),
      this.prisma.user.count({
        where
      })
    ]);
    return {
      data: users.map(toUserRecord),
      total,
      skip,
      take
    };
  }
  async setUserPassword(id, passwordHash) {
    await this.prisma.user.update({
      where: {
        id
      },
      data: {
        passwordHash
      }
    });
  }
  // ---- Profile ----
  async findProfileByUserId(userId) {
    const profile = await this.prisma.profile.findUnique({
      where: {
        userId
      }
    });
    return profile ? toProfileRecord(profile) : null;
  }
  async upsertProfile(userId, data) {
    const profile = await this.prisma.profile.upsert({
      where: {
        userId
      },
      create: {
        userId,
        firstName: data.firstName ?? null,
        lastName: data.lastName ?? null,
        avatarUrl: data.avatarUrl ?? null,
        metadata: data.metadata ?? {}
      },
      update: {
        ...data.firstName !== void 0 && {
          firstName: data.firstName
        },
        ...data.lastName !== void 0 && {
          lastName: data.lastName
        },
        ...data.avatarUrl !== void 0 && {
          avatarUrl: data.avatarUrl
        },
        ...data.metadata !== void 0 && {
          metadata: data.metadata
        }
      }
    });
    return toProfileRecord(profile);
  }
  // ---- Roles ----
  async createRole(data) {
    const role = await this.prisma.role.create({
      data: {
        name: data.name,
        description: data.description ?? null
      }
    });
    return toRoleRecord(role);
  }
  async findRoleById(id) {
    const role = await this.prisma.role.findUnique({
      where: {
        id
      }
    });
    return role ? toRoleRecord(role) : null;
  }
  async findRoleByName(name) {
    const role = await this.prisma.role.findUnique({
      where: {
        name
      }
    });
    return role ? toRoleRecord(role) : null;
  }
  async listRoles() {
    const roles = await this.prisma.role.findMany({
      orderBy: {
        name: "asc"
      }
    });
    return roles.map(toRoleRecord);
  }
  async deleteRole(id) {
    await this.prisma.role.delete({
      where: {
        id
      }
    });
  }
  async assignRoleToUser(userId, roleId) {
    await this.prisma.userRole.upsert({
      where: {
        userId_roleId: {
          userId,
          roleId
        }
      },
      create: {
        userId,
        roleId
      },
      update: {}
    });
  }
  async removeRoleFromUser(userId, roleId) {
    await this.prisma.userRole.delete({
      where: {
        userId_roleId: {
          userId,
          roleId
        }
      }
    });
  }
  async getUserRoles(userId) {
    const userRoles = await this.prisma.userRole.findMany({
      where: {
        userId
      },
      include: {
        role: true
      }
    });
    return userRoles.map((ur) => toRoleRecord(ur.role));
  }
  // ---- Permissions ----
  async createPermission(data) {
    const permission = await this.prisma.permission.create({
      data: {
        key: data.key,
        description: data.description ?? null
      }
    });
    return toPermissionRecord(permission);
  }
  async findPermissionById(id) {
    const permission = await this.prisma.permission.findUnique({
      where: {
        id
      }
    });
    return permission ? toPermissionRecord(permission) : null;
  }
  async findPermissionByKey(key) {
    const permission = await this.prisma.permission.findUnique({
      where: {
        key
      }
    });
    return permission ? toPermissionRecord(permission) : null;
  }
  async listPermissions() {
    const permissions = await this.prisma.permission.findMany({
      orderBy: {
        key: "asc"
      }
    });
    return permissions.map(toPermissionRecord);
  }
  async deletePermission(id) {
    await this.prisma.permission.delete({
      where: {
        id
      }
    });
  }
  async assignPermissionToRole(roleId, permissionId) {
    await this.prisma.rolePermission.upsert({
      where: {
        roleId_permissionId: {
          roleId,
          permissionId
        }
      },
      create: {
        roleId,
        permissionId
      },
      update: {}
    });
  }
  async removePermissionFromRole(roleId, permissionId) {
    await this.prisma.rolePermission.delete({
      where: {
        roleId_permissionId: {
          roleId,
          permissionId
        }
      }
    });
  }
  async getRolePermissions(roleId) {
    const rolePermissions = await this.prisma.rolePermission.findMany({
      where: {
        roleId
      },
      include: {
        permission: true
      }
    });
    return rolePermissions.map((rp) => toPermissionRecord(rp.permission));
  }
  async getUserPermissions(userId) {
    const userRoles = await this.prisma.userRole.findMany({
      where: {
        userId
      },
      include: {
        role: {
          include: {
            permissions: {
              include: {
                permission: true
              }
            }
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
      data: {
        token: data.token,
        userId: data.userId,
        expiresAt: data.expiresAt
      }
    });
    return toRefreshTokenRecord(rt);
  }
  async findRefreshToken(token) {
    const rt = await this.prisma.refreshToken.findUnique({
      where: {
        token
      }
    });
    return rt ? toRefreshTokenRecord(rt) : null;
  }
  async revokeRefreshToken(token) {
    await this.prisma.refreshToken.updateMany({
      where: {
        token,
        revokedAt: null
      },
      data: {
        revokedAt: /* @__PURE__ */ new Date()
      }
    });
  }
  async revokeAllRefreshTokensForUser(userId) {
    await this.prisma.refreshToken.updateMany({
      where: {
        userId,
        revokedAt: null
      },
      data: {
        revokedAt: /* @__PURE__ */ new Date()
      }
    });
  }
  async deleteExpiredRefreshTokens() {
    await this.prisma.refreshToken.deleteMany({
      where: {
        expiresAt: {
          lt: /* @__PURE__ */ new Date()
        }
      }
    });
  }
  // ---- Password Reset ----
  async createPasswordResetToken(data) {
    const prt = await this.prisma.passwordResetToken.create({
      data: {
        token: data.token,
        userId: data.userId,
        expiresAt: data.expiresAt
      }
    });
    return toPasswordResetTokenRecord(prt);
  }
  async findPasswordResetToken(token) {
    const prt = await this.prisma.passwordResetToken.findUnique({
      where: {
        token
      }
    });
    return prt ? toPasswordResetTokenRecord(prt) : null;
  }
  async consumePasswordResetToken(token) {
    await this.prisma.passwordResetToken.update({
      where: {
        token
      },
      data: {
        usedAt: /* @__PURE__ */ new Date()
      }
    });
  }
  async deleteExpiredPasswordResetTokens() {
    await this.prisma.passwordResetToken.deleteMany({
      where: {
        expiresAt: {
          lt: /* @__PURE__ */ new Date()
        }
      }
    });
  }
};
__name(_PrismaAuthAdapter, "PrismaAuthAdapter");
var PrismaAuthAdapter = _PrismaAuthAdapter;

// src/adapter/prisma/prisma.service.ts
var import_common26 = require("@nestjs/common");
var import_client = require("@prisma/client");
function _ts_decorate42(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate42, "_ts_decorate");
var _PrismaService = class _PrismaService extends import_client.PrismaClient {
  async onModuleInit() {
    await this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
};
__name(_PrismaService, "PrismaService");
var PrismaService = _PrismaService;
PrismaService = _ts_decorate42([
  (0, import_common26.Injectable)()
], PrismaService);

// src/adapter/prisma/prisma-auth.module.ts
var import_common27 = require("@nestjs/common");
function _ts_decorate43(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate43, "_ts_decorate");
var _PrismaAuthModule = class _PrismaAuthModule {
};
__name(_PrismaAuthModule, "PrismaAuthModule");
var PrismaAuthModule = _PrismaAuthModule;
PrismaAuthModule = _ts_decorate43([
  (0, import_common27.Module)({
    providers: [
      PrismaService
    ],
    exports: [
      PrismaService
    ]
  })
], PrismaAuthModule);

// src/guards/permissions.guard.ts
var import_common28 = require("@nestjs/common");
var import_core2 = require("@nestjs/core");
function _ts_decorate44(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate44, "_ts_decorate");
function _ts_metadata34(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata34, "_ts_metadata");
var _PermissionsGuard = class _PermissionsGuard {
  constructor(reflector) {
    __publicField(this, "reflector");
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
__name(_PermissionsGuard, "PermissionsGuard");
var PermissionsGuard = _PermissionsGuard;
PermissionsGuard = _ts_decorate44([
  (0, import_common28.Injectable)(),
  _ts_metadata34("design:type", Function),
  _ts_metadata34("design:paramtypes", [
    typeof import_core2.Reflector === "undefined" ? Object : import_core2.Reflector
  ])
], PermissionsGuard);

// src/guards/roles.guard.ts
var import_common29 = require("@nestjs/common");
var import_core3 = require("@nestjs/core");
function _ts_decorate45(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate45, "_ts_decorate");
function _ts_metadata35(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata35, "_ts_metadata");
var _RolesGuard = class _RolesGuard {
  constructor(reflector) {
    __publicField(this, "reflector");
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
__name(_RolesGuard, "RolesGuard");
var RolesGuard = _RolesGuard;
RolesGuard = _ts_decorate45([
  (0, import_common29.Injectable)(),
  _ts_metadata35("design:type", Function),
  _ts_metadata35("design:paramtypes", [
    typeof import_core3.Reflector === "undefined" ? Object : import_core3.Reflector
  ])
], RolesGuard);

// src/decorators/require-permissions.decorator.ts
var import_common30 = require("@nestjs/common");
var RequirePermissions = /* @__PURE__ */ __name((...permissions) => (0, import_common30.SetMetadata)(REQUIRED_PERMISSIONS_KEY, permissions), "RequirePermissions");

// src/decorators/require-roles.decorator.ts
var import_common31 = require("@nestjs/common");
var RequireRoles = /* @__PURE__ */ __name((...roles) => (0, import_common31.SetMetadata)(REQUIRED_ROLES_KEY, roles), "RequireRoles");

// src/swagger.ts
var import_swagger25 = require("@nestjs/swagger");
function setupAdaptivAuthSwagger(app, options) {
  const title = options?.title ?? "AdaptivAuth API";
  const version = options?.version ?? "1.0";
  const bearerName = options?.bearerName ?? "bearer";
  const path = options?.path ?? "api";
  const config = new import_swagger25.DocumentBuilder().setTitle(title).setVersion(version).addBearerAuth({
    type: "http",
    scheme: "bearer",
    bearerFormat: "JWT"
  }, bearerName).build();
  const document = import_swagger25.SwaggerModule.createDocument(app, config);
  import_swagger25.SwaggerModule.setup(path, app, document);
}
__name(setupAdaptivAuthSwagger, "setupAdaptivAuthSwagger");
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