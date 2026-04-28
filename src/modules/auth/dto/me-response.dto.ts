import { ApiProperty } from '@nestjs/swagger';
import { UserResponseDto } from '../../users/dto/user-response.dto';

export class MeResponseDto {
  @ApiProperty({ type: () => UserResponseDto })
  user!: UserResponseDto;

  @ApiProperty({ type: [String], description: 'Role names assigned to the user', example: ['admin'] })
  roles!: string[];

  @ApiProperty({
    type: [String],
    description: 'Resolved permission keys across all roles',
    example: ['posts:create', 'users:read'],
  })
  permissions!: string[];
}
