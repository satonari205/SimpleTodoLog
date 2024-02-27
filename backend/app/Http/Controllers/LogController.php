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
        // Logが作成された日付を取得します
        $logDate = $log->created_at->toDateString();

        // Logが作成された日付と同じupdated_atカラムを持つTodosを取得します
        $todos = Todo::whereDate('updated_at', $logDate)->get();
        dd($todos);

        // Logとその関連するtodosをリソースクラスを使用して整形します
        return new LogTodosResource($log, $todos);
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
