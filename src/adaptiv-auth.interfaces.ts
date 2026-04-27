import type { IAuthAdapter } from './adapter/adapter.interface';
import type { UserRecord } from './adapter/adapter.interface';

export interface AdaptivAuthJwtOptions {
  accessSecret: string;
  refreshSecret: string;
  accessExpiresIn: string;
  refreshExpiresIn: string;
}

export interface AdaptivAuthPasswordRecoveryOptions {
  tokenExpiresInMinutes?: number;
  onTokenGenerated: (email: string, token: string, user: UserRecord) => Promise<void>;
}

export interface AdaptivAuthControllersOptions {
  auth?: boolean;
  users?: boolean;
  profiles?: boolean;
  roles?: boolean;
  permissions?: boolean;
  passwordRecovery?: boolean;
}

export interface AdaptivAuthSwaggerOptions {
  title?: string;
  version?: string;
  bearerName?: string;
}

export interface AdaptivAuthOptions {
  adapter: IAuthAdapter;
  jwt: AdaptivAuthJwtOptions;
  passwordRecovery?: AdaptivAuthPasswordRecoveryOptions;
  controllers?: AdaptivAuthControllersOptions;
  swagger?: AdaptivAuthSwaggerOptions;
}

export interface JwtPayload {
  sub: string;
  email: string;
  roles: string[];
  permissions: string[];
  iat: number;
  exp: number;
}
