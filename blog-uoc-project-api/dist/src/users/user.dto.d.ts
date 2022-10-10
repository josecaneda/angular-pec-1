export declare class UserDto {
    readonly id?: string;
    readonly name: string;
    readonly surname_1: string;
    readonly surname_2?: string;
    readonly alias: string;
    readonly email: string;
    readonly password: string;
    readonly birth_date?: Date;
    readonly posts: string[];
    readonly categories: string[];
    constructor(id: string, name: string, surname_1: string, surname_2: string, alias: string, email: string, password: string, birth_date: Date);
}
