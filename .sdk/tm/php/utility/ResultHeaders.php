<?php
declare(strict_types=1);

// PublicApisDatabase SDK utility: result_headers

class PublicApisDatabaseResultHeaders
{
    public static function call(PublicApisDatabaseContext $ctx): ?PublicApisDatabaseResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
