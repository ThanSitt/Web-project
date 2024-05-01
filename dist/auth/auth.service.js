"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_entity_1 = require("../Entity/admin.entity");
const user_entity_1 = require("../Entity/user.entity");
const admin_repository_1 = require("../Users/admin/admin.repository");
const user_reposiroty_1 = require("../Users/user/user.reposiroty");
let AuthService = class AuthService {
    constructor(adminrepo, userrepo) {
        this.adminrepo = adminrepo;
        this.userrepo = userrepo;
    }
    async ValidateuserOrAdminByIdandRole(id, role) {
        switch (role) {
            case "admin":
                return await this.adminrepo.findOne({ where: { id: id } });
            case "user":
                return await this.userrepo.findOne({ where: { id: id } });
            default:
                return null;
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_entity_1.AdminEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [admin_repository_1.AdminRepository,
        user_reposiroty_1.UserRepository])
], AuthService);
//# sourceMappingURL=auth.service.js.map