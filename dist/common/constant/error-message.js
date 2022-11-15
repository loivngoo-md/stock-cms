"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FORBIDDEN = exports.UNAVAIL_DEVICE = exports.MISSING_PARAMS = exports.FORDBBIDEN_MESS = exports.ENUM_ERR = exports.DEVICE_MESSAGE = exports.TEAM_MESSAGE = exports.USER_MESSAGE = exports.LOGIN_ERR = exports.UNAUTHORIZED_MESSAGE = exports.INVALID_TOKEN = exports.INVALID_PASSWORD = exports.INVALID_ID = exports.INVALID_EMAIL = exports.EMPTY = exports.INTERNAL_SERVER_ERROR = exports.NOT_FOUND_REQUEST = exports.NOT_FOUND_USER = exports.NOT_FOUND_TEAM = exports.NOT_FOUND = void 0;
exports.NOT_FOUND = 'Not found';
exports.NOT_FOUND_TEAM = 'Team not exist';
exports.NOT_FOUND_USER = 'User not exist';
exports.NOT_FOUND_REQUEST = 'Request not exist';
exports.INTERNAL_SERVER_ERROR = 'Internal server error';
exports.EMPTY = 'Empty';
exports.INVALID_EMAIL = 'Invalid username';
exports.INVALID_ID = 'Invalid id';
exports.INVALID_PASSWORD = 'Invalid Password';
exports.INVALID_TOKEN = 'Invalid token';
exports.UNAUTHORIZED_MESSAGE = 'Not have permission to access it';
exports.LOGIN_ERR = 'The current user is not logged in to the system';
exports.USER_MESSAGE = {
    INVALID_USERNAME: 'Username is invalid',
    INVALID_PASSWORD: 'Password is invalid',
    INVALID_EMAIL: 'Invalid is email',
    INVALID_FIRSTNAME: 'Firstname is invalid',
    INVALID_LASTNAME: 'Lastname is invalid',
    INVALID_ROLE: 'Role is invalid',
    INVALID_AVATAR_CODE: 'Avatar is invalid',
    USER_EXITED: 'Email or username has already existed',
};
exports.TEAM_MESSAGE = {
    INVALID_NAME: 'Name is invalid',
};
exports.DEVICE_MESSAGE = {
    INVALID_NAME: 'Invalid name',
    INVALID_DESCRIPTION: 'Invalid description',
    INVALID_GUARANTEE: 'Invalid guarantee',
    INVALID_MANUFACTURER: 'Invalid manufacturer',
    INVALID_QR_CODE: 'Invalid QR code',
    INVALID_STATUS: 'Invalid status',
    INVALID_START_DATE: 'Invalid start date',
    NOT_FOUND_DEVICE: 'Not found valid device',
    USING_DEVICE: 'Cannot delete using device',
};
exports.ENUM_ERR = {
    INVALID_ROLE: 'Invalid role',
    INVALID_REQUEST_STATUS: 'Invalid request status',
    INVALID_DEVICE_USAGE_STATUS: 'Invalid device usage status',
    INVALID_REQUEST_TYPE: 'Invalid request type',
    INVALID_REQUEST_PRIORITY: 'Invalid request priority',
};
exports.FORDBBIDEN_MESS = {
    FORBIDDEN_UPDATE_REQUEST: 'You do not have permission to edit this request',
    APPROVED_EXCEP: `You can't edit appoved request`,
    MISSING_DEVICEID: `Please update device`,
};
exports.MISSING_PARAMS = `Missing required parameters`;
exports.UNAVAIL_DEVICE = `Unavailable device`;
exports.FORBIDDEN = `Forbidden resource.`;
//# sourceMappingURL=error-message.js.map