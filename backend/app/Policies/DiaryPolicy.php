<?php

namespace App\Policies;

use App\Models\Diary;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class DiaryPolicy
{
    public function viewAny(User $user)
    {
        //
    }

    public function view(User $user)
    {
        //
    }

    public function create(User $user)
    {
        //
    }

    public function update(User $user, Diary $diary)
    {
        return Auth::id() === $diary->user_id;
    }

    public function delete(User $user, Diary $diary)
    {
        return Auth::id() === $diary->user_id;
    }

    public function restore(User $user)
    {
        //
    }

    public function forceDelete(User $user)
    {
        //
    }
}
