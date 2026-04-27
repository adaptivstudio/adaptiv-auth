import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AssignRoleDto {
  @ApiProperty({ description: 'ID of the role to assign', example: 'clxyz456' })
  @IsString()
  @IsNotEmpty()
  roleId!: string;
}
