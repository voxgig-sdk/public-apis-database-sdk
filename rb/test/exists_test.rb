# PublicApisDatabase SDK exists test

require "minitest/autorun"
require_relative "../PublicApisDatabase_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = PublicApisDatabaseSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
