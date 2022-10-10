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
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("../categories/category.entity");
const post_entity_1 = require("../posts/post.entity");
const typeorm_2 = require("typeorm");
const user_dto_1 = require("./user.dto");
const user_entity_1 = require("./user.entity");
const user_mapper_1 = require("./user.mapper");
let UsersRepository = class UsersRepository {
    constructor(usersRepository, mapper) {
        this.usersRepository = usersRepository;
        this.mapper = mapper;
    }
    getAllUsers() {
        return this.usersRepository.find();
    }
    getUserById(id) {
        return this.usersRepository.findOne(id);
    }
    getUserByAlias(alias) {
        return this.usersRepository.findOne({ alias });
    }
    getUserByEmail(email) {
        return this.usersRepository.findOne({ email });
    }
    userAliasAlreadyExist(user) {
        return this.usersRepository.count({
            where: { alias: user.alias, userId: (0, typeorm_2.Not)(user.id) },
        });
    }
    userEmailAlreadyExist(user) {
        return this.usersRepository.count({
            email: user.email,
            userId: (0, typeorm_2.Not)(user.id),
        });
    }
    newUser(userDTO) {
        const newUser = this.mapper.dtoToEntity(userDTO);
        return this.usersRepository.save(newUser);
    }
    async updateUser(id, userDTO) {
        const updateUserDTO = new user_dto_1.UserDto(id, userDTO.name, userDTO.surname_1, userDTO.surname_2, userDTO.alias, userDTO.email, userDTO.password, userDTO.birth_date);
        const updateUser = this.mapper.dtoToEntity(updateUserDTO);
        await this.usersRepository.update(id, updateUser);
        return this.usersRepository.findOne(id);
    }
    deleteUser(id) {
        return this.usersRepository.delete(id);
    }
    async getPostsByUser(userId) {
        const user = await this.usersRepository.findOne({
            where: { userId: userId },
            relations: ['posts'],
        });
        return user.posts;
    }
    async getCategoriesByUser(userId) {
        const user = await this.usersRepository.findOne({
            where: { userId: userId },
            relations: ['categories'],
        });
        return user.categories;
    }
};
UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_mapper_1.UserMapper])
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map