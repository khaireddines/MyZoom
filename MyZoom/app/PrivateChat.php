<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PrivateChat extends Model
{
    protected $table = 'private_chats';
    protected $fillable = [
        'Owner',
        'With',
        'Conversation'
    ];
}
