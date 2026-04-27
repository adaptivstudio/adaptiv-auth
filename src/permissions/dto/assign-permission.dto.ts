import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AssignPermissionDto {
  @ApiProperty({ description: 'ID of the permission to assign', example: 'clxyz789' })
  @IsString()
  @IsNotEmpty()
  permissionId!: string;
}
