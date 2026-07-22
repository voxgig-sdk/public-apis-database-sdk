-- Typed models for the PublicApisDatabase SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class ApI
---@field avg_response_time? number
---@field base_url? string
---@field category? string
---@field cor? boolean
---@field date_added? string
---@field description string
---@field documentation_url string
---@field endpoint? number
---@field error_rate? number
---@field health_score? number
---@field id string
---@field last_checked? string
---@field name string
---@field reliability? number
---@field tag? table

---@class ApILoadMatch
---@field avg_response_time? number
---@field base_url? string
---@field category? string
---@field cor? boolean
---@field date_added? string
---@field description? string
---@field documentation_url? string
---@field endpoint? number
---@field error_rate? number
---@field health_score? number
---@field id string
---@field last_checked? string
---@field name? string
---@field reliability? number
---@field tag? table

---@class ApIListMatch
---@field avg_response_time? number
---@field base_url? string
---@field category? string
---@field cor? boolean
---@field date_added? string
---@field description? string
---@field documentation_url? string
---@field endpoint? number
---@field error_rate? number
---@field health_score? number
---@field id? string
---@field last_checked? string
---@field name? string
---@field reliability? number
---@field tag? table

local M = {}

return M
