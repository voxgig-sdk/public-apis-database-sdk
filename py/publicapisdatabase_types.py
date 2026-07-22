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
    documentation_url: str
    id: str
    name: str


class ApI(ApIRequired, total=False):
    avg_response_time: int
    base_url: str
    category: str
    cor: bool
    date_added: str
    endpoint: int
    error_rate: float
    health_score: int
    last_checked: str
    reliability: float
    tag: list


class ApILoadMatchRequired(TypedDict):
    id: str


class ApILoadMatch(ApILoadMatchRequired, total=False):
    avg_response_time: int
    base_url: str
    category: str
    cor: bool
    date_added: str
    description: str
    documentation_url: str
    endpoint: int
    error_rate: float
    health_score: int
    last_checked: str
    name: str
    reliability: float
    tag: list


class ApIListMatch(TypedDict, total=False):
    avg_response_time: int
    base_url: str
    category: str
    cor: bool
    date_added: str
    description: str
    documentation_url: str
    endpoint: int
    error_rate: float
    health_score: int
    id: str
    last_checked: str
    name: str
    reliability: float
    tag: list
