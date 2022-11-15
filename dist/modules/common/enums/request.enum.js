"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestPriority = exports.RequestType = exports.RequestStatus = void 0;
var RequestStatus;
(function (RequestStatus) {
    RequestStatus["PM_PENDING"] = "PM_PENDING";
    RequestStatus["PM_REJECTED"] = "PM_REJECTED";
    RequestStatus["PM_APPROVED"] = "PM_APPROVED";
    RequestStatus["IT_PENDING"] = "IT_PENDING";
    RequestStatus["IT_REJECTED"] = "IT_REJECTED";
    RequestStatus["IT_APPROVED"] = "IT_APPROVED";
    RequestStatus["IT_RETURNED"] = "IT_RETURNED";
    RequestStatus["IT_DELIVERED"] = "IT_DELIVERED";
})(RequestStatus = exports.RequestStatus || (exports.RequestStatus = {}));
var RequestType;
(function (RequestType) {
    RequestType["ADDITIONAL"] = "ADDITIONAL";
    RequestType["RETURN"] = "RETURN";
})(RequestType = exports.RequestType || (exports.RequestType = {}));
var RequestPriority;
(function (RequestPriority) {
    RequestPriority["MINOR"] = "MINOR";
    RequestPriority["MEDIUM"] = "MEDIUM";
    RequestPriority["MAJOR"] = "MAJOR";
    RequestPriority["CRITICAL"] = "CRITICAL";
})(RequestPriority = exports.RequestPriority || (exports.RequestPriority = {}));
//# sourceMappingURL=request.enum.js.map