<?php

namespace App\Http\Controllers\Api;

/**
 * API情報
 * @OA\Info(
 *     version="1.0.0",
 *     title="My Project",
 *     description="Sample system"
 * )
 *
 * サーバー情報
 * @OA\Server(
 *   description="OpenApi host",
 *   url="http://localhost"
 * )
 *
 * セキュリティスキーマ
 * @OA\SecurityScheme(
 *   securityScheme="BearerAuth",
 *   type="apiKey",
 *   in="header",
 *   name="api_token"
 * )
 */
class Swagger
{
  //
}