import { CategoryDto } from './category.dto';
import { CategoryEntity } from './category.entity';
export declare class CategoryMapper {
    dtoToEntity(categoryDTO: CategoryDto): Promise<CategoryEntity>;
    entityToDto(categoryEntity: CategoryEntity): CategoryDto;
}
