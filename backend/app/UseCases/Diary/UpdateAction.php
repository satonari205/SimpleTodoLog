<?php

namespace App\UseCases\Diary;

use App\Models\Diary;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Exceptions\DontExistsDiaryException;

class UpdateAction
{
  public function __invoke($validated)
  {
    $diary = Diary::where('user_id', Auth::id())
      ->whereDate('created_at', Carbon::now()->format('Y-m-d'))->first();

    if ($diary) {
      $diary->log = $validated['log'];
      $diary->save();
      return $diary;
    }

    throw new DontExistsDiaryException();
  }
}
