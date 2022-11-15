"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toArray = void 0;
function toArray(enumme) {
    return Object.keys(enumme)
        .filter((value) => isNaN(Number(value)) === false)
        .map((key) => enumme[key]);
}
exports.toArray = toArray;
//# sourceMappingURL=convertEnumToArray.js.map