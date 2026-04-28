// Module
export { AdaptivAuthModule } from './adaptiv-auth.module';
export type { AdaptivAuthAsyncOptions } from './adaptiv-auth.module';

// Interfaces & Types
export type {
  AdaptivAuthOptions,
  AdaptivAuthJwtOptions,
  AdaptivAuthPasswordRecoveryOptions,
  AdaptivAuthControllersOptions,
  AdaptivAuthSwaggerOptions,
  JwtPayload,
} from './adaptiv-auth.interfaces';

// Constants
export {
  ADAPTIV_AUTH_OPTIONS,
  ADAPTIV_AUTH_ADAPTER,
  IS_PUBLIC_KEY,
  REQUIRED_PERMISSIONS_KEY,
  REQUIRED_ROLES_KEY,
} from './adaptiv-auth.constants';

// Adapter interface & types
export type {
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
} from './adapter/adapter.interface';

// Prisma adapter
export { PrismaAuthAdapter } from './adapter/prisma/prisma-auth.adapter';
export { PrismaService } from './adapter/prisma/prisma.service';
export { PrismaAuthModule } from './adapter/prisma/prisma-auth.module';

// Guards
export { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
export { LocalAuthGuard } from './modules/auth/guards/local-auth.guard';
export { PermissionsGuard } from './guards/permissions.guard';
export { RolesGuard } from './guards/roles.guard';

// Decorators
export { Public } from './decorators/public.decorator';
export { CurrentUser } from './decorators/current-user.decorator';
export { RequirePermissions } from './decorators/require-permissions.decorator';
export { RequireRoles } from './decorators/require-roles.decorator';

// Services
export { AuthService } from './modules/auth/auth.service';
export { UsersService } from './modules/users/users.service';
export { ProfilesService } from './modules/profiles/profiles.service';
export { RolesService } from './modules/roles/roles.service';
export { PermissionsService } from './modules/permissions/permissions.service';
export { PasswordRecoveryService } from './modules/password-recovery/password-recovery.service';

// DTOs — Auth
export { LoginDto } from './modules/auth/dto/login.dto';
export { MeResponseDto } from './modules/auth/dto/me-response.dto';
export { RefreshTokenDto } from './modules/auth/dto/refresh-token.dto';
export { TokenResponseDto, RefreshResponseDto } from './modules/auth/dto/token-response.dto';

// DTOs — Users
export { CreateUserDto } from './modules/users/dto/create-user.dto';
export { UpdateUserDto } from './modules/users/dto/update-user.dto';
export { ListUsersQueryDto } from './modules/users/dto/list-users-query.dto';
export { UserResponseDto } from './modules/users/dto/user-response.dto';
export { PaginatedUsersResponseDto } from './modules/users/dto/paginated-users-response.dto';

// DTOs — Profiles
export { UpdateProfileDto } from './modules/profiles/dto/update-profile.dto';
export { ProfileResponseDto } from './modules/profiles/dto/profile-response.dto';

// DTOs — Roles
export { CreateRoleDto } from './modules/roles/dto/create-role.dto';
export { AssignRoleDto } from './modules/roles/dto/assign-role.dto';
export { RoleResponseDto } from './modules/roles/dto/role-response.dto';

// DTOs — Permissions
export { CreatePermissionDto } from './modules/permissions/dto/create-permission.dto';
export { AssignPermissionDto } from './modules/permissions/dto/assign-permission.dto';
export { PermissionResponseDto } from './modules/permissions/dto/permission-response.dto';

// DTOs — Password Recovery
export { ForgotPasswordDto } from './modules/password-recovery/dto/forgot-password.dto';
export { ResetPasswordDto } from './modules/password-recovery/dto/reset-password.dto';

// Swagger helper
export { setupAdaptivAuthSwagger } from './swagger';
export type { SwaggerSetupOptions } from './swagger';
