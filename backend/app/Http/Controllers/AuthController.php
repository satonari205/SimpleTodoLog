<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Requests\User\LoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function login(LoginRequest $request): JsonResponse
    {
        $credentials = $request->only(['email', 'password']);

        if (Auth::guard()->attempt($credentials)) {
            $request->session()->regenerate();
            $logger = Log::channel('login')->info("Login=> " . Auth::user()->email);
            return new JsonResponse([
                'message' => "Welcome!"
            ]);
        }

        return new JsonResponse([
            'error' => 'Failed: Login'
        ]);
    }

    public function logout(Request $request)
    {
        if (Auth::guard()->guest()) {
            return new JsonResponse([
                'error' => 'Already Unauthenticated.',
            ]);
        }

        $logger = Log::channel('logout')->info("Logout=> " . Auth::user()->email);
        Auth::guard()->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return new JsonResponse([
            'message' => "You've logged out. Unauthenticated.",
        ]);
    }
}
