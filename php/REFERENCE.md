# PublicApisDatabase PHP SDK Reference

Complete API reference for the PublicApisDatabase PHP SDK.


## PublicApisDatabaseSDK

### Constructor

```php
require_once __DIR__ . '/publicapisdatabase_sdk.php';

$client = new PublicApisDatabaseSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PublicApisDatabaseSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = PublicApisDatabaseSDK::test();
```


### Instance Methods

#### `ApI($data = null)`

Create a new `ApIEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): PublicApisDatabaseUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ApIEntity

```php
$ap_i = $client->ApI();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avgResponseTime` | `int` | No | Average response time in milliseconds |
| `baseUrl` | `string` | No | Base URL of the API |
| `category` | `string` | No | Category of the API |
| `cors` | `bool` | No | Whether CORS is enabled |
| `dateAdded` | `string` | No | Timestamp when API was added to the database |
| `description` | `string` | Yes | Description of the API functionality |
| `documentationUrl` | `string` | Yes | URL to the API documentation |
| `endpoints` | `int` | No | Number of endpoints available |
| `errorRate` | `float` | No | Error rate percentage of the API |
| `healthScore` | `int` | No | Health score of the API (0-100) |
| `id` | `string` | Yes | Unique identifier for the API |
| `lastChecked` | `string` | No | Timestamp of last health check |
| `name` | `string` | Yes | Name of the API |
| `reliability` | `float` | No | Reliability percentage of the API |
| `tags` | `array` | No | Tags associated with the API |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApI()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApI()->load(["id" => "ap_i_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApIEntity`

Create a new `ApIEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new PublicApisDatabaseSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

