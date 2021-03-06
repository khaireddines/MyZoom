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

class Muted implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $toWhom;
    public $Muted;
    public $RoomId;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($toWhom, $Muted, $RoomId)
    {
        $this->toWhom = $toWhom;
        $this->Muted  = $Muted; 
        $this->RoomId = $RoomId;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PresenceChannel('Muted_'.$this->toWhom.'_'.$this->RoomId);
    }
}
