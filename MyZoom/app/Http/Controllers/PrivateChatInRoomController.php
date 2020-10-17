<?php

namespace App\Http\Controllers;

use App\ChatRoom;
use App\Events\PrivateChatInRooms;
use App\private_chat_in_room;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PrivateChatInRoomController extends Controller
{
    public function EncodeNTimes($num,$times=3)
    {   $encodedNum=$num;
        for ($i=0; $i < $times; $i++) { 
            $encodedNum=base64_encode($encodedNum);
        }
        return $encodedNum;
    }
    function record_sort($records, $field, $reverse = false)
    {
        $hash = array();

        foreach ($records as $record) {
            $hash[$record[$field]] = $record;
        }
        
        ($reverse) ? krsort($hash) : ksort($hash);

        $records = array();

        foreach ($hash as $record) {
            $date = Carbon::createFromTimeString($record['sentAt']);
            $record['sentAt'] = $date->format('M d,Y h:iA');
            $records[] = $record;
        }
        
        return $records;
    }
    public function conversation(Request $request)
    {
        
        $Room=ChatRoom::where('Chat_room_url','videoChatRoom_'.$this->EncodeNTimes(request('RoomId')))
        ->get();
        if ($Room->isNotEmpty()) {
            $Room = $Room->first();
        }else
        {return response('500 No Room Found!',200);}
        if (request('RoomId')== null) {
            return response('provide RoomId');
        }
        if (request('id')== Auth::user()->id) {
            return response("you can't recover messages for same user");
        }
        $withWhom = request('id');
        $MessagesISent = private_chat_in_room::where('Owner', Auth::user()->id)
            ->where('With', $withWhom)
            ->where('Room_Id',$Room->id)
            ->get();
        $MessagesIRecived = private_chat_in_room::where('Owner', $withWhom)
            ->where('With', Auth::user()->id)
            ->where('Room_Id',$Room->id)
            ->get();
        $conversation = [
            'id' => $withWhom,
            'conversationData' => []
        ];
        $data=[];
        if ($MessagesISent->isNotEmpty()) {
            foreach ($MessagesISent as $key => $messageRef) {
                $data[] = [
                    'type' => 'sent',
                    'message' => $messageRef->message_text,
                    'sentAt' => $messageRef->created_at->toDateTimeString(),
                ];
            }
        }
        if ($MessagesIRecived->isNotEmpty()) {
            foreach ($MessagesIRecived as $key => $messageRef) {
                $data[] = [
                    'type' => 'received',
                    'message' => $messageRef->message_text,
                    'sentAt' => $messageRef->created_at->toDateTimeString(),
                ];
            }
        }
        $conversation['conversationData'] = $this->record_sort($data, 'sentAt');
        return response($conversation);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (request('with')==Auth::user()->id) {
            return response("ops, you can't message yourself!!");
        }
        $Room=ChatRoom::where('Chat_room_url','videoChatRoom_'.$this->EncodeNTimes(request('RoomId')))
        ->get();
        if ($Room->isNotEmpty()) {
            $Room = $Room->first();
        }else
        {return response('500 No Room Found!',200);}
        $newMsg= new private_chat_in_room([
            'Owner'=> Auth::user()->id,
            'With'=> request('with'),
            'message_text'=> request('msg'),
            'Room_Id' => $Room->id
        ]);
        $newMsg->save();
        // fire broadcast message here
        broadcast(new PrivateChatInRooms(Auth::user()->id,request('with'),request('msg')))->toOthers();
    }

   
}
