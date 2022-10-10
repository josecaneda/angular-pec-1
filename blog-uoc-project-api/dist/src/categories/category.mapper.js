"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryMapper = void 0;
const user_entity_1 = require("../users/user.entity");
const category_dto_1 = require("./category.dto");
const category_entity_1 = require("./category.entity");
class CategoryMapper {
    async dtoToEntity(categoryDTO) {
        const userAssociatedEntity = await user_entity_1.UserEntity.findOne(categoryDTO.userId);
        return new category_entity_1.CategoryEntity(categoryDTO.categoryId, categoryDTO.title, categoryDTO.description, categoryDTO.css_color, userAssociatedEntity);
    }
    entityToDto(categoryEntity) {
        return new category_dto_1.CategoryDto(categoryEntity.categoryId, categoryEntity.title, categoryEntity.description, categoryEntity.css_color, categoryEntity.user.userId);
    }
}
exports.CategoryMapper = CategoryMapper;
//# sourceMappingURL=category.mapper.js.map