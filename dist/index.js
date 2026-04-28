"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAdaptivAuthSwagger = exports.ResetPasswordDto = exports.ForgotPasswordDto = exports.PermissionResponseDto = exports.AssignPermissionDto = exports.CreatePermissionDto = exports.RoleResponseDto = exports.AssignRoleDto = exports.CreateRoleDto = exports.ProfileResponseDto = exports.UpdateProfileDto = exports.PaginatedUsersResponseDto = exports.UserResponseDto = exports.ListUsersQueryDto = exports.UpdateUserDto = exports.CreateUserDto = exports.RefreshResponseDto = exports.TokenResponseDto = exports.RefreshTokenDto = exports.MeResponseDto = exports.LoginDto = exports.PasswordRecoveryService = exports.PermissionsService = exports.RolesService = exports.ProfilesService = exports.UsersService = exports.AuthService = exports.RequireRoles = exports.RequirePermissions = exports.CurrentUser = exports.Public = exports.RolesGuard = exports.PermissionsGuard = exports.LocalAuthGuard = exports.JwtAuthGuard = exports.PrismaAuthModule = exports.PrismaService = exports.PrismaAuthAdapter = exports.REQUIRED_ROLES_KEY = exports.REQUIRED_PERMISSIONS_KEY = exports.IS_PUBLIC_KEY = exports.ADAPTIV_AUTH_ADAPTER = exports.ADAPTIV_AUTH_OPTIONS = exports.AdaptivAuthModule = void 0;
// Module
var adaptiv_auth_module_1 = require("./adaptiv-auth.module");
Object.defineProperty(exports, "AdaptivAuthModule", { enumerable: true, get: function () { return adaptiv_auth_module_1.AdaptivAuthModule; } });
// Constants
var adaptiv_auth_constants_1 = require("./adaptiv-auth.constants");
Object.defineProperty(exports, "ADAPTIV_AUTH_OPTIONS", { enumerable: true, get: function () { return adaptiv_auth_constants_1.ADAPTIV_AUTH_OPTIONS; } });
Object.defineProperty(exports, "ADAPTIV_AUTH_ADAPTER", { enumerable: true, get: function () { return adaptiv_auth_constants_1.ADAPTIV_AUTH_ADAPTER; } });
Object.defineProperty(exports, "IS_PUBLIC_KEY", { enumerable: true, get: function () { return adaptiv_auth_constants_1.IS_PUBLIC_KEY; } });
Object.defineProperty(exports, "REQUIRED_PERMISSIONS_KEY", { enumerable: true, get: function () { return adaptiv_auth_constants_1.REQUIRED_PERMISSIONS_KEY; } });
Object.defineProperty(exports, "REQUIRED_ROLES_KEY", { enumerable: true, get: function () { return adaptiv_auth_constants_1.REQUIRED_ROLES_KEY; } });
// Prisma adapter
var prisma_auth_adapter_1 = require("./adapter/prisma/prisma-auth.adapter");
Object.defineProperty(exports, "PrismaAuthAdapter", { enumerable: true, get: function () { return prisma_auth_adapter_1.PrismaAuthAdapter; } });
var prisma_service_1 = require("./adapter/prisma/prisma.service");
Object.defineProperty(exports, "PrismaService", { enumerable: true, get: function () { return prisma_service_1.PrismaService; } });
var prisma_auth_module_1 = require("./adapter/prisma/prisma-auth.module");
Object.defineProperty(exports, "PrismaAuthModule", { enumerable: true, get: function () { return prisma_auth_module_1.PrismaAuthModule; } });
// Guards
var jwt_auth_guard_1 = require("./modules/auth/guards/jwt-auth.guard");
Object.defineProperty(exports, "JwtAuthGuard", { enumerable: true, get: function () { return jwt_auth_guard_1.JwtAuthGuard; } });
var local_auth_guard_1 = require("./modules/auth/guards/local-auth.guard");
Object.defineProperty(exports, "LocalAuthGuard", { enumerable: true, get: function () { return local_auth_guard_1.LocalAuthGuard; } });
var permissions_guard_1 = require("./guards/permissions.guard");
Object.defineProperty(exports, "PermissionsGuard", { enumerable: true, get: function () { return permissions_guard_1.PermissionsGuard; } });
var roles_guard_1 = require("./guards/roles.guard");
Object.defineProperty(exports, "RolesGuard", { enumerable: true, get: function () { return roles_guard_1.RolesGuard; } });
// Decorators
var public_decorator_1 = require("./decorators/public.decorator");
Object.defineProperty(exports, "Public", { enumerable: true, get: function () { return public_decorator_1.Public; } });
var current_user_decorator_1 = require("./decorators/current-user.decorator");
Object.defineProperty(exports, "CurrentUser", { enumerable: true, get: function () { return current_user_decorator_1.CurrentUser; } });
var require_permissions_decorator_1 = require("./decorators/require-permissions.decorator");
Object.defineProperty(exports, "RequirePermissions", { enumerable: true, get: function () { return require_permissions_decorator_1.RequirePermissions; } });
var require_roles_decorator_1 = require("./decorators/require-roles.decorator");
Object.defineProperty(exports, "RequireRoles", { enumerable: true, get: function () { return require_roles_decorator_1.RequireRoles; } });
// Services
var auth_service_1 = require("./modules/auth/auth.service");
Object.defineProperty(exports, "AuthService", { enumerable: true, get: function () { return auth_service_1.AuthService; } });
var users_service_1 = require("./modules/users/users.service");
Object.defineProperty(exports, "UsersService", { enumerable: true, get: function () { return users_service_1.UsersService; } });
var profiles_service_1 = require("./modules/profiles/profiles.service");
Object.defineProperty(exports, "ProfilesService", { enumerable: true, get: function () { return profiles_service_1.ProfilesService; } });
var roles_service_1 = require("./modules/roles/roles.service");
Object.defineProperty(exports, "RolesService", { enumerable: true, get: function () { return roles_service_1.RolesService; } });
var permissions_service_1 = require("./modules/permissions/permissions.service");
Object.defineProperty(exports, "PermissionsService", { enumerable: true, get: function () { return permissions_service_1.PermissionsService; } });
var password_recovery_service_1 = require("./modules/password-recovery/password-recovery.service");
Object.defineProperty(exports, "PasswordRecoveryService", { enumerable: true, get: function () { return password_recovery_service_1.PasswordRecoveryService; } });
// DTOs — Auth
var login_dto_1 = require("./modules/auth/dto/login.dto");
Object.defineProperty(exports, "LoginDto", { enumerable: true, get: function () { return login_dto_1.LoginDto; } });
var me_response_dto_1 = require("./modules/auth/dto/me-response.dto");
Object.defineProperty(exports, "MeResponseDto", { enumerable: true, get: function () { return me_response_dto_1.MeResponseDto; } });
var refresh_token_dto_1 = require("./modules/auth/dto/refresh-token.dto");
Object.defineProperty(exports, "RefreshTokenDto", { enumerable: true, get: function () { return refresh_token_dto_1.RefreshTokenDto; } });
var token_response_dto_1 = require("./modules/auth/dto/token-response.dto");
Object.defineProperty(exports, "TokenResponseDto", { enumerable: true, get: function () { return token_response_dto_1.TokenResponseDto; } });
Object.defineProperty(exports, "RefreshResponseDto", { enumerable: true, get: function () { return token_response_dto_1.RefreshResponseDto; } });
// DTOs — Users
var create_user_dto_1 = require("./modules/users/dto/create-user.dto");
Object.defineProperty(exports, "CreateUserDto", { enumerable: true, get: function () { return create_user_dto_1.CreateUserDto; } });
var update_user_dto_1 = require("./modules/users/dto/update-user.dto");
Object.defineProperty(exports, "UpdateUserDto", { enumerable: true, get: function () { return update_user_dto_1.UpdateUserDto; } });
var list_users_query_dto_1 = require("./modules/users/dto/list-users-query.dto");
Object.defineProperty(exports, "ListUsersQueryDto", { enumerable: true, get: function () { return list_users_query_dto_1.ListUsersQueryDto; } });
var user_response_dto_1 = require("./modules/users/dto/user-response.dto");
Object.defineProperty(exports, "UserResponseDto", { enumerable: true, get: function () { return user_response_dto_1.UserResponseDto; } });
var paginated_users_response_dto_1 = require("./modules/users/dto/paginated-users-response.dto");
Object.defineProperty(exports, "PaginatedUsersResponseDto", { enumerable: true, get: function () { return paginated_users_response_dto_1.PaginatedUsersResponseDto; } });
// DTOs — Profiles
var update_profile_dto_1 = require("./modules/profiles/dto/update-profile.dto");
Object.defineProperty(exports, "UpdateProfileDto", { enumerable: true, get: function () { return update_profile_dto_1.UpdateProfileDto; } });
var profile_response_dto_1 = require("./modules/profiles/dto/profile-response.dto");
Object.defineProperty(exports, "ProfileResponseDto", { enumerable: true, get: function () { return profile_response_dto_1.ProfileResponseDto; } });
// DTOs — Roles
var create_role_dto_1 = require("./modules/roles/dto/create-role.dto");
Object.defineProperty(exports, "CreateRoleDto", { enumerable: true, get: function () { return create_role_dto_1.CreateRoleDto; } });
var assign_role_dto_1 = require("./modules/roles/dto/assign-role.dto");
Object.defineProperty(exports, "AssignRoleDto", { enumerable: true, get: function () { return assign_role_dto_1.AssignRoleDto; } });
var role_response_dto_1 = require("./modules/roles/dto/role-response.dto");
Object.defineProperty(exports, "RoleResponseDto", { enumerable: true, get: function () { return role_response_dto_1.RoleResponseDto; } });
// DTOs — Permissions
var create_permission_dto_1 = require("./modules/permissions/dto/create-permission.dto");
Object.defineProperty(exports, "CreatePermissionDto", { enumerable: true, get: function () { return create_permission_dto_1.CreatePermissionDto; } });
var assign_permission_dto_1 = require("./modules/permissions/dto/assign-permission.dto");
Object.defineProperty(exports, "AssignPermissionDto", { enumerable: true, get: function () { return assign_permission_dto_1.AssignPermissionDto; } });
var permission_response_dto_1 = require("./modules/permissions/dto/permission-response.dto");
Object.defineProperty(exports, "PermissionResponseDto", { enumerable: true, get: function () { return permission_response_dto_1.PermissionResponseDto; } });
// DTOs — Password Recovery
var forgot_password_dto_1 = require("./modules/password-recovery/dto/forgot-password.dto");
Object.defineProperty(exports, "ForgotPasswordDto", { enumerable: true, get: function () { return forgot_password_dto_1.ForgotPasswordDto; } });
var reset_password_dto_1 = require("./modules/password-recovery/dto/reset-password.dto");
Object.defineProperty(exports, "ResetPasswordDto", { enumerable: true, get: function () { return reset_password_dto_1.ResetPasswordDto; } });
// Swagger helper
var swagger_1 = require("./swagger");
Object.defineProperty(exports, "setupAdaptivAuthSwagger", { enumerable: true, get: function () { return swagger_1.setupAdaptivAuthSwagger; } });
//# sourceMappingURL=index.js.map