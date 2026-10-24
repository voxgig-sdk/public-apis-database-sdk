# PublicApisDatabase SDK utility: prepare_body
require_relative 'media'
module PublicApisDatabaseUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return PublicApisDatabaseUtilities.raw_body(ctx.reqdata) if PublicApisDatabaseUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
