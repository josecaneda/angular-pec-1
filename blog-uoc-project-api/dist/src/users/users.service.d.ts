import { CategoryEntity } from 'src/categories/category.entity';
import { PostEntity } from 'src/posts/post.entity';
import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';
import { UserMapper } from './user.mapper';
import { UsersRepository } from './users.repository';
export declare class UsersService {
    private usersRepository;
    private mapper;
    constructor(usersRepository: UsersRepository, mapper: UserMapper);
    getAllUsers(): Promise<UserDto[]>;
    getUserById(id: string): Promise<UserDto>;
    getUserByAlias(alias: string): Promise<UserEntity>;
    getUserByEmail(email: string): Promise<UserEntity>;
    userAliasAlreadyExist(user: UserDto): Promise<number>;
    userEmailAlreadyExist(user: UserDto): Promise<number>;
    newUser(userDTO: UserDto): Promise<UserDto>;
    updateUser(id: string, userDTO: UserDto): Promise<UserDto>;
    deleteUser(id: string): Promise<void>;
    getPostsByUser(userId: string): Promise<PostEntity[]>;
    getCategoriesByUser(userId: string): Promise<CategoryEntity[]>;
}
