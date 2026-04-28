import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ type: String, description: 'Unique role name', example: 'admin' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiPropertyOptional({ type: String, description: 'Role description', example: 'Full system access' })
  @IsOptional()
  @IsString()
  description?: string;
}
