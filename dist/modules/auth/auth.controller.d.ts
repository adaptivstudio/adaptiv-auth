import type { Request as ExpressRequest } from 'express';
import type { JwtPayload } from '../../adaptiv-auth.interfaces';
import type { UserRecord } from '../../adapter/adapter.interface';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { MeResponseDto } from './dto/me-response.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { RefreshResponseDto, TokenResponseDto } from './dto/token-response.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(_dto: LoginDto, req: ExpressRequest & {
        user: UserRecord;
    }): Promise<TokenResponseDto>;
    refresh(dto: RefreshTokenDto): Promise<RefreshResponseDto>;
    me(user: JwtPayload): Promise<MeResponseDto>;
    logout(dto: RefreshTokenDto): Promise<void>;
    logoutAll(user: JwtPayload): Promise<void>;
}
//# sourceMappingURL=auth.controller.d.ts.map