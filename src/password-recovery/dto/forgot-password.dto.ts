import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class ForgotPasswordDto {
  @ApiProperty({ description: 'Email address to send the reset link to', example: 'john@example.com' })
  @IsEmail()
  email!: string;
}
