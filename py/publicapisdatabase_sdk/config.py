# PublicApisDatabase SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "PublicApisDatabase",
            "slug": "public-apis-database",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://www.freepublicapis.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "ap_i": {},
            },
        },
        "entity": {
      "ap_i": {
        "fields": [
          {
            "name": "avgResponseTime",
            "short": "Average response time in milliseconds",
            "type": "`$INTEGER`",
          },
          {
            "format": "uri",
            "name": "baseUrl",
            "short": "Base URL of the API",
            "type": "`$STRING`",
          },
          {
            "name": "category",
            "short": "Category of the API",
            "type": "`$STRING`",
          },
          {
            "name": "cors",
            "short": "Whether CORS is enabled",
            "type": "`$BOOLEAN`",
          },
          {
            "format": "date-time",
            "name": "dateAdded",
            "short": "Timestamp when API was added to the database",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "req": True,
            "short": "Description of the API functionality",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "documentationUrl",
            "req": True,
            "short": "URL to the API documentation",
            "type": "`$STRING`",
          },
          {
            "name": "endpoints",
            "short": "Number of endpoints available",
            "type": "`$INTEGER`",
          },
          {
            "format": "float",
            "name": "errorRate",
            "short": "Error rate percentage of the API",
            "type": "`$NUMBER`",
          },
          {
            "name": "healthScore",
            "short": "Health score of the API (0-100)",
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "req": True,
            "short": "Unique identifier for the API",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "lastChecked",
            "short": "Timestamp of last health check",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "Name of the API",
            "type": "`$STRING`",
          },
          {
            "format": "float",
            "name": "reliability",
            "short": "Reliability percentage of the API",
            "type": "`$NUMBER`",
          },
          {
            "name": "tags",
            "short": "Tags associated with the API",
            "type": "`$ARRAY`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "ap_i",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "category",
                      "orig": "category",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 50,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/list",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "list",
                  },
                ],
                "select": {
                  "exist": [
                    "category",
                    "limit",
                    "offset",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.apis`",
                },
                "parts": [
                  "api",
                  "list",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/new",
                "segments": [
                  {
                    "lit": "new",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "new",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
