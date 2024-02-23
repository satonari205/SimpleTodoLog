<?php

namespace App\Http\Requests\Diary;

use Illuminate\Foundation\Http\FormRequest;

class DeleteRequest extends FormRequest
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
            'date' => [ 'required', 'string', 'date_format:Y-m-d'],
        ];
    }

    public function prepareForValidation()
    {
        $date = $this->query('date');
        $this->merge(compact('date'));
    }
}
