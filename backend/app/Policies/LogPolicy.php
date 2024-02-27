<?php

namespace App\Policies;

use App\Models\Log;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class LogPolicy
{
    public function create (User $user)
    {
        return $user->id === Auth::id();
    }

    public function update (User $user, Log $log)
    {
        return $log->user_id === Auth::id();
    }

    public function delete (User $user, Log $log)
    {
        return $log->user_id === Auth::id();
    }
}
