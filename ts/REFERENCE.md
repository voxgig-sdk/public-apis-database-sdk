# PublicApisDatabase TypeScript SDK Reference

Complete API reference for the PublicApisDatabase TypeScript SDK.


## PublicApisDatabaseSDK

### Constructor

```ts
new PublicApisDatabaseSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PublicApisDatabaseSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = PublicApisDatabaseSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `PublicApisDatabaseSDK` instance in test mode.


### Instance Methods

#### `ApI(data?: object)`

Create a new `ApI` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApIEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `PublicApisDatabaseSDK.test()`.

**Returns:** `PublicApisDatabaseSDK` instance in test mode.


---

## ApIEntity

```ts
const ap_i = client.ApI()
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
| `tags` | `any[]` | No | Tags associated with the API |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApI().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApI().load({ id: 'ap_i_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApIEntity` instance with the same client and
options.

#### `client()`

Return the parent `PublicApisDatabaseSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new PublicApisDatabaseSDK({
  feature: {
    test: { active: true },
  }
})
```

