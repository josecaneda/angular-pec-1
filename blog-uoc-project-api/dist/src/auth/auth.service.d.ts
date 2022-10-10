import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
export interface JWTPayload {
    userId: string;
}
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<boolean>;
    generateAccessToken(email: string): Promise<{
        user_id: string;
        access_token: string;
    }>;
}
