import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AssignRoleDto } from './dto/assign-role.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleResponseDto } from './dto/role-response.dto';
import { RolesService } from './roles.service';

@ApiTags('roles')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new role' })
  @ApiResponse({ status: 201, description: 'Role created', type: () => RoleResponseDto })
  @ApiResponse({ status: 409, description: 'Role name already exists' })
  async create(@Body() dto: CreateRoleDto): Promise<RoleResponseDto> {
    const role = await this.rolesService.create(dto);
    return RoleResponseDto.from(role);
  }

  @Get()
  @ApiOperation({ summary: 'List all roles' })
  @ApiResponse({ status: 200, description: 'List of roles', type: () => [RoleResponseDto] })
  async list(): Promise<RoleResponseDto[]> {
    const roles = await this.rolesService.list();
    return roles.map(RoleResponseDto.from);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a role by ID' })
  @ApiParam({ name: 'id', description: 'Role ID' })
  @ApiResponse({ status: 200, description: 'Role found', type: () => RoleResponseDto })
  @ApiResponse({ status: 404, description: 'Role not found' })
  async findOne(@Param('id') id: string): Promise<RoleResponseDto> {
    const role = await this.rolesService.findById(id);
    return RoleResponseDto.from(role);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a role' })
  @ApiParam({ name: 'id', description: 'Role ID' })
  @ApiResponse({ status: 204, description: 'Role deleted' })
  @ApiResponse({ status: 404, description: 'Role not found' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.rolesService.remove(id);
  }

  @Post('users/:userId/assign')
  @ApiOperation({ summary: 'Assign a role to a user' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiResponse({ status: 201, description: 'Role assigned' })
  @ApiResponse({ status: 404, description: 'Role not found' })
  async assignToUser(
    @Param('userId') userId: string,
    @Body() dto: AssignRoleDto,
  ): Promise<void> {
    await this.rolesService.assignToUser(userId, dto.roleId);
  }

  @Delete('users/:userId/assign/:roleId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remove a role from a user' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiParam({ name: 'roleId', description: 'Role ID' })
  @ApiResponse({ status: 204, description: 'Role removed from user' })
  async removeFromUser(
    @Param('userId') userId: string,
    @Param('roleId') roleId: string,
  ): Promise<void> {
    await this.rolesService.removeFromUser(userId, roleId);
  }

  @Get('users/:userId')
  @ApiOperation({ summary: 'Get all roles for a user' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User roles', type: () => [RoleResponseDto] })
  async getUserRoles(@Param('userId') userId: string): Promise<RoleResponseDto[]> {
    const roles = await this.rolesService.getUserRoles(userId);
    return roles.map(RoleResponseDto.from);
  }
}
