<?php

use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
Broadcast::channel('Chat_{id}', function ($user,$id) {
    return $user;
});
Broadcast::channel('ChatRoom_{id}', function ($user,$id) {
    return $user;
});
Broadcast::channel('PrivateChatInRooms_{id}_{RoomId}', function ($user,$id, $RoomId) {
    return $user;
});
Broadcast::channel('Muted_{id}_{RoomId}', function ($user,$id, $RoomId) {
    return $user;
});


