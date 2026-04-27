"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequirePermissions = void 0;
const common_1 = require("@nestjs/common");
const adaptiv_auth_constants_1 = require("../adaptiv-auth.constants");
const RequirePermissions = (...permissions) => (0, common_1.SetMetadata)(adaptiv_auth_constants_1.REQUIRED_PERMISSIONS_KEY, permissions);
exports.RequirePermissions = RequirePermissions;
//# sourceMappingURL=require-permissions.decorator.js.map