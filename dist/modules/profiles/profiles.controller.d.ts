import { ProfileResponseDto } from './dto/profile-response.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
export declare class ProfilesController {
    private readonly profilesService;
    constructor(profilesService: ProfilesService);
    findOne(userId: string): Promise<ProfileResponseDto>;
    upsert(userId: string, dto: UpdateProfileDto): Promise<ProfileResponseDto>;
}
//# sourceMappingURL=profiles.controller.d.ts.map