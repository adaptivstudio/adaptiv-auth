import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ProfileResponseDto } from './dto/profile-response.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

@ApiTags('profiles')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users/:userId/profile')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get()
  @ApiOperation({ summary: 'Get the profile for a user', operationId: 'getProfile' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'Profile found', type: () => ProfileResponseDto })
  @ApiResponse({ status: 404, description: 'Profile not found' })
  async findOne(@Param('userId') userId: string): Promise<ProfileResponseDto> {
    const profile = await this.profilesService.findByUserId(userId);
    return ProfileResponseDto.from(profile);
  }

  @Patch()
  @ApiOperation({ summary: 'Create or update the profile for a user', operationId: 'upsertProfile' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'Profile upserted', type: () => ProfileResponseDto })
  async upsert(
    @Param('userId') userId: string,
    @Body() dto: UpdateProfileDto,
  ): Promise<ProfileResponseDto> {
    const profile = await this.profilesService.upsert(userId, dto);
    return ProfileResponseDto.from(profile);
  }
}
