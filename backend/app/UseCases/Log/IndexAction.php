<?php

namespace App\UseCases\Log;

use App\Models\Log;

class IndexAction
{
  public function __invoke($request)
  {
    $userId = $request->validated()['userId'] ?? null;

    if ($userId) {
      return Log::where('user_id', $userId)->paginate();
    }

    return Log::paginate();
  }
}