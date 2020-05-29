<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChatRoom extends Model
{
    protected $casts = [
        'Conversation' => 'array',
        'Files' => 'array'
    ];
    protected $guarded = [];
}
