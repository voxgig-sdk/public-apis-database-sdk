// Typed models for the PublicApisDatabase SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface ApI {
  avgResponseTime?: number
  baseUrl?: string
  category?: string
  cors?: boolean
  dateAdded?: string
  description: string
  documentationUrl: string
  endpoints?: number
  errorRate?: number
  healthScore?: number
  id: string
  lastChecked?: string
  name: string
  reliability?: number
  tags?: any[]
}

export interface ApILoadMatch {
  avgResponseTime?: number
  baseUrl?: string
  category?: string
  cors?: boolean
  dateAdded?: string
  description?: string
  documentationUrl?: string
  endpoints?: number
  errorRate?: number
  healthScore?: number
  id: string
  lastChecked?: string
  name?: string
  reliability?: number
  tags?: any[]
}

export interface ApIListMatch {
  avgResponseTime?: number
  baseUrl?: string
  category?: string
  cors?: boolean
  dateAdded?: string
  description?: string
  documentationUrl?: string
  endpoints?: number
  errorRate?: number
  healthScore?: number
  id?: string
  lastChecked?: string
  name?: string
  reliability?: number
  tags?: any[]
}

