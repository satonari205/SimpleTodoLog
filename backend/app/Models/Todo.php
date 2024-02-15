<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Todo extends Model
{
    use HasFactory;

    protected $table = 'todos';

    protected $primary_key = 'id';

    protected $fillable = [
        'user_id',
        'title',
        'done'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
