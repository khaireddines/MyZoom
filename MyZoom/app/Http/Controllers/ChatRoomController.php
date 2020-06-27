<?php

namespace App\Http\Controllers;

use App\ChatRoom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatRoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return response(ChatRoom::where('RoomOwner',$request->user_id)->get());
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
            $chatRoom = ChatRoom::create([
                'Name'=> $request->Name,
                'RoomOwner'=> Auth::user()->id,
                'Chat_room_url'=> 'videoChatRoom_'.$this->UniqueNumber()
            ]);
            return response('Successfully',200);
        } catch (\Throwable $th) {
            //throw $th => if any error 
            // TODO : Treat the case of error 

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ChatRoom  $chatRoom
     * @return \Illuminate\Http\Response
     */
    public function show(ChatRoom $chatRoom)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ChatRoom  $chatRoom
     * @return \Illuminate\Http\Response
     */
    public function edit(ChatRoom $chatRoom)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ChatRoom  $chatRoom
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ChatRoom $chatRoom)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ChatRoom  $chatRoom
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        ChatRoom::destroy($request->id);
    }
}
