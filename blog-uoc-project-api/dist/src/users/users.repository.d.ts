import { CategoryEntity } from 'src/categories/category.entity';
import { PostEntity } from 'src/posts/post.entity';
import { DeleteResult, Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';
import { UserMapper } from './user.mapper';
export declare class UsersRepository {
    private usersRepository;
    private mapper;
    constructor(usersRepository: Repository<UserEntity>, mapper: UserMapper);
    getAllUsers(): Promise<UserEntity[]>;
    getUserById(id: string): Promise<UserEntity>;
    getUserByAlias(alias: string): Promise<UserEntity>;
    getUserByEmail(email: string): Promise<UserEntity>;
    userAliasAlreadyExist(user: UserDto): Promise<number>;
    userEmailAlreadyExist(user: UserDto): Promise<number>;
    newUser(userDTO: UserDto): Promise<UserEntity>;
    updateUser(id: string, userDTO: UserDto): Promise<UserEntity>;
    deleteUser(id: string): Promise<DeleteResult>;
    getPostsByUser(userId: string): Promise<PostEntity[]>;
    getCategoriesByUser(userId: string): Promise<CategoryEntity[]>;
}
