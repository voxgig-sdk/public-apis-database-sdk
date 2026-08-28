# Typed models for the PublicApisDatabase SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class ApIRequired(TypedDict):
    description: str
    documentationUrl: str
    id: str
    name: str


class ApI(ApIRequired, total=False):
    avgResponseTime: int
    baseUrl: str
    category: str
    cors: bool
    dateAdded: str
    endpoints: int
    errorRate: float
    healthScore: int
    lastChecked: str
    reliability: float
    tags: list


class ApILoadMatchRequired(TypedDict):
    id: str


class ApILoadMatch(ApILoadMatchRequired, total=False):
    avgResponseTime: int
    baseUrl: str
    category: str
    cors: bool
    dateAdded: str
    description: str
    documentationUrl: str
    endpoints: int
    errorRate: float
    healthScore: int
    lastChecked: str
    name: str
    reliability: float
    tags: list


class ApIListMatch(TypedDict, total=False):
    category: str
    limit: int
    offset: int
