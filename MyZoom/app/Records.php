<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Records extends Model
{
    protected $fillable=[
        'RecordOwnerId',
        'RecordPathName',
        'RoomId',
        'Ready'
    ];
    public function RecordOwner(){
        return $this->belongsTo('App\User','RecordOwnerId');
    }
    public function RoomDetails(){
        return $this->belongsTo('App\ChatRoom','RoomId');
    }
}
