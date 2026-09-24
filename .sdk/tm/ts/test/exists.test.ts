
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { PublicApisDatabaseSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = PublicApisDatabaseSDK.test()
    equal(testsdk instanceof PublicApisDatabaseSDK, true,
      'PublicApisDatabaseSDK.test() must return a client synchronously')
  })

})
