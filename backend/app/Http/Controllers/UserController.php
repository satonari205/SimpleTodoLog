<?php

namespace App\Http\Controllers;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/me",
     *     operationId="user",
     *     tags={"user"},
     *     @OA\Response(
     *         response=200,
     *         description="成功",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(
     *                 property="user",
     *                 type="string",
     *                 example="user"
     *             )
     *         )
     *     )
     * )
     */
    public function me()
    {
        $user = Auth::user();
        return new JsonResource([
            'name' => $user->name,
            'created_at' => $user->created_at
        ]);
    }
}
