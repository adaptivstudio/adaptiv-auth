import { JwtService } from '@nestjs/jwt';
import type { AdaptivAuthOptions } from '../adaptiv-auth.interfaces';
import type { IAuthAdapter, UserRecord } from '../adapter/adapter.interface';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private readonly adapter;
    private readonly options;
    private readonly jwtService;
    private readonly usersService;
    private readonly refreshJwtService;
    constructor(adapter: IAuthAdapter, options: AdaptivAuthOptions, jwtService: JwtService, usersService: UsersService);
    validateUser(identifier: string, password: string): Promise<UserRecord | null>;
    login(user: UserRecord): Promise<{
        accessToken: string;
        refreshToken: string;
        user: UserRecord;
    }>;
    refresh(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(refreshToken: string): Promise<void>;
    logoutAll(userId: string): Promise<void>;
    private issueRefreshToken;
    private parseExpiresIn;
}
//# sourceMappingURL=auth.service.d.ts.map