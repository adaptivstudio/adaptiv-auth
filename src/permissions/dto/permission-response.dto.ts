import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import type { PermissionRecord } from '../../adapter/adapter.interface';

export class PermissionResponseDto {
  @ApiProperty({ type: String, description: 'Permission ID', example: 'clxyz789' })
  id!: string;

  @ApiProperty({ type: String, description: 'Permission key', example: 'posts:create' })
  key!: string;

  @ApiPropertyOptional({ type: String, description: 'Permission description', example: 'Create new posts', nullable: true })
  description!: string | null;

  @ApiProperty({ type: Date, description: 'Creation timestamp' })
  createdAt!: Date;

  static from(permission: PermissionRecord): PermissionResponseDto {
    const dto = new PermissionResponseDto();
    dto.id = permission.id;
    dto.key = permission.key;
    dto.description = permission.description;
    dto.createdAt = permission.createdAt;
    return dto;
  }
}
