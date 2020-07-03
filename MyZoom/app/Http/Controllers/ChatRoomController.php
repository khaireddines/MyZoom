<?php

namespace App\Http\Controllers;

use App\ChatRoom;
use App\SubedRooms;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;


class ChatRoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function PersonalRooms()
    {
        $AllPersonalRooms = ChatRoom::where('RoomOwner',Auth::user()->id)->get();
        $res = [];
        if ($AllPersonalRooms->isNotEmpty()) {
            foreach ($AllPersonalRooms as $key => $PersonalRoom) {
                $res[]=[ 
                    'id'=>$PersonalRoom->id,
                    'Name'=>$PersonalRoom->Name,
                    'RoomOwner'=>User::where('id',$PersonalRoom->RoomOwner)
                                     ->first(['id','name','email','Profile_picture','status']),
                    'isPrivate'=>$PersonalRoom->isPrivate,
                    'RoomPassword'=>$PersonalRoom->RoomPassword,
                    'Chat_room_url'=>$PersonalRoom->Chat_room_url
                    ];
            }
        }
        return response($res);
    }
    //All Rooms that the current user is Subed To And His status is Accepted
    public function AllRooms()
    {
        $res = [];
        $SubbedRooms = SubedRooms::where('user',Auth::user()->id)->get();
        if ($SubbedRooms->isEmpty()) {
            return response($res);
        }else
        {
            $RoomIds = [];
            foreach ($SubbedRooms as $key => $subRoom) {
                if ($subRoom->room_request_accepted) {
                    $RoomIds[]=$subRoom->room;
                }
            }
            $AllRooms = ChatRoom::whereIn('id',$RoomIds)->get();
            if ($AllRooms->isNotEmpty()) {
                foreach ($AllRooms as $key =>$Room) {
                    $res[]=[ 
                    'id'=>$Room->id,
                    'Name'=>$Room->Name,
                    'RoomOwner'=>User::where('id',$Room->RoomOwner)
                                     ->first(['id','name','email','Profile_picture','status']),
                    'isPrivate'=>$Room->isPrivate,
                    'RoomPassword'=>$Room->RoomPassword,
                    'Chat_room_url'=>$Room->Chat_room_url
                    ];
                }
            }
        }
        
        return response($res);
    }
    public function UniqueNumber()
    {
        $numbers = range(111111, 999999);
        shuffle($numbers);
        $numbers=array_slice($numbers, 0, 2);
        sort($numbers);
        return $this->EncodeNTimes(mt_rand($numbers[0],$numbers[1]));
    }
    public function EncodeNTimes($num,$times=3)
    {   $encodedNum=$num;
        for ($i=0; $i < $times; $i++) { 
            $encodedNum=base64_encode($encodedNum);
        }
        return $encodedNum;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        
        try {
            if ($request->isPrivate) 
                $chatRoom = new ChatRoom([
                    'Unique_Invite_Link'=>'InviteLink_'.(string) Str::random(25),
                    'Name'=> $request->Name,
                    'RoomOwner'=> Auth::user()->id,
                    'Chat_room_url'=> 'videoChatRoom_'.$this->UniqueNumber(),
                    'isPrivate'=>true,
                    'RoomPassword'=>$request->RoomPassword
                ]);
            else
                $chatRoom = new ChatRoom([
                    'Unique_Invite_Link'=>'InviteLink_'.(string) Str::random(25),
                    'Name'=> $request->Name,
                    'RoomOwner'=> Auth::user()->id,
                    'Chat_room_url'=> 'videoChatRoom_'.$this->UniqueNumber()
                ]);
            $chatRoom->save();
            // Subscribing to own created Room
            SubedRooms::create([
                'user'=>Auth::user()->id,
                'room'=> $chatRoom->id,
                'room_request_accepted'=>true
            ]);
            return response('Successfully',200);
        } catch (\Throwable $th) {
            return $th;
            
        }
    }
}
