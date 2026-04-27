import type { IAuthAdapter, UserRecord, PaginatedUsersResult } from '../adapter/adapter.interface';
import type { CreateUserDto } from './dto/create-user.dto';
import type { UpdateUserDto } from './dto/update-user.dto';
import type { ListUsersQueryDto } from './dto/list-users-query.dto';
export declare class UsersService {
    private readonly adapter;
    constructor(adapter: IAuthAdapter);
    create(dto: CreateUserDto): Promise<UserRecord>;
    findById(id: string): Promise<UserRecord>;
    findByEmail(email: string): Promise<UserRecord | null>;
    findByIdentifier(identifier: string): Promise<UserRecord | null>;
    list(query: ListUsersQueryDto): Promise<PaginatedUsersResult>;
    update(id: string, dto: UpdateUserDto): Promise<UserRecord>;
    remove(id: string): Promise<void>;
    setPassword(id: string, plainPassword: string): Promise<void>;
    validatePassword(user: UserRecord, plainPassword: string): Promise<boolean>;
}
//# sourceMappingURL=users.service.d.ts.map