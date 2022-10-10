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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const categories_repository_1 = require("./categories.repository");
const category_mapper_1 = require("./category.mapper");
let CategoriesService = class CategoriesService {
    constructor(categoriesRepository, mapper) {
        this.categoriesRepository = categoriesRepository;
        this.mapper = mapper;
    }
    async getAllCategories() {
        const categories = await this.categoriesRepository.getAllCategories();
        return categories.map((category) => this.mapper.entityToDto(category));
    }
    async getCategoryById(id) {
        const category = await this.categoriesRepository.getCategoryById(id);
        return this.mapper.entityToDto(category);
    }
    async getCategoryByTitle(title) {
        return await this.categoriesRepository.getCategoryByTitle(title);
    }
    async getCategoryByColor(css_color) {
        return await this.categoriesRepository.getCategoryByColor(css_color);
    }
    async categoryTitleAlreadyExist(category) {
        return await this.categoriesRepository.categoryTitleAlreadyExist(category);
    }
    async categoryCssColorAlreadyExist(category) {
        return await this.categoriesRepository.categoryCssColorAlreadyExist(category);
    }
    async newCategory(categoryDTO) {
        const newCategory = await this.categoriesRepository.newCategory(categoryDTO);
        return this.mapper.entityToDto(newCategory);
    }
    async updateCategory(id, categoryDTO) {
        const updateCategory = await this.categoriesRepository.updateCategory(id, categoryDTO);
        return this.mapper.entityToDto(updateCategory);
    }
    async deleteCategory(id) {
        const deleteResult = await this.categoriesRepository.deleteCategory(id);
        return deleteResult;
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [categories_repository_1.CategoriesRepository,
        category_mapper_1.CategoryMapper])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map