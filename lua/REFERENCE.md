# PublicApisDatabase Lua SDK Reference

Complete API reference for the PublicApisDatabase Lua SDK.


## PublicApisDatabaseSDK

### Constructor

```lua
local sdk = require("public-apis-database_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `ApI(data)`

Create a new `ApI` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ApIEntity

```lua
local ap_i = client:ApI(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avgResponseTime` | `number` | No | Average response time in milliseconds |
| `baseUrl` | `string` | No | Base URL of the API |
| `category` | `string` | No | Category of the API |
| `cors` | `boolean` | No | Whether CORS is enabled |
| `dateAdded` | `string` | No | Timestamp when API was added to the database |
| `description` | `string` | Yes | Description of the API functionality |
| `documentationUrl` | `string` | Yes | URL to the API documentation |
| `endpoints` | `number` | No | Number of endpoints available |
| `errorRate` | `number` | No | Error rate percentage of the API |
| `healthScore` | `number` | No | Health score of the API (0-100) |
| `id` | `string` | Yes | Unique identifier for the API |
| `lastChecked` | `string` | No | Timestamp of last health check |
| `name` | `string` | Yes | Name of the API |
| `reliability` | `number` | No | Reliability percentage of the API |
| `tags` | `table` | No | Tags associated with the API |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApI():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApI():load({ id = "ap_i_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApIEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

