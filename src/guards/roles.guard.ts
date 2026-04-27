import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { Request } from 'express';
import { REQUIRED_ROLES_KEY } from '../adaptiv-auth.constants';
import type { JwtPayload } from '../adaptiv-auth.interfaces';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const required = this.reflector.getAllAndOverride<string[]>(REQUIRED_ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!required || required.length === 0) return true;

    const request = context.switchToHttp().getRequest<Request & { user: JwtPayload }>();
    const user = request.user;
    if (!user) return false;

    const userRoles = new Set(user.roles);
    const hasAny = required.some((r) => userRoles.has(r));
    if (!hasAny) {
      throw new ForbiddenException('Insufficient role');
    }
    return true;
  }
}
