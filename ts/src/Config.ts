
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'PublicApisDatabase',
        slug: "public-apis-database",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://www.freepublicapis.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      ap_i: {
      },

    }
  }


  entity = {
    "ap_i": {
      "fields": [
        {
          "name": "avgResponseTime",
          "short": "Average response time in milliseconds",
          "type": "`$INTEGER`"
        },
        {
          "format": "uri",
          "name": "baseUrl",
          "short": "Base URL of the API",
          "type": "`$STRING`"
        },
        {
          "name": "category",
          "short": "Category of the API",
          "type": "`$STRING`"
        },
        {
          "name": "cors",
          "short": "Whether CORS is enabled",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "dateAdded",
          "short": "Timestamp when API was added to the database",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "req": true,
          "short": "Description of the API functionality",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "documentationUrl",
          "req": true,
          "short": "URL to the API documentation",
          "type": "`$STRING`"
        },
        {
          "name": "endpoints",
          "short": "Number of endpoints available",
          "type": "`$INTEGER`"
        },
        {
          "format": "float",
          "name": "errorRate",
          "short": "Error rate percentage of the API",
          "type": "`$NUMBER`"
        },
        {
          "name": "healthScore",
          "short": "Health score of the API (0-100)",
          "type": "`$INTEGER`"
        },
        {
          "name": "id",
          "req": true,
          "short": "Unique identifier for the API",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "lastChecked",
          "short": "Timestamp of last health check",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "Name of the API",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "reliability",
          "short": "Reliability percentage of the API",
          "type": "`$NUMBER`"
        },
        {
          "name": "tags",
          "short": "Tags associated with the API",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
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
                    "type": "`$STRING`"
                  },
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/list",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "list"
                }
              ],
              "select": {
                "exist": [
                  "category",
                  "limit",
                  "offset"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.apis`"
              },
              "parts": [
                "api",
                "list"
              ]
            }
          ]
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
                  "lit": "new"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "new"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

