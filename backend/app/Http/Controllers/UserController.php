<?php

namespace App\Http\Controllers;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function me ()
    {
        $user = Auth::user();
        return new JsonResource([
            'name' => $user->name,
            'created_at' => $user->created_at
        ]);
    }
}