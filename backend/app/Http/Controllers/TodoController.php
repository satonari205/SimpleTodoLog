<?php

namespace App\Http\Controllers;

use App\Http\Requests\Todo\IndexRequest;
use App\Http\Requests\Todo\StoreRequest;
use App\Http\Resources\TodoResource;
use App\Models\Todo;
use App\UseCases\Todo\IndexAction;
use App\UseCases\Todo\StoreAction;
use App\UseCases\Todo\UpdateAction;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    public function index (IndexRequest $request, IndexAction $action)
    {
        return TodoResource::collection($action($request->done));
    }

    public function store (StoreRequest $request, StoreAction $action): TodoResource
    {
        $todo = $request->makeTodo();
        return new TodoResource($action($todo));
    }

    public function update (int $id, UpdateAction $action)
    {
        $todo = Todo::find($id);
        $this->authorize('update', $todo);
        return new TodoResource($action($todo));
    }

    public function delete (int $id)
    {
        $todo = $todo = Todo::find($id);
        $this->authorize('delete', $todo);
        $todo->delete();
        return response()->json(['message' => 'todo has been deleted successfully.']);
    }
}
