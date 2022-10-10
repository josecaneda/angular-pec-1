"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const type_orm_exception_filter_1 = require("./filters/type-orm-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Project UOC BLOG 2021-2022')
        .setDescription('API for work')
        .setVersion('1.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
    }, 'access_token')
        .build();
    app.useGlobalFilters(new type_orm_exception_filter_1.TypeOrmExceptionFilter());
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document, {
        explorer: true,
        swaggerOptions: {
            filter: true,
            showRequestDuration: true,
        },
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map