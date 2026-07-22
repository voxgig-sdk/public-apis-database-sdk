<?php
declare(strict_types=1);

// PublicApisDatabase SDK base feature

class PublicApisDatabaseBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(PublicApisDatabaseContext $ctx, array $options): void {}
    public function PostConstruct(PublicApisDatabaseContext $ctx): void {}
    public function PostConstructEntity(PublicApisDatabaseContext $ctx): void {}
    public function SetData(PublicApisDatabaseContext $ctx): void {}
    public function GetData(PublicApisDatabaseContext $ctx): void {}
    public function GetMatch(PublicApisDatabaseContext $ctx): void {}
    public function SetMatch(PublicApisDatabaseContext $ctx): void {}
    public function PrePoint(PublicApisDatabaseContext $ctx): void {}
    public function PreSpec(PublicApisDatabaseContext $ctx): void {}
    public function PreRequest(PublicApisDatabaseContext $ctx): void {}
    public function PreResponse(PublicApisDatabaseContext $ctx): void {}
    public function PreResult(PublicApisDatabaseContext $ctx): void {}
    public function PreDone(PublicApisDatabaseContext $ctx): void {}
    public function PreUnexpected(PublicApisDatabaseContext $ctx): void {}
}
