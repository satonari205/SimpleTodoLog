<?php

namespace App\UseCases\Diary;

use App\Exceptions\DuplicatedDiaryException;
use App\Models\Diary;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class StoreAction
{
  public function __invoke(Diary $diary)
  {
    $existingDiary = Diary::where('user_id', $diary->user_id)
      ->whereDate('created_at', Carbon::now()->format('Y-m-d'))
      ->exists();

    if ($existingDiary) {
      throw new DuplicatedDiaryException('Diary already exists in this day.');
    }

    $diary->save();
    return $diary;
  }
}
