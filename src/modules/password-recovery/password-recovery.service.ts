import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import { ADAPTIV_AUTH_ADAPTER, ADAPTIV_AUTH_OPTIONS } from '../../adaptiv-auth.constants';
import type { AdaptivAuthOptions } from '../../adaptiv-auth.interfaces';
import type { IAuthAdapter } from '../../adapter/adapter.interface';

const DEFAULT_EXPIRES_MINUTES = 60;
const BCRYPT_ROUNDS = 12;

@Injectable()
export class PasswordRecoveryService {
  constructor(
    @Inject(ADAPTIV_AUTH_ADAPTER) private readonly adapter: IAuthAdapter,
    @Inject(ADAPTIV_AUTH_OPTIONS) private readonly options: AdaptivAuthOptions,
  ) {}

  async requestReset(email: string): Promise<void> {
    const user = await this.adapter.findUserByEmail(email);
    if (!user || !user.isActive) return;

    const token = crypto.randomBytes(32).toString('hex');
    const expiresInMinutes =
      this.options.passwordRecovery?.tokenExpiresInMinutes ?? DEFAULT_EXPIRES_MINUTES;
    const expiresAt = new Date(Date.now() + expiresInMinutes * 60 * 1000);

    await this.adapter.createPasswordResetToken({ token, userId: user.id, expiresAt });

    if (this.options.passwordRecovery?.onTokenGenerated) {
      await this.options.passwordRecovery.onTokenGenerated(email, token, user);
    }
  }

  async validateToken(token: string): Promise<boolean> {
    const record = await this.adapter.findPasswordResetToken(token);
    if (!record) return false;
    if (record.usedAt !== null) return false;
    if (record.expiresAt <= new Date()) return false;
    return true;
  }

  async resetPassword(token: string, newPassword: string): Promise<void> {
    const record = await this.adapter.findPasswordResetToken(token);
    if (!record || record.usedAt !== null || record.expiresAt <= new Date()) {
      throw new BadRequestException('Invalid or expired reset token');
    }

    const passwordHash = await bcrypt.hash(newPassword, BCRYPT_ROUNDS);
    await this.adapter.setUserPassword(record.userId, passwordHash);
    await this.adapter.consumePasswordResetToken(token);
    await this.adapter.revokeAllRefreshTokensForUser(record.userId);
  }
}
