<?php

namespace App\Http\Controllers;

use App\ChatRoom;
use App\SubedRooms;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SubedRoomsController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $InviteLink= $request->InviteLink;
        $Room = ChatRoom::where('Unique_Invite_Link',$InviteLink)->get(['id','RoomOwner']);
        
        if ($Room->isNotEmpty()) {
            $RoomToSubTo = $Room->first();
            if ($RoomToSubTo->RoomOwner == Auth::user()->id) {
                return response("Yikes!! You Can't Subscribe To Your Own Room!!");
            }
            $SubRoom = SubedRooms::where('user',Auth::user()->id)
                                 ->where('room',$RoomToSubTo->id)
                                 ->get();
            if ($SubRoom->isNotEmpty()) {
                $SubRoom = $SubRoom->first();
                if ($SubRoom->room_request_accepted) 
                    return response('Already Subscribed',200);
                else
                    return response('Waiting Confirmation',200);
            }else{
                SubedRooms::create([
                    'user'=>Auth::user()->id,
                    'room'=> $RoomToSubTo->id
                ]);
                return response('Subscription Request Sent',200);
            }
        }else
        return response('Incorrect Invite Link',200);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SubedRooms  $subedRooms
     * @return \Illuminate\Http\Response
     */
    public function AcceptSub(Request $request)
    {  
        $room = ChatRoom::where('id',$request->Room)->get();
        if ($room->isNotEmpty()) {
            $room = $room->first();
            if ($room->RoomOwner == Auth::user()->id) {
                SubedRooms::where('user',$request->User)
                ->where('room',$request->Room)
                ->update(['room_request_accepted'=>true]);
                return response('Request Accepted',200);
            }else
                return response('Unauthorized Request',200);
        }
        
    }
    public function JoinRequests(Request $request)
    {
        $MyRooms = ChatRoom::where('RoomOwner',Auth::user()->id)
        ->get(['id']);
        $RoomsTab=[];
        
        if ($MyRooms->isNotEmpty()) {
            foreach ($MyRooms as $key => $Room) {
                if($Room->user != Auth::user()->id)
                    {$RoomsTab[]=$Room->id;}
            }
            $SubRequests= SubedRooms::whereIn('room',$RoomsTab)
            ->where('room_request_accepted',false)
            ->get();
            dd($SubRequests);
        }
    }
    public function SubRequests(Request $request)
    {
        $MyRooms = ChatRoom::where('RoomOwner',Auth::user()->id)
        ->get(['id']);
        $RoomsTab=[];
        if ($MyRooms->isNotEmpty()) {
            foreach ($MyRooms as $key => $Room) {
                $RoomsTab[]=$Room->id;
            }
        }
        $MySubs = SubedRooms::where('user',Auth::user()->id)
        ->whereNotIn('room',$RoomsTab)
        ->where('room_request_accepted',false)
        ->get();
        if ($MySubs->isNotEmpty()) {
            dd($MySubs);
        }
    }
    public function destroy(Request $request)
    {
        $room = ChatRoom::where('id',$request->SubedRoomId)->get();
        if ($room->isEmpty()) {
            return response('Not Subscribed',202);
        }else{
            $room = $room->first();
            if ($room->RoomOwner== Auth::user()->id) 
                {ChatRoom::destroy($request->SubedRoomId);
                return response('Room Delete Successfully',200);}
            else
                {SubedRooms::where('user',Auth::user()->id)
                          ->where('room',$request->SubedRoomId)
                          ->delete();
                return response('unsubscribed Successfully',201);}
        }
    }
}
