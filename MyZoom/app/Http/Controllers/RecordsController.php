<?php

namespace App\Http\Controllers;

use App\ChatRoom;
use App\Records;
use App\SubedRooms;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RecordsController extends Controller
{
    public function EncodeNTimes($num,$times=3)
    {   $encodedNum=$num;
        for ($i=0; $i < $times; $i++) { 
            $encodedNum=base64_encode($encodedNum);
        }
        return $encodedNum;
    }
    public function GetRecords(Request $request)
    {
        $MySubbedRooms = SubedRooms::where('user',Auth::user()->id)
        ->where('room_request_accepted',true)
        ->get(['room']);
        if ($MySubbedRooms->isNotEmpty()) {
            foreach ($MySubbedRooms as $key => $value) {
                $RoomIds[] = $value->room;
            }
            $MyRecords = Records::whereIn('RoomId',$RoomIds)
            ->where('Ready',true)
            ->get();
            foreach ($MyRecords as $key => $value) {
                $result[] = [
                    'id'=>$value->id,
                    'RecordOwner'=>User::where('id',$value->RecordOwnerId)->first(['id','name']),
                    'Room'=>ChatRoom::where('id',$value->RoomId)->first(['id','Name']),
                    'RecordPathName'=>$value->RecordPathName,
                    'created_at'=>$value->created_at,

                ];
            }
            return response($result);
        }else 
        return response([]);
    }
    public function store(Request $request)
    {
        $Room=ChatRoom::where('Chat_room_url','videoChatRoom_'.$this->EncodeNTimes(request('RoomId')))
        ->get();
        $Room = $Room->first();
        Records::create([
            'RoomId'=>$Room->id,
            'RecordOwnerId'=>request('RecOwnerId'),
            'RecordPathName'=>'rec-'.request('RecId').'.webm',
        ]);
    }

}