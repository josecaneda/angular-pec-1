import { DeleteResult } from 'typeorm';
import { CategoriesService } from './categories.service';
import { CategoryDto } from './category.dto';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    getAllCategories(): Promise<CategoryDto[]>;
    getCategoryById(id: string): Promise<CategoryDto>;
    newCategory(category: CategoryDto): Promise<CategoryDto>;
    updateCategory(id: string, category: CategoryDto): Promise<CategoryDto>;
    deleteCategory(id: string): Promise<DeleteResult>;
}
