import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from '../../decorators/public.decorator';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { PasswordRecoveryMessageResponseDto, PasswordRecoveryTokenValidationResponseDto } from './dto/password-recovery-response.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { PasswordRecoveryService } from './password-recovery.service';

@ApiTags('password-recovery')
@Controller('auth')
export class PasswordRecoveryController {
  constructor(private readonly passwordRecoveryService: PasswordRecoveryService) {}

  @Public()
  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Request a password reset email',
    operationId: 'forgotPassword',
  })
  @ApiResponse({
    status: 200,
    description: 'If the email exists a reset link is sent (always returns 200 to avoid enumeration)',
    type: PasswordRecoveryMessageResponseDto,
  })
  async forgotPassword(@Body() dto: ForgotPasswordDto): Promise<PasswordRecoveryMessageResponseDto> {
    await this.passwordRecoveryService.requestReset(dto.email);
    return { message: 'If that email exists, a reset link was sent.' };
  }

  @Public()
  @Get('reset-password/:token')
  @ApiOperation({
    summary: 'Validate a password reset token',
    operationId: 'validateToken',
  })
  @ApiParam({ name: 'token', description: 'Password reset token' })
  @ApiResponse({
    status: 200,
    description: 'Token is valid',
    type: PasswordRecoveryTokenValidationResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Token is invalid or expired' })
  async validateToken(@Param('token') token: string): Promise<PasswordRecoveryTokenValidationResponseDto> {
    const valid = await this.passwordRecoveryService.validateToken(token);
    return { valid };
  }

  @Public()
  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Reset password using a valid token',
    operationId: 'resetPassword',
  })
  @ApiResponse({
    status: 200,
    description: 'Password reset successfully',
    type: PasswordRecoveryMessageResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid or expired token' })
  async resetPassword(@Body() dto: ResetPasswordDto): Promise<PasswordRecoveryMessageResponseDto> {
    await this.passwordRecoveryService.resetPassword(dto.token, dto.newPassword);
    return { message: 'Password reset successfully.' };
  }
}
