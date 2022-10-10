import { PipeTransform } from '@nestjs/common';
import { CategoriesService } from '../categories.service';
export declare class ValidCategoryIdPipe implements PipeTransform {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    transform(value: any): Promise<any>;
}
