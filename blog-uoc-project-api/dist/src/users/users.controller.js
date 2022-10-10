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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const exist_user_alias_pipe_1 = require("./Pipes/exist-user-alias.pipe");
const exist_user_email_pipe_1 = require("./Pipes/exist-user-email.pipe");
const valid_user_id_pipe_1 = require("./Pipes/valid-user-id.pipe");
const user_dto_1 = require("./user.dto");
const users_service_1 = require("./users.service");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getAllUsers() {
        return await this.usersService.getAllUsers();
    }
    async getUserById(id) {
        return await this.usersService.getUserById(id);
    }
    async newUser(user) {
        return await this.usersService.newUser(user);
    }
    async updateUser(id, user) {
        return await this.usersService.updateUser(id, user);
    }
    async deleteUser(id) {
        return await this.usersService.deleteUser(id);
    }
    getPostsByUser(userId) {
        return this.usersService.getPostsByUser(userId);
    }
    getCategoriesByUser(userId) {
        return this.usersService.getCategoriesByUser(userId);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id', valid_user_id_pipe_1.ValidUserIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(exist_user_alias_pipe_1.ExistUserAliasPipe, exist_user_email_pipe_1.ExistUserEmailPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "newUser", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.UsePipes)(exist_user_alias_pipe_1.ExistUserAliasPipe, exist_user_email_pipe_1.ExistUserEmailPipe),
    __param(0, (0, common_1.Param)('id', valid_user_id_pipe_1.ValidUserIdPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id', valid_user_id_pipe_1.ValidUserIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Get)('posts/:id'),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id', valid_user_id_pipe_1.ValidUserIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getPostsByUser", null);
__decorate([
    (0, common_1.Get)('categories/:id'),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id', valid_user_id_pipe_1.ValidUserIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getCategoriesByUser", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map