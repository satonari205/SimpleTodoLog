<?php

namespace App\Http\Controllers;

use App\Http\Requests\Log\IndexRequest;
use App\Http\Requests\Log\StoreRequest;
use App\Http\Requests\Log\UpdateRequest;
use App\Http\Resources\LogResource;
use App\Http\Resources\LogTodosResource;
use App\UseCases\Log\StoreAction;
use App\UseCases\Log\UpdateAction;
use App\Models\Log;
use App\Models\Todo;
use App\UseCases\Log\IndexAction;

class LogController extends Controller
{
    public function index(IndexRequest $request, IndexAction $action)
    {
        return LogResource::collection($action($request));
    }

    public function show(Log $log)
    {
        $todos = Todo::where('user_id', $log->user_id)
            // ->whereDate('updated_at', $log->updated_at->format('Y-m-d'))
            ->whereDate('updated_at', "2024-02-28")
            ->where('done', true)
            ->get();
        // dd($todos);
        return LogTodosResource::collection($log, $todos);
    }

    public function store(StoreRequest $request, StoreAction $action)
    {
        return new LogResource($action($request));
    }

    public function update(UpdateRequest $request, Log $log, UpdateAction $action)
    {
        $this->authorize('update', $log);
        return new LogResource($action($request->validated(), $log));
    }

    public function delete(Log $log)
    {
        $this->authorize('update', $log);
        $log->delete();
        return response()->json(['message' => 'deleted.']);
    }
}
