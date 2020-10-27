<?php

namespace App\Http\Controllers;

use App\ChatRoom;
use App\Events\AllowOrDisallowShareScreen;
use App\Events\Muted;
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
        $AllPersonalRooms = ChatRoom::where('RoomOwner', Auth::user()->id)->get();
        $res = [];
        if ($AllPersonalRooms->isNotEmpty()) {
            foreach ($AllPersonalRooms as $key => $PersonalRoom) {
                $res[] = [
                    'id' => $PersonalRoom->id,
                    'Name' => $PersonalRoom->Name,
                    'RoomOwner' => User::where('id', $PersonalRoom->RoomOwner)
                        ->first(['id', 'name', 'email', 'Profile_picture', 'status']),
                    'isPrivate' => $PersonalRoom->isPrivate,
                    'RoomPassword' => $PersonalRoom->RoomPassword,
                    'Chat_room_url' => $PersonalRoom->Chat_room_url,
                    'Unique_Invite_Link' => $PersonalRoom->Unique_Invite_Link
                ];
            }
        }
        return response($res);
    }
    //All Rooms that the current user is Subed To And His status is Accepted
    public function AllRooms()
    {
        $res = [];
        $SubbedRooms = SubedRooms::where('user', Auth::user()->id)->get();
        if ($SubbedRooms->isEmpty()) {
            return response($res);
        } else {
            $RoomIds = [];
            foreach ($SubbedRooms as $key => $subRoom) {
                if ($subRoom->room_request_accepted) {
                    $RoomIds[] = $subRoom->room;
                }
            }
            $AllRooms = ChatRoom::whereIn('id', $RoomIds)->get();
            if ($AllRooms->isNotEmpty()) {
                foreach ($AllRooms as $key => $Room) {
                    $res[] = [
                        'id' => $Room->id,
                        'Name' => $Room->Name,
                        'RoomOwner' => User::where('id', $Room->RoomOwner)
                            ->first(['id', 'name', 'email', 'Profile_picture', 'status']),
                        'isPrivate' => $Room->isPrivate,
                        'RoomPassword' => $Room->RoomPassword,
                        'Chat_room_url' => $Room->Chat_room_url,
                        'Unique_Invite_Link' => $Room->Unique_Invite_Link
                    ];
                }
            }
        }
        return response($res);
    }
    public function GetRoomPin(Request $request)
    {
        $Room = ChatRoom::where('Chat_room_url', 'videoChatRoom_' . $this->EncodeNTimes(request('RoomId')))
            ->get(['RoomPassword']);
        if ($Room->isEmpty())
            return response("Room Dosn't Exist", 200);
        $Room = $Room->first();
        return response($Room->RoomPassword);
    }
    public function RoomOwnerId(Request $request)
    {
        $Room = ChatRoom::where('Chat_room_url', 'videoChatRoom_' . $this->EncodeNTimes(request('RoomId')))
            ->get(['RoomOwner']);
        if ($Room->isEmpty())
            return response("Room Dosn't Exist", 200);
        $Room = $Room->first();
        return response($Room->RoomOwner);
    }
    public function RoomConfigFile(Request $request)
    {
        $result = [];
        $Room = ChatRoom::where('Chat_room_url', 'videoChatRoom_' . $this->EncodeNTimes(request('RoomId')))
            ->get(['Config']);
        if ($Room->isEmpty())
            return response("Room Dosn't Exist", 404);
        
        $Room = $Room->first();
        if (!$Room->Config) {
            return response($result);
        }
        foreach ($Room->Config as $key => $value) {
            $data[$value['UserId']] = $value['Muted'];
        }
        $result = $data;
        return response($result);
    }
    public function CheckIfAmMuted(Request $request)
    {
        $options['UserId'] = Auth::user()->id;
        $options['Muted'] = false;
        $Room = ChatRoom::where('Chat_room_url', 'videoChatRoom_' . $this->EncodeNTimes(request('RoomId')))
            ->get(['id','RoomOwner','Config']);
        if ($Room->isEmpty())
            return response("Room Dosn't Exist", 404);
        $Room = $Room->first();
        if ($Room->Config == null) {
            $Room->Config = array($options);
            $Room->save();
        }else
        if (Auth::user()->id != $Room->RoomOwner) {
            $PosIfExist=$this->SearchTable($Room->Config,Auth::user()->id);
            if ($PosIfExist==='NotFound') {
                $NewConfig = $Room->Config;
                array_push($NewConfig,$options);
                $Room->Config = $NewConfig;
                $Room->save();
                return response('false');
            } else {
                if ($Room->Config[$PosIfExist]['Muted']) 
                return response('true');
                else
                return response('false');
            }
        }else
        {
            return response('false');
        }   
    }
    public function AddOrUpdateUserToConfigRoom(Request $request)
    {
        $options['UserId'] = request('UserId');
        $options['Muted'] = request('Muted');
        $Room = ChatRoom::where('Chat_room_url', 'videoChatRoom_' . $this->EncodeNTimes(request('RoomId')))
            ->get(['id','Config', 'Chat_room_url']);
        if ($Room->isEmpty())
            return response("Room Dosn't Exist", 200);
        $Room = $Room->first();
        if ($Room->Config == null) {
            ChatRoom::where('Chat_room_url', $Room->Chat_room_url)
                ->update([
                    'Config' => array($options)
                ]);
        } else {
            $PosIfExist= $this->SearchTable($Room->Config,request('UserId'));
            if ($PosIfExist ==='NotFound') {
                // Add The Muted Status For New Joined User
                $NewConfig = $Room->Config;
                array_push($NewConfig,$options);
                $Room->Config = $NewConfig;
                $Room->save();
               
            } else {
                // Update Muted Status For User
                $NewConfig = $Room->Config;
                $NewConfig[$PosIfExist]=$options;
                $Room->Config = $NewConfig;
                $Room->save();
            }
        }
        broadcast(new Muted($options['UserId'],$options['Muted'],request('RoomId')))->toOthers();
        return response($options);
    }
    public function AllowOrDisallowShareScreen(Request $request)
    {
        broadcast(new AllowOrDisallowShareScreen($request->UserId,$request->Allow,$request->RoomId))->toOthers();
    }
    public function SearchTable($table,$UserId)
    {
        $result = 'NotFound';
        foreach ($table as $key => $value) {
            if ($value['UserId']==$UserId) {
                $result = $key;
            break;
            }
        }
        return $result;
    }
    public function UniqueNumber()
    {
        $numbers = range(111111, 999999);
        shuffle($numbers);
        $numbers = array_slice($numbers, 0, 2);
        sort($numbers);
        return $this->EncodeNTimes(mt_rand($numbers[0], $numbers[1]));
    }
    public function EncodeNTimes($num, $times = 3)
    {
        $encodedNum = $num;
        for ($i = 0; $i < $times; $i++) {
            $encodedNum = base64_encode($encodedNum);
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
        $number = $this->UniqueNumber();
        try {
            if ($request->isPrivate)
                $chatRoom = new ChatRoom([
                    'Unique_Invite_Link' => 'InviteLink_' . (string) Str::random(25),
                    'Name' => $request->Name,
                    'RoomOwner' => Auth::user()->id,
                    'Chat_room_url' => 'videoChatRoom_' . $number,
                    'isPrivate' => true,
                    'RoomPassword' => $request->RoomPassword
                ]);
            else
                $chatRoom = new ChatRoom([
                    'Unique_Invite_Link' => 'InviteLink_' . (string) Str::random(25),
                    'Name' => $request->Name,
                    'RoomOwner' => Auth::user()->id,
                    'Chat_room_url' => 'videoChatRoom_' . $number
                ]);
            $chatRoom->save();
            // Subscribing to own created Room
            SubedRooms::create([
                'user' => Auth::user()->id,
                'room' => $chatRoom->id,
                'room_request_accepted' => true
            ]);
            return response($number, 200);
        } catch (\Throwable $th) {
            return $th;
        }
    }
}
