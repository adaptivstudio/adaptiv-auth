import { SetMetadata } from '@nestjs/common';
import { REQUIRED_ROLES_KEY } from '../adaptiv-auth.constants';

export const RequireRoles = (...roles: string[]): ReturnType<typeof SetMetadata> =>
  SetMetadata(REQUIRED_ROLES_KEY, roles);
