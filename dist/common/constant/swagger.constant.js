"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUCCESS = exports.SWAGGER = exports.VERSION = exports.Tags = exports.Tag = void 0;
exports.Tag = {
    Token: 'token',
    Auth: 'Auth',
    User: 'User',
    Team: 'Team',
    Device: 'Device',
    Request: 'Request',
};
exports.Tags = ['Auth', 'User', 'Team', 'Device', 'Request'];
exports.VERSION = `1.0.0`;
exports.SWAGGER = {
    BEARER_AUTH: `Token`,
    TITLE: `Drima API`,
    VERSION: exports.VERSION,
    DESCRIPTION: 'The Swagger specification defines a set of files required to describe such an API. These files can then be used by the Swagger-UI project to display the API and Swagger-Codegen to generate clients.',
    TAGS: [...exports.Tags],
};
exports.SUCCESS = `Success`;
//# sourceMappingURL=swagger.constant.js.map