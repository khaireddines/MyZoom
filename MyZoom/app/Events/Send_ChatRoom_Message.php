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

class Send_ChatRoom_Message implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $Room_id;
    public $from_user;
    public $msg;
    public $file;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($Room_id,$from_user,$msg,$file = null)
    {
        $this->Room_id      =$Room_id; 
        $this->from_user    =$from_user;
        $this->msg          =$msg;
        $this->file          =$file;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PresenceChannel('ChatRoom_'.$this->Room_id);
    }
}
