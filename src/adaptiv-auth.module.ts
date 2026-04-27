import { DynamicModule, InjectionToken, Module, OptionalFactoryDependency, Provider } from '@nestjs/common';
import { ADAPTIV_AUTH_ADAPTER, ADAPTIV_AUTH_OPTIONS } from './adaptiv-auth.constants';
import type { AdaptivAuthOptions } from './adaptiv-auth.interfaces';
import { AuthModule } from './auth/auth.module';
import { PasswordRecoveryModule } from './password-recovery/password-recovery.module';
import { PermissionsModule } from './permissions/permissions.module';
import { ProfilesModule } from './profiles/profiles.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';

export interface AdaptivAuthAsyncOptions {
  imports?: DynamicModule['imports'];
  inject?: Array<InjectionToken | OptionalFactoryDependency>;
  useFactory: (...args: unknown[]) => Promise<AdaptivAuthOptions> | AdaptivAuthOptions;
}

function createCoreProviders(options: AdaptivAuthOptions): Provider[] {
  return [
    { provide: ADAPTIV_AUTH_OPTIONS, useValue: options },
    { provide: ADAPTIV_AUTH_ADAPTER, useValue: options.adapter },
  ];
}

@Module({})
export class AdaptivAuthModule {
  static register(options: AdaptivAuthOptions): DynamicModule {
    const coreProviders = createCoreProviders(options);

    return {
      module: AdaptivAuthModule,
      global: true,
      imports: [
        AuthModule,
        UsersModule,
        ProfilesModule,
        RolesModule,
        PermissionsModule,
        PasswordRecoveryModule,
      ],
      providers: coreProviders,
      exports: coreProviders,
    };
  }

  static registerAsync(asyncOptions: AdaptivAuthAsyncOptions): DynamicModule {
    const optionsProvider: Provider = {
      provide: ADAPTIV_AUTH_OPTIONS,
      useFactory: asyncOptions.useFactory,
      inject: asyncOptions.inject ?? [],
    };

    const adapterProvider: Provider = {
      provide: ADAPTIV_AUTH_ADAPTER,
      useFactory: (options: AdaptivAuthOptions) => options.adapter,
      inject: [ADAPTIV_AUTH_OPTIONS],
    };

    return {
      module: AdaptivAuthModule,
      global: true,
      imports: [
        ...(asyncOptions.imports ?? []),
        AuthModule,
        UsersModule,
        ProfilesModule,
        RolesModule,
        PermissionsModule,
        PasswordRecoveryModule,
      ],
      providers: [optionsProvider, adapterProvider],
      exports: [optionsProvider, adapterProvider],
    };
  }
}
