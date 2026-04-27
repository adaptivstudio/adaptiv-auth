import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'User email address', example: 'john@example.com' })
  @IsEmail()
  email!: string;

  @ApiPropertyOptional({ description: 'Unique username', example: 'johndoe' })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiProperty({ description: 'Plain-text password (will be hashed)', example: 'S3cret!Pass' })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password!: string;
}
