export interface Api {
}
export interface ApiLoadMatch {
}
export interface ApiListMatch {
    category?: string;
    limit?: number;
    offset?: number;
    $action?: string;
    [action: string]: any;
}
