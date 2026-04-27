import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import type { AdaptivAuthSwaggerOptions } from './adaptiv-auth.interfaces';

export interface SwaggerSetupOptions extends AdaptivAuthSwaggerOptions {
  path?: string;
}

export function setupAdaptivAuthSwagger(
  app: INestApplication,
  options?: SwaggerSetupOptions,
): void {
  const title = options?.title ?? 'AdaptivAuth API';
  const version = options?.version ?? '1.0';
  const bearerName = options?.bearerName ?? 'bearer';
  const path = options?.path ?? 'api';

  const config = new DocumentBuilder()
    .setTitle(title)
    .setVersion(version)
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      bearerName,
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(path, app, document);
}
