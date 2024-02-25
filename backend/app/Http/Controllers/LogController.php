<?php

namespace App\Http\Controllers;

use App\Http\Requests\Log\StoreRequest;
use App\Http\Resources\LogResource;
use App\Models\Diary;
use App\Models\Log as ModelsLog;
use App\Models\User;
use App\UseCases\Log\StoreAction;
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
        $log = new ModelsLog();
        $log->user_id = $user->id;
        $log->diary_id = $diary->id;
        $log->save();
        return new LogResource($log);
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
