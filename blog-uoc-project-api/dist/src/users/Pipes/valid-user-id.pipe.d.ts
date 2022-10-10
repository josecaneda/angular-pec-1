import { PipeTransform } from '@nestjs/common';
import { UsersService } from '../users.service';
export declare class ValidUserIdPipe implements PipeTransform {
    private usersService;
    constructor(usersService: UsersService);
    transform(value: any): Promise<any>;
}
