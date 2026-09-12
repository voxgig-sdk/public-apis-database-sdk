import { PublicApisDatabaseEntityBase } from '../PublicApisDatabaseEntityBase';
import type { PublicApisDatabaseSDK } from '../PublicApisDatabaseSDK';
import type { Control } from '../types';
import type { ApI, ApILoadMatch, ApIListMatch } from '../PublicApisDatabaseTypes';
declare class ApIEntity extends PublicApisDatabaseEntityBase<ApI> {
    constructor(client: PublicApisDatabaseSDK, entopts: any);
    make(this: ApIEntity): ApIEntity;
    load(this: any, reqmatch?: ApILoadMatch, ctrl?: Control): Promise<ApIEntity>;
    list(this: any, reqmatch?: ApIListMatch, ctrl?: Control): Promise<ApIEntity[]>;
}
export { ApIEntity };
