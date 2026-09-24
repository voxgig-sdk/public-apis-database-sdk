# frozen_string_literal: true

# Typed models for the PublicApisDatabase SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Api entity data model.
class Api
end

# Request payload for Api#load.
class ApiLoadMatch
end

# Request payload for Api#list.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
ApiListMatch = Struct.new(
  :category,
  :limit,
  :offset,
  keyword_init: true
)

