import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';
import { ADAPTIV_AUTH_ADAPTER, ADAPTIV_AUTH_OPTIONS } from '../../adaptiv-auth.constants';
import type { AdaptivAuthOptions, JwtPayload } from '../../adaptiv-auth.interfaces';
import type { IAuthAdapter, UserRecord } from '../../adapter/adapter.interface';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  private readonly refreshJwtService: JwtService;

  constructor(
    @Inject(ADAPTIV_AUTH_ADAPTER) private readonly adapter: IAuthAdapter,
    @Inject(ADAPTIV_AUTH_OPTIONS) private readonly options: AdaptivAuthOptions,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {
    this.refreshJwtService = new JwtService({ secret: options.jwt.refreshSecret });
  }

  async validateUser(identifier: string, password: string): Promise<UserRecord | null> {
    const user = await this.adapter.findUserByIdentifier(identifier);
    if (!user || !user.isActive) return null;
    const valid = await this.usersService.validatePassword(user, password);
    return valid ? user : null;
  }

  async login(user: UserRecord): Promise<{ accessToken: string; refreshToken: string; user: UserRecord }> {
    const [roles, permissions] = await Promise.all([
      this.adapter.getUserRoles(user.id),
      this.adapter.getUserPermissions(user.id),
    ]);

    const payload: Omit<JwtPayload, 'iat' | 'exp'> = {
      sub: user.id,
      email: user.email,
      roles: roles.map((r) => r.name),
      permissions: permissions.map((p) => p.key),
    };

    const accessToken = this.jwtService.sign(payload);

    const refreshToken = await this.issueRefreshToken(user.id);

    return { accessToken, refreshToken, user };
  }

  async refresh(refreshToken: string): Promise<{ accessToken: string; refreshToken: string }> {
    const record = await this.adapter.findRefreshToken(refreshToken);
    if (!record || record.revokedAt !== null || record.expiresAt <= new Date()) {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }

    const user = await this.adapter.findUserById(record.userId);
    if (!user || !user.isActive) {
      throw new UnauthorizedException('User not found or inactive');
    }

    await this.adapter.revokeRefreshToken(refreshToken);

    const { accessToken, refreshToken: newRefreshToken } = await this.login(user);
    return { accessToken, refreshToken: newRefreshToken };
  }

  async me(userId: string): Promise<{ user: UserRecord; roles: string[]; permissions: string[] }> {
    const user = await this.adapter.findUserById(userId);
    if (!user || !user.isActive) {
      throw new UnauthorizedException('User not found or inactive');
    }
    const [roles, permissions] = await Promise.all([
      this.adapter.getUserRoles(userId),
      this.adapter.getUserPermissions(userId),
    ]);
    return {
      user,
      roles: roles.map((r) => r.name),
      permissions: permissions.map((p) => p.key),
    };
  }

  async logout(refreshToken: string): Promise<void> {
    await this.adapter.revokeRefreshToken(refreshToken);
  }

  async logoutAll(userId: string): Promise<void> {
    await this.adapter.revokeAllRefreshTokensForUser(userId);
  }

  private async issueRefreshToken(userId: string): Promise<string> {
    const token = crypto.randomBytes(64).toString('hex');
    const refreshExpiresIn = this.options.jwt.refreshExpiresIn;
    const expiresAt = this.parseExpiresIn(refreshExpiresIn);
    await this.adapter.createRefreshToken({ token, userId, expiresAt });
    return token;
  }

  private parseExpiresIn(expiresIn: string): Date {
    const match = /^(\d+)([smhd])$/.exec(expiresIn);
    if (!match) throw new Error(`Invalid expiresIn format: ${expiresIn}`);
    const value = parseInt(match[1], 10);
    const unit = match[2];
    const multipliers: Record<string, number> = { s: 1000, m: 60000, h: 3600000, d: 86400000 };
    return new Date(Date.now() + value * multipliers[unit]);
  }
}
