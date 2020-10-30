<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('records', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('RecordOwnerId');
            $table->unsignedBigInteger('RoomId');
            $table->string('RecordPathName');
            $table->boolean('Ready')->default(false);
            $table->foreign('RecordOwnerId')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('RoomId')->references('id')->on('chat_rooms')->onDelete('cascade');
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
        Schema::dropIfExists('records');
    }
}
