"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAdaptivAuthSwagger = setupAdaptivAuthSwagger;
const swagger_1 = require("@nestjs/swagger");
function setupAdaptivAuthSwagger(app, options) {
    const title = options?.title ?? 'AdaptivAuth API';
    const version = options?.version ?? '1.0';
    const bearerName = options?.bearerName ?? 'bearer';
    const path = options?.path ?? 'api';
    const config = new swagger_1.DocumentBuilder()
        .setTitle(title)
        .setVersion(version)
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, bearerName)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup(path, app, document);
}
//# sourceMappingURL=swagger.js.map