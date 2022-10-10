import { DeleteResult, Repository } from 'typeorm';
import { CategoryDto } from './category.dto';
import { CategoryEntity } from './category.entity';
import { CategoryMapper } from './category.mapper';
export declare class CategoriesRepository {
    private categoriesRepository;
    private mapper;
    constructor(categoriesRepository: Repository<CategoryEntity>, mapper: CategoryMapper);
    getAllCategories(): Promise<CategoryEntity[]>;
    getCategoryById(id: string): Promise<CategoryEntity>;
    getCategoryByTitle(title: string): Promise<CategoryEntity>;
    getCategoryByColor(css_color: string): Promise<CategoryEntity>;
    categoryTitleAlreadyExist(category: CategoryDto): Promise<number>;
    categoryCssColorAlreadyExist(category: CategoryDto): Promise<number>;
    newCategory(categoryDTO: CategoryDto): Promise<CategoryEntity>;
    updateCategory(id: string, categoryDTO: CategoryDto): Promise<CategoryEntity>;
    deleteCategory(id: string): Promise<DeleteResult>;
}
