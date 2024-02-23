<?php

namespace App\Policies;

use App\Models\Diary;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class LogPolicy
{
    public function create (User $user, Diary $diary)
    {
        return Auth::id() === $diary->user_id;
    }
}
