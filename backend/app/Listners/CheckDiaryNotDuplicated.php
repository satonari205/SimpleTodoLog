<?php

namespace App\Listners;

use App\Events\DiaryCreate as EventsDiaryCreate;
use App\Exceptions\DuplicatedDiaryException;
use App\Models\Diary;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CheckDiaryNotDuplicated
{
    public function __construct()
    {
        //
    }

    public function handle(EventsDiaryCreate $event): void
    {
        $diary = $event->diary;
        dd($diary);

        $existingDiary = Diary::where('user_id', $diary->user_id)
            ->whereDate('created_at', $diary->created_at->toDateString())
            ->exists();

        if ($existingDiary) {
            throw new DuplicatedDiaryException('Diary already exists in this day.');
        }
    }
}
