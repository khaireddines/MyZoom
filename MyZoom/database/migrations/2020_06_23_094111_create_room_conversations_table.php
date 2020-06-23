<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoomConversationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('room_conversations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('room_id');
            $table->text('message_text');
            $table->unsignedBigInteger('file_id')->nullable();
            $table->unsignedBigInteger('WhoSent');
            $table->dateTime('sent_at', 0);
            $table->foreign('room_id')->references('id')->on('chat_rooms');
            $table->foreign('WhoSent')->references('id')->on('users');
            $table->foreign('file_id')->references('id')->on('files');
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
        Schema::dropIfExists('room_conversations');
    }
}
