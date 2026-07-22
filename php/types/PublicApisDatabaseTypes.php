<?php
declare(strict_types=1);

// Typed models for the PublicApisDatabase SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** ApI entity data model. */
class ApI
{
    public ?int $avg_response_time = null;
    public ?string $base_url = null;
    public ?string $category = null;
    public ?bool $cor = null;
    public ?string $date_added = null;
    public string $description;
    public string $documentation_url;
    public ?int $endpoint = null;
    public ?float $error_rate = null;
    public ?int $health_score = null;
    public string $id;
    public ?string $last_checked = null;
    public string $name;
    public ?float $reliability = null;
    public ?array $tag = null;
}

/** Request payload for ApI#load. */
class ApILoadMatch
{
    public ?int $avg_response_time = null;
    public ?string $base_url = null;
    public ?string $category = null;
    public ?bool $cor = null;
    public ?string $date_added = null;
    public ?string $description = null;
    public ?string $documentation_url = null;
    public ?int $endpoint = null;
    public ?float $error_rate = null;
    public ?int $health_score = null;
    public string $id;
    public ?string $last_checked = null;
    public ?string $name = null;
    public ?float $reliability = null;
    public ?array $tag = null;
}

/** Request payload for ApI#list. */
class ApIListMatch
{
    public ?int $avg_response_time = null;
    public ?string $base_url = null;
    public ?string $category = null;
    public ?bool $cor = null;
    public ?string $date_added = null;
    public ?string $description = null;
    public ?string $documentation_url = null;
    public ?int $endpoint = null;
    public ?float $error_rate = null;
    public ?int $health_score = null;
    public ?string $id = null;
    public ?string $last_checked = null;
    public ?string $name = null;
    public ?float $reliability = null;
    public ?array $tag = null;
}

