import { PublicApisDatabaseEntityBase } from '../PublicApisDatabaseEntityBase';
import type { PublicApisDatabaseSDK } from '../PublicApisDatabaseSDK';
import type { Control } from '../types';
import type { Api, ApiLoadMatch, ApiListMatch } from '../PublicApisDatabaseTypes';
declare class ApiEntity extends PublicApisDatabaseEntityBase<Api> {
    constructor(client: PublicApisDatabaseSDK, entopts: any);
    make(this: ApiEntity): ApiEntity;
    load(this: any, reqmatch?: ApiLoadMatch, ctrl?: Control): Promise<ApiEntity>;
    list(this: any, reqmatch?: ApiListMatch, ctrl?: Control): Promise<ApiEntity[]>;
}
export { ApiEntity };
