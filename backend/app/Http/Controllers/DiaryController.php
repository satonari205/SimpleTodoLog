<?php

namespace App\Http\Controllers;

use App\Http\Requests\Diary\ShowRequest;
use App\Http\Requests\Diary\StoreRequest;
use App\Http\Requests\Diary\UpdateRequest;
use App\Http\Resources\DiaryResource;
use App\UseCases\Diary\ShowAction;
use App\UseCases\Diary\StoreAction;
use App\UseCases\Diary\UpdateAction;

class DiaryController extends Controller
{
    public function show (ShowRequest $request, ShowAction $action)
    {
        return new DiaryResource($action($request->validated()));
    }

    public function store (StoreRequest $request, StoreAction $action)
    {
        $diary = $request->makeDiary();
        return new DiaryResource($action($diary));
    }

    public function update (UpdateRequest $request, UpdateAction $action)
    {
        return new DiaryResource($action($request->validated()));
    }
}
