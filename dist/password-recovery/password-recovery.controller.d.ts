import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { PasswordRecoveryService } from './password-recovery.service';
export declare class PasswordRecoveryController {
    private readonly passwordRecoveryService;
    constructor(passwordRecoveryService: PasswordRecoveryService);
    forgotPassword(dto: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    validateToken(token: string): Promise<{
        valid: boolean;
    }>;
    resetPassword(dto: ResetPasswordDto): Promise<{
        message: string;
    }>;
}
//# sourceMappingURL=password-recovery.controller.d.ts.map