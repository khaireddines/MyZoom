<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFriendshipsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('friendships', function (Blueprint $table) {
            $table->unsignedBigInteger('user');
            $table->unsignedBigInteger('hisFriend');
            $table->primary(['user','hisFriend']);
            $table->boolean('friend_request_accepted')->default(false);
            $table->foreign('user')->references('id')->on('users');
            $table->foreign('hisFriend')->references('id')->on('users');
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
        Schema::dropIfExists('friendships');
    }
}
