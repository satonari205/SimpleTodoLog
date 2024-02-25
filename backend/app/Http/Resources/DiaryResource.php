<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

// C:\Users\tomoy\AppData\Roaming\Composer\vendor\bin

class DiaryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'log' => $this->log,
            'created_at' => $this->created_at->format('Y/m/d H:i'),
            'updated_at' => $this->updated_at->format('Y/m/d H:i')
        ];
    }
}
