<?php
declare(strict_types=1);

// PublicApisDatabase SDK configuration

class PublicApisDatabaseConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "PublicApisDatabase",
                "slug" => "public-apis-database",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://www.freepublicapis.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "ap_i" => [],
                ],
            ],
            "entity" => [
        'ap_i' => [
          'fields' => [
            [
              'name' => 'avgResponseTime',
              'short' => 'Average response time in milliseconds',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'baseUrl',
              'short' => 'Base URL of the API',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'category',
              'short' => 'Category of the API',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'cors',
              'short' => 'Whether CORS is enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'dateAdded',
              'short' => 'Timestamp when API was added to the database',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'req' => true,
              'short' => 'Description of the API functionality',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'documentationUrl',
              'req' => true,
              'short' => 'URL to the API documentation',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'endpoints',
              'short' => 'Number of endpoints available',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'errorRate',
              'short' => 'Error rate percentage of the API',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'healthScore',
              'short' => 'Health score of the API (0-100)',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the API',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lastChecked',
              'short' => 'Timestamp of last health check',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'req' => true,
              'short' => 'Name of the API',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'reliability',
              'short' => 'Reliability percentage of the API',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'tags',
              'short' => 'Tags associated with the API',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'ap_i',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'category',
                        'orig' => 'category',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/list',
                  'parts' => [
                    'api',
                    'list',
                  ],
                  'select' => [
                    'exist' => [
                      'category',
                      'limit',
                      'offset',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.apis`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/new',
                  'parts' => [
                    'new',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return PublicApisDatabaseFeatures::make_feature($name);
    }
}
