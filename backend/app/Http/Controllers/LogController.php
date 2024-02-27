<?php

namespace App\Http\Controllers;

use App\Http\Requests\Log\StoreRequest;
use App\Http\Requests\Log\UpdateRequest;
use App\Http\Resources\LogResource;
use App\UseCases\Log\StoreAction;
use App\UseCases\Log\UpdateAction;
use App\Models\Log;

class LogController extends Controller
{
    public function index ()
    {
        return LogResource::collection(Log::paginate());
    }

    public function show ()
    {
        //
    }

    public function store (StoreRequest $request, StoreAction $action)
    {
        return new LogResource($action($request));
    }

    public function update (UpdateRequest $request, Log $log, UpdateAction $action)
    {
        $this->authorize('update', $log);
        return new LogResource($action($request->validated(), $log));
    }

    public function delete (Log $log)
    {
        $this->authorize('update', $log);
        $log->delete();
        return response()->json([ 'message' => 'deleted.']);
    }
}
