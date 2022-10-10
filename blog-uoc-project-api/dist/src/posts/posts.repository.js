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
exports.PostsRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const post_dto_1 = require("./post.dto");
const post_entity_1 = require("./post.entity");
const post_mapper_1 = require("./post.mapper");
let PostsRepository = class PostsRepository {
    constructor(postsRepository, mapper) {
        this.postsRepository = postsRepository;
        this.mapper = mapper;
    }
    getAllPosts() {
        return this.postsRepository.find({ relations: ['user', 'categories'] });
    }
    getPostById(id) {
        return this.postsRepository.findOne(id, {
            relations: ['user', 'categories'],
        });
    }
    async newPost(postDto) {
        const newPost = await this.mapper.dtoToEntity(postDto);
        return this.postsRepository.save(newPost);
    }
    async updatePost(id, postDto) {
        const updatePostDto = new post_dto_1.PostDto(id, postDto.title, postDto.description, postDto.num_likes, postDto.num_dislikes, postDto.publication_date, postDto.userId, postDto.userAlias, postDto.categories);
        const updatePost = await this.mapper.dtoToEntity(updatePostDto);
        await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .update('posts_categories_categories')
            .delete()
            .where('postsPostId = :postsPostId', { postsPostId: id })
            .execute();
        await this.postsRepository.delete(id);
        return await this.postsRepository.save(updatePost);
    }
    async likePost(id) {
        const post = await this.postsRepository.findOne(id, {
            relations: ['user', 'categories'],
        });
        const likes = post.num_likes + 1;
        return await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .update('posts')
            .set({ num_likes: likes })
            .where({ postId: id })
            .execute();
    }
    async dislikePost(id) {
        const post = await this.postsRepository.findOne(id, {
            relations: ['user', 'categories'],
        });
        const dislikes = post.num_dislikes + 1;
        return await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .update('posts')
            .set({ num_dislikes: dislikes })
            .where({ postId: id })
            .execute();
    }
    deletePost(id) {
        return this.postsRepository.delete(id);
    }
};
PostsRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.PostEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        post_mapper_1.PostMapper])
], PostsRepository);
exports.PostsRepository = PostsRepository;
//# sourceMappingURL=posts.repository.js.map