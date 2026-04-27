import { Strategy } from 'passport-local';
import type { UserRecord } from '../../adapter/adapter.interface';
import { AuthService } from '../auth.service';
declare const LocalStrategy_base: new (...args: [] | [options: import("passport-local").IStrategyOptionsWithRequest] | [options: import("passport-local").IStrategyOptions]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(identifier: string, password: string): Promise<UserRecord>;
}
export {};
//# sourceMappingURL=local.strategy.d.ts.map