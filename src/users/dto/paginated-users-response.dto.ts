import { ApiProperty } from '@nestjs/swagger';
import { UserResponseDto } from './user-response.dto';

export class PaginatedUsersResponseDto {
  @ApiProperty({ type: () => [UserResponseDto] })
  data!: UserResponseDto[];

  @ApiProperty({ type: Number, description: 'Total number of matching users', example: 42 })
  total!: number;

  @ApiProperty({ type: Number, description: 'Number of records skipped', example: 0 })
  skip!: number;

  @ApiProperty({ type: Number, description: 'Number of records returned', example: 20 })
  take!: number;
}
