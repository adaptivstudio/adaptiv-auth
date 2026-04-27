import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUrl } from 'class-validator';
import type { ProfileMetadata } from '../../adapter/adapter.interface';

export class UpdateProfileDto {
  @ApiPropertyOptional({ description: 'First name', example: 'John' })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiPropertyOptional({ description: 'Last name', example: 'Doe' })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiPropertyOptional({ description: 'Avatar URL', example: 'https://example.com/avatar.png' })
  @IsOptional()
  @IsUrl()
  avatarUrl?: string;

  @ApiPropertyOptional({
    description: 'Arbitrary key-value metadata for extensibility',
    example: { bio: 'Developer', timezone: 'UTC' },
    type: Object,
  })
  @IsOptional()
  metadata?: ProfileMetadata;
}
