import { UserDto } from './user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<UserDto[]>;
    getUserById(id: string): Promise<UserDto>;
    newUser(user: UserDto): Promise<UserDto>;
    updateUser(id: string, user: UserDto): Promise<UserDto>;
    deleteUser(id: string): Promise<void>;
    getPostsByUser(userId: string): Promise<import("../posts/post.entity").PostEntity[]>;
    getCategoriesByUser(userId: string): Promise<import("../categories/category.entity").CategoryEntity[]>;
}
