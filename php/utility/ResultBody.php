<?php
declare(strict_types=1);

// PublicApisDatabase SDK utility: result_body

class PublicApisDatabaseResultBody
{
    public static function call(PublicApisDatabaseContext $ctx): ?PublicApisDatabaseResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
