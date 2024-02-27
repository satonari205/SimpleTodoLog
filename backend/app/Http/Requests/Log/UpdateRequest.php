<?php

namespace App\Http\Requests\Log;

use App\Models\Log;
use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize()
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
            'caption' => [ 'required', 'string', 'max:400' ],
        ];
    }

    public function updateLog ()
    {
        // $log = Log::find()
    }
}
