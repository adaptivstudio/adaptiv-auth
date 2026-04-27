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
export { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
export { LocalAuthGuard } from './auth/guards/local-auth.guard';
export { PermissionsGuard } from './guards/permissions.guard';
export { RolesGuard } from './guards/roles.guard';

// Decorators
export { Public } from './decorators/public.decorator';
export { CurrentUser } from './decorators/current-user.decorator';
export { RequirePermissions } from './decorators/require-permissions.decorator';
export { RequireRoles } from './decorators/require-roles.decorator';

// Services
export { AuthService } from './auth/auth.service';
export { UsersService } from './users/users.service';
export { ProfilesService } from './profiles/profiles.service';
export { RolesService } from './roles/roles.service';
export { PermissionsService } from './permissions/permissions.service';
export { PasswordRecoveryService } from './password-recovery/password-recovery.service';

// DTOs — Auth
export { LoginDto } from './auth/dto/login.dto';
export { RefreshTokenDto } from './auth/dto/refresh-token.dto';
export { TokenResponseDto, RefreshResponseDto } from './auth/dto/token-response.dto';

// DTOs — Users
export { CreateUserDto } from './users/dto/create-user.dto';
export { UpdateUserDto } from './users/dto/update-user.dto';
export { ListUsersQueryDto } from './users/dto/list-users-query.dto';
export { UserResponseDto, PaginatedUsersResponseDto } from './users/dto/user-response.dto';

// DTOs — Profiles
export { UpdateProfileDto } from './profiles/dto/update-profile.dto';
export { ProfileResponseDto } from './profiles/dto/profile-response.dto';

// DTOs — Roles
export { CreateRoleDto } from './roles/dto/create-role.dto';
export { AssignRoleDto } from './roles/dto/assign-role.dto';
export { RoleResponseDto } from './roles/dto/role-response.dto';

// DTOs — Permissions
export { CreatePermissionDto } from './permissions/dto/create-permission.dto';
export { AssignPermissionDto } from './permissions/dto/assign-permission.dto';
export { PermissionResponseDto } from './permissions/dto/permission-response.dto';

// DTOs — Password Recovery
export { ForgotPasswordDto } from './password-recovery/dto/forgot-password.dto';
export { ResetPasswordDto } from './password-recovery/dto/reset-password.dto';

// Swagger helper
export { setupAdaptivAuthSwagger } from './swagger';
export type { SwaggerSetupOptions } from './swagger';
