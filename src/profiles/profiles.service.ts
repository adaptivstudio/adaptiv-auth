import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ADAPTIV_AUTH_ADAPTER } from '../adaptiv-auth.constants';
import type { IAuthAdapter, ProfileRecord } from '../adapter/adapter.interface';
import type { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(@Inject(ADAPTIV_AUTH_ADAPTER) private readonly adapter: IAuthAdapter) {}

  async findByUserId(userId: string): Promise<ProfileRecord> {
    const profile = await this.adapter.findProfileByUserId(userId);
    if (!profile) throw new NotFoundException('Profile not found');
    return profile;
  }

  async upsert(userId: string, dto: UpdateProfileDto): Promise<ProfileRecord> {
    return this.adapter.upsertProfile(userId, {
      firstName: dto.firstName,
      lastName: dto.lastName,
      avatarUrl: dto.avatarUrl,
      metadata: dto.metadata,
    });
  }
}
