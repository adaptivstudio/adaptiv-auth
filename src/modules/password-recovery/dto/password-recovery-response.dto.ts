import { ApiProperty } from '@nestjs/swagger';

export class PasswordRecoveryMessageResponseDto {
  @ApiProperty({
    type: String,
    description: 'Status message',
    example: 'If that email exists, a reset link was sent.',
  })
  message!: string;
}

export class PasswordRecoveryTokenValidationResponseDto {
  @ApiProperty({
    type: Boolean,
    description: 'Whether the token is valid',
    example: true,
  })
  valid!: boolean;
}
