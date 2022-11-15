import { NestMiddleware } from '@nestjs/common';
import * as cls from 'cls-hooked';
export declare class SessionMiddleware implements NestMiddleware {
    static createDefault(): cls.Namespace;
    static get(key: string): any;
    static set(key: string, value: any): any;
    use(req: Request, res: Response, next: any): void;
}
