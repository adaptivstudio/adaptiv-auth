import type { AdaptivAuthOptions } from '../../adaptiv-auth.interfaces';
import type { IAuthAdapter } from '../../adapter/adapter.interface';
export declare class PasswordRecoveryService {
    private readonly adapter;
    private readonly options;
    constructor(adapter: IAuthAdapter, options: AdaptivAuthOptions);
    requestReset(email: string): Promise<void>;
    validateToken(token: string): Promise<boolean>;
    resetPassword(token: string, newPassword: string): Promise<void>;
}
//# sourceMappingURL=password-recovery.service.d.ts.map