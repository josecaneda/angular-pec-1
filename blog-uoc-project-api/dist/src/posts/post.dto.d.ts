import { CategoryDto } from 'src/categories/category.dto';
export declare class PostDto {
    readonly postId?: string;
    readonly title: string;
    readonly description: string;
    readonly num_likes: number;
    readonly num_dislikes: number;
    readonly publication_date: Date;
    readonly userId: string;
    readonly userAlias?: string;
    readonly categories: CategoryDto[];
    constructor(postId: string, title: string, description: string, num_likes: number, num_dislikes: number, publication_date: Date, userId: string, userAlias: string, categories: CategoryDto[]);
}
