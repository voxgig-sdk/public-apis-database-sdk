// Typed models for the PublicApisDatabase SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface ApI {
  avg_response_time?: number
  base_url?: string
  category?: string
  cor?: boolean
  date_added?: string
  description: string
  documentation_url: string
  endpoint?: number
  error_rate?: number
  health_score?: number
  id: string
  last_checked?: string
  name: string
  reliability?: number
  tag?: any[]
}

export interface ApILoadMatch {
  avg_response_time?: number
  base_url?: string
  category?: string
  cor?: boolean
  date_added?: string
  description?: string
  documentation_url?: string
  endpoint?: number
  error_rate?: number
  health_score?: number
  id: string
  last_checked?: string
  name?: string
  reliability?: number
  tag?: any[]
}

export interface ApIListMatch {
  avg_response_time?: number
  base_url?: string
  category?: string
  cor?: boolean
  date_added?: string
  description?: string
  documentation_url?: string
  endpoint?: number
  error_rate?: number
  health_score?: number
  id?: string
  last_checked?: string
  name?: string
  reliability?: number
  tag?: any[]
}

