import { Strategy } from 'passport-jwt';
import type { AdaptivAuthOptions, JwtPayload } from '../../adaptiv-auth.interfaces';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(options: AdaptivAuthOptions);
    validate(payload: JwtPayload): JwtPayload;
}
export {};
//# sourceMappingURL=jwt.strategy.d.ts.map