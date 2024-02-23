<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\DiaryResource;

class LogResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        dd($this);
        return [
            'user' => UserResource::collenction($this->user),
            // 'todos' => TodoResource::collection($this->todos),
            'diary' => DiaryResource::collection($this->diary),
        ];
    }
}
