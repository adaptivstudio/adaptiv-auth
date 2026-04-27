import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    type: String,
    description: 'Email address or username',
    example: 'john@example.com',
  })
  @IsString()
  @IsNotEmpty()
  identifier!: string;

  @ApiProperty({ type: String, description: 'Account password', example: 'S3cret!Pass' })
  @IsString()
  @IsNotEmpty()
  password!: string;
}
