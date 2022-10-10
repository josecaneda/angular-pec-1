"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UserDto {
    constructor(id, name, surname_1, surname_2, alias, email, password, birth_date) {
        this.id = id;
        this.name = name;
        this.surname_1 = surname_1;
        this.surname_2 = surname_2;
        this.alias = alias;
        this.email = email;
        this.password = password;
        this.birth_date = birth_date;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserDto.prototype, "surname_1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserDto.prototype, "surname_2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserDto.prototype, "alias", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], UserDto.prototype, "birth_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], UserDto.prototype, "posts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], UserDto.prototype, "categories", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map