# PublicApisDatabase SDK utility: make_context

from publicapisdatabase_sdk.core.context import PublicApisDatabaseContext


def make_context_util(ctxmap, basectx):
    return PublicApisDatabaseContext(ctxmap, basectx)
