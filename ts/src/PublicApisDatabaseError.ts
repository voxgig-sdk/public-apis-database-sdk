
import { Context } from './Context'


class PublicApisDatabaseError extends Error {

  isPublicApisDatabaseError = true

  sdk = 'PublicApisDatabase'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  PublicApisDatabaseError
}

