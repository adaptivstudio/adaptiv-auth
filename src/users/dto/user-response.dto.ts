import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import type { UserRecord } from '../../adapter/adapter.interface';

export class UserResponseDto {
  @ApiProperty({ description: 'User ID', example: 'clxyz123' })
  id!: string;

  @ApiProperty({ description: 'Email address', example: 'john@example.com' })
  email!: string;

  @ApiPropertyOptional({ description: 'Username', example: 'johndoe', nullable: true })
  username!: string | null;

  @ApiProperty({ description: 'Whether the account is active', example: true })
  isActive!: boolean;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt!: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt!: Date;

  static from(user: UserRecord): UserResponseDto {
    const dto = new UserResponseDto();
    dto.id = user.id;
    dto.email = user.email;
    dto.username = user.username;
    dto.isActive = user.isActive;
    dto.createdAt = user.createdAt;
    dto.updatedAt = user.updatedAt;
    return dto;
  }
}


