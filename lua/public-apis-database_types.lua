-- Typed models for the PublicApisDatabase SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class ApI
---@field avgResponseTime? number
---@field baseUrl? string
---@field category? string
---@field cors? boolean
---@field dateAdded? string
---@field description string
---@field documentationUrl string
---@field endpoints? number
---@field errorRate? number
---@field healthScore? number
---@field id string
---@field lastChecked? string
---@field name string
---@field reliability? number
---@field tags? table

---@class ApILoadMatch
---@field avgResponseTime? number
---@field baseUrl? string
---@field category? string
---@field cors? boolean
---@field dateAdded? string
---@field description? string
---@field documentationUrl? string
---@field endpoints? number
---@field errorRate? number
---@field healthScore? number
---@field id string
---@field lastChecked? string
---@field name? string
---@field reliability? number
---@field tags? table

---@class ApIListMatch
---@field avgResponseTime? number
---@field baseUrl? string
---@field category? string
---@field cors? boolean
---@field dateAdded? string
---@field description? string
---@field documentationUrl? string
---@field endpoints? number
---@field errorRate? number
---@field healthScore? number
---@field id? string
---@field lastChecked? string
---@field name? string
---@field reliability? number
---@field tags? table

local M = {}

return M
