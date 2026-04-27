import type { UserRecord } from '../../adapter/adapter.interface';
export declare class UserResponseDto {
    id: string;
    email: string;
    username: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    static from(user: UserRecord): UserResponseDto;
}
//# sourceMappingURL=user-response.dto.d.ts.map