import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "api",
    "accessor": "Api",
    "op": "list",
    "method": "GET",
    "path": "/api/list",
    "action": "list",
    "args": [],
    "select": {
      "category": "v1",
      "limit": 50,
      "offset": 0
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "category",
      "limit",
      "offset"
    ],
    "queryArgs": [
      {
        "name": "category",
        "wire": "category"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "count": 624,
      "apis": [
        {
          "id": "x",
          "name": "x",
          "description": "x",
          "documentationUrl": "x",
          "baseUrl": "x",
          "healthScore": 1,
          "reliability": 1,
          "errorRate": 1,
          "avgResponseTime": 1,
          "cors": true,
          "endpoints": 1,
          "category": "x",
          "tags": [
            "x"
          ],
          "lastChecked": "2026-01-01T00:00:00Z",
          "dateAdded": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "api",
    "accessor": "Api",
    "op": "load",
    "method": "GET",
    "path": "/new",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "text/html"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
