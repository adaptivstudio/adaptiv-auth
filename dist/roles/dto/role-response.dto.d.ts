import type { RoleRecord } from '../../adapter/adapter.interface';
export declare class RoleResponseDto {
    id: string;
    name: string;
    description: string | null;
    createdAt: Date;
    static from(role: RoleRecord): RoleResponseDto;
}
//# sourceMappingURL=role-response.dto.d.ts.map