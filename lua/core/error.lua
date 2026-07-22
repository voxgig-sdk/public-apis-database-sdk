-- PublicApisDatabase SDK error

local PublicApisDatabaseError = {}
PublicApisDatabaseError.__index = PublicApisDatabaseError


function PublicApisDatabaseError.new(code, msg, ctx)
  local self = setmetatable({}, PublicApisDatabaseError)
  self.is_sdk_error = true
  self.sdk = "PublicApisDatabase"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function PublicApisDatabaseError:error()
  return self.msg
end


function PublicApisDatabaseError:__tostring()
  return self.msg
end


return PublicApisDatabaseError
