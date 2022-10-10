import { CategoryEntity } from 'src/categories/category.entity';
import { UserEntity } from 'src/users/user.entity';
import { BaseEntity } from 'typeorm';
export declare class PostEntity extends BaseEntity {
    readonly postId: string;
    readonly title: string;
    readonly description: string;
    readonly num_likes: number;
    readonly num_dislikes: number;
    readonly publication_date: Date;
    user: UserEntity;
    categories: CategoryEntity[];
    constructor(postId: string, title: string, description: string, num_likes: number, num_dislikes: number, publication_date: Date, user: UserEntity, categories: CategoryEntity[]);
}
