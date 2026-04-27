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
import { AssignPermissionDto } from './dto/assign-permission.dto';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { PermissionResponseDto } from './dto/permission-response.dto';
import { PermissionsService } from './permissions.service';

@ApiTags('permissions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new permission' })
  @ApiResponse({ status: 201, description: 'Permission created', type: PermissionResponseDto })
  @ApiResponse({ status: 409, description: 'Permission key already exists' })
  async create(@Body() dto: CreatePermissionDto): Promise<PermissionResponseDto> {
    const permission = await this.permissionsService.create(dto);
    return PermissionResponseDto.from(permission);
  }

  @Get()
  @ApiOperation({ summary: 'List all permissions' })
  @ApiResponse({ status: 200, description: 'List of permissions', type: [PermissionResponseDto] })
  async list(): Promise<PermissionResponseDto[]> {
    const permissions = await this.permissionsService.list();
    return permissions.map(PermissionResponseDto.from);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a permission by ID' })
  @ApiParam({ name: 'id', description: 'Permission ID' })
  @ApiResponse({ status: 200, description: 'Permission found', type: PermissionResponseDto })
  @ApiResponse({ status: 404, description: 'Permission not found' })
  async findOne(@Param('id') id: string): Promise<PermissionResponseDto> {
    const permission = await this.permissionsService.findById(id);
    return PermissionResponseDto.from(permission);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a permission' })
  @ApiParam({ name: 'id', description: 'Permission ID' })
  @ApiResponse({ status: 204, description: 'Permission deleted' })
  @ApiResponse({ status: 404, description: 'Permission not found' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.permissionsService.remove(id);
  }

  @Post('roles/:roleId/assign')
  @ApiOperation({ summary: 'Assign a permission to a role' })
  @ApiParam({ name: 'roleId', description: 'Role ID' })
  @ApiResponse({ status: 201, description: 'Permission assigned to role' })
  @ApiResponse({ status: 404, description: 'Permission not found' })
  async assignToRole(
    @Param('roleId') roleId: string,
    @Body() dto: AssignPermissionDto,
  ): Promise<void> {
    await this.permissionsService.assignToRole(roleId, dto.permissionId);
  }

  @Delete('roles/:roleId/assign/:permissionId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remove a permission from a role' })
  @ApiParam({ name: 'roleId', description: 'Role ID' })
  @ApiParam({ name: 'permissionId', description: 'Permission ID' })
  @ApiResponse({ status: 204, description: 'Permission removed from role' })
  async removeFromRole(
    @Param('roleId') roleId: string,
    @Param('permissionId') permissionId: string,
  ): Promise<void> {
    await this.permissionsService.removeFromRole(roleId, permissionId);
  }

  @Get('roles/:roleId')
  @ApiOperation({ summary: 'Get all permissions for a role' })
  @ApiParam({ name: 'roleId', description: 'Role ID' })
  @ApiResponse({ status: 200, description: 'Role permissions', type: [PermissionResponseDto] })
  async getRolePermissions(@Param('roleId') roleId: string): Promise<PermissionResponseDto[]> {
    const permissions = await this.permissionsService.getRolePermissions(roleId);
    return permissions.map(PermissionResponseDto.from);
  }

  @Get('users/:userId')
  @ApiOperation({ summary: 'Get all resolved permissions for a user (across all roles)' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User permissions', type: [PermissionResponseDto] })
  async getUserPermissions(@Param('userId') userId: string): Promise<PermissionResponseDto[]> {
    const permissions = await this.permissionsService.getUserPermissions(userId);
    return permissions.map(PermissionResponseDto.from);
  }
}
