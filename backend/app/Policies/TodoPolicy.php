<?php

namespace App\Policies;

use App\Models\Todo;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class TodoPolicy
{
    public function viewAny(User $user)
    {
        //
    }

    public function view(User $user, Todo $todo)
    {
        //
    }

    public function create(User $user, Todo $todo)
    {
        // dd($todo);
        return true;
    }

    public function update(User $user, Todo $todo)
    {
        //
    }

    public function delete(User $user, Todo $todo)
    {
        //
    }

    public function restore(User $user, Todo $todo)
    {
        //
    }

    public function forceDelete(User $user, Todo $todo)
    {
        //
    }
}
