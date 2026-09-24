// Typed models for the PublicApisDatabase SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Api {
}

export interface ApiLoadMatch {
}

export interface ApiListMatch {
  category?: string
  limit?: number
  offset?: number

  // Selects a custom action instead of the plain list:
  //   'list'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

