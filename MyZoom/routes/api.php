<?php

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', 'Auth\RegisterController@newUser');
Route::middleware('auth:api')->group(function () {
    Route::post('getUser', function () {return  Auth::user();});
    Route::post('addfriend','friendlistController@store');
    Route::post('contactList','friendlistController@contactList');
    Route::post('conversation','PrivateChatController@conversation');
    Route::post('storeMessage','PrivateChatController@store');
});