import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class CreatePermissionDto {
  @ApiProperty({
    type: String,
    description: 'Permission key in "resource:action" format',
    example: 'posts:create',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9_-]+:[a-z0-9_-]+$/, {
    message: 'Permission key must follow the "resource:action" format',
  })
  key!: string;

  @ApiPropertyOptional({ type: String, description: 'Permission description', example: 'Create new posts' })
  @IsOptional()
  @IsString()
  description?: string;
}
