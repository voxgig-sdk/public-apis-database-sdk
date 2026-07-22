# PublicApisDatabase SDK utility: make_context
require_relative '../core/context'
module PublicApisDatabaseUtilities
  MakeContext = ->(ctxmap, basectx) {
    PublicApisDatabaseContext.new(ctxmap, basectx)
  }
end
