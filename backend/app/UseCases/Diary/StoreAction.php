<?php

namespace App\UseCases\Diary;

use App\Exceptions\DuplicatedDiaryException;
use App\Models\Diary;
use Illuminate\Support\Facades\Auth;

class StoreAction
{
  public function __invoke(Diary $diary)
  {
    $ExistSameDateDiary = Diary::where('user_id', Auth::id())
      ->whereDate('created_at', '=', now()->toDateString())
      ->get();
    
    if ($ExistSameDateDiary) {
      throw new DuplicatedDiaryException('Diary already exists in this day.');
    }

    $diary->save();
    return $diary;
  }
}
