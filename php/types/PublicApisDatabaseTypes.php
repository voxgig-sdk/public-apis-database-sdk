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
    public ?int $avgResponseTime = null;
    public ?string $baseUrl = null;
    public ?string $category = null;
    public ?bool $cors = null;
    public ?string $dateAdded = null;
    public string $description;
    public string $documentationUrl;
    public ?int $endpoints = null;
    public ?float $errorRate = null;
    public ?int $healthScore = null;
    public string $id;
    public ?string $lastChecked = null;
    public string $name;
    public ?float $reliability = null;
    public ?array $tags = null;
}

/** Request payload for ApI#load. */
class ApILoadMatch
{
    public ?int $avgResponseTime = null;
    public ?string $baseUrl = null;
    public ?string $category = null;
    public ?bool $cors = null;
    public ?string $dateAdded = null;
    public ?string $description = null;
    public ?string $documentationUrl = null;
    public ?int $endpoints = null;
    public ?float $errorRate = null;
    public ?int $healthScore = null;
    public string $id;
    public ?string $lastChecked = null;
    public ?string $name = null;
    public ?float $reliability = null;
    public ?array $tags = null;
}

/** Request payload for ApI#list. */
class ApIListMatch
{
    public ?string $category = null;
    public ?int $limit = null;
    public ?int $offset = null;
}

