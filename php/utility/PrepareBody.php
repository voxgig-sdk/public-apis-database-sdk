<?php
declare(strict_types=1);

// PublicApisDatabase SDK utility: prepare_body

class PublicApisDatabasePrepareBody
{
    public static function call(PublicApisDatabaseContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
