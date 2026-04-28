import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ADAPTIV_AUTH_OPTIONS } from '../../adaptiv-auth.constants';
import type { AdaptivAuthOptions } from '../../adaptiv-auth.interfaces';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [ADAPTIV_AUTH_OPTIONS],
      // expiresIn is typed as StringValue in newer ms, but accepts standard strings at runtime
      useFactory: (options: AdaptivAuthOptions) => ({
        secret: options.jwt.accessSecret,
        signOptions: { expiresIn: options.jwt.accessExpiresIn as unknown as number },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, LocalAuthGuard, JwtAuthGuard],
  exports: [AuthService, JwtAuthGuard],
})
export class AuthModule {}
