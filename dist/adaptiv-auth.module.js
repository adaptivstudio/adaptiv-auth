"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AdaptivAuthModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdaptivAuthModule = void 0;
const common_1 = require("@nestjs/common");
const adaptiv_auth_constants_1 = require("./adaptiv-auth.constants");
const auth_module_1 = require("./auth/auth.module");
const password_recovery_module_1 = require("./password-recovery/password-recovery.module");
const permissions_module_1 = require("./permissions/permissions.module");
const profiles_module_1 = require("./profiles/profiles.module");
const roles_module_1 = require("./roles/roles.module");
const users_module_1 = require("./users/users.module");
function createCoreProviders(options) {
    return [
        { provide: adaptiv_auth_constants_1.ADAPTIV_AUTH_OPTIONS, useValue: options },
        { provide: adaptiv_auth_constants_1.ADAPTIV_AUTH_ADAPTER, useValue: options.adapter },
    ];
}
let AdaptivAuthModule = AdaptivAuthModule_1 = class AdaptivAuthModule {
    static register(options) {
        const coreProviders = createCoreProviders(options);
        return {
            module: AdaptivAuthModule_1,
            global: true,
            imports: [
                auth_module_1.AuthModule,
                users_module_1.UsersModule,
                profiles_module_1.ProfilesModule,
                roles_module_1.RolesModule,
                permissions_module_1.PermissionsModule,
                password_recovery_module_1.PasswordRecoveryModule,
            ],
            providers: coreProviders,
            exports: coreProviders,
        };
    }
    static registerAsync(asyncOptions) {
        const optionsProvider = {
            provide: adaptiv_auth_constants_1.ADAPTIV_AUTH_OPTIONS,
            useFactory: asyncOptions.useFactory,
            inject: asyncOptions.inject ?? [],
        };
        const adapterProvider = {
            provide: adaptiv_auth_constants_1.ADAPTIV_AUTH_ADAPTER,
            useFactory: (options) => options.adapter,
            inject: [adaptiv_auth_constants_1.ADAPTIV_AUTH_OPTIONS],
        };
        return {
            module: AdaptivAuthModule_1,
            global: true,
            imports: [
                ...(asyncOptions.imports ?? []),
                auth_module_1.AuthModule,
                users_module_1.UsersModule,
                profiles_module_1.ProfilesModule,
                roles_module_1.RolesModule,
                permissions_module_1.PermissionsModule,
                password_recovery_module_1.PasswordRecoveryModule,
            ],
            providers: [optionsProvider, adapterProvider],
            exports: [optionsProvider, adapterProvider],
        };
    }
};
exports.AdaptivAuthModule = AdaptivAuthModule;
exports.AdaptivAuthModule = AdaptivAuthModule = AdaptivAuthModule_1 = __decorate([
    (0, common_1.Module)({})
], AdaptivAuthModule);
//# sourceMappingURL=adaptiv-auth.module.js.map