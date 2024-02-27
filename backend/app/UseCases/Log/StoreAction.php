<?php

namespace App\UseCases\Log;

use App\Models\Diary;

class StoreAction
{
  public function __invoke($request)
  {
    $log = $request->makeLog();

    $diary = Diary::where('user_id', $log->user_id)
      ->whereDate('updated_at', $request->date)
      ->first();

    if ($diary === null) {
      return;
    }

    $log->diary_id = $diary->id;
    $log->save();

    return $log;
  }
}
