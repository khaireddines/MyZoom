<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;

use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class PrivateChatInRooms implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $from;
    public $toWhom;
    public $msg;
    public $RoomId;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($from,$toWhom,$msg,$RoomId)
    {
        $this->from=$from;
        $this->toWhom=$toWhom;
        $this->msg=$msg;
        $this->RoomId=$RoomId;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PresenceChannel('PrivateChatInRooms_'.$this->toWhom.'_'.$this->RoomId);
    }
}
