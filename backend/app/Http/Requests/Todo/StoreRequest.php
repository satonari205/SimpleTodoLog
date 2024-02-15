<?php

namespace App\Http\Requests\Todo;

use App\Models\Todo;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreRequest extends FormRequest
{
    public function authorize():bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|max:100',
            'done' => 'required'
        ];
    }

    public function makeTodo(): Todo
    {
        $validated = $this->validated();
        $data = [
            'user_id' => Auth::id(),
            'title' => $validated['title'],
            'done' => $validated['done']
        ];
        return new Todo($data);
    }
}
