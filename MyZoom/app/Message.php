<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Message extends Model
{
     protected $fillable=[
        'message_text',
        'user_id',
        'sent_at'
    ]; 
}
