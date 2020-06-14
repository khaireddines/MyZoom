<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrivateChatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('private_chats', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('Owner');
            $table->unsignedBigInteger('With');
            $table->unsignedBigInteger('conversation');
            $table->foreign('Owner')->references('id')->on('users');
            $table->foreign('With')->references('id')->on('users');
            $table->foreign('Converstation')->references('id')->on('messages');
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
        Schema::dropIfExists('private_chats');
    }
}
