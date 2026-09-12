package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "PublicApisDatabase",
			"slug": "public-apis-database",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://www.freepublicapis.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"ap_i": map[string]any{},
			},
		},
		"entity": map[string]any{
			"ap_i": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "avgResponseTime",
						"short": "Average response time in milliseconds",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "uri",
						"name": "baseUrl",
						"short": "Base URL of the API",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "category",
						"short": "Category of the API",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cors",
						"short": "Whether CORS is enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "dateAdded",
						"short": "Timestamp when API was added to the database",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"req": true,
						"short": "Description of the API functionality",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "documentationUrl",
						"req": true,
						"short": "URL to the API documentation",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "endpoints",
						"short": "Number of endpoints available",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "float",
						"name": "errorRate",
						"short": "Error rate percentage of the API",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "healthScore",
						"short": "Health score of the API (0-100)",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the API",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "lastChecked",
						"short": "Timestamp of last health check",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "Name of the API",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "float",
						"name": "reliability",
						"short": "Reliability percentage of the API",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "tags",
						"short": "Tags associated with the API",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ap_i",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/list",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"category",
										"limit",
										"offset",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.apis`",
								},
								"parts": []any{
									"api",
									"list",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/new",
								"segments": []any{
									map[string]any{
										"lit": "new",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"new",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
