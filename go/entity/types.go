// Typed models for the PublicApisDatabase SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// ApI is the typed data model for the ap_i entity.
type ApI struct {
	AvgResponseTime *int `json:"avg_response_time,omitempty"`
	BaseUrl *string `json:"base_url,omitempty"`
	Category *string `json:"category,omitempty"`
	Cor *bool `json:"cor,omitempty"`
	DateAdded *string `json:"date_added,omitempty"`
	Description string `json:"description"`
	DocumentationUrl string `json:"documentation_url"`
	Endpoint *int `json:"endpoint,omitempty"`
	ErrorRate *float64 `json:"error_rate,omitempty"`
	HealthScore *int `json:"health_score,omitempty"`
	Id string `json:"id"`
	LastChecked *string `json:"last_checked,omitempty"`
	Name string `json:"name"`
	Reliability *float64 `json:"reliability,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
}

// ApILoadMatch is the typed request payload for ApI.LoadTyped.
type ApILoadMatch struct {
	AvgResponseTime *int `json:"avg_response_time,omitempty"`
	BaseUrl *string `json:"base_url,omitempty"`
	Category *string `json:"category,omitempty"`
	Cor *bool `json:"cor,omitempty"`
	DateAdded *string `json:"date_added,omitempty"`
	Description *string `json:"description,omitempty"`
	DocumentationUrl *string `json:"documentation_url,omitempty"`
	Endpoint *int `json:"endpoint,omitempty"`
	ErrorRate *float64 `json:"error_rate,omitempty"`
	HealthScore *int `json:"health_score,omitempty"`
	Id string `json:"id"`
	LastChecked *string `json:"last_checked,omitempty"`
	Name *string `json:"name,omitempty"`
	Reliability *float64 `json:"reliability,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
}

// ApIListMatch is the typed request payload for ApI.ListTyped.
type ApIListMatch struct {
	AvgResponseTime *int `json:"avg_response_time,omitempty"`
	BaseUrl *string `json:"base_url,omitempty"`
	Category *string `json:"category,omitempty"`
	Cor *bool `json:"cor,omitempty"`
	DateAdded *string `json:"date_added,omitempty"`
	Description *string `json:"description,omitempty"`
	DocumentationUrl *string `json:"documentation_url,omitempty"`
	Endpoint *int `json:"endpoint,omitempty"`
	ErrorRate *float64 `json:"error_rate,omitempty"`
	HealthScore *int `json:"health_score,omitempty"`
	Id *string `json:"id,omitempty"`
	LastChecked *string `json:"last_checked,omitempty"`
	Name *string `json:"name,omitempty"`
	Reliability *float64 `json:"reliability,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
