import type { IAuthAdapter, PermissionRecord } from '../../adapter/adapter.interface';
import type { CreatePermissionDto } from './dto/create-permission.dto';
export declare class PermissionsService {
    private readonly adapter;
    constructor(adapter: IAuthAdapter);
    create(dto: CreatePermissionDto): Promise<PermissionRecord>;
    findById(id: string): Promise<PermissionRecord>;
    list(): Promise<PermissionRecord[]>;
    remove(id: string): Promise<void>;
    assignToRole(roleId: string, permissionId: string): Promise<void>;
    removeFromRole(roleId: string, permissionId: string): Promise<void>;
    getRolePermissions(roleId: string): Promise<PermissionRecord[]>;
    getUserPermissions(userId: string): Promise<PermissionRecord[]>;
}
//# sourceMappingURL=permissions.service.d.ts.map