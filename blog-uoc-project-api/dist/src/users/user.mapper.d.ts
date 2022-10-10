import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';
export declare class UserMapper {
    dtoToEntity(userDTO: UserDto): UserEntity;
    entityToDto(userEntity: UserEntity): UserDto;
}
