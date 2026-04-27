"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequireRoles = void 0;
const common_1 = require("@nestjs/common");
const adaptiv_auth_constants_1 = require("../adaptiv-auth.constants");
const RequireRoles = (...roles) => (0, common_1.SetMetadata)(adaptiv_auth_constants_1.REQUIRED_ROLES_KEY, roles);
exports.RequireRoles = RequireRoles;
//# sourceMappingURL=require-roles.decorator.js.map