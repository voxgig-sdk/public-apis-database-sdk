

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ApIEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PUBLIC_APIS_DATABASE_TEST_LIVE=TRUE.
  afterEach(liveDelay('PUBLIC_APIS_DATABASE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PublicApisDatabaseSDK.test()
    const ent = testsdk.ApI()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PUBLIC_APIS_DATABASE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ap_i.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"avgResponseTime","req":false,"short":"Average response time in milliseconds","type":"`$INTEGER`","index$":0},{"active":true,"format":"uri","name":"baseUrl","req":false,"short":"Base URL of the API","type":"`$STRING`","index$":1},{"active":true,"name":"category","req":false,"short":"Category of the API","type":"`$STRING`","index$":2},{"active":true,"name":"cors","req":false,"short":"Whether CORS is enabled","type":"`$BOOLEAN`","index$":3},{"active":true,"format":"date-time","name":"dateAdded","req":false,"short":"Timestamp when API was added to the database","type":"`$STRING`","index$":4},{"active":true,"name":"description","req":true,"short":"Description of the API functionality","type":"`$STRING`","index$":5},{"active":true,"format":"uri","name":"documentationUrl","req":true,"short":"URL to the API documentation","type":"`$STRING`","index$":6},{"active":true,"name":"endpoints","req":false,"short":"Number of endpoints available","type":"`$INTEGER`","index$":7},{"active":true,"format":"float","name":"errorRate","req":false,"short":"Error rate percentage of the API","type":"`$NUMBER`","index$":8},{"active":true,"name":"healthScore","req":false,"short":"Health score of the API (0-100)","type":"`$INTEGER`","index$":9},{"active":true,"name":"id","req":true,"short":"Unique identifier for the API","type":"`$STRING`","index$":10},{"active":true,"format":"date-time","name":"lastChecked","req":false,"short":"Timestamp of last health check","type":"`$STRING`","index$":11},{"active":true,"name":"name","req":true,"short":"Name of the API","type":"`$STRING`","index$":12},{"active":true,"format":"float","name":"reliability","req":false,"short":"Reliability percentage of the API","type":"`$NUMBER`","index$":13},{"active":true,"name":"tags","req":false,"short":"Tags associated with the API","type":"`$ARRAY`","index$":14}],"id":{"field":"id","name":"id"},"name":"ap_i","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"category","orig":"category","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":50,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /api/list","json":"{\"operationId\":\"listApis\",\"parameters\":[{\"description\":\"Filter APIs by category\",\"in\":\"query\",\"name\":\"category\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Number of APIs to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":50,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Offset for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"apis\":{\"items\":{\"properties\":{\"avgResponseTime\":{\"description\":\"Average response time in milliseconds\",\"type\":\"integer\"},\"baseUrl\":{\"description\":\"Base URL of the API\",\"format\":\"uri\",\"type\":\"string\"},\"category\":{\"description\":\"Category of the API\",\"type\":\"string\"},\"cors\":{\"description\":\"Whether CORS is enabled\",\"type\":\"boolean\"},\"dateAdded\":{\"description\":\"Timestamp when API was added to the database\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"Description of the API functionality\",\"type\":\"string\"},\"documentationUrl\":{\"description\":\"URL to the API documentation\",\"format\":\"uri\",\"type\":\"string\"},\"endpoints\":{\"description\":\"Number of endpoints available\",\"type\":\"integer\"},\"errorRate\":{\"description\":\"Error rate percentage of the API\",\"format\":\"float\",\"maximum\":100,\"minimum\":0,\"type\":\"number\"},\"healthScore\":{\"description\":\"Health score of the API (0-100)\",\"maximum\":100,\"minimum\":0,\"type\":\"integer\"},\"id\":{\"description\":\"Unique identifier for the API\",\"type\":\"string\"},\"lastChecked\":{\"description\":\"Timestamp of last health check\",\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the API\",\"type\":\"string\"},\"reliability\":{\"description\":\"Reliability percentage of the API\",\"format\":\"float\",\"maximum\":100,\"minimum\":0,\"type\":\"number\"},\"tags\":{\"description\":\"Tags associated with the API\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"id\",\"name\",\"description\",\"documentationUrl\"],\"type\":\"object\"},\"type\":\"array\"},\"count\":{\"description\":\"Total number of APIs\",\"example\":624,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successfully retrieved list of public APIs\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/list","segments":[{"lit":"api"},{"lit":"list"}],"select":{"exist":["category","limit","offset"]},"transform":{"req":"`reqdata`","res":"`body.apis`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /new","json":"{\"operationId\":\"getNewApiForm\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"text/html\":{\"schema\":{\"description\":\"HTML page containing the API submission form\",\"type\":\"string\"}}},\"description\":\"Successfully retrieved the API submission form\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/new","segments":[{"lit":"new"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"ap_i","name__orig":"ap_i","Name":"ApI","name_":"ap_i","name-":"ap-i","NAME":"AP_I","index$":0}, {"active":true,"entity":"ap_i","key$":"BasicApIFlow","kind":"basic","name":"BasicApIFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"ap_i_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"ap_i_ref01","srcdatavar":"ap_i_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ap_i_ref01"}}],"index$":1}]}, 'ApI')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ap_i_ref01_data = Object.values(setup.data.existing.ap_i)[0] as any

    // LIST
    const ap_i_ref01_ent = client.ApI()
    const ap_i_ref01_match: any = {}

    const ap_i_ref01_list = (await ap_i_ref01_ent.list(ap_i_ref01_match)).map((e: any) => e.data())


    // LOAD
    const ap_i_ref01_match_dt0: any = {}
    ap_i_ref01_match_dt0.id = ap_i_ref01_data.id
    const ap_i_ref01_data_dt0 = (await ap_i_ref01_ent.load(ap_i_ref01_match_dt0)).data()
    assert(ap_i_ref01_data_dt0.id === ap_i_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ap_i/ApITestData.json')

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
    ['ap_i01','ap_i02','ap_i03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PUBLIC_APIS_DATABASE_TEST_AP_I_ENTID': idmap,
    'PUBLIC_APIS_DATABASE_TEST_LIVE': 'FALSE',
    'PUBLIC_APIS_DATABASE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['PUBLIC_APIS_DATABASE_TEST_AP_I_ENTID']

  const live = 'TRUE' === env.PUBLIC_APIS_DATABASE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['PUBLIC_APIS_DATABASE_TEST_AP_I_ENTID']
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
  
