import { ConflictException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ADAPTIV_AUTH_ADAPTER } from '../adaptiv-auth.constants';
import type { IAuthAdapter, RoleRecord } from '../adapter/adapter.interface';
import type { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
  constructor(@Inject(ADAPTIV_AUTH_ADAPTER) private readonly adapter: IAuthAdapter) {}

  async create(dto: CreateRoleDto): Promise<RoleRecord> {
    const existing = await this.adapter.findRoleByName(dto.name);
    if (existing) throw new ConflictException('Role name already exists');
    return this.adapter.createRole(dto);
  }

  async findById(id: string): Promise<RoleRecord> {
    const role = await this.adapter.findRoleById(id);
    if (!role) throw new NotFoundException('Role not found');
    return role;
  }

  async list(): Promise<RoleRecord[]> {
    return this.adapter.listRoles();
  }

  async remove(id: string): Promise<void> {
    await this.findById(id);
    await this.adapter.deleteRole(id);
  }

  async assignToUser(userId: string, roleId: string): Promise<void> {
    await this.findById(roleId);
    await this.adapter.assignRoleToUser(userId, roleId);
  }

  async removeFromUser(userId: string, roleId: string): Promise<void> {
    await this.adapter.removeRoleFromUser(userId, roleId);
  }

  async getUserRoles(userId: string): Promise<RoleRecord[]> {
    return this.adapter.getUserRoles(userId);
  }
}
