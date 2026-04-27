import type { INestApplication } from '@nestjs/common';
import type { AdaptivAuthSwaggerOptions } from './adaptiv-auth.interfaces';
export interface SwaggerSetupOptions extends AdaptivAuthSwaggerOptions {
    path?: string;
}
export declare function setupAdaptivAuthSwagger(app: INestApplication, options?: SwaggerSetupOptions): void;
//# sourceMappingURL=swagger.d.ts.map