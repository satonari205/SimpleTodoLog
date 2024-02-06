<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginRequest;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    public function login (LoginRequest $request): JsonResponse
    {
        $credentials = $request->only(['email','password']);
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return new JsonResponse();
        }

        throw new AuthenticationException('Failed: Login');
    }
}
