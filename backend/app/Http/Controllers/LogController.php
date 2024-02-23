<?php

namespace App\Http\Controllers;

use App\Http\Requests\Log\StoreRequest;
use App\Http\Resources\LogResource;
use App\Models\Diary;
use App\Models\User;
use App\UseCases\Log\StoreAction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LogController extends Controller
{
    public function index ()
    {
        //
    }

    public function store (StoreRequest $request, StoreAction $action)
    {
        $user = User::find(Auth::id());
        $diary = Diary::where('user_id', Auth::id())
            ->whereDate('updated_at', $request->date)
            ->get();
        dd($diary);
        $this->authorize('create', $diary);
        return new LogResource($action($diary,$user));
    }

    public function update ()
    {
        //
    }

    public function delete ()
    {
        //
    }
}
