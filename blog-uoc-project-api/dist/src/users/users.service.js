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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const category_entity_1 = require("../categories/category.entity");
const post_entity_1 = require("../posts/post.entity");
const user_mapper_1 = require("./user.mapper");
const users_repository_1 = require("./users.repository");
let UsersService = class UsersService {
    constructor(usersRepository, mapper) {
        this.usersRepository = usersRepository;
        this.mapper = mapper;
    }
    async getAllUsers() {
        const users = await this.usersRepository.getAllUsers();
        return users.map((user) => this.mapper.entityToDto(user));
    }
    async getUserById(id) {
        const user = await this.usersRepository.getUserById(id);
        return this.mapper.entityToDto(user);
    }
    async getUserByAlias(alias) {
        return await this.usersRepository.getUserByAlias(alias);
    }
    async getUserByEmail(email) {
        return await this.usersRepository.getUserByEmail(email);
    }
    async userAliasAlreadyExist(user) {
        return await this.usersRepository.userAliasAlreadyExist(user);
    }
    async userEmailAlreadyExist(user) {
        return await this.usersRepository.userEmailAlreadyExist(user);
    }
    async newUser(userDTO) {
        const newUser = await this.usersRepository.newUser(userDTO);
        return this.mapper.entityToDto(newUser);
    }
    async updateUser(id, userDTO) {
        const updateUser = await this.usersRepository.updateUser(id, userDTO);
        return this.mapper.entityToDto(updateUser);
    }
    async deleteUser(id) {
        await this.usersRepository.deleteUser(id);
    }
    async getPostsByUser(userId) {
        return await this.usersRepository.getPostsByUser(userId);
    }
    async getCategoriesByUser(userId) {
        return await this.usersRepository.getCategoriesByUser(userId);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        user_mapper_1.UserMapper])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map