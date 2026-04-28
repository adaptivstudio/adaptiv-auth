import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { PasswordRecoveryMessageResponseDto, PasswordRecoveryTokenValidationResponseDto } from './dto/password-recovery-response.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { PasswordRecoveryService } from './password-recovery.service';
export declare class PasswordRecoveryController {
    private readonly passwordRecoveryService;
    constructor(passwordRecoveryService: PasswordRecoveryService);
    forgotPassword(dto: ForgotPasswordDto): Promise<PasswordRecoveryMessageResponseDto>;
    validateToken(token: string): Promise<PasswordRecoveryTokenValidationResponseDto>;
    resetPassword(dto: ResetPasswordDto): Promise<PasswordRecoveryMessageResponseDto>;
}
//# sourceMappingURL=password-recovery.controller.d.ts.map