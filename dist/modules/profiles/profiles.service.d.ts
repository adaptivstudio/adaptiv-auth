import type { IAuthAdapter, ProfileRecord } from '../../adapter/adapter.interface';
import type { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfilesService {
    private readonly adapter;
    constructor(adapter: IAuthAdapter);
    findByUserId(userId: string): Promise<ProfileRecord>;
    upsert(userId: string, dto: UpdateProfileDto): Promise<ProfileRecord>;
}
//# sourceMappingURL=profiles.service.d.ts.map