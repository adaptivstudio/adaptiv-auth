import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import type { ProfileMetadata, ProfileRecord } from '../../adapter/adapter.interface';

export class ProfileResponseDto {
  @ApiProperty({ type: String, description: 'Profile ID', example: 'clxyzabc' })
  id!: string;

  @ApiProperty({ type: String, description: 'User ID this profile belongs to', example: 'clxyz123' })
  userId!: string;

  @ApiPropertyOptional({ type: String, description: 'First name', example: 'John', nullable: true })
  firstName!: string | null;

  @ApiPropertyOptional({ type: String, description: 'Last name', example: 'Doe', nullable: true })
  lastName!: string | null;

  @ApiPropertyOptional({ type: String, description: 'Avatar URL', example: 'https://example.com/avatar.png', nullable: true })
  avatarUrl!: string | null;

  @ApiProperty({ type: Object, description: 'Extensible metadata', example: {} })
  metadata!: ProfileMetadata;

  @ApiProperty({ type: Date, description: 'Creation timestamp' })
  createdAt!: Date;

  @ApiProperty({ type: Date, description: 'Last update timestamp' })
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
