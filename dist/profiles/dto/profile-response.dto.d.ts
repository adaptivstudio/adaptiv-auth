import type { ProfileMetadata, ProfileRecord } from '../../adapter/adapter.interface';
export declare class ProfileResponseDto {
    id: string;
    userId: string;
    firstName: string | null;
    lastName: string | null;
    avatarUrl: string | null;
    metadata: ProfileMetadata;
    createdAt: Date;
    updatedAt: Date;
    static from(profile: ProfileRecord): ProfileResponseDto;
}
//# sourceMappingURL=profile-response.dto.d.ts.map