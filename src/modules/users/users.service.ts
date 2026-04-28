import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { ADAPTIV_AUTH_ADAPTER } from '../../adaptiv-auth.constants';
import type { IAuthAdapter, UserRecord, PaginatedUsersResult } from '../../adapter/adapter.interface';
import type { CreateUserDto } from './dto/create-user.dto';
import type { UpdateUserDto } from './dto/update-user.dto';
import type { ListUsersQueryDto } from './dto/list-users-query.dto';

const BCRYPT_ROUNDS = 12;

@Injectable()
export class UsersService {
  constructor(@Inject(ADAPTIV_AUTH_ADAPTER) private readonly adapter: IAuthAdapter) {}

  async create(dto: CreateUserDto): Promise<UserRecord> {
    const existing = await this.adapter.findUserByEmail(dto.email);
    if (existing) {
      throw new ConflictException('Email already in use');
    }
    if (dto.username) {
      const existingByUsername = await this.adapter.findUserByUsername(dto.username);
      if (existingByUsername) {
        throw new ConflictException('Username already taken');
      }
    }
    const passwordHash = await bcrypt.hash(dto.password, BCRYPT_ROUNDS);
    return this.adapter.createUser({ email: dto.email, username: dto.username, passwordHash });
  }

  async findById(id: string): Promise<UserRecord> {
    const user = await this.adapter.findUserById(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async findByEmail(email: string): Promise<UserRecord | null> {
    return this.adapter.findUserByEmail(email);
  }

  async findByIdentifier(identifier: string): Promise<UserRecord | null> {
    return this.adapter.findUserByIdentifier(identifier);
  }

  async list(query: ListUsersQueryDto): Promise<PaginatedUsersResult> {
    return this.adapter.listUsers({ skip: query.skip, take: query.take, search: query.search });
  }

  async update(id: string, dto: UpdateUserDto): Promise<UserRecord> {
    await this.findById(id);
    return this.adapter.updateUser(id, dto);
  }

  async remove(id: string): Promise<void> {
    await this.findById(id);
    await this.adapter.deleteUser(id);
  }

  async setPassword(id: string, plainPassword: string): Promise<void> {
    await this.findById(id);
    const passwordHash = await bcrypt.hash(plainPassword, BCRYPT_ROUNDS);
    await this.adapter.setUserPassword(id, passwordHash);
  }

  async validatePassword(user: UserRecord, plainPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, user.passwordHash);
  }
}
