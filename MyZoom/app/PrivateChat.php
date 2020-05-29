<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PrivateChat extends Model
{
    protected $casts = [
        'Conversation' => 'array'
    ];
    protected $guarded = [];
}
