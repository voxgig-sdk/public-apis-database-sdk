<?php
declare(strict_types=1);

// PublicApisDatabase SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class PublicApisDatabaseFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new PublicApisDatabaseBaseFeature();
            case "test":
                return new PublicApisDatabaseTestFeature();
            default:
                return new PublicApisDatabaseBaseFeature();
        }
    }
}
