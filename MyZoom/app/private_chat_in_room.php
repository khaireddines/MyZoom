<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class private_chat_in_room extends Model
{
    protected $table='private_chat_in_rooms';
    protected $fillable=[
        'Owner',
        'With',
        'message_text',
        'Room_Id'
    ];
    
}
