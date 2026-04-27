import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import type { ProfileMetadata, ProfileRecord } from '../../adapter/adapter.interface';

export class ProfileResponseDto {
  @ApiProperty({ description: 'Profile ID', example: 'clxyzabc' })
  id!: string;

  @ApiProperty({ description: 'User ID this profile belongs to', example: 'clxyz123' })
  userId!: string;

  @ApiPropertyOptional({ description: 'First name', example: 'John', nullable: true })
  firstName!: string | null;

  @ApiPropertyOptional({ description: 'Last name', example: 'Doe', nullable: true })
  lastName!: string | null;

  @ApiPropertyOptional({ description: 'Avatar URL', example: 'https://example.com/avatar.png', nullable: true })
  avatarUrl!: string | null;

  @ApiProperty({ description: 'Extensible metadata', example: {}, type: Object })
  metadata!: ProfileMetadata;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt!: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt!: Date;

  static from(profile: ProfileRecord): ProfileResponseDto {
    const dto = new ProfileResponseDto();
    dto.id = profile.id;
    dto.userId = profile.userId;
    dto.firstName = profile.firstName;
    dto.lastName = profile.lastName;
    dto.avatarUrl = profile.avatarUrl;
    dto.metadata = profile.metadata;
    dto.createdAt = profile.createdAt;
    dto.updatedAt = profile.updatedAt;
    return dto;
  }
}
