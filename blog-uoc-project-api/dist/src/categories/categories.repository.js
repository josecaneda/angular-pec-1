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
exports.CategoriesRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_dto_1 = require("./category.dto");
const category_entity_1 = require("./category.entity");
const category_mapper_1 = require("./category.mapper");
let CategoriesRepository = class CategoriesRepository {
    constructor(categoriesRepository, mapper) {
        this.categoriesRepository = categoriesRepository;
        this.mapper = mapper;
    }
    getAllCategories() {
        return this.categoriesRepository.find({ relations: ['user', 'posts'] });
    }
    getCategoryById(id) {
        return this.categoriesRepository.findOne(id, {
            relations: ['user'],
        });
    }
    getCategoryByTitle(title) {
        return this.categoriesRepository.findOne({ title }, { relations: ['user'] });
    }
    getCategoryByColor(css_color) {
        return this.categoriesRepository.findOne({ css_color }, { relations: ['user'] });
    }
    categoryTitleAlreadyExist(category) {
        return this.categoriesRepository.count({
            where: { title: category.title, categoryId: (0, typeorm_2.Not)(category.categoryId) },
        });
    }
    categoryCssColorAlreadyExist(category) {
        return this.categoriesRepository.count({
            where: {
                css_color: category.css_color,
                categoryId: (0, typeorm_2.Not)(category.categoryId),
            },
        });
    }
    async newCategory(categoryDTO) {
        const newCategory = await this.mapper.dtoToEntity(categoryDTO);
        return this.categoriesRepository.save(newCategory);
    }
    async updateCategory(id, categoryDTO) {
        const updateCategoryDTO = new category_dto_1.CategoryDto(id, categoryDTO.title, categoryDTO.description, categoryDTO.css_color, categoryDTO.userId);
        const updateCategory = await this.mapper.dtoToEntity(updateCategoryDTO);
        await this.categoriesRepository.update(id, updateCategory);
        return this.categoriesRepository.findOne(id, {
            relations: ['user'],
        });
    }
    deleteCategory(id) {
        return this.categoriesRepository.delete(id);
    }
};
CategoriesRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.CategoryEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        category_mapper_1.CategoryMapper])
], CategoriesRepository);
exports.CategoriesRepository = CategoriesRepository;
//# sourceMappingURL=categories.repository.js.map