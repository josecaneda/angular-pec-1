import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDTO: LoginDto): Promise<{
        access_token: string;
    }>;
}
