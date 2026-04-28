import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiPropertyOptional({ type: String, description: 'New email address', example: 'new@example.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ type: String, description: 'New username', example: 'janedoe' })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiPropertyOptional({ type: Boolean, description: 'Whether the account is active', example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
