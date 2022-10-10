import { Strategy } from 'passport-jwt';
import { UserDto } from 'src/users/user.dto';
import { UsersService } from 'src/users/users.service';
import { JWTPayload } from './auth.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    constructor(usersService: UsersService);
    validate(payload: JWTPayload): Promise<UserDto>;
}
export {};
