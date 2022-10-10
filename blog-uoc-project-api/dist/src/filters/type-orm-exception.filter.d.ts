import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Request } from 'express';
export declare class TypeOrmExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost): void;
}
export declare const GlobalResponseError: (statusCode: number, message: string, messageDetail: string, code: string, request: Request) => IResponseError;
export interface IResponseError {
    statusCode: number;
    message: string;
    messageDetail: string;
    code: string;
    timestamp: string;
    path: string;
    method: string;
}
