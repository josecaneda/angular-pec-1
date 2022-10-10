import { PipeTransform } from '@nestjs/common';
import { CategoriesService } from '../categories.service';
import { CategoryDto } from '../category.dto';
export declare class ExistCategoryCssColorPipe implements PipeTransform {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    transform(value: CategoryDto): Promise<CategoryDto>;
}
