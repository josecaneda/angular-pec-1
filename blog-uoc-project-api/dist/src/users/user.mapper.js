"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const user_dto_1 = require("./user.dto");
const user_entity_1 = require("./user.entity");
class UserMapper {
    dtoToEntity(userDTO) {
        return new user_entity_1.UserEntity(userDTO.id, userDTO.name, userDTO.surname_1, userDTO.surname_2, userDTO.alias, userDTO.email, userDTO.password, userDTO.birth_date);
    }
    entityToDto(userEntity) {
        return new user_dto_1.UserDto(userEntity.userId, userEntity.name, userEntity.surname_1, userEntity.surname_2, userEntity.alias, userEntity.email, userEntity.password, userEntity.birth_date);
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=user.mapper.js.map