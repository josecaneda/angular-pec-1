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
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const valid_post_id_pipe_1 = require("./Pipes/valid-post-id.pipe");
const post_dto_1 = require("./post.dto");
const posts_service_1 = require("./posts.service");
let PostsController = class PostsController {
    constructor(postsService) {
        this.postsService = postsService;
    }
    async getAllPosts() {
        return await this.postsService.getAllPosts();
    }
    async getPostById(id) {
        return await this.postsService.getPostById(id);
    }
    async newPost(post) {
        return await this.postsService.newPost(post);
    }
    async updatePost(id, post) {
        return await this.postsService.updatePost(id, post);
    }
    async likePost(id) {
        return await this.postsService.likePost(id);
    }
    async dislikePost(id) {
        return await this.postsService.dislikePost(id);
    }
    async deletePost(id) {
        return await this.postsService.deletePost(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getAllPosts", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    __param(0, (0, common_1.Param)('id', valid_post_id_pipe_1.ValidPostIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getPostById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_dto_1.PostDto]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "newPost", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id', valid_post_id_pipe_1.ValidPostIdPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, post_dto_1.PostDto]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Put)('like/:id'),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id', valid_post_id_pipe_1.ValidPostIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "likePost", null);
__decorate([
    (0, common_1.Put)('dislike/:id'),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id', valid_post_id_pipe_1.ValidPostIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "dislikePost", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id', valid_post_id_pipe_1.ValidPostIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "deletePost", null);
PostsController = __decorate([
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map