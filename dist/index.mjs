var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

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
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";

// src/auth/guards/jwt-auth.guard.ts
import { Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
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
var _JwtAuthGuard = class _JwtAuthGuard extends AuthGuard("jwt") {
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
  Injectable(),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof Reflector === "undefined" ? Object : Reflector
  ])
], JwtAuthGuard);

// src/users/dto/create-user.dto.ts
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
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
  ApiProperty({
    type: String,
    description: "User email address",
    example: "john@example.com"
  }),
  IsEmail(),
  _ts_metadata2("design:type", String)
], CreateUserDto.prototype, "email", void 0);
_ts_decorate2([
  ApiPropertyOptional({
    type: String,
    description: "Unique username",
    example: "johndoe"
  }),
  IsOptional(),
  IsString(),
  _ts_metadata2("design:type", String)
], CreateUserDto.prototype, "username", void 0);
_ts_decorate2([
  ApiProperty({
    type: String,
    description: "Plain-text password (will be hashed)",
    example: "S3cret!Pass"
  }),
  IsString(),
  IsNotEmpty(),
  MinLength(8),
  _ts_metadata2("design:type", String)
], CreateUserDto.prototype, "password", void 0);

// src/users/dto/update-user.dto.ts
import { ApiPropertyOptional as ApiPropertyOptional2 } from "@nestjs/swagger";
import { IsBoolean, IsEmail as IsEmail2, IsOptional as IsOptional2, IsString as IsString2 } from "class-validator";
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
  ApiPropertyOptional2({
    type: String,
    description: "New email address",
    example: "new@example.com"
  }),
  IsOptional2(),
  IsEmail2(),
  _ts_metadata3("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
_ts_decorate3([
  ApiPropertyOptional2({
    type: String,
    description: "New username",
    example: "janedoe"
  }),
  IsOptional2(),
  IsString2(),
  _ts_metadata3("design:type", String)
], UpdateUserDto.prototype, "username", void 0);
_ts_decorate3([
  ApiPropertyOptional2({
    type: Boolean,
    description: "Whether the account is active",
    example: true
  }),
  IsOptional2(),
  IsBoolean(),
  _ts_metadata3("design:type", Boolean)
], UpdateUserDto.prototype, "isActive", void 0);

// src/users/dto/list-users-query.dto.ts
import { ApiPropertyOptional as ApiPropertyOptional3 } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsOptional as IsOptional3, IsString as IsString3, Min } from "class-validator";
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
  ApiPropertyOptional3({
    type: Number,
    description: "Number of records to skip",
    example: 0,
    default: 0
  }),
  IsOptional3(),
  Type(() => Number),
  IsInt(),
  Min(0),
  _ts_metadata4("design:type", Number)
], ListUsersQueryDto.prototype, "skip", void 0);
_ts_decorate4([
  ApiPropertyOptional3({
    type: Number,
    description: "Number of records to return",
    example: 20,
    default: 20
  }),
  IsOptional3(),
  Type(() => Number),
  IsInt(),
  Min(1),
  _ts_metadata4("design:type", Number)
], ListUsersQueryDto.prototype, "take", void 0);
_ts_decorate4([
  ApiPropertyOptional3({
    type: String,
    description: "Search by email or username",
    example: "john"
  }),
  IsOptional3(),
  IsString3(),
  _ts_metadata4("design:type", String)
], ListUsersQueryDto.prototype, "search", void 0);

// src/users/dto/user-response.dto.ts
import { ApiProperty as ApiProperty2, ApiPropertyOptional as ApiPropertyOptional4 } from "@nestjs/swagger";
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
  ApiProperty2({
    type: String,
    description: "User ID",
    example: "clxyz123"
  }),
  _ts_metadata5("design:type", String)
], UserResponseDto.prototype, "id", void 0);
_ts_decorate5([
  ApiProperty2({
    type: String,
    description: "Email address",
    example: "john@example.com"
  }),
  _ts_metadata5("design:type", String)
], UserResponseDto.prototype, "email", void 0);
_ts_decorate5([
  ApiPropertyOptional4({
    type: String,
    description: "Username",
    example: "johndoe",
    nullable: true
  }),
  _ts_metadata5("design:type", Object)
], UserResponseDto.prototype, "username", void 0);
_ts_decorate5([
  ApiProperty2({
    type: Boolean,
    description: "Whether the account is active",
    example: true
  }),
  _ts_metadata5("design:type", Boolean)
], UserResponseDto.prototype, "isActive", void 0);
_ts_decorate5([
  ApiProperty2({
    type: Date,
    description: "Creation timestamp"
  }),
  _ts_metadata5("design:type", typeof Date === "undefined" ? Object : Date)
], UserResponseDto.prototype, "createdAt", void 0);
_ts_decorate5([
  ApiProperty2({
    type: Date,
    description: "Last update timestamp"
  }),
  _ts_metadata5("design:type", typeof Date === "undefined" ? Object : Date)
], UserResponseDto.prototype, "updatedAt", void 0);

// src/users/dto/paginated-users-response.dto.ts
import { ApiProperty as ApiProperty3 } from "@nestjs/swagger";
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
  ApiProperty3({
    type: /* @__PURE__ */ __name(() => [
      UserResponseDto
    ], "type")
  }),
  _ts_metadata6("design:type", Array)
], PaginatedUsersResponseDto.prototype, "data", void 0);
_ts_decorate6([
  ApiProperty3({
    type: Number,
    description: "Total number of matching users",
    example: 42
  }),
  _ts_metadata6("design:type", Number)
], PaginatedUsersResponseDto.prototype, "total", void 0);
_ts_decorate6([
  ApiProperty3({
    type: Number,
    description: "Number of records skipped",
    example: 0
  }),
  _ts_metadata6("design:type", Number)
], PaginatedUsersResponseDto.prototype, "skip", void 0);
_ts_decorate6([
  ApiProperty3({
    type: Number,
    description: "Number of records returned",
    example: 20
  }),
  _ts_metadata6("design:type", Number)
], PaginatedUsersResponseDto.prototype, "take", void 0);

// src/users/users.service.ts
import { ConflictException, Inject, Injectable as Injectable2, NotFoundException } from "@nestjs/common";
import * as bcrypt from "bcryptjs";
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
      throw new ConflictException("Email already in use");
    }
    if (dto.username) {
      const existingByUsername = await this.adapter.findUserByUsername(dto.username);
      if (existingByUsername) {
        throw new ConflictException("Username already taken");
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
  Injectable2(),
  _ts_param(0, Inject(ADAPTIV_AUTH_ADAPTER)),
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
  Post(),
  ApiOperation({
    summary: "Create a new user"
  }),
  ApiResponse({
    status: 201,
    description: "User created",
    type: /* @__PURE__ */ __name(() => UserResponseDto, "type")
  }),
  ApiResponse({
    status: 409,
    description: "Email or username already in use"
  }),
  _ts_param2(0, Body()),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    typeof CreateUserDto === "undefined" ? Object : CreateUserDto
  ]),
  _ts_metadata8("design:returntype", Promise)
], UsersController.prototype, "create", null);
_ts_decorate8([
  Get(),
  ApiOperation({
    summary: "List users with optional pagination and search"
  }),
  ApiResponse({
    status: 200,
    description: "Paginated user list",
    type: /* @__PURE__ */ __name(() => PaginatedUsersResponseDto, "type")
  }),
  _ts_param2(0, Query()),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    typeof ListUsersQueryDto === "undefined" ? Object : ListUsersQueryDto
  ]),
  _ts_metadata8("design:returntype", Promise)
], UsersController.prototype, "list", null);
_ts_decorate8([
  Get(":id"),
  ApiOperation({
    summary: "Get a user by ID"
  }),
  ApiParam({
    name: "id",
    description: "User ID"
  }),
  ApiResponse({
    status: 200,
    description: "User found",
    type: /* @__PURE__ */ __name(() => UserResponseDto, "type")
  }),
  ApiResponse({
    status: 404,
    description: "User not found"
  }),
  _ts_param2(0, Param("id")),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    String
  ]),
  _ts_metadata8("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
_ts_decorate8([
  Patch(":id"),
  ApiOperation({
    summary: "Update a user"
  }),
  ApiParam({
    name: "id",
    description: "User ID"
  }),
  ApiResponse({
    status: 200,
    description: "User updated",
    type: /* @__PURE__ */ __name(() => UserResponseDto, "type")
  }),
  ApiResponse({
    status: 404,
    description: "User not found"
  }),
  _ts_param2(0, Param("id")),
  _ts_param2(1, Body()),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    String,
    typeof UpdateUserDto === "undefined" ? Object : UpdateUserDto
  ]),
  _ts_metadata8("design:returntype", Promise)
], UsersController.prototype, "update", null);
_ts_decorate8([
  Delete(":id"),
  HttpCode(HttpStatus.NO_CONTENT),
  ApiOperation({
    summary: "Delete a user"
  }),
  ApiParam({
    name: "id",
    description: "User ID"
  }),
  ApiResponse({
    status: 204,
    description: "User deleted"
  }),
  ApiResponse({
    status: 404,
    description: "User not found"
  }),
  _ts_param2(0, Param("id")),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    String
  ]),
  _ts_metadata8("design:returntype", Promise)
], UsersController.prototype, "remove", null);
UsersController = _ts_decorate8([
  ApiTags("users"),
  ApiBearerAuth(),
  UseGuards(JwtAuthGuard),
  Controller("users"),
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
  Module({
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
import { Body as Body2, Controller as Controller2, HttpCode as HttpCode2, HttpStatus as HttpStatus2, Post as Post2, Request, UseGuards as UseGuards2 } from "@nestjs/common";
import { ApiBearerAuth as ApiBearerAuth2, ApiOperation as ApiOperation2, ApiResponse as ApiResponse2, ApiTags as ApiTags2 } from "@nestjs/swagger";

// src/decorators/current-user.decorator.ts
import { createParamDecorator } from "@nestjs/common";
var CurrentUser = createParamDecorator((_data, ctx) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});

// src/decorators/public.decorator.ts
import { SetMetadata } from "@nestjs/common";
var Public = /* @__PURE__ */ __name(() => SetMetadata(IS_PUBLIC_KEY, true), "Public");

// src/auth/auth.service.ts
import { Inject as Inject2, Injectable as Injectable3, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as crypto from "crypto";
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
    this.refreshJwtService = new JwtService({
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
      throw new UnauthorizedException("Invalid or expired refresh token");
    }
    const user = await this.adapter.findUserById(record.userId);
    if (!user || !user.isActive) {
      throw new UnauthorizedException("User not found or inactive");
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
  Injectable3(),
  _ts_param3(0, Inject2(ADAPTIV_AUTH_ADAPTER)),
  _ts_param3(1, Inject2(ADAPTIV_AUTH_OPTIONS)),
  _ts_metadata9("design:type", Function),
  _ts_metadata9("design:paramtypes", [
    typeof IAuthAdapter === "undefined" ? Object : IAuthAdapter,
    typeof AdaptivAuthOptions === "undefined" ? Object : AdaptivAuthOptions,
    typeof JwtService === "undefined" ? Object : JwtService,
    typeof UsersService === "undefined" ? Object : UsersService
  ])
], AuthService);

// src/auth/dto/login.dto.ts
import { ApiProperty as ApiProperty4 } from "@nestjs/swagger";
import { IsNotEmpty as IsNotEmpty2, IsString as IsString4 } from "class-validator";
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
  ApiProperty4({
    type: String,
    description: "Email address or username",
    example: "john@example.com"
  }),
  IsString4(),
  IsNotEmpty2(),
  _ts_metadata10("design:type", String)
], LoginDto.prototype, "identifier", void 0);
_ts_decorate11([
  ApiProperty4({
    type: String,
    description: "Account password",
    example: "S3cret!Pass"
  }),
  IsString4(),
  IsNotEmpty2(),
  _ts_metadata10("design:type", String)
], LoginDto.prototype, "password", void 0);

// src/auth/dto/refresh-token.dto.ts
import { ApiProperty as ApiProperty5 } from "@nestjs/swagger";
import { IsNotEmpty as IsNotEmpty3, IsString as IsString5 } from "class-validator";
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
  ApiProperty5({
    type: String,
    description: "The refresh token issued at login",
    example: "abc123..."
  }),
  IsString5(),
  IsNotEmpty3(),
  _ts_metadata11("design:type", String)
], RefreshTokenDto.prototype, "refreshToken", void 0);

// src/auth/dto/token-response.dto.ts
import { ApiProperty as ApiProperty6 } from "@nestjs/swagger";
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
  ApiProperty6({
    type: String,
    description: "Short-lived JWT access token"
  }),
  _ts_metadata12("design:type", String)
], TokenResponseDto.prototype, "accessToken", void 0);
_ts_decorate13([
  ApiProperty6({
    type: String,
    description: "Long-lived opaque refresh token"
  }),
  _ts_metadata12("design:type", String)
], TokenResponseDto.prototype, "refreshToken", void 0);
_ts_decorate13([
  ApiProperty6({
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
  ApiProperty6({
    type: String,
    description: "New short-lived JWT access token"
  }),
  _ts_metadata12("design:type", String)
], RefreshResponseDto.prototype, "accessToken", void 0);
_ts_decorate13([
  ApiProperty6({
    type: String,
    description: "New long-lived opaque refresh token (rotated)"
  }),
  _ts_metadata12("design:type", String)
], RefreshResponseDto.prototype, "refreshToken", void 0);

// src/auth/guards/local-auth.guard.ts
import { Injectable as Injectable4 } from "@nestjs/common";
import { AuthGuard as AuthGuard2 } from "@nestjs/passport";
function _ts_decorate14(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate14, "_ts_decorate");
var _LocalAuthGuard = class _LocalAuthGuard extends AuthGuard2("local") {
};
__name(_LocalAuthGuard, "LocalAuthGuard");
var LocalAuthGuard = _LocalAuthGuard;
LocalAuthGuard = _ts_decorate14([
  Injectable4()
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
  UseGuards2(LocalAuthGuard),
  Post2("login"),
  HttpCode2(HttpStatus2.OK),
  ApiOperation2({
    summary: "Login with email/username and password"
  }),
  ApiResponse2({
    status: 200,
    description: "Login successful",
    type: /* @__PURE__ */ __name(() => TokenResponseDto, "type")
  }),
  ApiResponse2({
    status: 401,
    description: "Invalid credentials"
  }),
  _ts_param4(0, Body2()),
  _ts_param4(1, Request()),
  _ts_metadata13("design:type", Function),
  _ts_metadata13("design:paramtypes", [
    typeof LoginDto === "undefined" ? Object : LoginDto,
    Object
  ]),
  _ts_metadata13("design:returntype", Promise)
], AuthController.prototype, "login", null);
_ts_decorate15([
  Public(),
  Post2("refresh"),
  HttpCode2(HttpStatus2.OK),
  ApiOperation2({
    summary: "Rotate a refresh token and obtain new token pair"
  }),
  ApiResponse2({
    status: 200,
    description: "Tokens refreshed",
    type: /* @__PURE__ */ __name(() => RefreshResponseDto, "type")
  }),
  ApiResponse2({
    status: 401,
    description: "Invalid or expired refresh token"
  }),
  _ts_param4(0, Body2()),
  _ts_metadata13("design:type", Function),
  _ts_metadata13("design:paramtypes", [
    typeof RefreshTokenDto === "undefined" ? Object : RefreshTokenDto
  ]),
  _ts_metadata13("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
_ts_decorate15([
  UseGuards2(JwtAuthGuard),
  Post2("logout"),
  HttpCode2(HttpStatus2.NO_CONTENT),
  ApiBearerAuth2(),
  ApiOperation2({
    summary: "Revoke a single refresh token"
  }),
  ApiResponse2({
    status: 204,
    description: "Logged out"
  }),
  _ts_param4(0, Body2()),
  _ts_metadata13("design:type", Function),
  _ts_metadata13("design:paramtypes", [
    typeof RefreshTokenDto === "undefined" ? Object : RefreshTokenDto
  ]),
  _ts_metadata13("design:returntype", Promise)
], AuthController.prototype, "logout", null);
_ts_decorate15([
  UseGuards2(JwtAuthGuard),
  Post2("logout-all"),
  HttpCode2(HttpStatus2.NO_CONTENT),
  ApiBearerAuth2(),
  ApiOperation2({
    summary: "Revoke all refresh tokens for the current user"
  }),
  ApiResponse2({
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
  ApiTags2("auth"),
  Controller2("auth"),
  _ts_metadata13("design:type", Function),
  _ts_metadata13("design:paramtypes", [
    typeof AuthService === "undefined" ? Object : AuthService
  ])
], AuthController);

// src/auth/strategies/jwt.strategy.ts
import { Inject as Inject3, Injectable as Injectable5 } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
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
var _JwtStrategy = class _JwtStrategy extends PassportStrategy(Strategy) {
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
__name(_JwtStrategy, "JwtStrategy");
var JwtStrategy = _JwtStrategy;
JwtStrategy = _ts_decorate16([
  Injectable5(),
  _ts_param5(0, Inject3(ADAPTIV_AUTH_OPTIONS)),
  _ts_metadata14("design:type", Function),
  _ts_metadata14("design:paramtypes", [
    typeof AdaptivAuthOptions === "undefined" ? Object : AdaptivAuthOptions
  ])
], JwtStrategy);

// src/auth/strategies/local.strategy.ts
import { Injectable as Injectable6, UnauthorizedException as UnauthorizedException2 } from "@nestjs/common";
import { PassportStrategy as PassportStrategy2 } from "@nestjs/passport";
import { Strategy as Strategy2 } from "passport-local";
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
var _LocalStrategy = class _LocalStrategy extends PassportStrategy2(Strategy2) {
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
      throw new UnauthorizedException2("Invalid credentials");
    }
    return user;
  }
};
__name(_LocalStrategy, "LocalStrategy");
var LocalStrategy = _LocalStrategy;
LocalStrategy = _ts_decorate17([
  Injectable6(),
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
  Module2({
    imports: [
      UsersModule,
      PassportModule,
      JwtModule.registerAsync({
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
import { Module as Module3 } from "@nestjs/common";

// src/password-recovery/password-recovery.controller.ts
import { Body as Body3, Controller as Controller3, Get as Get2, HttpCode as HttpCode3, HttpStatus as HttpStatus3, Param as Param2, Post as Post3 } from "@nestjs/common";
import { ApiOperation as ApiOperation3, ApiParam as ApiParam2, ApiResponse as ApiResponse3, ApiTags as ApiTags3 } from "@nestjs/swagger";

// src/password-recovery/dto/forgot-password.dto.ts
import { ApiProperty as ApiProperty7 } from "@nestjs/swagger";
import { IsEmail as IsEmail3 } from "class-validator";
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
  ApiProperty7({
    type: String,
    description: "Email address to send the reset link to",
    example: "john@example.com"
  }),
  IsEmail3(),
  _ts_metadata16("design:type", String)
], ForgotPasswordDto.prototype, "email", void 0);

// src/password-recovery/dto/reset-password.dto.ts
import { ApiProperty as ApiProperty8 } from "@nestjs/swagger";
import { IsNotEmpty as IsNotEmpty4, IsString as IsString6, MinLength as MinLength2 } from "class-validator";
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
  ApiProperty8({
    type: String,
    description: "The password reset token received via email",
    example: "abc123..."
  }),
  IsString6(),
  IsNotEmpty4(),
  _ts_metadata17("design:type", String)
], ResetPasswordDto.prototype, "token", void 0);
_ts_decorate20([
  ApiProperty8({
    type: String,
    description: "The new password",
    example: "N3wS3cret!"
  }),
  IsString6(),
  IsNotEmpty4(),
  MinLength2(8),
  _ts_metadata17("design:type", String)
], ResetPasswordDto.prototype, "newPassword", void 0);

// src/password-recovery/password-recovery.service.ts
import { BadRequestException, Inject as Inject4, Injectable as Injectable7 } from "@nestjs/common";
import * as bcrypt2 from "bcryptjs";
import * as crypto2 from "crypto";
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
      throw new BadRequestException("Invalid or expired reset token");
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
  Injectable7(),
  _ts_param6(0, Inject4(ADAPTIV_AUTH_ADAPTER)),
  _ts_param6(1, Inject4(ADAPTIV_AUTH_OPTIONS)),
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
  Post3("forgot-password"),
  HttpCode3(HttpStatus3.OK),
  ApiOperation3({
    summary: "Request a password reset email"
  }),
  ApiResponse3({
    status: 200,
    description: "If the email exists a reset link is sent (always returns 200 to avoid enumeration)"
  }),
  _ts_param7(0, Body3()),
  _ts_metadata19("design:type", Function),
  _ts_metadata19("design:paramtypes", [
    typeof ForgotPasswordDto === "undefined" ? Object : ForgotPasswordDto
  ]),
  _ts_metadata19("design:returntype", Promise)
], PasswordRecoveryController.prototype, "forgotPassword", null);
_ts_decorate22([
  Public(),
  Get2("reset-password/:token"),
  ApiOperation3({
    summary: "Validate a password reset token"
  }),
  ApiParam2({
    name: "token",
    description: "Password reset token"
  }),
  ApiResponse3({
    status: 200,
    description: "Token is valid"
  }),
  ApiResponse3({
    status: 400,
    description: "Token is invalid or expired"
  }),
  _ts_param7(0, Param2("token")),
  _ts_metadata19("design:type", Function),
  _ts_metadata19("design:paramtypes", [
    String
  ]),
  _ts_metadata19("design:returntype", Promise)
], PasswordRecoveryController.prototype, "validateToken", null);
_ts_decorate22([
  Public(),
  Post3("reset-password"),
  HttpCode3(HttpStatus3.OK),
  ApiOperation3({
    summary: "Reset password using a valid token"
  }),
  ApiResponse3({
    status: 200,
    description: "Password reset successfully"
  }),
  ApiResponse3({
    status: 400,
    description: "Invalid or expired token"
  }),
  _ts_param7(0, Body3()),
  _ts_metadata19("design:type", Function),
  _ts_metadata19("design:paramtypes", [
    typeof ResetPasswordDto === "undefined" ? Object : ResetPasswordDto
  ]),
  _ts_metadata19("design:returntype", Promise)
], PasswordRecoveryController.prototype, "resetPassword", null);
PasswordRecoveryController = _ts_decorate22([
  ApiTags3("password-recovery"),
  Controller3("auth"),
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
  Module3({
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
import { Module as Module4 } from "@nestjs/common";

// src/permissions/permissions.controller.ts
import { Body as Body4, Controller as Controller4, Delete as Delete2, Get as Get3, HttpCode as HttpCode4, HttpStatus as HttpStatus4, Param as Param3, Post as Post4, UseGuards as UseGuards3 } from "@nestjs/common";
import { ApiBearerAuth as ApiBearerAuth3, ApiOperation as ApiOperation4, ApiParam as ApiParam3, ApiResponse as ApiResponse4, ApiTags as ApiTags4 } from "@nestjs/swagger";

// src/permissions/dto/assign-permission.dto.ts
import { ApiProperty as ApiProperty9 } from "@nestjs/swagger";
import { IsNotEmpty as IsNotEmpty5, IsString as IsString7 } from "class-validator";
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
  ApiProperty9({
    type: String,
    description: "ID of the permission to assign",
    example: "clxyz789"
  }),
  IsString7(),
  IsNotEmpty5(),
  _ts_metadata20("design:type", String)
], AssignPermissionDto.prototype, "permissionId", void 0);

// src/permissions/dto/create-permission.dto.ts
import { ApiProperty as ApiProperty10, ApiPropertyOptional as ApiPropertyOptional5 } from "@nestjs/swagger";
import { IsNotEmpty as IsNotEmpty6, IsOptional as IsOptional4, IsString as IsString8, Matches } from "class-validator";
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
  ApiProperty10({
    type: String,
    description: 'Permission key in "resource:action" format',
    example: "posts:create"
  }),
  IsString8(),
  IsNotEmpty6(),
  Matches(/^[a-z0-9_-]+:[a-z0-9_-]+$/, {
    message: 'Permission key must follow the "resource:action" format'
  }),
  _ts_metadata21("design:type", String)
], CreatePermissionDto.prototype, "key", void 0);
_ts_decorate25([
  ApiPropertyOptional5({
    type: String,
    description: "Permission description",
    example: "Create new posts"
  }),
  IsOptional4(),
  IsString8(),
  _ts_metadata21("design:type", String)
], CreatePermissionDto.prototype, "description", void 0);

// src/permissions/dto/permission-response.dto.ts
import { ApiProperty as ApiProperty11, ApiPropertyOptional as ApiPropertyOptional6 } from "@nestjs/swagger";
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
  ApiProperty11({
    type: String,
    description: "Permission ID",
    example: "clxyz789"
  }),
  _ts_metadata22("design:type", String)
], PermissionResponseDto.prototype, "id", void 0);
_ts_decorate26([
  ApiProperty11({
    type: String,
    description: "Permission key",
    example: "posts:create"
  }),
  _ts_metadata22("design:type", String)
], PermissionResponseDto.prototype, "key", void 0);
_ts_decorate26([
  ApiPropertyOptional6({
    type: String,
    description: "Permission description",
    example: "Create new posts",
    nullable: true
  }),
  _ts_metadata22("design:type", Object)
], PermissionResponseDto.prototype, "description", void 0);
_ts_decorate26([
  ApiProperty11({
    type: Date,
    description: "Creation timestamp"
  }),
  _ts_metadata22("design:type", typeof Date === "undefined" ? Object : Date)
], PermissionResponseDto.prototype, "createdAt", void 0);

// src/permissions/permissions.service.ts
import { ConflictException as ConflictException2, Inject as Inject5, Injectable as Injectable8, NotFoundException as NotFoundException2 } from "@nestjs/common";
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
__name(_PermissionsService, "PermissionsService");
var PermissionsService = _PermissionsService;
PermissionsService = _ts_decorate27([
  Injectable8(),
  _ts_param8(0, Inject5(ADAPTIV_AUTH_ADAPTER)),
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
  Post4(),
  ApiOperation4({
    summary: "Create a new permission"
  }),
  ApiResponse4({
    status: 201,
    description: "Permission created",
    type: /* @__PURE__ */ __name(() => PermissionResponseDto, "type")
  }),
  ApiResponse4({
    status: 409,
    description: "Permission key already exists"
  }),
  _ts_param9(0, Body4()),
  _ts_metadata24("design:type", Function),
  _ts_metadata24("design:paramtypes", [
    typeof CreatePermissionDto === "undefined" ? Object : CreatePermissionDto
  ]),
  _ts_metadata24("design:returntype", Promise)
], PermissionsController.prototype, "create", null);
_ts_decorate28([
  Get3(),
  ApiOperation4({
    summary: "List all permissions"
  }),
  ApiResponse4({
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
  Get3(":id"),
  ApiOperation4({
    summary: "Get a permission by ID"
  }),
  ApiParam3({
    name: "id",
    description: "Permission ID"
  }),
  ApiResponse4({
    status: 200,
    description: "Permission found",
    type: /* @__PURE__ */ __name(() => PermissionResponseDto, "type")
  }),
  ApiResponse4({
    status: 404,
    description: "Permission not found"
  }),
  _ts_param9(0, Param3("id")),
  _ts_metadata24("design:type", Function),
  _ts_metadata24("design:paramtypes", [
    String
  ]),
  _ts_metadata24("design:returntype", Promise)
], PermissionsController.prototype, "findOne", null);
_ts_decorate28([
  Delete2(":id"),
  HttpCode4(HttpStatus4.NO_CONTENT),
  ApiOperation4({
    summary: "Delete a permission"
  }),
  ApiParam3({
    name: "id",
    description: "Permission ID"
  }),
  ApiResponse4({
    status: 204,
    description: "Permission deleted"
  }),
  ApiResponse4({
    status: 404,
    description: "Permission not found"
  }),
  _ts_param9(0, Param3("id")),
  _ts_metadata24("design:type", Function),
  _ts_metadata24("design:paramtypes", [
    String
  ]),
  _ts_metadata24("design:returntype", Promise)
], PermissionsController.prototype, "remove", null);
_ts_decorate28([
  Post4("roles/:roleId/assign"),
  ApiOperation4({
    summary: "Assign a permission to a role"
  }),
  ApiParam3({
    name: "roleId",
    description: "Role ID"
  }),
  ApiResponse4({
    status: 201,
    description: "Permission assigned to role"
  }),
  ApiResponse4({
    status: 404,
    description: "Permission not found"
  }),
  _ts_param9(0, Param3("roleId")),
  _ts_param9(1, Body4()),
  _ts_metadata24("design:type", Function),
  _ts_metadata24("design:paramtypes", [
    String,
    typeof AssignPermissionDto === "undefined" ? Object : AssignPermissionDto
  ]),
  _ts_metadata24("design:returntype", Promise)
], PermissionsController.prototype, "assignToRole", null);
_ts_decorate28([
  Delete2("roles/:roleId/assign/:permissionId"),
  HttpCode4(HttpStatus4.NO_CONTENT),
  ApiOperation4({
    summary: "Remove a permission from a role"
  }),
  ApiParam3({
    name: "roleId",
    description: "Role ID"
  }),
  ApiParam3({
    name: "permissionId",
    description: "Permission ID"
  }),
  ApiResponse4({
    status: 204,
    description: "Permission removed from role"
  }),
  _ts_param9(0, Param3("roleId")),
  _ts_param9(1, Param3("permissionId")),
  _ts_metadata24("design:type", Function),
  _ts_metadata24("design:paramtypes", [
    String,
    String
  ]),
  _ts_metadata24("design:returntype", Promise)
], PermissionsController.prototype, "removeFromRole", null);
_ts_decorate28([
  Get3("roles/:roleId"),
  ApiOperation4({
    summary: "Get all permissions for a role"
  }),
  ApiParam3({
    name: "roleId",
    description: "Role ID"
  }),
  ApiResponse4({
    status: 200,
    description: "Role permissions",
    type: /* @__PURE__ */ __name(() => [
      PermissionResponseDto
    ], "type")
  }),
  _ts_param9(0, Param3("roleId")),
  _ts_metadata24("design:type", Function),
  _ts_metadata24("design:paramtypes", [
    String
  ]),
  _ts_metadata24("design:returntype", Promise)
], PermissionsController.prototype, "getRolePermissions", null);
_ts_decorate28([
  Get3("users/:userId"),
  ApiOperation4({
    summary: "Get all resolved permissions for a user (across all roles)"
  }),
  ApiParam3({
    name: "userId",
    description: "User ID"
  }),
  ApiResponse4({
    status: 200,
    description: "User permissions",
    type: /* @__PURE__ */ __name(() => [
      PermissionResponseDto
    ], "type")
  }),
  _ts_param9(0, Param3("userId")),
  _ts_metadata24("design:type", Function),
  _ts_metadata24("design:paramtypes", [
    String
  ]),
  _ts_metadata24("design:returntype", Promise)
], PermissionsController.prototype, "getUserPermissions", null);
PermissionsController = _ts_decorate28([
  ApiTags4("permissions"),
  ApiBearerAuth3(),
  UseGuards3(JwtAuthGuard),
  Controller4("permissions"),
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
  Module4({
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
import { Module as Module5 } from "@nestjs/common";

// src/profiles/profiles.controller.ts
import { Body as Body5, Controller as Controller5, Get as Get4, Param as Param4, Patch as Patch2, UseGuards as UseGuards4 } from "@nestjs/common";
import { ApiBearerAuth as ApiBearerAuth4, ApiOperation as ApiOperation5, ApiParam as ApiParam4, ApiResponse as ApiResponse5, ApiTags as ApiTags5 } from "@nestjs/swagger";

// src/profiles/dto/profile-response.dto.ts
import { ApiProperty as ApiProperty12, ApiPropertyOptional as ApiPropertyOptional7 } from "@nestjs/swagger";
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
  ApiProperty12({
    type: String,
    description: "Profile ID",
    example: "clxyzabc"
  }),
  _ts_metadata25("design:type", String)
], ProfileResponseDto.prototype, "id", void 0);
_ts_decorate30([
  ApiProperty12({
    type: String,
    description: "User ID this profile belongs to",
    example: "clxyz123"
  }),
  _ts_metadata25("design:type", String)
], ProfileResponseDto.prototype, "userId", void 0);
_ts_decorate30([
  ApiPropertyOptional7({
    type: String,
    description: "First name",
    example: "John",
    nullable: true
  }),
  _ts_metadata25("design:type", Object)
], ProfileResponseDto.prototype, "firstName", void 0);
_ts_decorate30([
  ApiPropertyOptional7({
    type: String,
    description: "Last name",
    example: "Doe",
    nullable: true
  }),
  _ts_metadata25("design:type", Object)
], ProfileResponseDto.prototype, "lastName", void 0);
_ts_decorate30([
  ApiPropertyOptional7({
    type: String,
    description: "Avatar URL",
    example: "https://example.com/avatar.png",
    nullable: true
  }),
  _ts_metadata25("design:type", Object)
], ProfileResponseDto.prototype, "avatarUrl", void 0);
_ts_decorate30([
  ApiProperty12({
    type: Object,
    description: "Extensible metadata",
    example: {}
  }),
  _ts_metadata25("design:type", typeof ProfileMetadata === "undefined" ? Object : ProfileMetadata)
], ProfileResponseDto.prototype, "metadata", void 0);
_ts_decorate30([
  ApiProperty12({
    type: Date,
    description: "Creation timestamp"
  }),
  _ts_metadata25("design:type", typeof Date === "undefined" ? Object : Date)
], ProfileResponseDto.prototype, "createdAt", void 0);
_ts_decorate30([
  ApiProperty12({
    type: Date,
    description: "Last update timestamp"
  }),
  _ts_metadata25("design:type", typeof Date === "undefined" ? Object : Date)
], ProfileResponseDto.prototype, "updatedAt", void 0);

// src/profiles/dto/update-profile.dto.ts
import { ApiPropertyOptional as ApiPropertyOptional8 } from "@nestjs/swagger";
import { IsOptional as IsOptional5, IsString as IsString9, IsUrl } from "class-validator";
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
  ApiPropertyOptional8({
    type: String,
    description: "First name",
    example: "John"
  }),
  IsOptional5(),
  IsString9(),
  _ts_metadata26("design:type", String)
], UpdateProfileDto.prototype, "firstName", void 0);
_ts_decorate31([
  ApiPropertyOptional8({
    type: String,
    description: "Last name",
    example: "Doe"
  }),
  IsOptional5(),
  IsString9(),
  _ts_metadata26("design:type", String)
], UpdateProfileDto.prototype, "lastName", void 0);
_ts_decorate31([
  ApiPropertyOptional8({
    type: String,
    description: "Avatar URL",
    example: "https://example.com/avatar.png"
  }),
  IsOptional5(),
  IsUrl(),
  _ts_metadata26("design:type", String)
], UpdateProfileDto.prototype, "avatarUrl", void 0);
_ts_decorate31([
  ApiPropertyOptional8({
    type: Object,
    description: "Arbitrary key-value metadata for extensibility",
    example: {
      bio: "Developer",
      timezone: "UTC"
    }
  }),
  IsOptional5(),
  _ts_metadata26("design:type", typeof ProfileMetadata === "undefined" ? Object : ProfileMetadata)
], UpdateProfileDto.prototype, "metadata", void 0);

// src/profiles/profiles.service.ts
import { Inject as Inject6, Injectable as Injectable9, NotFoundException as NotFoundException3 } from "@nestjs/common";
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
__name(_ProfilesService, "ProfilesService");
var ProfilesService = _ProfilesService;
ProfilesService = _ts_decorate32([
  Injectable9(),
  _ts_param10(0, Inject6(ADAPTIV_AUTH_ADAPTER)),
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
  Get4(),
  ApiOperation5({
    summary: "Get the profile for a user"
  }),
  ApiParam4({
    name: "userId",
    description: "User ID"
  }),
  ApiResponse5({
    status: 200,
    description: "Profile found",
    type: /* @__PURE__ */ __name(() => ProfileResponseDto, "type")
  }),
  ApiResponse5({
    status: 404,
    description: "Profile not found"
  }),
  _ts_param11(0, Param4("userId")),
  _ts_metadata28("design:type", Function),
  _ts_metadata28("design:paramtypes", [
    String
  ]),
  _ts_metadata28("design:returntype", Promise)
], ProfilesController.prototype, "findOne", null);
_ts_decorate33([
  Patch2(),
  ApiOperation5({
    summary: "Create or update the profile for a user"
  }),
  ApiParam4({
    name: "userId",
    description: "User ID"
  }),
  ApiResponse5({
    status: 200,
    description: "Profile upserted",
    type: /* @__PURE__ */ __name(() => ProfileResponseDto, "type")
  }),
  _ts_param11(0, Param4("userId")),
  _ts_param11(1, Body5()),
  _ts_metadata28("design:type", Function),
  _ts_metadata28("design:paramtypes", [
    String,
    typeof UpdateProfileDto === "undefined" ? Object : UpdateProfileDto
  ]),
  _ts_metadata28("design:returntype", Promise)
], ProfilesController.prototype, "upsert", null);
ProfilesController = _ts_decorate33([
  ApiTags5("profiles"),
  ApiBearerAuth4(),
  UseGuards4(JwtAuthGuard),
  Controller5("users/:userId/profile"),
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
  Module5({
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
import { Module as Module6 } from "@nestjs/common";

// src/roles/roles.controller.ts
import { Body as Body6, Controller as Controller6, Delete as Delete3, Get as Get5, HttpCode as HttpCode5, HttpStatus as HttpStatus5, Param as Param5, Post as Post5, UseGuards as UseGuards5 } from "@nestjs/common";
import { ApiBearerAuth as ApiBearerAuth5, ApiOperation as ApiOperation6, ApiParam as ApiParam5, ApiResponse as ApiResponse6, ApiTags as ApiTags6 } from "@nestjs/swagger";

// src/roles/dto/assign-role.dto.ts
import { ApiProperty as ApiProperty13 } from "@nestjs/swagger";
import { IsNotEmpty as IsNotEmpty7, IsString as IsString10 } from "class-validator";
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
  ApiProperty13({
    type: String,
    description: "ID of the role to assign",
    example: "clxyz456"
  }),
  IsString10(),
  IsNotEmpty7(),
  _ts_metadata29("design:type", String)
], AssignRoleDto.prototype, "roleId", void 0);

// src/roles/dto/create-role.dto.ts
import { ApiProperty as ApiProperty14, ApiPropertyOptional as ApiPropertyOptional9 } from "@nestjs/swagger";
import { IsNotEmpty as IsNotEmpty8, IsOptional as IsOptional6, IsString as IsString11 } from "class-validator";
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
  ApiProperty14({
    type: String,
    description: "Unique role name",
    example: "admin"
  }),
  IsString11(),
  IsNotEmpty8(),
  _ts_metadata30("design:type", String)
], CreateRoleDto.prototype, "name", void 0);
_ts_decorate36([
  ApiPropertyOptional9({
    type: String,
    description: "Role description",
    example: "Full system access"
  }),
  IsOptional6(),
  IsString11(),
  _ts_metadata30("design:type", String)
], CreateRoleDto.prototype, "description", void 0);

// src/roles/dto/role-response.dto.ts
import { ApiProperty as ApiProperty15, ApiPropertyOptional as ApiPropertyOptional10 } from "@nestjs/swagger";
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
  ApiProperty15({
    type: String,
    description: "Role ID",
    example: "clxyz456"
  }),
  _ts_metadata31("design:type", String)
], RoleResponseDto.prototype, "id", void 0);
_ts_decorate37([
  ApiProperty15({
    type: String,
    description: "Role name",
    example: "admin"
  }),
  _ts_metadata31("design:type", String)
], RoleResponseDto.prototype, "name", void 0);
_ts_decorate37([
  ApiPropertyOptional10({
    type: String,
    description: "Role description",
    example: "Full system access",
    nullable: true
  }),
  _ts_metadata31("design:type", Object)
], RoleResponseDto.prototype, "description", void 0);
_ts_decorate37([
  ApiProperty15({
    type: Date,
    description: "Creation timestamp"
  }),
  _ts_metadata31("design:type", typeof Date === "undefined" ? Object : Date)
], RoleResponseDto.prototype, "createdAt", void 0);

// src/roles/roles.service.ts
import { ConflictException as ConflictException3, Inject as Inject7, Injectable as Injectable10, NotFoundException as NotFoundException4 } from "@nestjs/common";
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
__name(_RolesService, "RolesService");
var RolesService = _RolesService;
RolesService = _ts_decorate38([
  Injectable10(),
  _ts_param12(0, Inject7(ADAPTIV_AUTH_ADAPTER)),
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
  Post5(),
  ApiOperation6({
    summary: "Create a new role"
  }),
  ApiResponse6({
    status: 201,
    description: "Role created",
    type: /* @__PURE__ */ __name(() => RoleResponseDto, "type")
  }),
  ApiResponse6({
    status: 409,
    description: "Role name already exists"
  }),
  _ts_param13(0, Body6()),
  _ts_metadata33("design:type", Function),
  _ts_metadata33("design:paramtypes", [
    typeof CreateRoleDto === "undefined" ? Object : CreateRoleDto
  ]),
  _ts_metadata33("design:returntype", Promise)
], RolesController.prototype, "create", null);
_ts_decorate39([
  Get5(),
  ApiOperation6({
    summary: "List all roles"
  }),
  ApiResponse6({
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
  Get5(":id"),
  ApiOperation6({
    summary: "Get a role by ID"
  }),
  ApiParam5({
    name: "id",
    description: "Role ID"
  }),
  ApiResponse6({
    status: 200,
    description: "Role found",
    type: /* @__PURE__ */ __name(() => RoleResponseDto, "type")
  }),
  ApiResponse6({
    status: 404,
    description: "Role not found"
  }),
  _ts_param13(0, Param5("id")),
  _ts_metadata33("design:type", Function),
  _ts_metadata33("design:paramtypes", [
    String
  ]),
  _ts_metadata33("design:returntype", Promise)
], RolesController.prototype, "findOne", null);
_ts_decorate39([
  Delete3(":id"),
  HttpCode5(HttpStatus5.NO_CONTENT),
  ApiOperation6({
    summary: "Delete a role"
  }),
  ApiParam5({
    name: "id",
    description: "Role ID"
  }),
  ApiResponse6({
    status: 204,
    description: "Role deleted"
  }),
  ApiResponse6({
    status: 404,
    description: "Role not found"
  }),
  _ts_param13(0, Param5("id")),
  _ts_metadata33("design:type", Function),
  _ts_metadata33("design:paramtypes", [
    String
  ]),
  _ts_metadata33("design:returntype", Promise)
], RolesController.prototype, "remove", null);
_ts_decorate39([
  Post5("users/:userId/assign"),
  ApiOperation6({
    summary: "Assign a role to a user"
  }),
  ApiParam5({
    name: "userId",
    description: "User ID"
  }),
  ApiResponse6({
    status: 201,
    description: "Role assigned"
  }),
  ApiResponse6({
    status: 404,
    description: "Role not found"
  }),
  _ts_param13(0, Param5("userId")),
  _ts_param13(1, Body6()),
  _ts_metadata33("design:type", Function),
  _ts_metadata33("design:paramtypes", [
    String,
    typeof AssignRoleDto === "undefined" ? Object : AssignRoleDto
  ]),
  _ts_metadata33("design:returntype", Promise)
], RolesController.prototype, "assignToUser", null);
_ts_decorate39([
  Delete3("users/:userId/assign/:roleId"),
  HttpCode5(HttpStatus5.NO_CONTENT),
  ApiOperation6({
    summary: "Remove a role from a user"
  }),
  ApiParam5({
    name: "userId",
    description: "User ID"
  }),
  ApiParam5({
    name: "roleId",
    description: "Role ID"
  }),
  ApiResponse6({
    status: 204,
    description: "Role removed from user"
  }),
  _ts_param13(0, Param5("userId")),
  _ts_param13(1, Param5("roleId")),
  _ts_metadata33("design:type", Function),
  _ts_metadata33("design:paramtypes", [
    String,
    String
  ]),
  _ts_metadata33("design:returntype", Promise)
], RolesController.prototype, "removeFromUser", null);
_ts_decorate39([
  Get5("users/:userId"),
  ApiOperation6({
    summary: "Get all roles for a user"
  }),
  ApiParam5({
    name: "userId",
    description: "User ID"
  }),
  ApiResponse6({
    status: 200,
    description: "User roles",
    type: /* @__PURE__ */ __name(() => [
      RoleResponseDto
    ], "type")
  }),
  _ts_param13(0, Param5("userId")),
  _ts_metadata33("design:type", Function),
  _ts_metadata33("design:paramtypes", [
    String
  ]),
  _ts_metadata33("design:returntype", Promise)
], RolesController.prototype, "getUserRoles", null);
RolesController = _ts_decorate39([
  ApiTags6("roles"),
  ApiBearerAuth5(),
  UseGuards5(JwtAuthGuard),
  Controller6("roles"),
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
  Module6({
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
import { Injectable as Injectable11 } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
function _ts_decorate42(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate42, "_ts_decorate");
var _PrismaService = class _PrismaService extends PrismaClient {
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
  Injectable11()
], PrismaService);

// src/adapter/prisma/prisma-auth.module.ts
import { Module as Module8 } from "@nestjs/common";
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
  Module8({
    providers: [
      PrismaService
    ],
    exports: [
      PrismaService
    ]
  })
], PrismaAuthModule);

// src/guards/permissions.guard.ts
import { ForbiddenException, Injectable as Injectable12 } from "@nestjs/common";
import { Reflector as Reflector2 } from "@nestjs/core";
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
      throw new ForbiddenException("Insufficient permissions");
    }
    return true;
  }
};
__name(_PermissionsGuard, "PermissionsGuard");
var PermissionsGuard = _PermissionsGuard;
PermissionsGuard = _ts_decorate44([
  Injectable12(),
  _ts_metadata34("design:type", Function),
  _ts_metadata34("design:paramtypes", [
    typeof Reflector2 === "undefined" ? Object : Reflector2
  ])
], PermissionsGuard);

// src/guards/roles.guard.ts
import { ForbiddenException as ForbiddenException2, Injectable as Injectable13 } from "@nestjs/common";
import { Reflector as Reflector3 } from "@nestjs/core";
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
      throw new ForbiddenException2("Insufficient role");
    }
    return true;
  }
};
__name(_RolesGuard, "RolesGuard");
var RolesGuard = _RolesGuard;
RolesGuard = _ts_decorate45([
  Injectable13(),
  _ts_metadata35("design:type", Function),
  _ts_metadata35("design:paramtypes", [
    typeof Reflector3 === "undefined" ? Object : Reflector3
  ])
], RolesGuard);

// src/decorators/require-permissions.decorator.ts
import { SetMetadata as SetMetadata2 } from "@nestjs/common";
var RequirePermissions = /* @__PURE__ */ __name((...permissions) => SetMetadata2(REQUIRED_PERMISSIONS_KEY, permissions), "RequirePermissions");

// src/decorators/require-roles.decorator.ts
import { SetMetadata as SetMetadata3 } from "@nestjs/common";
var RequireRoles = /* @__PURE__ */ __name((...roles) => SetMetadata3(REQUIRED_ROLES_KEY, roles), "RequireRoles");

// src/swagger.ts
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
function setupAdaptivAuthSwagger(app, options) {
  const title = options?.title ?? "AdaptivAuth API";
  const version = options?.version ?? "1.0";
  const bearerName = options?.bearerName ?? "bearer";
  const path = options?.path ?? "api";
  const config = new DocumentBuilder().setTitle(title).setVersion(version).addBearerAuth({
    type: "http",
    scheme: "bearer",
    bearerFormat: "JWT"
  }, bearerName).build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(path, app, document);
}
__name(setupAdaptivAuthSwagger, "setupAdaptivAuthSwagger");
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