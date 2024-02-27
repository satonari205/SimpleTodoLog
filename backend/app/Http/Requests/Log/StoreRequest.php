<?php

namespace App\Http\Requests\Log;

use App\Models\Log;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreRequest extends FormRequest
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
            'date' => [ 'required', 'string', 'date_format:Y-m-d' ],
            'caption' => [ 'required', 'string', 'max:400' ],
        ];
    }

    public function makeLog(): Log
    {
        $validated = $this->validated();
        $data = [
            'user_id' => Auth::id(),
            'date' => $validated['date'],
            'caption' => $validated['caption'],
        ];
        $log = new Log($data);
        return $log;
    }
}
