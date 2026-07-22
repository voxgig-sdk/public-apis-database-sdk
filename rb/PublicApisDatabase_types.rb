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
# @!attribute [rw] avg_response_time
#   @return [Integer, nil]
#
# @!attribute [rw] base_url
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] cor
#   @return [Boolean, nil]
#
# @!attribute [rw] date_added
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] documentation_url
#   @return [String]
#
# @!attribute [rw] endpoint
#   @return [Integer, nil]
#
# @!attribute [rw] error_rate
#   @return [Float, nil]
#
# @!attribute [rw] health_score
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] last_checked
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] reliability
#   @return [Float, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
ApI = Struct.new(
  :avg_response_time,
  :base_url,
  :category,
  :cor,
  :date_added,
  :description,
  :documentation_url,
  :endpoint,
  :error_rate,
  :health_score,
  :id,
  :last_checked,
  :name,
  :reliability,
  :tag,
  keyword_init: true
)

# Request payload for ApI#load.
#
# @!attribute [rw] avg_response_time
#   @return [Integer, nil]
#
# @!attribute [rw] base_url
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] cor
#   @return [Boolean, nil]
#
# @!attribute [rw] date_added
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] documentation_url
#   @return [String, nil]
#
# @!attribute [rw] endpoint
#   @return [Integer, nil]
#
# @!attribute [rw] error_rate
#   @return [Float, nil]
#
# @!attribute [rw] health_score
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] last_checked
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] reliability
#   @return [Float, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
ApILoadMatch = Struct.new(
  :avg_response_time,
  :base_url,
  :category,
  :cor,
  :date_added,
  :description,
  :documentation_url,
  :endpoint,
  :error_rate,
  :health_score,
  :id,
  :last_checked,
  :name,
  :reliability,
  :tag,
  keyword_init: true
)

# Request payload for ApI#list.
#
# @!attribute [rw] avg_response_time
#   @return [Integer, nil]
#
# @!attribute [rw] base_url
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] cor
#   @return [Boolean, nil]
#
# @!attribute [rw] date_added
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] documentation_url
#   @return [String, nil]
#
# @!attribute [rw] endpoint
#   @return [Integer, nil]
#
# @!attribute [rw] error_rate
#   @return [Float, nil]
#
# @!attribute [rw] health_score
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] last_checked
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] reliability
#   @return [Float, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
ApIListMatch = Struct.new(
  :avg_response_time,
  :base_url,
  :category,
  :cor,
  :date_added,
  :description,
  :documentation_url,
  :endpoint,
  :error_rate,
  :health_score,
  :id,
  :last_checked,
  :name,
  :reliability,
  :tag,
  keyword_init: true
)

