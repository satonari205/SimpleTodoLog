<?php

namespace App\Http\Controllers;

use App\Http\Requests\Diary\DeleteRequest;
use App\Http\Requests\Diary\ShowRequest;
use App\Http\Requests\Diary\StoreRequest;
use App\Http\Requests\Diary\UpdateRequest;
use App\Http\Resources\DiaryResource;
use App\Models\Diary;
use App\UseCases\Diary\ShowAction;
use App\UseCases\Diary\StoreAction;
use App\UseCases\Diary\UpdateAction;
use Illuminate\Support\Facades\Auth;

class DiaryController extends Controller
{
    public function show(ShowRequest $request, ShowAction $action)
    {
        return DiaryResource::collection($action($request->validated()));
    }

    public function store(StoreRequest $request, StoreAction $action)
    {
        $diary = $request->makeDiary();
        return new DiaryResource($action($diary));
    }

    public function update(UpdateRequest $request, UpdateAction $action)
    {
        return new DiaryResource($action($request->validated()));
    }

    public function delete(DeleteRequest $request)
    {
        dd($request);
        $diary = Diary::where('user_id', Auth::id())
            ->whereDate('created_at', $request->date)
            ->get();
        $this->authorize('delete', $diary);
        $diary->delete();
        return response()->json(['message' => 'deleted']);
    }
}
