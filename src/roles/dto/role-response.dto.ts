import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import type { RoleRecord } from '../../adapter/adapter.interface';

export class RoleResponseDto {
  @ApiProperty({ description: 'Role ID', example: 'clxyz456' })
  id!: string;

  @ApiProperty({ description: 'Role name', example: 'admin' })
  name!: string;

  @ApiPropertyOptional({ description: 'Role description', example: 'Full system access', nullable: true })
  description!: string | null;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt!: Date;

  static from(role: RoleRecord): RoleResponseDto {
    const dto = new RoleResponseDto();
    dto.id = role.id;
    dto.name = role.name;
    dto.description = role.description;
    dto.createdAt = role.createdAt;
    return dto;
  }
}
