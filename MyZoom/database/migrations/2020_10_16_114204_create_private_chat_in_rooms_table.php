<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrivateChatInRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('private_chat_in_rooms', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('Owner');
            $table->unsignedBigInteger('With');
            $table->text('message_text');
            $table->unsignedBigInteger('Room_Id');
            $table->foreign('Owner')->references('id')->on('users');
            $table->foreign('With')->references('id')->on('users');
            $table->foreign('Room_Id')->references('id')->on('chat_rooms');
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
        Schema::dropIfExists('private_chat_in_rooms');
    }
}
