# PublicApisDatabase SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module PublicApisDatabaseFeatures
  def self.make_feature(name)
    case name
    when "base"
      PublicApisDatabaseBaseFeature.new
    when "test"
      PublicApisDatabaseTestFeature.new
    else
      PublicApisDatabaseBaseFeature.new
    end
  end
end
