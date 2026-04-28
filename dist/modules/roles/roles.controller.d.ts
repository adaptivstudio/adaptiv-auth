import { AssignRoleDto } from './dto/assign-role.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleResponseDto } from './dto/role-response.dto';
import { RolesService } from './roles.service';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(dto: CreateRoleDto): Promise<RoleResponseDto>;
    list(): Promise<RoleResponseDto[]>;
    findOne(id: string): Promise<RoleResponseDto>;
    remove(id: string): Promise<void>;
    assignToUser(userId: string, dto: AssignRoleDto): Promise<void>;
    removeFromUser(userId: string, roleId: string): Promise<void>;
    getUserRoles(userId: string): Promise<RoleResponseDto[]>;
}
//# sourceMappingURL=roles.controller.d.ts.map