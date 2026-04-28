import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: String, description: 'User email address', example: 'john@example.com' })
  @IsEmail()
  email!: string;

  @ApiPropertyOptional({ type: String, description: 'Unique username', example: 'johndoe' })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiProperty({ type: String, description: 'Plain-text password (will be hashed)', example: 'S3cret!Pass' })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password!: string;
}
