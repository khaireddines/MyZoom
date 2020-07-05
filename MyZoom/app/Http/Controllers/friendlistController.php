<?php

namespace App\Http\Controllers;

use App\Friendship;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class friendlistController extends Controller
{
    /**
     * Display a listing of the Contacts.
     *
     * @return \Illuminate\Http\Response
     */
    public function ContactList(Request $request)
    {
        $friends = Friendship::where('user',$request->id)->orWhere('hisFriend',$request->id)->get(['user','hisFriend']);
        if ($friends->isEmpty()) {
            return response('No friends Found',200);
        }else
        {   $friendsArray =[];
            foreach ($friends as $index => $friend) {
                // Exclude the user requesting his friendList
                if ($friend->user != $request->id)
                    array_push($friendsArray,$friend->user);
                
                if($friend->hisFriend != $request->id) 
                    array_push($friendsArray,$friend->hisFriend);
                
            }
            // Retriving the user list from the user table
            return User::whereIn('id',$friendsArray)->get(['id','name','email','Profile_picture']);
        }
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
        if (Auth::user()->email === $request->email) {
            return response("Yak's. You can't Friend yourself :/", 200);
        }
        try {
            $friend = User::where('email', $request->email)->get();
            if ($friend->isNotEmpty()) {
                $friendData = $friend->first();
                $isfriend = Friendship::where('user', Auth::user()->id)
                                ->where('hisFriend', $friendData->id)->get();
                if ($isfriend->isEmpty()) {
                    $isfriend = Friendship::where('user',$friendData->id)
                                ->where('hisFriend', Auth::user()->id)->get();
                }
                if ($isfriend->isNotEmpty()) {
                    $isfriendData = $isfriend->first();
                    if ($isfriendData->friend_request_accepted == true)
                        return response('Already friends', 200);
                    else
                    //FIXME:: you need to add the confirmation part here
                        return response('Waiting Confirmation', 200);
                } else {
                    Friendship::create([
                        'user' => Auth::user()->id,
                        'hisFriend' => $friendData->id
                    ]);
                    return response('Friend Request Sent', 200);
                }
            }else
            return response("Contact Doesn't Exist",200);
        } catch (\Throwable $th) {
            return response("it's look like something went wrong", 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
