# PublicApisDatabase SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module PublicApisDatabaseFeatures
  def self.make_feature(name)
    case name
    when "base"
      PublicApisDatabaseBaseFeature.new
    when "ratelimit"
      PublicApisDatabaseRatelimitFeature.new
    when "retry"
      PublicApisDatabaseRetryFeature.new
    when "test"
      PublicApisDatabaseTestFeature.new
    when "timeout"
      PublicApisDatabaseTimeoutFeature.new
    else
      PublicApisDatabaseBaseFeature.new
    end
  end
end
