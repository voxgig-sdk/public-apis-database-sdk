

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { PublicApisDatabaseSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ApiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PUBLIC_APIS_DATABASE_TEST_LIVE=TRUE.
  afterEach(liveDelay('PUBLIC_APIS_DATABASE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PublicApisDatabaseSDK.test()
    const ent = testsdk.Api()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PUBLIC_APIS_DATABASE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"api","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/list","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"category","or":"category","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":50,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/api/list","q":{"$action":"list","exist":["category","limit","offset"]},"r":{},"s":[{"lit":"api"},{"lit":"list"}],"t":{"req":"`reqdata`","res":"`body.apis`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /new","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/new","q":{},"r":{},"s":[{"lit":"new"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"api","name__orig":"api","Name":"Api","name_":"api","name-":"api","NAME":"API","index$":0}, {"active":true,"entity":"api","key$":"BasicApiFlow","kind":"basic","name":"BasicApiFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"api_ref01","srcdatavar":"api_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_ref01"}}],"index$":1}]}, 'Api', {"GET /api/list":{"protocol":"http","operationId":"listApis","responses":{"200":{"description":"Successfully retrieved list of public APIs","content":{"application/json":{"schema":{"type":"object","properties":{"count":{"description":"Total number of APIs","example":624,"key$":"count","type":"integer"},"apis":{"items":{"properties":{"avgResponseTime":{"description":"Average response time in milliseconds","type":"integer"},"baseUrl":{"description":"Base URL of the API","format":"uri","type":"string"},"category":{"description":"Category of the API","type":"string"},"cors":{"description":"Whether CORS is enabled","type":"boolean"},"dateAdded":{"description":"Timestamp when API was added to the database","format":"date-time","type":"string"},"description":{"description":"Description of the API functionality","type":"string"},"documentationUrl":{"description":"URL to the API documentation","format":"uri","type":"string"},"endpoints":{"description":"Number of endpoints available","type":"integer"},"errorRate":{"description":"Error rate percentage of the API","format":"float","maximum":100,"minimum":0,"type":"number"},"healthScore":{"description":"Health score of the API (0-100)","maximum":100,"minimum":0,"type":"integer"},"id":{"description":"Unique identifier for the API","type":"string"},"lastChecked":{"description":"Timestamp of last health check","format":"date-time","type":"string"},"name":{"description":"Name of the API","type":"string"},"reliability":{"description":"Reliability percentage of the API","format":"float","maximum":100,"minimum":0,"type":"number"},"tags":{"description":"Tags associated with the API","items":{"type":"string"},"type":"array"}},"required":["id","name","description","documentationUrl"],"type":"object","x-ref":"#/components/schemas/PublicAPI"},"key$":"apis","type":"array"}}}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"code":{"type":"string","description":"Error code"},"details":{"type":"string","description":"Additional error details"}},"required":["error"],"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"code":{"type":"string","description":"Error code"},"details":{"type":"string","description":"Additional error details"}},"required":["error"],"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"category","in":"query","description":"Filter APIs by category","required":false,"schema":{"type":"string"},"index$":0},{"name":"limit","in":"query","description":"Number of APIs to return","required":false,"schema":{"type":"integer","default":50,"minimum":1,"maximum":100},"index$":1},{"name":"offset","in":"query","description":"Offset for pagination","required":false,"schema":{"type":"integer","default":0,"minimum":0},"index$":2}],"securitySource":"unspecified"},"GET /new":{"protocol":"http","operationId":"getNewApiForm","responses":{"200":{"description":"Successfully retrieved the API submission form","content":{"text/html":{"schema":{"type":"string","description":"HTML page containing the API submission form"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"code":{"type":"string","description":"Error code"},"details":{"type":"string","description":"Additional error details"}},"required":["error"],"x-ref":"#/components/schemas/Error"}}}}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_ref01_data = Object.values(setup.data.existing.api)[0] as any

    // LIST
    const api_ref01_ent = client.Api()
    const api_ref01_match: any = {}

    const api_ref01_list = (await api_ref01_ent.list(api_ref01_match)).map((e: any) => e.data())


    // LOAD
    const api_ref01_match_dt0: any = {}
    const api_ref01_data_dt0 = (await api_ref01_ent.load(api_ref01_match_dt0)).data()
    assert(null != api_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api/ApiTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = PublicApisDatabaseSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['api01','api02','api03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PUBLIC_APIS_DATABASE_TEST_API_ENTID': idmap,
    'PUBLIC_APIS_DATABASE_TEST_LIVE': 'FALSE',
    'PUBLIC_APIS_DATABASE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['PUBLIC_APIS_DATABASE_TEST_API_ENTID']

  const live = 'TRUE' === env.PUBLIC_APIS_DATABASE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['PUBLIC_APIS_DATABASE_TEST_API_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new PublicApisDatabaseSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.PUBLIC_APIS_DATABASE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
