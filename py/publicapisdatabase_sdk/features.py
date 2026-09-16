# PublicApisDatabase SDK feature factory

from publicapisdatabase_sdk.feature.base_feature import PublicApisDatabaseBaseFeature
from publicapisdatabase_sdk.feature.ratelimit_feature import PublicApisDatabaseRatelimitFeature
from publicapisdatabase_sdk.feature.retry_feature import PublicApisDatabaseRetryFeature
from publicapisdatabase_sdk.feature.test_feature import PublicApisDatabaseTestFeature
from publicapisdatabase_sdk.feature.timeout_feature import PublicApisDatabaseTimeoutFeature


_FEATURES = {
    "base": lambda: PublicApisDatabaseBaseFeature(),
    "ratelimit": lambda: PublicApisDatabaseRatelimitFeature(),
    "retry": lambda: PublicApisDatabaseRetryFeature(),
    "test": lambda: PublicApisDatabaseTestFeature(),
    "timeout": lambda: PublicApisDatabaseTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
