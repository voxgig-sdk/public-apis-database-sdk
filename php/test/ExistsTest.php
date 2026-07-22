<?php
declare(strict_types=1);

// PublicApisDatabase SDK exists test

require_once __DIR__ . '/../publicapisdatabase_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = PublicApisDatabaseSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
