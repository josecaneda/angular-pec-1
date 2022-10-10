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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const post_mapper_1 = require("./post.mapper");
const posts_repository_1 = require("./posts.repository");
let PostsService = class PostsService {
    constructor(postsRepository, mapper) {
        this.postsRepository = postsRepository;
        this.mapper = mapper;
    }
    async getAllPosts() {
        const posts = await this.postsRepository.getAllPosts();
        return posts.map((post) => this.mapper.entityToDto(post));
    }
    async getPostById(id) {
        const post = await this.postsRepository.getPostById(id);
        return this.mapper.entityToDto(post);
    }
    async newPost(postDTO) {
        const newPost = await this.postsRepository.newPost(postDTO);
        return this.mapper.entityToDto(newPost);
    }
    async updatePost(id, postDTO) {
        const updatePost = await this.postsRepository.updatePost(id, postDTO);
        return this.mapper.entityToDto(updatePost);
    }
    async likePost(id) {
        const updatePost = await this.postsRepository.likePost(id);
        return updatePost;
    }
    async dislikePost(id) {
        const updatePost = await this.postsRepository.dislikePost(id);
        return updatePost;
    }
    async deletePost(id) {
        const deleteResult = await this.postsRepository.deletePost(id);
        return deleteResult;
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [posts_repository_1.PostsRepository,
        post_mapper_1.PostMapper])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map