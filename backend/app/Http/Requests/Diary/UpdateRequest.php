<?php

namespace App\Http\Requests\Diary;

use App\Models\Diary;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
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
            'log' => [ 'required' ],
        ];
    }

    public function updateDiary(): Diary
    {
        $validated = $this->validated();
        $data = [
            'user_id' => Auth::id(),
            'log' => $validated['log'],
        ];
        return new Diary($data);
    }
}
