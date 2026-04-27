import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @ApiProperty({ description: 'The password reset token received via email', example: 'abc123...' })
  @IsString()
  @IsNotEmpty()
  token!: string;

  @ApiProperty({ description: 'The new password', example: 'N3wS3cret!' })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  newPassword!: string;
}
