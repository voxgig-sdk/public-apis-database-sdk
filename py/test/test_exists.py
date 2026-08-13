# PublicApisDatabase SDK exists test

import pytest
from publicapisdatabase_sdk import PublicApisDatabaseSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = PublicApisDatabaseSDK.test(None, None)
        assert testsdk is not None
