<?php

namespace App\Http\Requests\Todo;

use Illuminate\Foundation\Http\FormRequest;

class IndexRequest extends FormRequest
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
        // dd($this);
        return [
            'done' => [ 'required', 'boolean']
        ];
    }

    public function prepareForValidation()
    {
        $done = $this->query('done');
        $done = filter_var($done, FILTER_VALIDATE_BOOLEAN);
        $this->merge(compact('done'));
    }
}
