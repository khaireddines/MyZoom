<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChatRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chat_rooms', function (Blueprint $table) {
            $table->id();
            $table->string('Unique_Invite_Link');
            $table->string('Name');
            $table->unsignedBigInteger('RoomOwner');
            $table->string('Chat_room_url');
            $table->boolean('isPrivate')->default(false);
            $table->string('RoomPassword')->nullable();
            $table->json('Config')->nullable();
            $table->foreign('RoomOwner')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chat_rooms');
    }
}
