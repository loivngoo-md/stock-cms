import { InternalServerErrorException, NotFoundException } from '@nestjs/common';
declare type T = any;
declare function handleResponseJSONOrNotFound(response: T): Promise<T | NotFoundException>;
declare function handleResponseJSONOrInternal(response: T): Promise<T | InternalServerErrorException>;
declare function handleResponseJSONOrForbidden(response: any): any;
declare const _default: {
    handleResponseJSONOrForbidden: typeof handleResponseJSONOrForbidden;
    handleResponseJSONOrInternal: typeof handleResponseJSONOrInternal;
    handleResponseJSONOrNotFound: typeof handleResponseJSONOrNotFound;
};
export default _default;
