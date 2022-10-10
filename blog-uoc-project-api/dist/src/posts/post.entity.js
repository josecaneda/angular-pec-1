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
exports.PostEntity = void 0;
const category_entity_1 = require("../categories/category.entity");
const user_entity_1 = require("../users/user.entity");
const typeorm_1 = require("typeorm");
let PostEntity = class PostEntity extends typeorm_1.BaseEntity {
    constructor(postId, title, description, num_likes, num_dislikes, publication_date, user, categories) {
        super();
        this.postId = postId;
        this.title = title;
        this.description = description;
        this.num_likes = num_likes;
        this.num_dislikes = num_dislikes;
        this.publication_date = publication_date;
        this.user = user;
        this.categories = categories;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PostEntity.prototype, "postId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 55 }),
    __metadata("design:type", String)
], PostEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], PostEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], PostEntity.prototype, "num_likes", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], PostEntity.prototype, "num_dislikes", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], PostEntity.prototype, "publication_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.posts),
    __metadata("design:type", user_entity_1.UserEntity)
], PostEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => category_entity_1.CategoryEntity, {
        cascade: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], PostEntity.prototype, "categories", void 0);
PostEntity = __decorate([
    (0, typeorm_1.Entity)('posts'),
    __metadata("design:paramtypes", [String, String, String, Number, Number, Date,
        user_entity_1.UserEntity, Array])
], PostEntity);
exports.PostEntity = PostEntity;
//# sourceMappingURL=post.entity.js.map