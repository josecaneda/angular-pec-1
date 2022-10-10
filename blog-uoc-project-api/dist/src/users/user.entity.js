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
exports.UserEntity = void 0;
const bcrypt = require("bcrypt");
const category_entity_1 = require("../categories/category.entity");
const post_entity_1 = require("../posts/post.entity");
const typeorm_1 = require("typeorm");
let UserEntity = class UserEntity extends typeorm_1.BaseEntity {
    constructor(userId, name, surname_1, surname_2, alias, email, password, birth_date) {
        super();
        this.userId = userId;
        this.name = name;
        this.surname_1 = surname_1;
        this.surname_2 = surname_2;
        this.alias = alias;
        this.email = email;
        this.password = password;
        this.birth_date = birth_date;
    }
    async hashPassword() {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
    }
    async hashPasswordUpdate() {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
    }
    async validatePassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 55 }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 55 }),
    __metadata("design:type", String)
], UserEntity.prototype, "surname_1", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 55, nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "surname_2", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unique: true,
        length: 25,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "alias", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unique: true,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 70 }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserEntity.prototype, "hashPassword", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserEntity.prototype, "hashPasswordUpdate", null);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], UserEntity.prototype, "birth_date", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => post_entity_1.PostEntity, (post) => post.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "posts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => category_entity_1.CategoryEntity, (category) => category.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "categories", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)('users'),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, Date])
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map