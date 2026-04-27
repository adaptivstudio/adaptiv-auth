import { AssignPermissionDto } from './dto/assign-permission.dto';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { PermissionResponseDto } from './dto/permission-response.dto';
import { PermissionsService } from './permissions.service';
export declare class PermissionsController {
    private readonly permissionsService;
    constructor(permissionsService: PermissionsService);
    create(dto: CreatePermissionDto): Promise<PermissionResponseDto>;
    list(): Promise<PermissionResponseDto[]>;
    findOne(id: string): Promise<PermissionResponseDto>;
    remove(id: string): Promise<void>;
    assignToRole(roleId: string, dto: AssignPermissionDto): Promise<void>;
    removeFromRole(roleId: string, permissionId: string): Promise<void>;
    getRolePermissions(roleId: string): Promise<PermissionResponseDto[]>;
    getUserPermissions(userId: string): Promise<PermissionResponseDto[]>;
}
//# sourceMappingURL=permissions.controller.d.ts.map