import { ApiProperty } from '@nestjs/swagger';
import { UserResponseDto } from '../../users/dto/user-response.dto';

export class TokenResponseDto {
  @ApiProperty({ type: String, description: 'Short-lived JWT access token' })
  accessToken!: string;

  @ApiProperty({ type: String, description: 'Long-lived opaque refresh token' })
  refreshToken!: string;

  @ApiProperty({ type: () => UserResponseDto, required: false })
  user?: UserResponseDto;
}

export class RefreshResponseDto {
  @ApiProperty({ type: String, description: 'New short-lived JWT access token' })
  accessToken!: string;

  @ApiProperty({ type: String, description: 'New long-lived opaque refresh token (rotated)' })
  refreshToken!: string;
}
