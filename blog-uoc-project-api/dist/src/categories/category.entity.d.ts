import { UserEntity } from 'src/users/user.entity';
import { BaseEntity } from 'typeorm';
export declare class CategoryEntity extends BaseEntity {
    readonly categoryId: string;
    readonly title: string;
    readonly description: string;
    readonly css_color: string;
    user: UserEntity;
    constructor(categoryId: string, title: string, description: string, css_color: string, user: UserEntity);
}
