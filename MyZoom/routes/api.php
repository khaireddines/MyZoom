<?php

use App\Http\Controllers\ChatRoomController;
use App\Http\Controllers\SubedRoomsController;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', 'Auth\RegisterController@newUser');
Route::middleware('auth:api')->group(function () {
    Route::post('getUser', function () {return  Auth::user();});
    Route::post('RoomOwnerId','ChatRoomController@RoomOwnerId');
    Route::post('GetRoomPin','ChatRoomController@GetRoomPin');

    Route::post('addfriend','friendlistController@store');
    Route::post('AcceptFriendship','friendlistController@AcceptFriendship');
    Route::post('RejectOrDeleteFriendship','friendlistController@RejectOrDeleteFriendship');

    Route::post('contactList','friendlistController@contactList');
    Route::post('conversation','PrivateChatController@conversation');
    Route::post('storeMessage','PrivateChatController@store');

    Route::post('NewChatRoom','ChatRoomController@store');
    Route::post('AllRooms','ChatRoomController@AllRooms');
    Route::post('PersonalRooms','ChatRoomController@PersonalRooms');
    Route::post('ConversationRoom','RoomConversationController@ConversationRoom');
    Route::post('StoreMessageChatRoom','RoomConversationController@store');

    Route::post('SubscribeToRoom','SubedRoomsController@store');
    //Delete the Room if the RoomOwner ==  The Current User
    Route::post('UnsubscribeOrDeleteRoom','SubedRoomsController@destroy');
    //Accept Subb Requests
    Route::post('AcceptSub','SubedRoomsController@AcceptSub');
    //Reject Subb Requests
    Route::post('RejectSub','SubedRoomsController@RejectSub');
    //Sub Requests List
    Route::post('JoinRequests','SubedRoomsController@JoinRequests');
    //Current User Join Requests List
    Route::post('SubRequests','SubedRoomsController@SubRequests');

    //Private_Chat in Rooms
    Route::post('PrivateChatNewMsg','PrivateChatInRoomController@store');
    Route::post('PrivateChatConversation','PrivateChatInRoomController@conversation');
});