package = "voxgig-sdk-public-apis-database"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/public-apis-database-sdk.git",
  tag = "lua/v0.0.1",
  dir = "public-apis-database-sdk/lua"
}
description = {
  summary = "Unofficial generated Lua SDK for the Public APIs Database public API. Not affiliated with or endorsed by the upstream API provider.",
  homepage = "https://github.com/voxgig-sdk/public-apis-database-sdk",
  issues_url = "https://github.com/voxgig-sdk/public-apis-database-sdk/issues",
  license = "MIT",
  labels = { "voxgig", "sdk", "generated-sdk", "openapi", "api-client", "public-apis-database" }
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["public-apis-database_sdk"] = "public-apis-database_sdk.lua",
    ["config"] = "config.lua",
    ["config_shared"] = "config_shared.lua",
    ["features"] = "features.lua",
  }
}
