"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalResponseError = exports.TypeOrmExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
class TypeOrmExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let message = exception.message.message;
        let code = 'HttpException';
        common_1.Logger.error(message, exception.stack, `${request.method} ${request.url}`);
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let messageDetail = '';
        switch (exception.constructor) {
            case common_1.HttpException:
                status = exception.getStatus();
                break;
            case typeorm_1.QueryFailedError:
                status = common_1.HttpStatus.UNPROCESSABLE_ENTITY;
                message = exception.message;
                messageDetail = exception.driverError['detail'];
                code = exception.code;
                break;
            case typeorm_1.EntityNotFoundError:
                status = common_1.HttpStatus.UNPROCESSABLE_ENTITY;
                message = exception.message;
                code = exception.code;
                break;
            case typeorm_1.CannotCreateEntityIdMapError:
                status = common_1.HttpStatus.UNPROCESSABLE_ENTITY;
                message = exception.message;
                code = exception.code;
                break;
            case common_1.UnauthorizedException:
                status = common_1.HttpStatus.UNAUTHORIZED;
                message = exception.message;
                code = exception.code;
                break;
            default:
                status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
                common_1.Logger.debug(exception);
        }
        response
            .status(status)
            .json((0, exports.GlobalResponseError)(status, message, messageDetail, code, request));
    }
}
exports.TypeOrmExceptionFilter = TypeOrmExceptionFilter;
const GlobalResponseError = (statusCode, message, messageDetail, code, request) => {
    return {
        statusCode: statusCode,
        message,
        messageDetail,
        code,
        timestamp: new Date().toISOString(),
        path: request.url,
        method: request.method,
    };
};
exports.GlobalResponseError = GlobalResponseError;
//# sourceMappingURL=type-orm-exception.filter.js.map