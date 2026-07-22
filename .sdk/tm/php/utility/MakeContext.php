<?php
declare(strict_types=1);

// PublicApisDatabase SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class PublicApisDatabaseMakeContext
{
    public static function call(array $ctxmap, ?PublicApisDatabaseContext $basectx): PublicApisDatabaseContext
    {
        return new PublicApisDatabaseContext($ctxmap, $basectx);
    }
}
