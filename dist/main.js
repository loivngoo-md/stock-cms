"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const exception_filter_1 = require("./exceptions/exception.filter");
const BackendLogger_1 = require("./modules/logger/BackendLogger");
const swagger_1 = require("@nestjs/swagger");
const swagger_constant_1 = require("./common/constant/swagger.constant");
const path_1 = require("path");
async function bootstrap(logger) {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public/uploads'));
    app.enableCors();
    app.setGlobalPrefix('/api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe());
    const options = new swagger_1.DocumentBuilder()
        .setTitle(swagger_constant_1.SWAGGER.TITLE)
        .setDescription(swagger_constant_1.SWAGGER.DESCRIPTION)
        .setVersion(swagger_constant_1.SWAGGER.VERSION)
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'access-token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalFilters(new exception_filter_1.ExceptionLoggerFilter(httpAdapter));
    await app.listen(app_module_1.AppModule.port);
    logger.log(`Server is running at PORT: ${app_module_1.AppModule.port}`);
}
bootstrap(new BackendLogger_1.BackendLogger(bootstrap.name));
//# sourceMappingURL=main.js.map