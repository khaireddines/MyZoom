<?php

namespace App\Http\Controllers;
 

use App\Events\MessageSent;
use App\Friendship;
use App\Message;
use App\PrivateChat;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PrivateChatController extends Controller
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

    public function Conversation(Request $request)
    {
        $withWhom = $request->id;
        $MessagesISent = PrivateChat::where('Owner', Auth::user()->id)
            ->where('With', $withWhom)
            ->get();
        $MessagesIRecived = PrivateChat::where('Owner', $withWhom)
            ->where('With', Auth::user()->id)
            ->get();
        $conversation = [
            'id' => $withWhom,
            'conversationData' => []
        ];
        $data = [];
        if ($MessagesISent->isNotEmpty()) {
            foreach ($MessagesISent as $key => $messageRef) {
                $messageData = Message::where('id', $messageRef->Conversation)->first();
                $data[] = [
                    'type' => 'sent',
                    'message' => $messageData->message_text,
                    'sentAt' => $messageData->sent_at,
                ];
            }
        }
        if ($MessagesIRecived->isNotEmpty()) {
            foreach ($MessagesIRecived as $key => $messageRef) {
                $messageData = Message::where('id', $messageRef->Conversation)->first();
                $data[] = [
                    'type' => 'received',
                    'message' => $messageData->message_text,
                    'sentAt' => $messageData->sent_at,
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
        // TODO : Add the test of isFile here !
        $newMsg = new Message([
            'user_id'=> Auth::user()->id,
            'message_text'=>$request->msg,
            'sent_at'=>Carbon::now()
        ]);
        $newMsg->save();
        PrivateChat::create([
            'Owner'=>Auth::user()->id,
            'With'=>$request->with,
            'Conversation'=>$newMsg->id
        ]);
        broadcast(new MessageSent(Auth::user()->id,$request->with,$request->msg))->toOthers();
    }
}
