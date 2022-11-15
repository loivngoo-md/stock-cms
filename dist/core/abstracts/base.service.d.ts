export interface IService {
    handleResponseJSON: Function;
}
export declare class BaseService implements IService {
    handleResponseBoolean: (response: any) => boolean;
    handleResponseJSON: (response: any) => any;
}
