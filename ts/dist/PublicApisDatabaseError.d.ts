import { Context } from './Context';
declare class PublicApisDatabaseError extends Error {
    isPublicApisDatabaseError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { PublicApisDatabaseError };
