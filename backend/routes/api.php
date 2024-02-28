<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DiaryController;
use App\Http\Controllers\LogController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\UserController;

Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('me', [UserController::class, 'me']);

    //Todos
    Route::get('todos',[TodoController::class, 'index']);
    Route::post('todos',[TodoController::class, 'store']);
    Route::put('todos/{id}',[TodoController::class, 'update']);
    Route::delete('todos/{id}',[TodoController::class, 'delete']);

    //Diaries
    Route::get('diaries', [DiaryController::class, 'show']);
    Route::post('diaries', [DiaryController::class, 'store']);
    Route::patch('diaries', [DiaryController::class, 'update']);
    Route::delete('diaries', [DiaryController::class, 'delete']);

    //Logs
    Route::get('logs', [LogController::class, 'index']);
    // Route::get('logs/{log}', [LogController::class, 'show']);
    Route::get('logs/{log}/todos', [LogController::class, 'show']);
    Route::post('logs', [LogController::class, 'store']);
    Route::patch('logs/{log}', [LogController::class, 'update']);
    Route::delete('logs/{log}', [LogController::class, 'delete']);
});