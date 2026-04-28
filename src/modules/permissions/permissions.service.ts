import { ConflictException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ADAPTIV_AUTH_ADAPTER } from '../../adaptiv-auth.constants';
import type { IAuthAdapter, PermissionRecord } from '../../adapter/adapter.interface';
import type { CreatePermissionDto } from './dto/create-permission.dto';

@Injectable()
export class PermissionsService {
  constructor(@Inject(ADAPTIV_AUTH_ADAPTER) private readonly adapter: IAuthAdapter) {}

  async create(dto: CreatePermissionDto): Promise<PermissionRecord> {
    const existing = await this.adapter.findPermissionByKey(dto.key);
    if (existing) throw new ConflictException('Permission key already exists');
    return this.adapter.createPermission(dto);
  }

  async findById(id: string): Promise<PermissionRecord> {
    const permission = await this.adapter.findPermissionById(id);
    if (!permission) throw new NotFoundException('Permission not found');
    return permission;
  }

  async list(): Promise<PermissionRecord[]> {
    return this.adapter.listPermissions();
  }

  async remove(id: string): Promise<void> {
    await this.findById(id);
    await this.adapter.deletePermission(id);
  }

  async assignToRole(roleId: string, permissionId: string): Promise<void> {
    await this.findById(permissionId);
    await this.adapter.assignPermissionToRole(roleId, permissionId);
  }

  async removeFromRole(roleId: string, permissionId: string): Promise<void> {
    await this.adapter.removePermissionFromRole(roleId, permissionId);
  }

  async getRolePermissions(roleId: string): Promise<PermissionRecord[]> {
    return this.adapter.getRolePermissions(roleId);
  }

  async getUserPermissions(userId: string): Promise<PermissionRecord[]> {
    return this.adapter.getUserPermissions(userId);
  }
}
