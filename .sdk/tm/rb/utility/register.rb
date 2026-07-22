# PublicApisDatabase SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

PublicApisDatabaseUtility.registrar = ->(u) {
  u.clean = PublicApisDatabaseUtilities::Clean
  u.done = PublicApisDatabaseUtilities::Done
  u.make_error = PublicApisDatabaseUtilities::MakeError
  u.feature_add = PublicApisDatabaseUtilities::FeatureAdd
  u.feature_hook = PublicApisDatabaseUtilities::FeatureHook
  u.feature_init = PublicApisDatabaseUtilities::FeatureInit
  u.fetcher = PublicApisDatabaseUtilities::Fetcher
  u.make_fetch_def = PublicApisDatabaseUtilities::MakeFetchDef
  u.make_context = PublicApisDatabaseUtilities::MakeContext
  u.make_options = PublicApisDatabaseUtilities::MakeOptions
  u.make_request = PublicApisDatabaseUtilities::MakeRequest
  u.make_response = PublicApisDatabaseUtilities::MakeResponse
  u.make_result = PublicApisDatabaseUtilities::MakeResult
  u.make_point = PublicApisDatabaseUtilities::MakePoint
  u.make_spec = PublicApisDatabaseUtilities::MakeSpec
  u.make_url = PublicApisDatabaseUtilities::MakeUrl
  u.param = PublicApisDatabaseUtilities::Param
  u.prepare_auth = PublicApisDatabaseUtilities::PrepareAuth
  u.prepare_body = PublicApisDatabaseUtilities::PrepareBody
  u.prepare_headers = PublicApisDatabaseUtilities::PrepareHeaders
  u.prepare_method = PublicApisDatabaseUtilities::PrepareMethod
  u.prepare_params = PublicApisDatabaseUtilities::PrepareParams
  u.prepare_path = PublicApisDatabaseUtilities::PreparePath
  u.prepare_query = PublicApisDatabaseUtilities::PrepareQuery
  u.result_basic = PublicApisDatabaseUtilities::ResultBasic
  u.result_body = PublicApisDatabaseUtilities::ResultBody
  u.result_headers = PublicApisDatabaseUtilities::ResultHeaders
  u.transform_request = PublicApisDatabaseUtilities::TransformRequest
  u.transform_response = PublicApisDatabaseUtilities::TransformResponse
}
