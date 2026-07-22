# PublicApisDatabase SDK configuration


def make_config():
    return {
        "main": {
            "name": "PublicApisDatabase",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "active": True,
            "name": "avg_response_time",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "base_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "category",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "cor",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "date_added",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "description",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "documentation_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "endpoint",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "error_rate",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "health_score",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "last_checked",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "reliability",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "tag",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 14,
          },
        ],
        "name": "ap_i",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "category",
                      "orig": "category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/api/list",
                "parts": [
                  "api",
                  "list",
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
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/new",
                "parts": [
                  "new",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
