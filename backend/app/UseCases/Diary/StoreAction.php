<?php

namespace App\UseCases\Diary;

use App\Exceptions\DuplicatedDiaryException;
use App\Models\Diary;
use Illuminate\Support\Facades\Auth;

class StoreAction
{
  public function __invoke(Diary $diary)
  {
    $diary->save();
    return $diary;
  }
}
