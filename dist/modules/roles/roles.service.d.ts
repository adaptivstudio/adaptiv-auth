import type { IAuthAdapter, RoleRecord } from '../../adapter/adapter.interface';
import type { CreateRoleDto } from './dto/create-role.dto';
export declare class RolesService {
    private readonly adapter;
    constructor(adapter: IAuthAdapter);
    create(dto: CreateRoleDto): Promise<RoleRecord>;
    findById(id: string): Promise<RoleRecord>;
    list(): Promise<RoleRecord[]>;
    remove(id: string): Promise<void>;
    assignToUser(userId: string, roleId: string): Promise<void>;
    removeFromUser(userId: string, roleId: string): Promise<void>;
    getUserRoles(userId: string): Promise<RoleRecord[]>;
}
//# sourceMappingURL=roles.service.d.ts.map