<?php

namespace App\Models;

use App\Events\DiaryCreate;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diary extends Model
{
    use HasFactory;

    protected $table = 'diaries';

    protected $primary_key = 'id';

    protected $fillable = [
        'user_id',
        'log',
    ];

    protected $dispatchesEvents = [
        'created' => DiaryCreate::class,
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
