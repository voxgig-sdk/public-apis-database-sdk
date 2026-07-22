
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: 'https://www.freepublicapis.com',

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
          "active": true,
          "name": "avg_response_time",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 0
        },
        {
          "active": true,
          "name": "base_url",
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "category",
          "req": false,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "cor",
          "req": false,
          "type": "`$BOOLEAN`",
          "index$": 3
        },
        {
          "active": true,
          "name": "date_added",
          "req": false,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "description",
          "req": true,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "documentation_url",
          "req": true,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "endpoint",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 7
        },
        {
          "active": true,
          "name": "error_rate",
          "req": false,
          "type": "`$NUMBER`",
          "index$": 8
        },
        {
          "active": true,
          "name": "health_score",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 9
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 10
        },
        {
          "active": true,
          "name": "last_checked",
          "req": false,
          "type": "`$STRING`",
          "index$": 11
        },
        {
          "active": true,
          "name": "name",
          "req": true,
          "type": "`$STRING`",
          "index$": 12
        },
        {
          "active": true,
          "name": "reliability",
          "req": false,
          "type": "`$NUMBER`",
          "index$": 13
        },
        {
          "active": true,
          "name": "tag",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 14
        }
      ],
      "name": "ap_i",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "category",
                    "orig": "category",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": 50,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "method": "GET",
              "orig": "/api/list",
              "parts": [
                "api",
                "list"
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
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {},
              "method": "GET",
              "orig": "/new",
              "parts": [
                "new"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
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
  config
}

