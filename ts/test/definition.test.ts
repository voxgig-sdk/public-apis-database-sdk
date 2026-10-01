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
      "limit": "v1",
      "offset": "v1"
    },
    "headers": [],
    "query": [
      "category",
      "limit",
      "offset"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "count": 624,
      "apis": [
        {
          "avgResponseTime": 1,
          "baseUrl": "x",
          "category": "x",
          "cors": true,
          "dateAdded": "2026-01-01T00:00:00Z",
          "description": "x",
          "documentationUrl": "x",
          "endpoints": 1,
          "errorRate": 1,
          "healthScore": 1,
          "id": "x",
          "lastChecked": "2026-01-01T00:00:00Z",
          "name": "x",
          "reliability": 1,
          "tags": [
            "x"
          ]
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
    "query": [],
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
