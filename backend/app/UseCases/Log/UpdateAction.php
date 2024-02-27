<?php

namespace App\UseCases\Log;

use App\Models\Log;

class UpdateAction
{
  public function __invoke($validated, Log $log)
  {
    $log->caption = $validated['caption'];
    $log->update();
    return $log;
  }
}
