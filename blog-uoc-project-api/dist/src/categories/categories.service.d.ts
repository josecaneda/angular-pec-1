import { DeleteResult } from 'typeorm';
import { CategoriesRepository } from './categories.repository';
import { CategoryDto } from './category.dto';
import { CategoryEntity } from './category.entity';
import { CategoryMapper } from './category.mapper';
export declare class CategoriesService {
    private categoriesRepository;
    private mapper;
    constructor(categoriesRepository: CategoriesRepository, mapper: CategoryMapper);
    getAllCategories(): Promise<CategoryDto[]>;
    getCategoryById(id: string): Promise<CategoryDto>;
    getCategoryByTitle(title: string): Promise<CategoryEntity>;
    getCategoryByColor(css_color: string): Promise<CategoryEntity>;
    categoryTitleAlreadyExist(category: CategoryDto): Promise<number>;
    categoryCssColorAlreadyExist(category: CategoryDto): Promise<number>;
    newCategory(categoryDTO: CategoryDto): Promise<CategoryDto>;
    updateCategory(id: string, categoryDTO: CategoryDto): Promise<CategoryDto>;
    deleteCategory(id: string): Promise<DeleteResult>;
}
