<?php

namespace App\UseCases\Diary;

use App\Models\Diary;
use Illuminate\Support\Facades\Auth;

class ShowAction
{
  public function __invoke($validated)
  {
    $date = $validated['date'];
    return Diary::where('user_id', Auth::id())->whereDate('created_at', $date)->get();
  }
}
