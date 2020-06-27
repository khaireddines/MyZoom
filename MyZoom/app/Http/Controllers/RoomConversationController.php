<?php

namespace App\Http\Controllers;

use App\ChatRoom;
use App\Events\Send_ChatRoom_Message;
use App\File;
use App\RoomConversation;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Broadcast;


class RoomConversationController extends Controller
{
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
    public function EncodeNTimes($num, $times = 3)
    {
        $encodedNum = $num;
        for ($i = 0; $i < $times; $i++) {
            $encodedNum = base64_encode($encodedNum);
        }
        return $encodedNum;
    }

    public function ConversationRoom(Request $request)
    {
        $RoomId = $request->room_id;
        $conversation = [
            'id' => $RoomId,
            'conversationData' => []
        ];
        $Room = ChatRoom::where('Chat_room_url', 'videoChatRoom_' . $this->EncodeNTimes($RoomId))->get();
        if ($Room->isEmpty()) {
            return response("Room doesn't exist !!", 404);
        } else {
            $RoomDetails = $Room->first();
            $data = [];
            $MessagesISent = RoomConversation::where('WhoSent', Auth::user()->id)
                ->where('room_id', $RoomDetails->id)
                ->get();
            $MessagesPeoplesSent = RoomConversation::whereNotIn('WhoSent', [Auth::user()->id])
                ->where('room_id', $RoomDetails->id)
                ->get();
            if ($MessagesISent->isNotEmpty()) {
                foreach ($MessagesISent as $key => $messageRef) {
                    $data[] = [
                        'type' => 'sent',
                        'message' => $messageRef->message_text,
                        'sentAt' => $messageRef->sent_at,
                    ];
                }
            }
            if ($MessagesPeoplesSent->isNotEmpty()) {
                foreach ($MessagesPeoplesSent as $key => $messageRef) {
                    $data[] = [
                        'type' => 'received',
                        'from' => User::where('id', $messageRef->WhoSent)->get(['id', 'name', 'Profile_picture']),
                        'message' => $messageRef->message_text,
                        'sentAt' => $messageRef->sent_at,
                    ];
                }
            }
        }
        $conversation['conversationData'] = $this->record_sort($data, 'sentAt');
        return response($conversation);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $RoomId = $request->room_id;
        $Room = ChatRoom::where('Chat_room_url', 'videoChatRoom_' . $this->EncodeNTimes($RoomId))->get();
        if ($Room->isEmpty()) {
            return response("Room doesn't exist !!", 404);
        } else
            $RoomDetails = $Room->first();
        try {
            if ($request->fileUrl) {
                $file = new File([
                    'file_path' => $request->fileUrl
                ]);
                $file->save();
                RoomConversation::create([
                    'room_id' => $RoomDetails->id,
                    'message_text' => $request->msg,
                    'file_id' => $file->id,
                    'WhoSent' => Auth::user()->id,
                    'sent_at' => Carbon::now()
                ]);
                broadcast(new Send_ChatRoom_Message($RoomId, Auth::user(), $request->msg, $file))->toOthers();
            } else {
                RoomConversation::create([
                    'room_id' => $RoomDetails->id,
                    'message_text' => $request->msg,
                    'WhoSent' => Auth::user()->id,
                    'sent_at' => Carbon::now()
                ]);
                broadcast(new Send_ChatRoom_Message($RoomId, Auth::user(), $request->msg))->toOthers();
            }
        } catch (\Throwable $th) {
            return response($th);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\RoomConversation  $roomConversation
     * @return \Illuminate\Http\Response
     */
    public function show(RoomConversation $roomConversation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\RoomConversation  $roomConversation
     * @return \Illuminate\Http\Response
     */
    public function edit(RoomConversation $roomConversation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\RoomConversation  $roomConversation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RoomConversation $roomConversation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\RoomConversation  $roomConversation
     * @return \Illuminate\Http\Response
     */
    public function destroy(RoomConversation $roomConversation)
    {
        //
    }
}
