# frozen_string_literal: true

# Typed models for the PublicApisDatabase SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# ApI entity data model.
#
# @!attribute [rw] avgResponseTime
#   @return [Integer, nil]
#
# @!attribute [rw] baseUrl
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] cors
#   @return [Boolean, nil]
#
# @!attribute [rw] dateAdded
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] documentationUrl
#   @return [String]
#
# @!attribute [rw] endpoints
#   @return [Integer, nil]
#
# @!attribute [rw] errorRate
#   @return [Float, nil]
#
# @!attribute [rw] healthScore
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] lastChecked
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] reliability
#   @return [Float, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
ApI = Struct.new(
  :avgResponseTime,
  :baseUrl,
  :category,
  :cors,
  :dateAdded,
  :description,
  :documentationUrl,
  :endpoints,
  :errorRate,
  :healthScore,
  :id,
  :lastChecked,
  :name,
  :reliability,
  :tags,
  keyword_init: true
)

# Request payload for ApI#load.
#
# @!attribute [rw] avgResponseTime
#   @return [Integer, nil]
#
# @!attribute [rw] baseUrl
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] cors
#   @return [Boolean, nil]
#
# @!attribute [rw] dateAdded
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] documentationUrl
#   @return [String, nil]
#
# @!attribute [rw] endpoints
#   @return [Integer, nil]
#
# @!attribute [rw] errorRate
#   @return [Float, nil]
#
# @!attribute [rw] healthScore
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] lastChecked
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] reliability
#   @return [Float, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
ApILoadMatch = Struct.new(
  :avgResponseTime,
  :baseUrl,
  :category,
  :cors,
  :dateAdded,
  :description,
  :documentationUrl,
  :endpoints,
  :errorRate,
  :healthScore,
  :id,
  :lastChecked,
  :name,
  :reliability,
  :tags,
  keyword_init: true
)

# Request payload for ApI#list.
#
# @!attribute [rw] avgResponseTime
#   @return [Integer, nil]
#
# @!attribute [rw] baseUrl
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] cors
#   @return [Boolean, nil]
#
# @!attribute [rw] dateAdded
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] documentationUrl
#   @return [String, nil]
#
# @!attribute [rw] endpoints
#   @return [Integer, nil]
#
# @!attribute [rw] errorRate
#   @return [Float, nil]
#
# @!attribute [rw] healthScore
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] lastChecked
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] reliability
#   @return [Float, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
ApIListMatch = Struct.new(
  :avgResponseTime,
  :baseUrl,
  :category,
  :cors,
  :dateAdded,
  :description,
  :documentationUrl,
  :endpoints,
  :errorRate,
  :healthScore,
  :id,
  :lastChecked,
  :name,
  :reliability,
  :tags,
  keyword_init: true
)

