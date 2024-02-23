<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    use HasFactory;

    protected $primary_key = [ 'user_id', 'diary_id' ];

    public $increment = false;

    protected $fillable = [ 'user_id', 'diary_id' ];

    public function user ()
    {
        return $this->belongsTo(User::class);
    }

    public function diary ()
    {
        return $this->belongsTo(Diary::class);
    }
}
