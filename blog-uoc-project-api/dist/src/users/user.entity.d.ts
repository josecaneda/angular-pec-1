import { CategoryEntity } from 'src/categories/category.entity';
import { PostEntity } from 'src/posts/post.entity';
import { BaseEntity } from 'typeorm';
export declare class UserEntity extends BaseEntity {
    readonly userId: string;
    readonly name: string;
    readonly surname_1: string;
    readonly surname_2: string;
    readonly alias: string;
    readonly email: string;
    password: string;
    hashPassword(): Promise<void>;
    hashPasswordUpdate(): Promise<void>;
    validatePassword(password: string): Promise<boolean>;
    readonly birth_date: Date;
    posts: PostEntity[];
    categories: CategoryEntity[];
    constructor(userId: string, name: string, surname_1: string, surname_2: string, alias: string, email: string, password: string, birth_date: Date);
}
