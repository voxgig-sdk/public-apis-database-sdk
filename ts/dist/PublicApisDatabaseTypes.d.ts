export interface ApI {
    avgResponseTime?: number;
    baseUrl?: string;
    category?: string;
    cors?: boolean;
    dateAdded?: string;
    description: string;
    documentationUrl: string;
    endpoints?: number;
    errorRate?: number;
    healthScore?: number;
    id: string;
    lastChecked?: string;
    name: string;
    reliability?: number;
    tags?: any[];
}
export interface ApILoadMatch {
    avgResponseTime?: number;
    baseUrl?: string;
    category?: string;
    cors?: boolean;
    dateAdded?: string;
    description?: string;
    documentationUrl?: string;
    endpoints?: number;
    errorRate?: number;
    healthScore?: number;
    id: string;
    lastChecked?: string;
    name?: string;
    reliability?: number;
    tags?: any[];
}
export interface ApIListMatch {
    category?: string;
    limit?: number;
    offset?: number;
}
