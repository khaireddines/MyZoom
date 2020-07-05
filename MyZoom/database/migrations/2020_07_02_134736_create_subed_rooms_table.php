<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubedRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subed_rooms', function (Blueprint $table) {
            $table->unsignedBigInteger('user');
            $table->unsignedBigInteger('room');
            $table->primary(['user','room']);
            $table->boolean('room_request_accepted')->default(false);
            $table->foreign('user')->references('id')->on('users');
            $table->foreign('room')->references('id')->on('chat_rooms')->onDelete('cascade');
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
        Schema::dropIfExists('subed_rooms');
    }
}
