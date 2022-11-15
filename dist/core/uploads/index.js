"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
const multer_1 = require("multer");
const path_1 = require("path");
exports.storage = {
    storage: (0, multer_1.diskStorage)({
        destination: './public/uploads',
        filename: (req, file, cb) => {
            const randomName = Array(32)
                .fill(null)
                .map(() => Math.round(Math.random() * 16).toString(16))
                .join('');
            cb(null, `${randomName}_${(0, path_1.extname)(file.originalname)}`);
        },
    }),
};
//# sourceMappingURL=index.js.map