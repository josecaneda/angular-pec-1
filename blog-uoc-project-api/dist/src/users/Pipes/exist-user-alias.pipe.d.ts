import { PipeTransform } from '@nestjs/common';
import { UserDto } from '../user.dto';
import { UsersService } from '../users.service';
export declare class ExistUserAliasPipe implements PipeTransform {
    private usersService;
    constructor(usersService: UsersService);
    transform(value: UserDto): Promise<UserDto>;
}
