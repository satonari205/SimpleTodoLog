<?php

namespace App\UseCases\Todo;

use App\Models\Todo;
use Illuminate\Support\Facades\Auth;

class IndexAction
{
  public function __invoke(Bool $done)
  {
    return Todo::where('user_id', Auth::id())->where('done', $done)->get();
  }
}
