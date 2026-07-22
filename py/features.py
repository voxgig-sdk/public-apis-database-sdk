# PublicApisDatabase SDK feature factory

from feature.base_feature import PublicApisDatabaseBaseFeature
from feature.test_feature import PublicApisDatabaseTestFeature


def _make_feature(name):
    features = {
        "base": lambda: PublicApisDatabaseBaseFeature(),
        "test": lambda: PublicApisDatabaseTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
