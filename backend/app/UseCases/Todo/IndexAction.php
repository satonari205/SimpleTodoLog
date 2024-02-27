<?php

namespace App\UseCases\Todo;

use App\Models\Todo;
use DateTime;
use Illuminate\Support\Facades\Auth;

class IndexAction
{
  public function __invoke($validated)
  {
    $done = $validated['done'];
    $date = $validated['date'];

    $todos = Todo::where('user_id', Auth::id())->where('done', $done);

    if ($done === true) {
      $ymd = new DateTime($date);
      $todos->whereDate('updated_at', $ymd);
    }

    return $todos->get();
  }
}
