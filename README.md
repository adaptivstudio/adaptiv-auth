# @adaptiv/auth

Reusable NestJS authentication, authorization, and user management library for the Adaptiv platform. Ships a Postgres/Prisma adapter by default — any database can be plugged in by implementing `IAuthAdapter`.

## Features

- Login with email or username + password
- JWT access + refresh token flow (refresh token rotation)
- Logout and logout-all-devices
- Role-based access control (RBAC) with granular permissions
- User management (CRUD + paginated search)
- User profiles (extensible via JSON metadata)
- Password recovery (token-based, you send the email)
- Full OpenAPI/Swagger documentation on all endpoints
- TypeScript-first, strict types, no generics in the public API

---

## Installation

```bash
npm install @adaptiv/auth
```

**Peer dependencies** (must be installed in the consuming app):

```bash
npm install @nestjs/common @nestjs/core reflect-metadata rxjs
```

**If using the default Prisma adapter:**

```bash
npm install @prisma/client
```

---

## Quick Start

### 1. Copy the Prisma schema

```bash
cp node_modules/@adaptiv/auth/prisma/schema.prisma prisma/schema.prisma
```

Extend it with your own models, then run migrations:

```bash
npx prisma migrate dev
```

### 2. Register the module

```ts
// app.module.ts
import { Module } from '@nestjs/common';
import { AdaptivAuthModule, PrismaAuthAdapter, PrismaService } from '@adaptiv/auth';

@Module({
  imports: [
    AdaptivAuthModule.register({
      adapter: new PrismaAuthAdapter(new PrismaService()),
      jwt: {
        accessSecret: process.env.JWT_ACCESS_SECRET!,
        refreshSecret: process.env.JWT_REFRESH_SECRET!,
        accessExpiresIn: '15m',
        refreshExpiresIn: '7d',
      },
      passwordRecovery: {
        tokenExpiresInMinutes: 60,
        onTokenGenerated: async (email, token, user) => {
          // send the reset email however you like
          await mailer.send(email, `Reset link: https://yourapp.com/reset?token=${token}`);
        },
      },
    }),
  ],
})
export class AppModule {}
```

### Async registration with a factory

`registerAsync` lets you inject any NestJS provider into the factory so configuration and dependencies resolve through the IoC container.

**Pattern 1 — read config from `ConfigService`**

```ts
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AdaptivAuthModule, PrismaAuthAdapter, PrismaService } from '@adaptiv/auth';

AdaptivAuthModule.registerAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    adapter: new PrismaAuthAdapter(new PrismaService()),
    jwt: {
      accessSecret: config.getOrThrow('JWT_ACCESS_SECRET'),
      refreshSecret: config.getOrThrow('JWT_REFRESH_SECRET'),
      accessExpiresIn: config.get('JWT_ACCESS_EXPIRES', '15m'),
      refreshExpiresIn: config.get('JWT_REFRESH_EXPIRES', '7d'),
    },
  }),
})
```

**Pattern 2 — reuse the app's existing `PrismaService`**

If your app already has its own `PrismaService` (and you don't want two separate Prisma connections), inject it directly:

```ts
import { PrismaService } from './prisma/prisma.service'; // your app's service
import { AdaptivAuthModule, PrismaAuthAdapter } from '@adaptiv/auth';

AdaptivAuthModule.registerAsync({
  imports: [ConfigModule, PrismaModule],
  inject: [ConfigService, PrismaService],
  useFactory: (config: ConfigService, prisma: PrismaService) => ({
    adapter: new PrismaAuthAdapter(prisma),
    jwt: {
      accessSecret: config.getOrThrow('JWT_ACCESS_SECRET'),
      refreshSecret: config.getOrThrow('JWT_REFRESH_SECRET'),
      accessExpiresIn: '15m',
      refreshExpiresIn: '7d',
    },
  }),
})
```

**Pattern 3 — inject a mailer service for password recovery**

```ts
import { MailerService } from './mailer/mailer.service';

AdaptivAuthModule.registerAsync({
  imports: [ConfigModule, PrismaModule, MailerModule],
  inject: [ConfigService, PrismaService, MailerService],
  useFactory: (config: ConfigService, prisma: PrismaService, mailer: MailerService) => ({
    adapter: new PrismaAuthAdapter(prisma),
    jwt: {
      accessSecret: config.getOrThrow('JWT_ACCESS_SECRET'),
      refreshSecret: config.getOrThrow('JWT_REFRESH_SECRET'),
      accessExpiresIn: '15m',
      refreshExpiresIn: '7d',
    },
    passwordRecovery: {
      tokenExpiresInMinutes: 60,
      onTokenGenerated: async (email, token, user) => {
        await mailer.sendPasswordReset({
          to: email,
          name: user.username ?? user.email,
          resetUrl: `${config.get('APP_URL')}/reset-password?token=${token}`,
        });
      },
    },
  }),
})
```

**Pattern 4 — custom adapter with injected dependencies**

Implement `IAuthAdapter` and inject whatever your adapter needs:

```ts
import { Injectable } from '@nestjs/common';
import { IAuthAdapter, UserRecord, /* ... */ } from '@adaptiv/auth';
import { MongoService } from './mongo/mongo.service';

@Injectable()
export class MongoAuthAdapter implements IAuthAdapter {
  constructor(private readonly mongo: MongoService) {}

  async findUserById(id: string): Promise<UserRecord | null> {
    return this.mongo.users.findOne({ _id: id });
  }
  // ... implement remaining methods
}
```

Then inject it into the factory:

```ts
AdaptivAuthModule.registerAsync({
  imports: [ConfigModule, MongoModule],
  inject: [ConfigService, MongoAuthAdapter],
  useFactory: (config: ConfigService, adapter: MongoAuthAdapter) => ({
    adapter,
    jwt: {
      accessSecret: config.getOrThrow('JWT_ACCESS_SECRET'),
      refreshSecret: config.getOrThrow('JWT_REFRESH_SECRET'),
      accessExpiresIn: '15m',
      refreshExpiresIn: '7d',
    },
  }),
})
```

### 3. Set up Swagger (optional)

```ts
// main.ts
import { NestFactory } from '@nestjs/core';
import { setupAdaptivAuthSwagger } from '@adaptiv/auth';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupAdaptivAuthSwagger(app, { path: 'api', title: 'My App API' });
  await app.listen(3000);
}
bootstrap();
```

---

## Guards and Decorators

### Global guard setup (recommended)

Register guards globally so every route is protected by default:

```ts
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard, PermissionsGuard } from '@adaptiv/auth';

@Module({
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: PermissionsGuard },
  ],
})
export class AppModule {}
```

### Decorators

| Decorator | Description |
|-----------|-------------|
| `@Public()` | Skip JWT authentication for a route |
| `@CurrentUser()` | Inject the current JWT payload into a parameter |
| `@RequirePermissions('posts:create')` | Require one or more permissions (AND logic) |
| `@RequireRoles('admin')` | Require one or more roles (OR logic) |

### Usage example

```ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Public, CurrentUser, RequirePermissions, JwtPayload } from '@adaptiv/auth';

@Controller('posts')
export class PostsController {
  @Public()
  @Get()
  listPosts() { /* public endpoint */ }

  @RequirePermissions('posts:create')
  @Post()
  createPost(@CurrentUser() user: JwtPayload, @Body() dto: CreatePostDto) {
    // user.sub, user.email, user.roles, user.permissions
  }
}
```

---

## Auth Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/auth/login` | Login with `identifier` (email or username) + `password` |
| `POST` | `/auth/refresh` | Rotate a refresh token, get a new token pair |
| `POST` | `/auth/logout` | Revoke a single refresh token |
| `POST` | `/auth/logout-all` | Revoke all sessions for the current user |
| `POST` | `/auth/forgot-password` | Request a password reset token |
| `GET`  | `/auth/reset-password/:token` | Validate a reset token |
| `POST` | `/auth/reset-password` | Reset password using a valid token |

### Login request/response

```json
// POST /auth/login
{ "identifier": "john@example.com", "password": "S3cret!" }

// 200 OK
{
  "accessToken": "eyJ...",
  "refreshToken": "a3f9...",
  "user": { "id": "clxyz", "email": "john@example.com", "username": null, "isActive": true, ... }
}
```

---

## User Endpoints

All user endpoints require a valid JWT bearer token.

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/users` | Create a user |
| `GET` | `/users` | List users (supports `?skip`, `?take`, `?search`) |
| `GET` | `/users/:id` | Get a user by ID |
| `PATCH` | `/users/:id` | Update a user |
| `DELETE` | `/users/:id` | Delete a user |
| `GET` | `/users/:userId/profile` | Get a user's profile |
| `PATCH` | `/users/:userId/profile` | Create or update a user's profile |

---

## Roles & Permissions Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/roles` | Create a role |
| `GET` | `/roles` | List all roles |
| `GET` | `/roles/:id` | Get a role |
| `DELETE` | `/roles/:id` | Delete a role |
| `POST` | `/roles/users/:userId/assign` | Assign a role to a user |
| `DELETE` | `/roles/users/:userId/assign/:roleId` | Remove a role from a user |
| `GET` | `/roles/users/:userId` | Get all roles for a user |
| `POST` | `/permissions` | Create a permission |
| `GET` | `/permissions` | List all permissions |
| `GET` | `/permissions/:id` | Get a permission |
| `DELETE` | `/permissions/:id` | Delete a permission |
| `POST` | `/permissions/roles/:roleId/assign` | Assign a permission to a role |
| `DELETE` | `/permissions/roles/:roleId/assign/:permissionId` | Remove a permission from a role |
| `GET` | `/permissions/roles/:roleId` | Get all permissions for a role |
| `GET` | `/permissions/users/:userId` | Get all resolved permissions for a user |

### Permission key convention

Permissions use `resource:action` format:

```
users:read       posts:create
users:delete     reports:export
```

---

## RBAC Design

Roles and permissions are embedded in the JWT payload at login time — no database lookup on every request.

```ts
interface JwtPayload {
  sub: string;         // user id
  email: string;
  roles: string[];     // e.g. ["admin", "editor"]
  permissions: string[]; // e.g. ["posts:create", "users:read"]
  iat: number;
  exp: number;
}
```

**Trade-off:** role/permission changes take effect at the next login or token refresh. Acceptable with short-lived access tokens (15m recommended).

---

## Custom Database Adapter

Implement `IAuthAdapter` to connect to any database:

```ts
import { IAuthAdapter, UserRecord, /* ... */ } from '@adaptiv/auth';

export class MyCustomAdapter implements IAuthAdapter {
  async findUserById(id: string): Promise<UserRecord | null> { /* ... */ }
  async findUserByEmail(email: string): Promise<UserRecord | null> { /* ... */ }
  // ... implement all methods
}
```

Then pass it to `AdaptivAuthModule.register({ adapter: new MyCustomAdapter() })`.

---

## Prisma Schema

The default schema is at `node_modules/@adaptiv/auth/prisma/schema.prisma`. Copy it to your project and add your own models. The library uses these models:

| Model | Purpose |
|-------|---------|
| `User` | Core user record |
| `Profile` | One-to-one profile with extensible `metadata: Json` |
| `Role` | Named roles (e.g. `admin`, `editor`) |
| `Permission` | Granular permissions (`resource:action`) |
| `UserRole` | Many-to-many: users ↔ roles |
| `RolePermission` | Many-to-many: roles ↔ permissions |
| `RefreshToken` | Issued refresh tokens (rotated on use) |
| `PasswordResetToken` | One-time password reset tokens |

---

## Configuration Reference

```ts
interface AdaptivAuthOptions {
  adapter: IAuthAdapter;
  jwt: {
    accessSecret: string;
    refreshSecret: string;
    accessExpiresIn: string;  // e.g. "15m"
    refreshExpiresIn: string; // e.g. "7d"
  };
  passwordRecovery?: {
    tokenExpiresInMinutes?: number; // default: 60
    onTokenGenerated: (email: string, token: string, user: UserRecord) => Promise<void>;
  };
  controllers?: {
    // set false to disable mounting a controller (default: all true)
    auth?: boolean;
    users?: boolean;
    profiles?: boolean;
    roles?: boolean;
    permissions?: boolean;
    passwordRecovery?: boolean;
  };
}
```

---

## Building

```bash
npm run build       # tsup — outputs CJS + ESM + .d.ts to dist/
npm run typecheck   # tsc --noEmit
npm test            # jest
```
