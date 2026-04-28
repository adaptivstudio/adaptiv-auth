import type { PermissionRecord } from '../../../adapter/adapter.interface';
export declare class PermissionResponseDto {
    id: string;
    key: string;
    description: string | null;
    createdAt: Date;
    static from(permission: PermissionRecord): PermissionResponseDto;
}
//# sourceMappingURL=permission-response.dto.d.ts.map