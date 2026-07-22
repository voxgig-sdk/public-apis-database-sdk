package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "PublicApisDatabase",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"active": true,
						"name": "avg_response_time",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "base_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "category",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "cor",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "date_added",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "documentation_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "endpoint",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "error_rate",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "health_score",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "last_checked",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "reliability",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "tag",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 14,
					},
				},
				"name": "ap_i",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "category",
											"orig": "category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
								"method": "GET",
								"orig": "/api/list",
								"parts": []any{
									"api",
									"list",
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
								"method": "GET",
								"orig": "/new",
								"parts": []any{
									"new",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
