<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use App\Exceptions\DuplicatedDiaryException;
class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->renderable(function (DuplicatedDiaryException $e) {
            return response()->json(['message' => "Diary already exists in this day."], 422);
        });

        $this->renderable(function (DontExistsDiaryException $e) {
            return response()->json(['message' => "Today's Diary doesn't exist."], 422);
        });
    }
}
