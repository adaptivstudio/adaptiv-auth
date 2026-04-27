import { DynamicModule, InjectionToken, OptionalFactoryDependency } from '@nestjs/common';
import type { AdaptivAuthOptions } from './adaptiv-auth.interfaces';
export interface AdaptivAuthAsyncOptions {
    imports?: DynamicModule['imports'];
    inject?: Array<InjectionToken | OptionalFactoryDependency>;
    useFactory: (...args: unknown[]) => Promise<AdaptivAuthOptions> | AdaptivAuthOptions;
}
export declare class AdaptivAuthModule {
    static register(options: AdaptivAuthOptions): DynamicModule;
    static registerAsync(asyncOptions: AdaptivAuthAsyncOptions): DynamicModule;
}
//# sourceMappingURL=adaptiv-auth.module.d.ts.map