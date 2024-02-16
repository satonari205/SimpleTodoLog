<?php

namespace App\Http\Controllers;

use App\Http\Requests\Todo\StoreRequest;
use App\Http\Resources\TodoResource;
use App\Models\Todo;
use App\UseCases\Todo\StoreAction;
use App\UseCases\Todo\UpdateAction;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    public function index ()
    {
        return TodoResource::collection(
            Todo::where('user_id', Auth::id())->where('done', false)->get()
        );
    }

    public function store (StoreRequest $request, Todo $todo, StoreAction $action): TodoResource
    {
        $todo = $request->makeTodo();
        $this->authorize('create', $todo);
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
