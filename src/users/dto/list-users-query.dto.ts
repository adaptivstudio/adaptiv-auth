import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class ListUsersQueryDto {
  @ApiPropertyOptional({ type: Number, description: 'Number of records to skip', example: 0, default: 0 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  skip?: number;

  @ApiPropertyOptional({ type: Number, description: 'Number of records to return', example: 20, default: 20 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  take?: number;

  @ApiPropertyOptional({ type: String, description: 'Search by email or username', example: 'john' })
  @IsOptional()
  @IsString()
  search?: string;
}
