<?php

namespace App\Http\Controllers;

use App\Http\Requests\Todo\StoreRequest;
use App\Http\Resources\TodoResource;
use App\Models\Todo;
use App\UseCases\Todo\StoreAction;

class TodoController extends Controller
{
    public function store (StoreRequest $request, Todo $todo, StoreAction $action): TodoResource
    {
        $this->authorize('create', $todo);
        $todo = $request->makeTodo();
        return new TodoResource($action($todo));
    }
}
