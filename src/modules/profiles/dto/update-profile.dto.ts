import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUrl } from 'class-validator';
import { ProfileMetadata } from '../../../adapter/adapter.interface';

export class UpdateProfileDto {
  @ApiPropertyOptional({ type: String, description: 'First name', example: 'John' })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiPropertyOptional({ type: String, description: 'Last name', example: 'Doe' })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiPropertyOptional({ type: String, description: 'Avatar URL', example: 'https://example.com/avatar.png' })
  @IsOptional()
  @IsUrl()
  avatarUrl?: string;

  @ApiPropertyOptional({
    type: Object,
    description: 'Arbitrary key-value metadata for extensibility',
    example: { bio: 'Developer', timezone: 'UTC' },
  })
  @IsOptional()
  metadata?: ProfileMetadata;
}
