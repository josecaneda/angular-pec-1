"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMapper = void 0;
const category_dto_1 = require("../categories/category.dto");
const category_entity_1 = require("../categories/category.entity");
const user_entity_1 = require("../users/user.entity");
const post_dto_1 = require("./post.dto");
const post_entity_1 = require("./post.entity");
class PostMapper {
    async dtoToEntity(postDto) {
        const userAssociatedEntity = await user_entity_1.UserEntity.findOne(postDto.userId);
        const categoriesAssociated = new Array();
        if (postDto.categories) {
            for (let i = 0; i < postDto.categories.length; i++) {
                const category = await category_entity_1.CategoryEntity.findOne(postDto.categories[i]);
                categoriesAssociated.push(category);
            }
        }
        return new post_entity_1.PostEntity(postDto.postId, postDto.title, postDto.description, postDto.num_likes, postDto.num_dislikes, postDto.publication_date, userAssociatedEntity, categoriesAssociated);
    }
    entityToDto(postEntity) {
        const categories = new Array();
        for (let i = 0; i < postEntity.categories.length; i++) {
            const category = new category_dto_1.CategoryDto(postEntity.categories[i].categoryId, postEntity.categories[i].title, postEntity.categories[i].description, postEntity.categories[i].css_color, postEntity.user.userId);
            categories.push(category);
        }
        return new post_dto_1.PostDto(postEntity.postId, postEntity.title, postEntity.description, postEntity.num_likes, postEntity.num_dislikes, postEntity.publication_date, postEntity.user.userId, postEntity.user.alias, categories);
    }
}
exports.PostMapper = PostMapper;
//# sourceMappingURL=post.mapper.js.map